/**
 * GitHub Sync Module for Anamnesi
 *
 * Reads/writes anamnesi-backup.json to a GitHub repo via the GitHub API.
 * Uses a Personal Access Token (PAT) stored in localStorage.
 */

var STORAGE_KEY_TOKEN = "anamnesi-github-token";
var STORAGE_KEY_REPO = "anamnesi-github-repo";
var STORAGE_KEY_OWNER = "anamnesi-github-owner";
var FILE_PATH = "anamnesi-backup.json";

/* Defaults for this project */
var DEFAULT_OWNER = "lamvial1958";
var DEFAULT_REPO = "anamnasi";

function getConfig() {
  return {
    token: localStorage.getItem(STORAGE_KEY_TOKEN) || "",
    owner: localStorage.getItem(STORAGE_KEY_OWNER) || DEFAULT_OWNER,
    repo: localStorage.getItem(STORAGE_KEY_REPO) || DEFAULT_REPO,
  };
}

function saveConfig(token, owner, repo) {
  localStorage.setItem(STORAGE_KEY_TOKEN, token);
  localStorage.setItem(STORAGE_KEY_OWNER, owner || DEFAULT_OWNER);
  localStorage.setItem(STORAGE_KEY_REPO, repo || DEFAULT_REPO);
}

function clearConfig() {
  localStorage.removeItem(STORAGE_KEY_TOKEN);
  localStorage.removeItem(STORAGE_KEY_OWNER);
  localStorage.removeItem(STORAGE_KEY_REPO);
}

function isConfigured() {
  return !!localStorage.getItem(STORAGE_KEY_TOKEN);
}

/**
 * Fetch the backup file from GitHub.
 * Returns { data: parsed JSON, sha: file SHA } or null if not found.
 */
async function fetchFromGitHub() {
  var cfg = getConfig();
  if (!cfg.token) return null;

  var url = "https://api.github.com/repos/" + cfg.owner + "/" + cfg.repo + "/contents/" + FILE_PATH;
  var res = await fetch(url, {
    headers: {
      "Authorization": "Bearer " + cfg.token,
      "Accept": "application/vnd.github.v3+json",
    },
  });

  if (res.status === 404) return null;
  if (!res.ok) {
    var errText = await res.text();
    throw new Error("GitHub GET failed (" + res.status + "): " + errText);
  }

  var json = await res.json();
  var content = atob(json.content.replace(/\n/g, ""));
  /* Handle UTF-8 properly */
  var decoded = decodeURIComponent(escape(content));
  var data = JSON.parse(decoded);
  return { data: data, sha: json.sha };
}

/**
 * Save backup data to GitHub via a commit.
 * If sha is provided, updates the existing file; otherwise creates it.
 */
async function saveToGitHub(backupData, sha) {
  var cfg = getConfig();
  if (!cfg.token) throw new Error("GitHub token non configurato");

  var jsonStr = JSON.stringify(backupData, null, 2);
  /* Encode UTF-8 properly for btoa */
  var encoded = btoa(unescape(encodeURIComponent(jsonStr)));

  var url = "https://api.github.com/repos/" + cfg.owner + "/" + cfg.repo + "/contents/" + FILE_PATH;
  var body = {
    message: "Auto-backup " + new Date().toISOString().slice(0, 16).replace("T", " "),
    content: encoded,
  };
  if (sha) body.sha = sha;

  var res = await fetch(url, {
    method: "PUT",
    headers: {
      "Authorization": "Bearer " + cfg.token,
      "Accept": "application/vnd.github.v3+json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    var errText = await res.text();
    throw new Error("GitHub PUT failed (" + res.status + "): " + errText);
  }

  var result = await res.json();
  return result.content.sha;
}

export {
  getConfig,
  saveConfig,
  clearConfig,
  isConfigured,
  fetchFromGitHub,
  saveToGitHub,
  STORAGE_KEY_TOKEN,
};
