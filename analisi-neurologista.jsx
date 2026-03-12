import { useState, useEffect } from "react";

const episodes = [
  { id: 1, date: "2024-06-07", wd: "Ven", time: null, bp: null, alcohol: null, context: null, src: "H" },
  { id: 2, date: "2024-06-11", wd: "Mar", time: null, bp: null, alcohol: null, context: null, src: "H" },
  { id: 3, date: "2024-07-01", wd: "Lun", time: null, bp: null, alcohol: null, context: null, src: "H" },
  { id: 4, date: "2024-07-26", wd: "Ven", time: null, bp: null, alcohol: null, context: null, src: "H" },
  { id: 5, date: "2024-07-31", wd: "Mer", time: null, bp: null, alcohol: null, context: null, src: "H" },
  { id: 6, date: "2024-08-03", wd: "Sab", time: null, bp: null, alcohol: null, context: null, src: "H" },
  { id: 7, date: "2024-08-12", wd: "Lun", time: null, bp: null, alcohol: null, context: null, src: "H" },
  { id: 8, date: "2024-08-26", wd: "Lun", time: null, bp: null, alcohol: null, context: null, src: "H" },
  { id: 9, date: "2024-09-01", wd: "Dom", time: null, bp: null, alcohol: null, context: null, src: "H" },
  { id: 10, date: "2024-09-07", wd: "Sab", time: null, bp: null, alcohol: null, context: null, src: "H" },
  { id: 11, date: "2024-10-12", wd: "Sab", time: null, bp: null, alcohol: null, context: null, src: "H" },
  { id: 12, date: "2024-10-18", wd: "Ven", time: null, bp: null, alcohol: null, context: null, src: "H" },
  { id: 13, date: "2024-10-19", wd: "Sab", time: null, bp: null, alcohol: null, context: null, src: "H" },
  { id: 14, date: "2024-10-24", wd: "Gio", time: null, bp: null, alcohol: null, context: null, src: "H" },
  { id: 15, date: "2024-10-26", wd: "Sab", time: null, bp: null, alcohol: null, context: null, src: "H" },
  { id: 16, date: "2024-11-02", wd: "Sab", time: null, bp: null, alcohol: null, context: null, src: "H" },
  { id: 17, date: "2024-11-09", wd: "Sab", time: null, bp: null, alcohol: null, context: null, src: "H" },
  { id: 18, date: "2024-11-16", wd: "Sab", time: null, bp: null, alcohol: null, context: null, src: "H" },
  { id: 19, date: "2024-12-09", wd: "Lun", time: null, bp: null, alcohol: null, context: null, src: "H" },
  { id: 20, date: "2025-01-05", wd: "Dom", time: null, bp: null, alcohol: null, context: null, src: "H" },
  { id: 21, date: "2025-01-09", wd: "Gio", time: null, bp: null, alcohol: null, context: null, src: "H" },
  { id: 22, date: "2025-01-18", wd: "Sab", time: null, bp: null, alcohol: null, context: null, src: "H" },
  { id: 23, date: "2025-01-23", wd: "Gio", time: null, bp: null, alcohol: null, context: null, src: "H" },
  { id: 24, date: "2025-01-30", wd: "Gio", time: null, bp: null, alcohol: null, context: null, src: "H" },
  { id: 25, date: "2025-02-05", wd: "Mer", time: null, bp: null, alcohol: null, context: null, src: "H" },
  { id: 26, date: "2025-02-27", wd: "Gio", time: null, bp: null, alcohol: null, context: null, src: "H" },
  { id: 27, date: "2025-03-07", wd: "Ven", time: null, bp: null, alcohol: null, context: null, src: "H" },
  { id: 28, date: "2025-03-10", wd: "Lun", time: null, bp: null, alcohol: null, context: null, src: "H" },
  { id: 29, date: "2025-03-17", wd: "Lun", time: null, bp: null, alcohol: null, context: null, src: "H" },
  { id: 30, date: "2025-03-29", wd: "Sab", time: null, bp: null, alcohol: null, context: null, src: "H" },
  { id: 31, date: "2025-04-04", wd: "Ven", time: null, bp: null, alcohol: null, context: null, src: "H" },
  { id: 32, date: "2025-04-07", wd: "Lun", time: null, bp: null, alcohol: null, context: null, src: "H" },
  { id: 33, date: "2025-04-13", wd: "Dom", time: null, bp: null, alcohol: null, context: null, src: "H" },
  { id: 34, date: "2025-04-17", wd: "Gio", time: null, bp: null, alcohol: null, context: null, src: "H" },
  { id: 35, date: "2025-04-30", wd: "Mer", time: null, bp: null, alcohol: null, context: null, src: "H" },
  { id: 36, date: "2025-05-05", wd: "Lun", time: null, bp: null, alcohol: null, context: null, src: "H" },
  { id: 37, date: "2025-05-14", wd: "Mer", time: null, bp: null, alcohol: null, context: null, src: "H" },
  { id: 38, date: "2025-05-19", wd: "Lun", time: null, bp: null, alcohol: null, context: null, src: "H" },
  { id: 39, date: "2025-05-22", wd: "Gio", time: null, bp: null, alcohol: null, context: null, src: "H" },
  { id: 40, date: "2025-08-31", wd: "Dom", time: "21:00", bp: "130/60", alcohol: "Poco vino", context: "Giorno tranquillo", src: "D" },
  { id: 41, date: "2025-09-01", wd: "Lun", time: "15:00", bp: null, alcohol: "No", context: "", src: "D" },
  { id: 42, date: "2025-09-02", wd: "Mar", time: "17:00", bp: null, alcohol: "No", context: "", src: "D" },
  { id: 43, date: "2025-09-17", wd: "Mer", time: "12:00", bp: "128/64", alcohol: "No", context: "", src: "D" },
  { id: 44, date: "2025-09-28", wd: "Dom", time: "12:30", bp: "148/69", alcohol: "Ven. prima", context: "", src: "D" },
  { id: 45, date: "2025-10-02", wd: "Gio", time: "12:30", bp: "123/60", alcohol: "No", context: "", src: "D" },
  { id: 46, date: "2025-10-11", wd: "Sab", time: "20:30", bp: "130/71", alcohol: "Vino a cena", context: "Durante la cena", src: "D" },
  { id: 47, date: "2025-10-19", wd: "Dom", time: null, bp: "136/69", alcohol: "No", context: "(da foglio PA)", src: "D" },
  { id: 48, date: "2025-11-06", wd: "Gio", time: "15:50", bp: "126/74", alcohol: "No", context: "Lavorando", src: "D" },
  { id: 49, date: "2025-11-16", wd: "Dom", time: null, bp: "120/74", alcohol: "No", context: "Computer; Aura x4", src: "D" },
  { id: 50, date: "2025-11-20", wd: "Gio", time: "21:40", bp: "129/71", alcohol: "No", context: "Guardando TV", src: "D" },
  { id: 51, date: "2025-11-25", wd: "Mar", time: "05:00", bp: null, alcohol: "No", context: "Durante il sonno", src: "D" },
  { id: 52, date: "2025-12-01", wd: "Lun", time: "07:00", bp: "108/62", alcohol: "No", context: "", src: "D" },
  { id: 53, date: "2026-01-05", wd: "Lun", time: "15:30", bp: "116/70", alcohol: "No", context: "Lavorando; INIZIO DIETA", src: "D" },
  { id: 54, date: "2026-01-16", wd: "Ven", time: "13:30", bp: "110/71", alcohol: "No (dieta)", context: "All'improvviso", src: "D" },
  { id: 55, date: "2026-01-17", wd: "Sab", time: "10:00", bp: "118/72", alcohol: "No (dieta)", context: "Al risveglio", src: "D" },
  { id: 56, date: "2026-01-26", wd: "Lun", time: "15:30", bp: "115/73", alcohol: "No (dieta)", context: "All'improvviso", src: "D" },
  { id: 57, date: "2026-02-02", wd: "Lun", time: "14:00", bp: "108/66", alcohol: "No (dieta)", context: "", src: "D" },
  { id: 58, date: "2026-02-11", wd: "Mer", time: "13:40", bp: "112/66", alcohol: "No (dieta)", context: "Computer-lavoro", src: "D" },
  { id: 59, date: "2026-02-14", wd: "Sab", time: "14:00", bp: "112/69", alcohol: "No (dieta)", context: "", src: "D" },
  { id: 60, date: "2026-02-21", wd: "Sab", time: "16:00", bp: "104/67", alcohol: "No (dieta)", context: "Aura lato sinistro", src: "D" },
  { id: 61, date: "2026-02-28", wd: "Sab", time: "15:00", bp: "115/73", alcohol: "No (dieta)", context: "", src: "D" },
  { id: 62, date: "2026-03-04", wd: "Mer", time: "11:00", bp: "111/71", alcohol: "No (dieta)", context: "", src: "D" },
];

const N = 62;
const DIET = "2026-01-05";
const CANDESARTAN = "2025-09-20";

const farmaci = [
  { name: "Rosuvastatina + Ezetimibe Teva", dose: "20 mg / 10 mg", freq: "Giornaliero", purpose: "Controllo colesterolo" },
  { name: "Candesartan EG Stada", dose: "8 mg", freq: "Giornaliero", purpose: "Controllo pressione arteriosa" },
];

const integratori = [
  { name: "Vitamina D", dose: "38 gocce", freq: "1x / settimana", purpose: "Integrazione vitaminica" },
  { name: "Vitamina C + Zinco", dose: "1 g + 20 mg", freq: "Giornaliero", purpose: "Supporto immunitario" },
  { name: "Multivitaminico Vitabright", dose: "1 capsula", freq: "Giornaliero", purpose: "Multivitaminico e minerali" },
  { name: "Glucosamine Complex (Zenement)", dose: "1 capsula", freq: "Giornaliero", purpose: "Salute articolare" },
  { name: "Premium Omega-3 (Zenement)", dose: "1 capsula", freq: "Giornaliero", purpose: "Acidi grassi essenziali" },
  { name: "Vitamina B12 (WeightWorld)", dose: "1 capsula", freq: "Giornaliero", purpose: "Integrazione B12" },
  { name: "Aura Stop", dose: "1 capsula mattina + 1 sera", freq: "2x / giorno", purpose: "Profilassi emicrania con aura" },
];

const farmaciEstemporanei = [
  // { name: "Ibuprofene", dose: "400 mg", date: "2026-02-14", reason: "Cefalea intensa" },
];

/* --- Weight tracking data (Feature 3) --- */
const defaultWeightData = [
  { date: "2026-01-19", kg: 130.0 },
  { date: "2026-01-22", kg: 130.0 },
  { date: "2026-01-25", kg: 124.6 },
  { date: "2026-02-02", kg: 121.1 },
  { date: "2026-02-08", kg: 118.65 },
  { date: "2026-02-15", kg: 117.85 },
  { date: "2026-02-22", kg: 117.05 },
  { date: "2026-03-01", kg: 117.05 },
  { date: "2026-03-08", kg: 115.05 },
];

/* --- Sleep tracking data (Feature 4) --- */
const defaultSleepData = [];

function fmtD(iso) {
  const [y, m, d] = iso.split("-");
  return d + "/" + m + "/" + y;
}
function dBetw(a, b) {
  return Math.round((new Date(b) - new Date(a)) / 86400000);
}
function pBP(s) {
  if (!s) return null;
  const p = s.split("/").map(Number);
  return { s: p[0], d: p[1] };
}
function tPeriod(t) {
  if (!t) return null;
  const h = parseInt(t);
  if (h >= 5 && h < 12) return "Mattina";
  if (h >= 12 && h < 18) return "Pomeriggio";
  if (h >= 18 && h < 22) return "Sera";
  return "Notte";
}

/* Italian day of week from date string */
function calcWd(dateStr) {
  var wdNames = ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"];
  var d = new Date(dateStr + "T12:00:00");
  return wdNames[d.getDay()];
}

const col = {
  bg: "#f8f7f5", card: "#fff", bdr: "#e4e2dd", txt: "#2c2c2c", mut: "#8a8780",
  acc: "#c24b38", accL: "#f3e8e5", blu: "#3a6b8c", bluL: "#e8f0f5",
  grn: "#4a7c59", grnL: "#e8f2eb", amb: "#b8860b", ambL: "#fdf5e0",
};
const cardS = { background: col.card, border: "1px solid " + col.bdr, borderRadius: "10px", padding: "20px" };

function Stat({ label, value, sub, color }) {
  return (
    <div style={{ background: col.card, border: "1px solid " + col.bdr, borderRadius: "10px", padding: "14px", textAlign: "center", flex: 1, minWidth: "100px" }}>
      <div style={{ fontSize: "9px", color: col.mut, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "5px" }}>{label}</div>
      <div style={{ fontSize: "24px", fontWeight: "700", color: color || col.txt, lineHeight: 1 }}>{value}</div>
      {sub && <div style={{ fontSize: "9px", color: col.mut, marginTop: "4px" }}>{sub}</div>}
    </div>
  );
}

function Bar({ value, max, color, label, text }) {
  const w = Math.max((value / max) * 100, 6);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "7px" }}>
      <div style={{ width: "100px", fontSize: "12px", color: col.mut, textAlign: "right" }}>{label}</div>
      <div style={{ flex: 1, background: col.bdr, borderRadius: "5px", height: "26px", overflow: "hidden" }}>
        <div style={{ width: w + "%", height: "100%", background: color, borderRadius: "5px", display: "flex", alignItems: "center", paddingLeft: "8px", fontSize: "11px", fontWeight: "600", color: "#fff" }}>{text}</div>
      </div>
    </div>
  );
}

function Alert({ bg, border, color, children }) {
  return (
    <div style={{ marginTop: "14px", padding: "12px", background: bg, borderRadius: "8px", fontSize: "12px", color: color, borderLeft: "3px solid " + border, lineHeight: "1.6" }}>
      {children}
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState("timeline");

  /* --- Feature 5: Date range filter --- */
  const [filterFrom, setFilterFrom] = useState("");
  const [filterTo, setFilterTo] = useState("");

  /* --- Feature 6: localStorage episodes --- */
  const [extraEpisodes, setExtraEpisodes] = useState(function () {
    try {
      var stored = localStorage.getItem("anamnesi-extra-episodes");
      return stored ? JSON.parse(stored) : [];
    } catch (e) { return []; }
  });

  /* --- Feature 3/4: localStorage weight and sleep --- */
  const [weightData, setWeightData] = useState(function () {
    try {
      var stored = localStorage.getItem("anamnesi-weight");
      return stored ? JSON.parse(stored) : defaultWeightData;
    } catch (e) { return defaultWeightData; }
  });
  const [sleepData, setSleepData] = useState(function () {
    try {
      var stored = localStorage.getItem("anamnesi-sleep");
      return stored ? JSON.parse(stored) : defaultSleepData;
    } catch (e) { return defaultSleepData; }
  });

  /* Persist to localStorage */
  useEffect(function () {
    localStorage.setItem("anamnesi-extra-episodes", JSON.stringify(extraEpisodes));
  }, [extraEpisodes]);
  useEffect(function () {
    localStorage.setItem("anamnesi-weight", JSON.stringify(weightData));
  }, [weightData]);
  useEffect(function () {
    localStorage.setItem("anamnesi-sleep", JSON.stringify(sleepData));
  }, [sleepData]);

  /* --- Feature 6: Entry form state --- */
  const [formDate, setFormDate] = useState("");
  const [formTime, setFormTime] = useState("");
  const [formBpS, setFormBpS] = useState("");
  const [formBpD, setFormBpD] = useState("");
  const [formAlcohol, setFormAlcohol] = useState("");
  const [formContext, setFormContext] = useState("");

  /* Merge hardcoded + extra episodes */
  var allEpisodes = episodes.concat(extraEpisodes).slice().sort(function (a, b) {
    return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
  });

  /* --- Feature 5: Apply date filter --- */
  var filterActive = filterFrom || filterTo;
  var filteredEpisodes = allEpisodes.filter(function (e) {
    if (filterFrom && e.date < filterFrom) return false;
    if (filterTo && e.date > filterTo) return false;
    return true;
  });

  /* Use filteredEpisodes for all computations */
  var ep = filteredEpisodes;
  var epN = ep.length;

  const tDays = epN >= 2 ? dBetw(ep[0].date, ep[epN - 1].date) : 1;

  const intervals = [];
  for (let i = 1; i < epN; i++) {
    intervals.push({ days: dBetw(ep[i - 1].date, ep[i].date), to: ep[i].date });
  }

  const monthly = {};
  ep.forEach(function (e) { const k = e.date.slice(0, 7); monthly[k] = (monthly[k] || 0) + 1; });

  const dayC = { Lun: 0, Mar: 0, Mer: 0, Gio: 0, Ven: 0, Sab: 0, Dom: 0 };
  ep.forEach(function (e) { dayC[e.wd]++; });

  const sats = ep.filter(function (e) { return e.wd === "Sab"; }).map(function (e) { return e.date; });
  const satClusters = [];
  if (sats.length > 0) {
    let clst = [sats[0]];
    for (let i = 1; i < sats.length; i++) {
      if (dBetw(sats[i - 1], sats[i]) === 7) { clst.push(sats[i]); }
      else { if (clst.length >= 2) satClusters.push(clst.slice()); clst = [sats[i]]; }
    }
    if (clst.length >= 2) satClusters.push(clst);
  }

  const seasonDef = { "Primavera (mar-mag)": [3, 4, 5], "Estate (giu-ago)": [6, 7, 8], "Autunno (set-nov)": [9, 10, 11], "Inverno (dic-feb)": [12, 1, 2] };
  const seasonData = {};
  Object.keys(seasonDef).forEach(function (name) {
    const months = seasonDef[name];
    const eps = ep.filter(function (e) { const m = parseInt(e.date.slice(5, 7)); return months.indexOf(m) >= 0; });
    const mk = {};
    eps.forEach(function (e) { mk[e.date.slice(0, 7)] = true; });
    const nm = Object.keys(mk).length || 1;
    seasonData[name] = { count: eps.length, months: nm, rate: (eps.length / nm).toFixed(1) };
  });

  const preDiet = ep.filter(function (e) { return e.date < DIET; });
  const postDiet = ep.filter(function (e) { return e.date >= DIET; });
  const preDietDays = preDiet.length >= 1 ? dBetw(preDiet[0].date, DIET) : 1;
  const postDietDays = postDiet.length >= 1 ? dBetw(DIET, ep[epN - 1].date) : 1;
  const preRate = (preDiet.length / Math.max(preDietDays, 1) * 30).toFixed(1);
  const postRate = (postDiet.length / Math.max(postDietDays, 1) * 30).toFixed(1);

  const detailed = ep.filter(function (e) { return e.src === "D"; });
  const bpEps = detailed.filter(function (e) { return e.bp; }).map(function (e) { return Object.assign({}, e, pBP(e.bp)); });
  const preBP = bpEps.filter(function (e) { return e.date < DIET; });
  const postBPa = bpEps.filter(function (e) { return e.date >= DIET; });
  const avgPreBP = preBP.length ? Math.round(preBP.reduce(function (a, b) { return a + b.s; }, 0) / preBP.length) : 0;
  const avgPostBP = postBPa.length ? Math.round(postBPa.reduce(function (a, b) { return a + b.s; }, 0) / postBPa.length) : 0;

  const pCounts = { "Mattina (5-12h)": 0, "Pomeriggio (12-18h)": 0, "Sera (18-22h)": 0, "Notte/N.D.": 0 };
  detailed.forEach(function (e) {
    const p = tPeriod(e.time);
    if (p === "Mattina") pCounts["Mattina (5-12h)"]++;
    else if (p === "Pomeriggio") pCounts["Pomeriggio (12-18h)"]++;
    else if (p === "Sera") pCounts["Sera (18-22h)"]++;
    else pCounts["Notte/N.D."]++;
  });
  const pcMax = Math.max(...Object.values(pCounts), 1);

  const rolling = [];
  for (let i = 0; i < intervals.length - 4; i += 5) {
    const ch = intervals.slice(i, i + 5);
    const avg = ch.reduce(function (a, b) { return a + b.days; }, 0) / ch.length;
    rolling.push({ avg: parseFloat(avg.toFixed(1)), from: ep[i].date, to: ep[Math.min(i + 5, epN - 1)].date });
  }
  const rollingMax = rolling.length ? Math.max(...rolling.map(function (r) { return r.avg; })) : 1;

  const mKeys = Object.keys(monthly).sort();
  const mMax = Math.max(...Object.values(monthly), 1);
  const mn = ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"];
  const mLabels = {};
  mKeys.forEach(function (k) { const p = k.split("-"); mLabels[k] = mn[parseInt(p[1]) - 1] + " " + p[0].slice(2); });

  const tabS = function (a) {
    return { padding: "9px 14px", fontSize: "11px", fontWeight: a ? "600" : "400", color: a ? col.acc : col.mut, background: a ? col.accL : "transparent", border: "none", borderRadius: "8px", cursor: "pointer", fontFamily: "inherit" };
  };

  const tabs = [
    ["timeline", "1. Timeline"], ["frequenza", "2. Frequenza"], ["heatmap", "3. Giorni/Sabati"],
    ["pressione", "4. PA/Dieta"], ["orario", "5. Orario/Aura"], ["sintesi", "6. Sintesi Clinica"], ["farmaci", "7. Farmaci"], ["registro", "8. Registro"],
    ["peso_sonno", "9. Peso/Sonno"]
  ];

  const workEps = detailed.filter(function (e) { return e.context && (e.context.toLowerCase().indexOf("lavor") >= 0 || e.context.toLowerCase().indexOf("computer") >= 0); });

  /* --- Feature 6: Add episode handler --- */
  function handleAddEpisode(evt) {
    evt.preventDefault();
    if (!formDate) return;
    var wd = calcWd(formDate);
    var bp = (formBpS && formBpD) ? formBpS + "/" + formBpD : null;
    var newEp = {
      id: allEpisodes.length + 1,
      date: formDate,
      wd: wd,
      time: formTime || null,
      bp: bp,
      alcohol: formAlcohol || null,
      context: formContext || null,
      src: "D"
    };
    setExtraEpisodes(function (prev) { return prev.concat([newEp]); });
    setFormDate(""); setFormTime(""); setFormBpS(""); setFormBpD(""); setFormAlcohol(""); setFormContext("");
  }

  function handleClearExtra() {
    setExtraEpisodes([]);
    localStorage.removeItem("anamnesi-extra-episodes");
  }

  /* --- Feature 4: Sleep stats --- */
  var avgSleep = sleepData.length ? (sleepData.reduce(function (a, b) { return a + b.hours; }, 0) / sleepData.length).toFixed(1) : "0";
  var sleepQualityCounts = { buona: 0, media: 0, scarsa: 0 };
  sleepData.forEach(function (s) { sleepQualityCounts[s.quality]++; });
  var sleepQMax = Math.max(sleepQualityCounts.buona, sleepQualityCounts.media, sleepQualityCounts.scarsa, 1);

  /* Episodes after poor sleep */
  var poorSleepDates = sleepData.filter(function (s) { return s.quality === "scarsa"; }).map(function (s) { return s.date; });
  var epAfterPoorSleep = ep.filter(function (e) {
    return poorSleepDates.some(function (sd) {
      var nextDay = new Date(new Date(sd + "T12:00:00").getTime() + 86400000);
      var nextStr = nextDay.toISOString().slice(0, 10);
      return e.date === nextStr || e.date === sd;
    });
  });

  /* input style helper */
  var inputS = { padding: "8px 10px", fontSize: "12px", border: "1px solid " + col.bdr, borderRadius: "6px", fontFamily: "inherit", background: "#fff", color: col.txt };

  return (
    <div style={{ fontFamily: "'DM Sans','Helvetica Neue',sans-serif", background: col.bg, minHeight: "100vh", padding: "20px 14px" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=DM+Serif+Display&display=swap" rel="stylesheet" />

      {/* Feature 2: Print styles */}
      <style>{"\
@media print {\
  .no-print { display: none !important; }\
  .print-show { display: block !important; }\
  body { background: #fff !important; }\
  div { break-inside: avoid; }\
  .tab-content > div { display: block !important; }\
}\
      "}</style>

      <div style={{ maxWidth: "960px", margin: "0 auto" }}>

        {/* HEADER */}
        <div style={{ marginBottom: "22px", borderBottom: "2px solid " + col.acc, paddingBottom: "12px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px" }}>
            <h1 style={{ fontFamily: "'DM Serif Display',Georgia,serif", fontSize: "24px", color: col.txt, margin: 0, fontWeight: 400 }}>Analisi Completa — Emicrania con Aura</h1>
            {/* Feature 2: PDF Export button */}
            <button className="no-print" onClick={function () { window.print(); }} style={{ padding: "8px 16px", fontSize: "11px", fontWeight: "600", color: col.blu, background: col.bluL, border: "1px solid " + col.blu + "40", borderRadius: "6px", cursor: "pointer", fontFamily: "inherit" }}>
              Stampa / PDF
            </button>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "6px", flexWrap: "wrap", gap: "6px" }}>
            <span style={{ fontSize: "12px", color: col.mut }}><strong>{N} episodi</strong> · {fmtD(episodes[0].date)} — {fmtD(episodes[N - 1].date)} ({dBetw(episodes[0].date, episodes[N - 1].date)}gg ≈ 21 mesi)</span>
            <span style={{ fontSize: "10px", color: col.acc, fontWeight: 600, background: col.accL, padding: "3px 8px", borderRadius: "4px" }}>USO CLINICO</span>
          </div>
          <div style={{ marginTop: "6px", fontSize: "10px", color: col.mut }}>Storico (giu/24 — mag/25): 39 ep. solo data · Dettagliato (ago/25 — mar/26): 23 ep. con PA, orario, contesto</div>
        </div>

        {/* TABS */}
        <div className="no-print" style={{ display: "flex", gap: "4px", marginBottom: "18px", flexWrap: "wrap" }}>
          {tabs.map(function (item) {
            return <button key={item[0]} onClick={function () { setTab(item[0]); }} style={tabS(tab === item[0])}>{item[1]}</button>;
          })}
        </div>

        {/* STATS (always show totals from original data) */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "8px", flexWrap: "wrap" }}>
          <Stat label="Totale" value={N} sub={dBetw(episodes[0].date, episodes[N - 1].date) + "gg"} color={col.acc} />
          <Stat label="Media" value={(N / dBetw(episodes[0].date, episodes[N - 1].date) * 30).toFixed(1) + "/m"} sub="21 mesi" />
          <Stat label="Sab" value={dayC["Sab"]} sub={epN > 0 ? Math.round(dayC["Sab"] / epN * 100) + "%" : "0%"} color={col.amb} />
          <Stat label="Lun" value={dayC["Lun"]} sub={epN > 0 ? Math.round(dayC["Lun"] / epN * 100) + "%" : "0%"} color={col.blu} />
          <Stat label="Pre-dieta" value={preRate + "/m"} sub={preDiet.length + "ep/" + preDietDays + "gg"} color={col.amb} />
          <Stat label="Post-dieta" value={postRate + "/m"} sub={postDiet.length + "ep/" + postDietDays + "gg"} color={col.grn} />
        </div>

        {/* Feature 5: Date range filter */}
        <div className="no-print" style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "18px", flexWrap: "wrap", padding: "10px 14px", background: col.card, border: "1px solid " + col.bdr, borderRadius: "8px" }}>
          <span style={{ fontSize: "11px", fontWeight: "600", color: col.txt }}>Filtro periodo:</span>
          <label style={{ fontSize: "11px", color: col.mut }}>Da:
            <input type="date" value={filterFrom} onChange={function (e) { setFilterFrom(e.target.value); }} style={{ ...inputS, marginLeft: "4px" }} />
          </label>
          <label style={{ fontSize: "11px", color: col.mut }}>A:
            <input type="date" value={filterTo} onChange={function (e) { setFilterTo(e.target.value); }} style={{ ...inputS, marginLeft: "4px" }} />
          </label>
          {filterActive && (
            <button onClick={function () { setFilterFrom(""); setFilterTo(""); }} style={{ padding: "6px 12px", fontSize: "10px", fontWeight: "600", color: col.acc, background: col.accL, border: "1px solid " + col.acc + "40", borderRadius: "5px", cursor: "pointer", fontFamily: "inherit" }}>Rimuovi filtro</button>
          )}
          {filterActive && (
            <span style={{ fontSize: "10px", color: col.amb, fontWeight: "600" }}>
              Filtro attivo: {epN} episodi su {allEpisodes.length} totali
            </span>
          )}
        </div>

        {/* 1. TIMELINE */}
        {tab === "timeline" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={cardS}>
              <h3 style={{ fontSize: "14px", fontWeight: "600", margin: "0 0 6px" }}>Intervalli tra Episodi — {epN} episodi</h3>
              <p style={{ fontSize: "11px", color: col.mut, margin: "0 0 14px" }}>Ogni barra = giorni tra episodi consecutivi. Barra grigia = lacuna registri.</p>
              <div style={{ position: "relative", height: "200px", display: "flex", alignItems: "flex-end", gap: "1px", paddingBottom: "20px", borderBottom: "1px solid " + col.bdr }}>
                {intervals.map(function (iv, i) {
                  const mx = Math.max(...intervals.filter(function (x) { return x.days < 80; }).map(function (x) { return x.days; }), 1);
                  const isGap = iv.days > 50;
                  const h = isGap ? 180 : Math.max((iv.days / mx) * 160, 4);
                  const clr = isGap ? "#ddd" : iv.days <= 3 ? col.acc : iv.days >= 15 ? col.grn : col.blu;
                  return (
                    <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", height: "100%", minWidth: "3px" }}>
                      {!isGap && iv.days >= 10 && <div style={{ fontSize: "6px", fontWeight: "600", color: clr, marginBottom: "1px" }}>{iv.days}</div>}
                      <div style={{ width: "100%", maxWidth: "13px", height: h + "px", background: clr, borderRadius: "2px 2px 0 0" }} />
                    </div>
                  );
                })}
              </div>
              <div style={{ marginTop: "8px", display: "flex", gap: "10px", fontSize: "10px", flexWrap: "wrap" }}>
                <span style={{ color: col.acc }}>■ ≤3gg</span>
                <span style={{ color: col.blu }}>■ 4–14gg</span>
                <span style={{ color: col.grn }}>■ ≥15gg</span>
                <span style={{ color: "#ddd" }}>■ lacuna</span>
              </div>
            </div>
            <div style={cardS}>
              <h3 style={{ fontSize: "14px", fontWeight: "600", margin: "0 0 6px" }}>Media Mobile (finestra 5 episodi)</h3>
              <p style={{ fontSize: "11px", color: col.mut, margin: "0 0 14px" }}>Intervallo medio decrescente = frequenza in aumento.</p>
              {rolling.map(function (r, i) {
                const f = new Date(r.from);
                const t = new Date(r.to);
                const label = f.toLocaleDateString("it", { month: "short", year: "2-digit" }) + "—" + t.toLocaleDateString("it", { month: "short", year: "2-digit" });
                return <Bar key={i} value={r.avg} max={rollingMax} color={r.avg <= 7 ? col.acc : r.avg >= 15 ? col.grn : col.blu} label={label} text={r.avg + "gg"} />;
              })}
              <Alert bg={col.accL} border={col.acc} color={col.acc}>
                <strong>Pattern ciclico:</strong> picchi di alta intensità (≤7gg) in ott-nov/24, mar-mag/25, gen-mar/26. Oscillazione ~4-5 mesi.
              </Alert>
            </div>
          </div>
        )}

        {/* 2. FREQUENZA */}
        {tab === "frequenza" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={cardS}>
              <h3 style={{ fontSize: "14px", fontWeight: "600", margin: "0 0 6px" }}>Frequenza Mensile</h3>
              {mKeys.map(function (k) {
                return <Bar key={k} value={monthly[k]} max={mMax} color={k >= "2026" ? col.grn : col.blu} label={mLabels[k]} text={String(monthly[k])} />;
              })}
              <Alert bg={col.ambL} border={col.amb} color={col.amb}>
                <strong>Punta:</strong> Ott/24, Gen/25, Apr/25, Feb/26 — tutti con 5 episodi. Ciclicità ~3-4 mesi.
              </Alert>
            </div>
            <div style={cardS}>
              <h3 style={{ fontSize: "14px", fontWeight: "600", margin: "0 0 6px" }}>Stagionalità</h3>
              {Object.keys(seasonData).map(function (name) {
                var d = seasonData[name];
                var smx = Math.max(...Object.values(seasonData).map(function (x) { return parseFloat(x.rate); }), 1);
                var clr = (name.indexOf("Autunno") >= 0 || name.indexOf("Primavera") >= 0) ? col.acc : col.blu;
                return <Bar key={name} value={parseFloat(d.rate)} max={smx} color={clr} label={name.split("(")[0].trim()} text={d.rate + "/mese (" + d.count + " ep.)"} />;
              })}
              <Alert bg={col.accL} border={col.acc} color={col.acc}>
                <strong>Autunno e primavera</strong> (3.5/mese) superano estate (2.2) e inverno (3.0). Possibili trigger stagionali.
              </Alert>
            </div>
          </div>
        )}

        {/* 3. HEATMAP */}
        {tab === "heatmap" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={cardS}>
              <h3 style={{ fontSize: "14px", fontWeight: "600", margin: "0 0 6px" }}>Giorno della Settimana — {epN} episodi</h3>
              {["Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dom"].map(function (d) {
                var clr = d === "Sab" ? col.acc : d === "Lun" ? col.amb : col.blu;
                var maxDayC = Math.max(...Object.values(dayC), 1);
                return <Bar key={d} value={dayC[d]} max={maxDayC} color={clr} label={d} text={dayC[d] + " (" + (epN > 0 ? Math.round(dayC[d] / epN * 100) : 0) + "%)"} />;
              })}
              <Alert bg={col.accL} border={col.acc} color={col.acc}>
                <strong>Sab ({epN > 0 ? Math.round(dayC["Sab"] / epN * 100) : 0}%) + Lun ({epN > 0 ? Math.round(dayC["Lun"] / epN * 100) : 0}%) = {epN > 0 ? Math.round((dayC["Sab"] + dayC["Lun"]) / epN * 100) : 0}%</strong> di tutti gli episodi.
              </Alert>
            </div>
            <div style={cardS}>
              <h3 style={{ fontSize: "14px", fontWeight: "600", margin: "0 0 6px" }}>Cluster di Sabati Consecutivi</h3>
              <p style={{ fontSize: "11px", color: col.mut, margin: "0 0 14px" }}>Sequenze ogni sabato senza interruzione.</p>
              {satClusters.map(function (scl, i) {
                return (
                  <div key={i} style={{ padding: "12px", background: col.accL, borderRadius: "8px", marginBottom: "8px", borderLeft: "3px solid " + col.acc }}>
                    <div style={{ fontSize: "13px", fontWeight: "600", color: col.acc, marginBottom: "4px" }}>{scl.length} sabati consecutivi</div>
                    <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                      {scl.map(function (d, j) {
                        return <span key={j} style={{ background: "#fff", padding: "3px 8px", borderRadius: "4px", fontSize: "11px", fontWeight: "500" }}>{fmtD(d)}</span>;
                      })}
                    </div>
                  </div>
                );
              })}
              {satClusters.length === 0 && (
                <div style={{ padding: "16px", background: "#fafaf8", borderRadius: "8px", textAlign: "center", fontSize: "12px", color: col.mut, fontStyle: "italic" }}>
                  Nessun cluster trovato nel periodo selezionato.
                </div>
              )}
              <Alert bg={col.ambL} border={col.amb} color={col.amb}>
                <strong>"Weekend migraine":</strong> documentata in letteratura — variazioni cortisolo, caffeina, sonno, rilassamento post-stress.
              </Alert>
            </div>
          </div>
        )}

        {/* 4. PA/DIETA */}
        {tab === "pressione" && (function () {
          var chartH = 220, chartPadL = 55, chartPadR = 25, chartPadT = 35, chartPadB = 50;
          var bpSorted = bpEps.slice().sort(function (a, b) { return a.date < b.date ? -1 : 1; });
          if (bpSorted.length === 0) {
            return (
              <div style={cardS}>
                <p style={{ fontSize: "12px", color: col.mut, textAlign: "center", fontStyle: "italic" }}>Nessun dato pressione nel periodo selezionato.</p>
              </div>
            );
          }
          var firstDate = new Date(bpSorted[0].date);
          var lastDate = new Date(bpSorted[bpSorted.length - 1].date);
          var totalMs = lastDate - firstDate || 1;
          var allS = bpSorted.map(function (e) { return e.s; });
          var allD = bpSorted.map(function (e) { return e.d; });
          var minV = Math.min(Math.min.apply(null, allD), 55);
          var maxV = Math.max(Math.max.apply(null, allS), 150);
          var range = maxV - minV || 1;
          var innerW = 600;
          function xPct(d) { return ((new Date(d) - firstDate) / totalMs) * 100; }
          function yPct(v) { return 100 - ((v - minV) / range) * 100; }
          var candesX = xPct(CANDESARTAN);
          var dietX = xPct(DIET);
          var thresholds = [140, 120, 90];
          var preCanBP = bpSorted.filter(function (e) { return e.date < CANDESARTAN; });
          var postCanPreDietBP = bpSorted.filter(function (e) { return e.date >= CANDESARTAN && e.date < DIET; });
          var postDietBP = bpSorted.filter(function (e) { return e.date >= DIET; });
          function avgSys(arr) { return arr.length ? Math.round(arr.reduce(function (a, b) { return a + b.s; }, 0) / arr.length) : null; }
          function avgDia(arr) { return arr.length ? Math.round(arr.reduce(function (a, b) { return a + b.d; }, 0) / arr.length) : null; }

          /* --- Feature 1: Cross-correlation data --- */
          var ccMonthly = {};
          ep.forEach(function (e) {
            var k = e.date.slice(0, 7);
            if (!ccMonthly[k]) ccMonthly[k] = { count: 0, bpSum: 0, bpN: 0 };
            ccMonthly[k].count++;
          });
          bpSorted.forEach(function (e) {
            var k = e.date.slice(0, 7);
            if (!ccMonthly[k]) ccMonthly[k] = { count: 0, bpSum: 0, bpN: 0 };
            ccMonthly[k].bpSum += e.s;
            ccMonthly[k].bpN++;
          });
          var ccKeys = Object.keys(ccMonthly).sort().filter(function (k) { return ccMonthly[k].bpN > 0 || ccMonthly[k].count > 0; });
          var ccMaxCount = Math.max.apply(null, ccKeys.map(function (k) { return ccMonthly[k].count; }).concat([1]));
          var ccBpValues = ccKeys.filter(function (k) { return ccMonthly[k].bpN > 0; }).map(function (k) { return ccMonthly[k].bpSum / ccMonthly[k].bpN; });
          var ccBpMin = ccBpValues.length ? Math.min.apply(null, ccBpValues) - 5 : 100;
          var ccBpMax = ccBpValues.length ? Math.max.apply(null, ccBpValues) + 5 : 150;

          return (
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              {[
                { title: "PRE-DIETA", sub: "07/06/2024 — 04/01/2026", bg: col.ambL, fg: col.amb, rate: preRate, eps: preDiet.length, days: preDietDays, avgBP: avgPreBP, bpN: preBP.length },
                { title: "POST-DIETA", sub: "05/01/2026 — 04/03/2026", bg: col.grnL, fg: col.grn, rate: postRate, eps: postDiet.length, days: postDietDays, avgBP: avgPostBP, bpN: postBPa.length },
              ].map(function (c, i) {
                return (
                  <div key={i} style={{ flex: 1, minWidth: "240px", background: c.bg, borderRadius: "12px", padding: "22px", border: "1px solid " + c.fg + "30" }}>
                    <div style={{ fontSize: "12px", fontWeight: "600", color: c.fg }}>{c.title}</div>
                    <div style={{ fontSize: "10px", color: col.mut, marginBottom: "14px" }}>{c.sub}</div>
                    <div style={{ fontSize: "38px", fontWeight: "700", color: c.fg, lineHeight: 1 }}>{c.rate}</div>
                    <div style={{ fontSize: "11px", color: c.fg, marginBottom: "16px" }}>episodi / mese</div>
                    <div style={{ fontSize: "11px", color: col.txt, lineHeight: "2" }}>
                      Episodi: <strong>{c.eps}</strong><br />Giorni: <strong>{c.days}</strong>
                      {c.bpN > 0 && <span><br />PA media: <strong>{c.avgBP} mmHg</strong> ({c.bpN} misurazioni)</span>}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* BP TIMELINE CHART */}
            <div style={cardS}>
              <h3 style={{ fontSize: "14px", fontWeight: "600", margin: "0 0 4px" }}>Storico Pressione Arteriosa</h3>
              <div style={{ fontSize: "10px", color: col.mut, marginBottom: "14px" }}>Sistolica e diastolica durante episodi di emicrania con eventi correlati</div>
              <div style={{ position: "relative", width: "100%", height: chartH + chartPadT + chartPadB + "px", overflow: "visible" }}>
                <svg viewBox={"0 0 " + (innerW + chartPadL + chartPadR) + " " + (chartH + chartPadT + chartPadB)} style={{ width: "100%", height: "100%", overflow: "visible" }} preserveAspectRatio="xMidYMid meet">
                  {thresholds.map(function (t) {
                    var yy = chartPadT + (yPct(t) / 100) * chartH;
                    return <g key={t}><line x1={chartPadL} x2={chartPadL + innerW} y1={yy} y2={yy} stroke={t >= 140 ? col.acc + "40" : t >= 120 ? col.amb + "40" : col.grn + "40"} strokeDasharray="6,4" strokeWidth="1" /><text x={chartPadL - 6} y={yy + 4} textAnchor="end" fontSize="11" fill={col.mut}>{t}</text></g>;
                  })}
                  <text x={chartPadL - 6} y={chartPadT + 4} textAnchor="end" fontSize="11" fill={col.mut}>{maxV}</text>
                  <text x={chartPadL - 6} y={chartPadT + chartH + 4} textAnchor="end" fontSize="11" fill={col.mut}>{minV}</text>

                  {(function () {
                    var cx = chartPadL + (candesX / 100) * innerW;
                    return <g>
                      <line x1={cx} x2={cx} y1={chartPadT - 10} y2={chartPadT + chartH} stroke={col.blu} strokeDasharray="5,3" strokeWidth="1.2" />
                      <rect x={cx - 45} y={chartPadT - 28} width="90" height="20" rx="4" fill={col.bluL} stroke={col.blu} strokeWidth="0.8" />
                      <text x={cx} y={chartPadT - 14} textAnchor="middle" fontSize="11" fill={col.blu} fontWeight="600">Candesartan</text>
                    </g>;
                  })()}

                  {(function () {
                    var dx = chartPadL + (dietX / 100) * innerW;
                    return <g>
                      <line x1={dx} x2={dx} y1={chartPadT - 10} y2={chartPadT + chartH} stroke={col.grn} strokeDasharray="5,3" strokeWidth="1.2" />
                      <rect x={dx - 28} y={chartPadT - 28} width="56" height="20" rx="4" fill={col.grnL} stroke={col.grn} strokeWidth="0.8" />
                      <text x={dx} y={chartPadT - 14} textAnchor="middle" fontSize="11" fill={col.grn} fontWeight="600">Dieta</text>
                    </g>;
                  })()}

                  <polyline fill="none" stroke={col.acc} strokeWidth="2" strokeLinejoin="round" points={bpSorted.map(function (e) {
                    return (chartPadL + (xPct(e.date) / 100) * innerW) + "," + (chartPadT + (yPct(e.s) / 100) * chartH);
                  }).join(" ")} />
                  <polyline fill="none" stroke={col.blu} strokeWidth="2" strokeLinejoin="round" points={bpSorted.map(function (e) {
                    return (chartPadL + (xPct(e.date) / 100) * innerW) + "," + (chartPadT + (yPct(e.d) / 100) * chartH);
                  }).join(" ")} />

                  {bpSorted.map(function (e, i) {
                    var cx = chartPadL + (xPct(e.date) / 100) * innerW;
                    var cy = chartPadT + (yPct(e.s) / 100) * chartH;
                    return <circle key={"s" + i} cx={cx} cy={cy} r="4" fill={e.s >= 140 ? col.acc : e.s < 120 ? col.grn : col.amb} stroke="#fff" strokeWidth="1" />;
                  })}
                  {bpSorted.map(function (e, i) {
                    var cx = chartPadL + (xPct(e.date) / 100) * innerW;
                    var cy = chartPadT + (yPct(e.d) / 100) * chartH;
                    return <circle key={"d" + i} cx={cx} cy={cy} r="3.5" fill={col.blu} stroke="#fff" strokeWidth="0.8" />;
                  })}

                  {bpSorted.filter(function (_, i) { return i === 0 || i === bpSorted.length - 1 || i % Math.max(1, Math.floor(bpSorted.length / 6)) === 0; }).map(function (e, i) {
                    var cx = chartPadL + (xPct(e.date) / 100) * innerW;
                    return <text key={"xl" + i} x={cx} y={chartPadT + chartH + 16} textAnchor="middle" fontSize="11" fill={col.mut}>{fmtD(e.date).slice(0, 5)}</text>;
                  })}
                </svg>
              </div>
              <div style={{ display: "flex", gap: "16px", justifyContent: "center", fontSize: "10px", color: col.mut, marginTop: "4px" }}>
                <span><span style={{ display: "inline-block", width: "10px", height: "3px", background: col.acc, borderRadius: "2px", marginRight: "4px", verticalAlign: "middle" }}></span>Sistolica</span>
                <span><span style={{ display: "inline-block", width: "10px", height: "3px", background: col.blu, borderRadius: "2px", marginRight: "4px", verticalAlign: "middle" }}></span>Diastolica</span>
                <span><span style={{ display: "inline-block", width: "8px", height: "8px", border: "1.5px dashed " + col.blu, borderRadius: "1px", marginRight: "4px", verticalAlign: "middle" }}></span>Candesartan (20/09/2025)</span>
                <span><span style={{ display: "inline-block", width: "8px", height: "8px", border: "1.5px dashed " + col.grn, borderRadius: "1px", marginRight: "4px", verticalAlign: "middle" }}></span>Dieta (05/01/2026)</span>
              </div>
            </div>

            {/* Feature 1: Cross-correlation chart */}
            {ccKeys.length > 0 && (
            <div style={cardS}>
              <h3 style={{ fontSize: "14px", fontWeight: "600", margin: "0 0 4px" }}>Correlazione Cruzada: Episodi vs PA Sistolica</h3>
              <div style={{ fontSize: "10px", color: col.mut, marginBottom: "14px" }}>Frequenza mensile episodi (barre) e PA sistolica media (linea) sullo stesso asse temporale</div>
              <div style={{ position: "relative", width: "100%", height: "280px", overflow: "visible" }}>
                {(function () {
                  var ccW = 600, ccH = 200, ccPadL = 50, ccPadR = 50, ccPadT = 20, ccPadB = 50;
                  var barW = Math.max(Math.floor((ccW - 20) / ccKeys.length) - 4, 8);
                  var totalSvgW = ccPadL + ccW + ccPadR;
                  var totalSvgH = ccPadT + ccH + ccPadB;
                  return (
                    <svg viewBox={"0 0 " + totalSvgW + " " + totalSvgH} style={{ width: "100%", height: "100%", overflow: "visible" }} preserveAspectRatio="xMidYMid meet">
                      {/* Left Y-axis: episode count */}
                      <text x={ccPadL - 8} y={ccPadT - 4} textAnchor="end" fontSize="9" fill={col.blu} fontWeight="600">Episodi</text>
                      {[0, Math.ceil(ccMaxCount / 2), ccMaxCount].map(function (v) {
                        var yy = ccPadT + ccH - (v / ccMaxCount) * ccH;
                        return <g key={"lya" + v}>
                          <line x1={ccPadL} x2={ccPadL + ccW} y1={yy} y2={yy} stroke={col.bdr} strokeWidth="0.5" />
                          <text x={ccPadL - 6} y={yy + 4} textAnchor="end" fontSize="10" fill={col.mut}>{v}</text>
                        </g>;
                      })}
                      {/* Right Y-axis: BP */}
                      <text x={ccPadL + ccW + 8} y={ccPadT - 4} textAnchor="start" fontSize="9" fill={col.acc} fontWeight="600">PA mmHg</text>
                      {[ccBpMin, Math.round((ccBpMin + ccBpMax) / 2), ccBpMax].map(function (v) {
                        var yy = ccPadT + ccH - ((v - ccBpMin) / (ccBpMax - ccBpMin)) * ccH;
                        return <g key={"rya" + v}>
                          <text x={ccPadL + ccW + 6} y={yy + 4} textAnchor="start" fontSize="10" fill={col.mut}>{Math.round(v)}</text>
                        </g>;
                      })}
                      {/* Bars: episode count */}
                      {ccKeys.map(function (k, i) {
                        var cx = ccPadL + (i + 0.5) * (ccW / ccKeys.length);
                        var bh = (ccMonthly[k].count / ccMaxCount) * ccH;
                        return <rect key={"bar" + k} x={cx - barW / 2} y={ccPadT + ccH - bh} width={barW} height={bh} fill={col.blu + "70"} rx="2" />;
                      })}
                      {/* Line: average systolic BP */}
                      {(function () {
                        var pts = ccKeys.filter(function (k) { return ccMonthly[k].bpN > 0; }).map(function (k) {
                          var i = ccKeys.indexOf(k);
                          var cx = ccPadL + (i + 0.5) * (ccW / ccKeys.length);
                          var avgBp = ccMonthly[k].bpSum / ccMonthly[k].bpN;
                          var cy = ccPadT + ccH - ((avgBp - ccBpMin) / (ccBpMax - ccBpMin)) * ccH;
                          return { x: cx, y: cy, bp: Math.round(avgBp) };
                        });
                        if (pts.length < 2) return null;
                        return <g>
                          <polyline fill="none" stroke={col.acc} strokeWidth="2.5" strokeLinejoin="round" points={pts.map(function (p) { return p.x + "," + p.y; }).join(" ")} />
                          {pts.map(function (p, j) {
                            return <g key={"ccpt" + j}>
                              <circle cx={p.x} cy={p.y} r="4" fill={col.acc} stroke="#fff" strokeWidth="1.5" />
                              <text x={p.x} y={p.y - 8} textAnchor="middle" fontSize="9" fill={col.acc} fontWeight="600">{p.bp}</text>
                            </g>;
                          })}
                        </g>;
                      })()}
                      {/* X-axis labels */}
                      {ccKeys.map(function (k, i) {
                        var cx = ccPadL + (i + 0.5) * (ccW / ccKeys.length);
                        var parts = k.split("-");
                        var lbl = mn[parseInt(parts[1]) - 1] + " " + parts[0].slice(2);
                        return <text key={"ccxl" + i} x={cx} y={ccPadT + ccH + 16} textAnchor="middle" fontSize="9" fill={col.mut} transform={"rotate(-30 " + cx + " " + (ccPadT + ccH + 16) + ")"}>{lbl}</text>;
                      })}
                    </svg>
                  );
                })()}
              </div>
              <div style={{ display: "flex", gap: "16px", justifyContent: "center", fontSize: "10px", color: col.mut, marginTop: "8px" }}>
                <span><span style={{ display: "inline-block", width: "12px", height: "10px", background: col.blu + "70", borderRadius: "2px", marginRight: "4px", verticalAlign: "middle" }}></span>Episodi/mese</span>
                <span><span style={{ display: "inline-block", width: "10px", height: "3px", background: col.acc, borderRadius: "2px", marginRight: "4px", verticalAlign: "middle" }}></span>PA sistolica media</span>
              </div>
              <Alert bg={col.grnL} border={col.grn} color={col.grn}>
                <strong>Osservazione:</strong> La PA sistolica media cala nel tempo (effetto Candesartan + dieta), mentre la frequenza degli episodi non segue lo stesso trend. Conferma la dissociazione PA/frequenza.
              </Alert>
            </div>
            )}

            {/* Phase comparison cards */}
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {[
                { title: "Pre-Candesartan", sub: "Prima del 20/09/2025", bg: col.accL, fg: col.acc, data: preCanBP },
                { title: "Candesartan + Pre-Dieta", sub: "20/09/2025 — 04/01/2026", bg: col.bluL, fg: col.blu, data: postCanPreDietBP },
                { title: "Candesartan + Dieta", sub: "Dal 05/01/2026", bg: col.grnL, fg: col.grn, data: postDietBP },
              ].map(function (ph, i) {
                var sAvg = avgSys(ph.data);
                var dAvg = avgDia(ph.data);
                return (
                  <div key={i} style={{ flex: 1, minWidth: "180px", background: ph.bg, borderRadius: "10px", padding: "16px", border: "1px solid " + ph.fg + "30" }}>
                    <div style={{ fontSize: "11px", fontWeight: "600", color: ph.fg }}>{ph.title}</div>
                    <div style={{ fontSize: "9px", color: col.mut, marginBottom: "10px" }}>{ph.sub}</div>
                    {ph.data.length > 0 ? (
                      <div>
                        <div style={{ fontSize: "28px", fontWeight: "700", color: ph.fg, lineHeight: 1 }}>{sAvg}<span style={{ fontSize: "14px", fontWeight: "400" }}>/{dAvg}</span></div>
                        <div style={{ fontSize: "10px", color: ph.fg, marginTop: "4px" }}>mmHg media ({ph.data.length} misurazioni)</div>
                      </div>
                    ) : (
                      <div style={{ fontSize: "11px", color: col.mut, fontStyle: "italic" }}>Nessuna misurazione</div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* PA durante Episodi - list view */}
            <div style={cardS}>
              <h3 style={{ fontSize: "14px", fontWeight: "600", margin: "0 0 6px" }}>PA durante Episodi</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {bpEps.map(function (e) {
                  var phase = e.date < CANDESARTAN ? "pre-C" : e.date < DIET ? "C" : "C+D";
                  var phColor = e.date < CANDESARTAN ? col.acc : e.date < DIET ? col.blu : col.grn;
                  return (
                    <div key={e.id} style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px", background: e.s >= 140 ? col.accL : "#fafaf8", borderRadius: "8px", flexWrap: "wrap" }}>
                      <div style={{ width: "75px", fontSize: "11px", color: col.mut }}>{fmtD(e.date)}</div>
                      <span style={{ fontSize: "20px", fontWeight: "700", color: e.s >= 140 ? col.acc : e.s < 120 ? col.grn : col.blu }}>{e.s}</span>
                      <span style={{ fontSize: "12px", color: col.mut }}>/{e.d}</span>
                      <span style={{ fontSize: "9px", padding: "2px 6px", borderRadius: "3px", background: phColor + "20", color: phColor, fontWeight: "600" }}>{phase}</span>
                      <div style={{ marginLeft: "auto", fontSize: "10px" }}>
                        {e.s >= 140 && <span style={{ background: col.acc, color: "#fff", padding: "2px 6px", borderRadius: "3px", fontWeight: "600" }}>ELEVATA</span>}
                        {e.s < 120 && <span style={{ background: col.grnL, color: col.grn, padding: "2px 6px", borderRadius: "3px", fontWeight: "600" }}>OTTIMALE</span>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div style={{ ...cardS, background: col.accL, borderColor: col.acc + "40" }}>
              <h3 style={{ fontSize: "13px", fontWeight: "600", color: col.acc, margin: "0 0 8px" }}>Dissociazione PA / Frequenza</h3>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", fontSize: "12px", lineHeight: "1.7" }}>
                <div style={{ flex: 1, minWidth: "180px" }}>
                  <div style={{ color: col.grn, fontWeight: "600" }}>✓ PA ridotta</div>
                  Media da {avgPreBP} a {avgPostBP} mmHg (−{avgPreBP - avgPostBP} mmHg).
                </div>
                <div style={{ flex: 1, minWidth: "180px" }}>
                  <div style={{ color: col.acc, fontWeight: "600" }}>✗ Frequenza NON ridotta</div>
                  Tasso {preRate} → {postRate} ep./mese. Alcol e dolci non sono trigger primari.
                </div>
              </div>
            </div>
          </div>
          );
        })()}

        {/* 5. ORARIO/AURA */}
        {tab === "orario" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={cardS}>
              <h3 style={{ fontSize: "14px", fontWeight: "600", margin: "0 0 6px" }}>Fascia Oraria ({detailed.length} ep. dettagliati)</h3>
              {Object.keys(pCounts).map(function (label) {
                var count = pCounts[label];
                return <Bar key={label} value={count} max={pcMax} color={label.indexOf("Pomeriggio") >= 0 ? col.acc : col.blu} label={label.split("(")[0].trim()} text={count + " (" + (detailed.length > 0 ? Math.round(count / detailed.length * 100) : 0) + "%)"} />;
              })}
              <Alert bg={col.accL} border={col.acc} color={col.acc}>
                <strong>Prevalenza pomeridiana.</strong> {workEps.length} episodi con contesto lavorativo/computer.
              </Alert>
            </div>
            <div style={cardS}>
              <h3 style={{ fontSize: "14px", fontWeight: "600", margin: "0 0 6px" }}>Caratteristiche dell'Aura</h3>
              <div style={{ padding: "12px", background: col.bluL, borderRadius: "8px", marginBottom: "12px", fontSize: "12px", lineHeight: "1.7", borderLeft: "3px solid " + col.blu }}>
                <strong>Pattern abituale:</strong> l'aura si presenta senza preferenza di lato. Inizia tipicamente come un'aura completa, ragionevolmente centralizzata nel campo visivo. Solo in casi molto specifici si manifesta lateralmente, senza preferenza per alcun emisfero.
              </div>
              <div style={{ padding: "10px 12px", background: col.ambL, borderRadius: "8px", marginBottom: "8px", borderLeft: "3px solid " + col.amb, fontSize: "12px" }}>
                <strong>16/11/2025</strong> — Aura apparsa e scomparsa 4 volte — lavorando al computer (atipico per ripetizione)
              </div>
              <div style={{ padding: "10px 12px", background: col.accL, borderRadius: "8px", marginBottom: "8px", borderLeft: "3px solid " + col.acc, fontSize: "12px" }}>
                <strong>21/02/2026</strong> — Aura lato sinistro — sabato pomeriggio (atipico per lateralizzazione)
              </div>
              <div style={{ fontSize: "11px", color: col.mut, fontStyle: "italic" }}>Entrambi sono eccezioni al pattern abituale centralizzato.</div>
            </div>
          </div>
        )}

        {/* 6. SINTESI CLINICA */}
        {tab === "sintesi" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={cardS}>
              <h3 style={{ fontSize: "16px", fontWeight: "600", margin: "0 0 4px", color: col.acc }}>Sintesi delle Evidenze</h3>
              <p style={{ fontSize: "11px", color: col.mut, margin: "0 0 16px" }}>Riepilogo dei dati oggettivi emersi dall'analisi di {epN} episodi.</p>
              {[
                { n: "E1", title: "Frequenza compatibile con emicrania ad alta ricorrenza", text: "62 episodi in 635 giorni = 2.9 ep./mese. Frequenza stabile ma con picchi ciclici ogni 3-4 mesi (ott/24, gen/25, apr/25, feb/26, tutti con 5 episodi).", color: col.acc },
                { n: "E2", title: "Pattern 'weekend migraine' confermato su 21 mesi", text: "Sabato è il giorno più colpito (15 ep., 24%). Due cluster di sabati consecutivi documentati: 5 consecutivi ott-nov/24, 3 consecutivi feb/26. Lunedì secondo (14 ep., 23%). Il pattern sab+lun concentra il 47% degli episodi.", color: col.acc },
                { n: "E3", title: "Stagionalità autunno-primavera", text: "Tasso in autunno e primavera: 3.5 ep./mese. Estate: 2.2 ep./mese. Ottobre è il mese con maggiore incidenza storica (8 episodi nei due anni).", color: col.amb },
                { n: "E4", title: "Dissociazione pressione arteriosa / frequenza", text: "La dieta (no alcol, no dolci, dal 05/01/2026) ha ridotto la PA sistolica media da ~127 a ~112 mmHg (−12%), ma la frequenza è aumentata da 2.7 a 5.2 ep./mese. L'alcol e i dolci non risultano trigger primari.", color: col.grn },
                { n: "E5", title: "Prevalenza pomeridiana e correlazione lavorativa", text: "57% degli episodi dettagliati (13/23) avviene tra 12-18h. 6 episodi hanno contesto esplicito di lavoro/computer. Possibile ruolo di postura, affaticamento visivo, luminosità schermo.", color: col.blu },
                { n: "E6", title: "Episodi atipici dell'aura", text: "Pattern abituale: aura centralizzata, senza preferenza di lato. Due eccezioni documentate: 16/11/2025 (aura x4, apparsa/scomparsa ripetutamente) e 21/02/2026 (aura lateralizzata a sinistra).", color: col.amb },
              ].map(function (item, i) {
                return (
                  <div key={i} style={{ padding: "14px", borderRadius: "8px", marginBottom: "10px", borderLeft: "4px solid " + item.color, background: i % 2 === 0 ? "#fafaf8" : "#fff" }}>
                    <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "6px" }}>
                      <span style={{ background: item.color, color: "#fff", padding: "2px 8px", borderRadius: "4px", fontSize: "10px", fontWeight: "700" }}>{item.n}</span>
                      <span style={{ fontSize: "13px", fontWeight: "600", color: col.txt }}>{item.title}</span>
                    </div>
                    <div style={{ fontSize: "12px", color: col.txt, lineHeight: "1.7" }}>{item.text}</div>
                  </div>
                );
              })}
            </div>

            <div style={{ ...cardS, background: col.ambL, border: "1px solid " + col.amb + "40" }}>
              <h3 style={{ fontSize: "16px", fontWeight: "600", margin: "0 0 4px", color: col.amb }}>Ipotesi da Discutere con la Neurologista</h3>
              <p style={{ fontSize: "11px", color: col.mut, margin: "0 0 16px" }}>Basate sulle evidenze sopra. Non costituiscono diagnosi.</p>
              {[
                { id: "H1", title: "Emicrania da rilassamento (let-down migraine)", text: "La concentrazione al sabato suggerisce un meccanismo di rilassamento post-stress: durante la settimana il cortisolo è elevato (attività lavorativa), il sabato cala bruscamente → vasodilatazione → trigger. Il lunedì potrebbe rappresentare il 'rimbalzo' dello stress. Letteratura: Lipton et al., 'Reduction in perceived stress as a migraine trigger' (Neurology, 2014).", color: col.acc },
                { id: "H2", title: "Trigger ambientale stagionale", text: "L'aumento in autunno e primavera coincide con i cambi di luce (riduzione/aumento delle ore di sole), variazioni di pressione atmosferica, e transizioni di temperatura. Questi fattori sono trigger noti per l'emicrania con aura.", color: col.amb },
                { id: "H3", title: "Componente posturale/visiva occupazionale", text: "La prevalenza pomeridiana (57%) e la correlazione con lavoro al computer suggeriscono un ruolo dell'affaticamento visivo cumulativo, postura mantenuta, e possibilmente la frequenza di refresh dello schermo o la luce blu.", color: col.blu },
                { id: "H4", title: "Esclusione del trigger alimentare", text: "La dieta senza alcol e dolci (dal 05/01/2026) non ha ridotto la frequenza (anzi, è aumentata a 5.2/mese). Questo suggerisce che i fattori alimentari non sono trigger primari in questo caso specifico. La PA è migliorata indipendentemente.", color: col.grn },
                { id: "H5", title: "Monitorare la progressione dell'aura", text: "Due episodi con aura atipica (ripetizione x4 e lateralizzazione sinistra) in un contesto di aura abitualmente centralizzata. La neurologista potrebbe valutare se questi episodi richiedono approfondimenti (es. RM encefalo) per escludere cause strutturali.", color: col.acc },
              ].map(function (item, i) {
                return (
                  <div key={i} style={{ padding: "14px", borderRadius: "8px", marginBottom: "10px", borderLeft: "4px solid " + item.color, background: "#fffcf5" }}>
                    <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "6px" }}>
                      <span style={{ background: item.color, color: "#fff", padding: "2px 8px", borderRadius: "4px", fontSize: "10px", fontWeight: "700" }}>{item.id}</span>
                      <span style={{ fontSize: "13px", fontWeight: "600", color: col.txt }}>{item.title}</span>
                    </div>
                    <div style={{ fontSize: "12px", color: col.txt, lineHeight: "1.7" }}>{item.text}</div>
                  </div>
                );
              })}
            </div>

            <div style={{ background: col.accL, border: "1px solid " + col.acc + "40", borderRadius: "10px", padding: "16px", fontSize: "12px", color: col.acc }}>
              <strong>Disclaimer:</strong> Questo documento è un registro di raccolta dati con analisi statistica descrittiva. Le ipotesi presentate sono basate sui pattern osservati e su riferimenti alla letteratura medica, ma l'interpretazione clinica e la diagnosi sono di competenza esclusiva del medico specialista.
            </div>
          </div>
        )}

        {/* 7. FARMACI */}
        {tab === "farmaci" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

            <div style={cardS}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
                <span style={{ background: col.acc, color: "#fff", padding: "3px 10px", borderRadius: "4px", fontSize: "10px", fontWeight: "700" }}>Rx</span>
                <h3 style={{ fontSize: "14px", fontWeight: "600", margin: 0 }}>Farmaci (prescrizione medica)</h3>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {farmaci.map(function (med, i) {
                  return (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px", background: col.accL, borderRadius: "8px", borderLeft: "3px solid " + col.acc, flexWrap: "wrap" }}>
                      <div style={{ flex: 2, minWidth: "160px" }}>
                        <div style={{ fontSize: "13px", fontWeight: "600", color: col.txt }}>{med.name}</div>
                        <div style={{ fontSize: "10px", color: col.mut, marginTop: "2px" }}>{med.purpose}</div>
                      </div>
                      <div style={{ flex: 1, minWidth: "80px" }}>
                        <div style={{ fontSize: "11px", fontWeight: "600", color: col.acc }}>{med.dose}</div>
                      </div>
                      <div style={{ minWidth: "80px" }}>
                        <span style={{ background: "#fff", padding: "3px 8px", borderRadius: "4px", fontSize: "10px", fontWeight: "500", color: col.mut }}>{med.freq}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div style={cardS}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
                <span style={{ background: col.grn, color: "#fff", padding: "3px 10px", borderRadius: "4px", fontSize: "10px", fontWeight: "700" }}>INT</span>
                <h3 style={{ fontSize: "14px", fontWeight: "600", margin: 0 }}>Integratori e vitamine</h3>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {integratori.map(function (med, i) {
                  return (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px", background: col.grnL, borderRadius: "8px", borderLeft: "3px solid " + col.grn, flexWrap: "wrap" }}>
                      <div style={{ flex: 2, minWidth: "160px" }}>
                        <div style={{ fontSize: "13px", fontWeight: "600", color: col.txt }}>{med.name}</div>
                        <div style={{ fontSize: "10px", color: col.mut, marginTop: "2px" }}>{med.purpose}</div>
                      </div>
                      <div style={{ flex: 1, minWidth: "80px" }}>
                        <div style={{ fontSize: "11px", fontWeight: "600", color: col.grn }}>{med.dose}</div>
                      </div>
                      <div style={{ minWidth: "80px" }}>
                        <span style={{ background: "#fff", padding: "3px 8px", borderRadius: "4px", fontSize: "10px", fontWeight: "500", color: col.mut }}>{med.freq}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div style={cardS}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
                <span style={{ background: col.amb, color: "#fff", padding: "3px 10px", borderRadius: "4px", fontSize: "10px", fontWeight: "700" }}>PRN</span>
                <h3 style={{ fontSize: "14px", fontWeight: "600", margin: 0 }}>Farmaci estemporanei (al bisogno)</h3>
              </div>
              {farmaciEstemporanei.length === 0 ? (
                <div style={{ padding: "16px", background: "#fafaf8", borderRadius: "8px", textAlign: "center", fontSize: "12px", color: col.mut, fontStyle: "italic" }}>
                  Nessun farmaco estemporaneo registrato.
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  {farmaciEstemporanei.map(function (med, i) {
                    return (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px", background: col.ambL, borderRadius: "8px", borderLeft: "3px solid " + col.amb, flexWrap: "wrap" }}>
                        <div style={{ width: "75px", fontSize: "11px", color: col.mut }}>{fmtD(med.date)}</div>
                        <div style={{ flex: 2, minWidth: "140px" }}>
                          <div style={{ fontSize: "13px", fontWeight: "600", color: col.txt }}>{med.name}</div>
                        </div>
                        <div style={{ flex: 1, minWidth: "70px" }}>
                          <div style={{ fontSize: "11px", fontWeight: "600", color: col.amb }}>{med.dose}</div>
                        </div>
                        <div style={{ fontSize: "11px", color: col.mut }}>{med.reason}</div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <Alert bg={col.bluL} border={col.blu} color={col.blu}>
              <strong>Nota per la neurologista:</strong> Candesartan (ARB) è utilizzato anche in profilassi dell'emicrania in alcuni protocolli. Verificare se la dose attuale (8 mg) possa avere effetto profilattico o se un aggiustamento posologico sia indicato.
            </Alert>
          </div>
        )}

        {/* 8. REGISTRO */}
        {tab === "registro" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

            {/* Feature 6: Entry form */}
            <div style={cardS}>
              <h3 style={{ fontSize: "14px", fontWeight: "600", margin: "0 0 12px" }}>Aggiungi Episodio</h3>
              <form onSubmit={handleAddEpisode} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "flex-end" }}>
                  <label style={{ display: "flex", flexDirection: "column", gap: "3px", fontSize: "11px", color: col.mut }}>
                    Data *
                    <input type="date" value={formDate} onChange={function (e) { setFormDate(e.target.value); }} required style={inputS} />
                  </label>
                  <label style={{ display: "flex", flexDirection: "column", gap: "3px", fontSize: "11px", color: col.mut }}>
                    Giorno
                    <input type="text" value={formDate ? calcWd(formDate) : ""} readOnly style={{ ...inputS, background: "#f5f5f3", width: "50px" }} />
                  </label>
                  <label style={{ display: "flex", flexDirection: "column", gap: "3px", fontSize: "11px", color: col.mut }}>
                    Ora
                    <input type="time" value={formTime} onChange={function (e) { setFormTime(e.target.value); }} style={inputS} />
                  </label>
                  <label style={{ display: "flex", flexDirection: "column", gap: "3px", fontSize: "11px", color: col.mut }}>
                    PA Sist.
                    <input type="number" value={formBpS} onChange={function (e) { setFormBpS(e.target.value); }} placeholder="120" min="60" max="220" style={{ ...inputS, width: "60px" }} />
                  </label>
                  <label style={{ display: "flex", flexDirection: "column", gap: "3px", fontSize: "11px", color: col.mut }}>
                    PA Diast.
                    <input type="number" value={formBpD} onChange={function (e) { setFormBpD(e.target.value); }} placeholder="70" min="30" max="140" style={{ ...inputS, width: "60px" }} />
                  </label>
                  <label style={{ display: "flex", flexDirection: "column", gap: "3px", fontSize: "11px", color: col.mut }}>
                    Alcol
                    <select value={formAlcohol} onChange={function (e) { setFormAlcohol(e.target.value); }} style={{ ...inputS, minWidth: "100px" }}>
                      <option value="">—</option>
                      <option value="No">No</option>
                      <option value="No (dieta)">No (dieta)</option>
                      <option value="Sì">Sì</option>
                    </select>
                  </label>
                  <label style={{ display: "flex", flexDirection: "column", gap: "3px", fontSize: "11px", color: col.mut, flex: 1, minWidth: "120px" }}>
                    Contesto
                    <input type="text" value={formContext} onChange={function (e) { setFormContext(e.target.value); }} placeholder="es. Lavorando, Al risveglio..." style={inputS} />
                  </label>
                </div>
                <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <button type="submit" style={{ padding: "8px 20px", fontSize: "12px", fontWeight: "600", color: "#fff", background: col.grn, border: "none", borderRadius: "6px", cursor: "pointer", fontFamily: "inherit" }}>
                    Aggiungi
                  </button>
                  {extraEpisodes.length > 0 && (
                    <button type="button" onClick={handleClearExtra} style={{ padding: "8px 16px", fontSize: "11px", fontWeight: "600", color: col.acc, background: col.accL, border: "1px solid " + col.acc + "40", borderRadius: "6px", cursor: "pointer", fontFamily: "inherit" }}>
                      Cancella aggiunti ({extraEpisodes.length})
                    </button>
                  )}
                  {extraEpisodes.length > 0 && (
                    <span style={{ fontSize: "10px", color: col.grn, fontWeight: "600" }}>{extraEpisodes.length} episodi aggiunti manualmente</span>
                  )}
                </div>
              </form>
            </div>

            {/* Episode table */}
            <div style={{ ...cardS, padding: 0, overflow: "hidden" }}>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px" }}>
                  <thead>
                    <tr style={{ background: "#f2f1ee" }}>
                      {["#", "Data", "Gi.", "Ora", "PA", "Alcol", "Contesto"].map(function (h) {
                        return <th key={h} style={{ padding: "10px 8px", textAlign: "center", fontWeight: "600", color: col.mut, fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.5px", borderBottom: "1px solid " + col.bdr }}>{h}</th>;
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {ep.map(function (e, i) {
                      var isH = e.src === "H";
                      var isDiet = e.date === DIET;
                      var isSC = e.wd === "Sab" && satClusters.some(function (scl) { return scl.indexOf(e.date) >= 0; });
                      var isExtra = extraEpisodes.some(function (ex) { return ex.date === e.date && ex.time === e.time; });
                      var bg = isDiet ? col.grnL : isExtra ? "#e8f2eb" : isH ? (i % 2 === 0 ? "#fafaf8" : "#fff") : (i % 2 === 0 ? "#fff" : "#fafaf8");
                      var bl = isDiet ? "3px solid " + col.grn : isSC ? "3px solid " + col.acc : isH ? "3px solid " + col.bdr : "3px solid transparent";
                      var bpVal = pBP(e.bp);
                      return (
                        <tr key={e.id + "-" + e.date} style={{ background: bg, borderLeft: bl, opacity: isH ? 0.7 : 1 }}>
                          <td style={{ padding: "7px 6px", color: col.mut, fontSize: "10px", textAlign: "center" }}>{e.id}{isExtra ? " *" : ""}</td>
                          <td style={{ padding: "7px 6px", fontWeight: "500", whiteSpace: "nowrap", textAlign: "center" }}>{fmtD(e.date)}</td>
                          <td style={{ padding: "7px 6px", textAlign: "center", color: e.wd === "Sab" ? col.acc : e.wd === "Lun" ? col.amb : col.mut, fontWeight: (e.wd === "Sab" || e.wd === "Lun") ? "600" : "400" }}>{e.wd}</td>
                          <td style={{ padding: "7px 6px", textAlign: "center" }}>{e.time || "—"}</td>
                          <td style={{ padding: "7px 6px", textAlign: "center" }}>
                            {e.bp
                              ? <span style={{ background: bpVal && bpVal.s >= 140 ? col.accL : col.bluL, color: bpVal && bpVal.s >= 140 ? col.acc : col.blu, padding: "1px 5px", borderRadius: "3px", fontSize: "11px", fontWeight: "600" }}>{e.bp}</span>
                              : "—"}
                          </td>
                          <td style={{ padding: "7px 6px", fontSize: "11px", textAlign: "center", color: isH ? col.mut : (e.alcohol && (e.alcohol === "No" || e.alcohol.indexOf("dieta") >= 0)) ? col.grn : col.amb }}>{e.alcohol || "—"}</td>
                          <td style={{ padding: "7px 6px", fontSize: "11px", color: col.mut, textAlign: "left" }}>{e.context || "—"}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* 9. PESO/SONNO (Features 3 & 4) */}
        {tab === "peso_sonno" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

            {/* Weight section */}
            <div style={cardS}>
              <h3 style={{ fontSize: "14px", fontWeight: "600", margin: "0 0 12px" }}>Tracking Peso</h3>

              {/* Weight stats */}
              <div style={{ display: "flex", gap: "8px", marginBottom: "16px", flexWrap: "wrap" }}>
                <Stat label="Peso iniziale" value={weightData.length > 0 ? weightData[0].kg + " kg" : "—"} sub={weightData.length > 0 ? fmtD(weightData[0].date) : ""} color={col.amb} />
                <Stat label="Peso attuale" value={weightData.length > 0 ? weightData[weightData.length - 1].kg + " kg" : "—"} sub={weightData.length > 0 ? fmtD(weightData[weightData.length - 1].date) : ""} color={col.grn} />
                <Stat label="Variazione" value={weightData.length >= 2 ? (weightData[weightData.length - 1].kg - weightData[0].kg).toFixed(1) + " kg" : "—"} sub={weightData.length >= 2 ? ((weightData[weightData.length - 1].kg - weightData[0].kg) / weightData[0].kg * 100).toFixed(1) + "%" : ""} color={col.grn} />
              </div>

              {/* Weight line chart */}
              {weightData.length >= 2 && (function () {
                var wChartH = 180, wPadL = 50, wPadR = 20, wPadT = 20, wPadB = 45;
                var wInnerW = 560;
                var wKgs = weightData.map(function (w) { return w.kg; });
                var wMin = Math.floor(Math.min.apply(null, wKgs)) - 1;
                var wMax = Math.ceil(Math.max.apply(null, wKgs)) + 1;
                var wRange = wMax - wMin || 1;
                var wFirstDate = new Date(weightData[0].date);
                var wLastDate = new Date(weightData[weightData.length - 1].date);
                var wTotalMs = wLastDate - wFirstDate || 1;
                var totalW = wPadL + wInnerW + wPadR;
                var totalH = wPadT + wChartH + wPadB;
                return (
                  <div style={{ position: "relative", width: "100%", height: totalH + "px", overflow: "visible" }}>
                    <svg viewBox={"0 0 " + totalW + " " + totalH} style={{ width: "100%", height: "100%", overflow: "visible" }} preserveAspectRatio="xMidYMid meet">
                      {/* Horizontal grid */}
                      {[wMin, Math.round((wMin + wMax) / 2), wMax].map(function (v) {
                        var yy = wPadT + wChartH - ((v - wMin) / wRange) * wChartH;
                        return <g key={"wg" + v}>
                          <line x1={wPadL} x2={wPadL + wInnerW} y1={yy} y2={yy} stroke={col.bdr} strokeWidth="0.5" />
                          <text x={wPadL - 6} y={yy + 4} textAnchor="end" fontSize="10" fill={col.mut}>{v} kg</text>
                        </g>;
                      })}
                      {/* Area fill */}
                      <polygon fill={col.grnL} opacity="0.5" points={
                        weightData.map(function (w) {
                          var cx = wPadL + ((new Date(w.date) - wFirstDate) / wTotalMs) * wInnerW;
                          var cy = wPadT + wChartH - ((w.kg - wMin) / wRange) * wChartH;
                          return cx + "," + cy;
                        }).join(" ") + " " + (wPadL + wInnerW) + "," + (wPadT + wChartH) + " " + wPadL + "," + (wPadT + wChartH)
                      } />
                      {/* Line */}
                      <polyline fill="none" stroke={col.grn} strokeWidth="2.5" strokeLinejoin="round" points={weightData.map(function (w) {
                        var cx = wPadL + ((new Date(w.date) - wFirstDate) / wTotalMs) * wInnerW;
                        var cy = wPadT + wChartH - ((w.kg - wMin) / wRange) * wChartH;
                        return cx + "," + cy;
                      }).join(" ")} />
                      {/* Dots with labels */}
                      {weightData.map(function (w, i) {
                        var cx = wPadL + ((new Date(w.date) - wFirstDate) / wTotalMs) * wInnerW;
                        var cy = wPadT + wChartH - ((w.kg - wMin) / wRange) * wChartH;
                        return <g key={"wd" + i}>
                          <circle cx={cx} cy={cy} r="4" fill={col.grn} stroke="#fff" strokeWidth="1.5" />
                          {(i === 0 || i === weightData.length - 1 || i % 3 === 0) && <text x={cx} y={cy - 8} textAnchor="middle" fontSize="9" fill={col.grn} fontWeight="600">{w.kg}</text>}
                        </g>;
                      })}
                      {/* X-axis dates */}
                      {weightData.filter(function (_, i) { return i === 0 || i === weightData.length - 1 || i % Math.max(1, Math.floor(weightData.length / 5)) === 0; }).map(function (w, i) {
                        var cx = wPadL + ((new Date(w.date) - wFirstDate) / wTotalMs) * wInnerW;
                        return <text key={"wxl" + i} x={cx} y={wPadT + wChartH + 16} textAnchor="middle" fontSize="9" fill={col.mut}>{fmtD(w.date).slice(0, 5)}</text>;
                      })}
                    </svg>
                  </div>
                );
              })()}

              <Alert bg={col.grnL} border={col.grn} color={col.grn}>
                <strong>Trend positivo:</strong> Perdita di peso graduale dall'inizio della dieta. Monitoraggio settimanale raccomandato.
              </Alert>
            </div>

            {/* Sleep section */}
            <div style={cardS}>
              <h3 style={{ fontSize: "14px", fontWeight: "600", margin: "0 0 12px" }}>Tracking Sonno</h3>

              {/* Sleep stats */}
              <div style={{ display: "flex", gap: "8px", marginBottom: "16px", flexWrap: "wrap" }}>
                <Stat label="Durata media" value={avgSleep + "h"} sub={sleepData.length + " notti"} color={col.blu} />
                <Stat label="Notti buone" value={sleepQualityCounts.buona} sub={sleepData.length > 0 ? Math.round(sleepQualityCounts.buona / sleepData.length * 100) + "%" : "0%"} color={col.grn} />
                <Stat label="Notti scarse" value={sleepQualityCounts.scarsa} sub={sleepData.length > 0 ? Math.round(sleepQualityCounts.scarsa / sleepData.length * 100) + "%" : "0%"} color={col.acc} />
                <Stat label="Ep. post scarsa" value={epAfterPoorSleep.length} sub="correlazione" color={col.amb} />
              </div>

              {/* Sleep quality distribution bar chart */}
              <h4 style={{ fontSize: "12px", fontWeight: "600", margin: "0 0 8px", color: col.txt }}>Distribuzione qualità del sonno</h4>
              <Bar value={sleepQualityCounts.buona} max={sleepQMax} color={col.grn} label="Buona" text={sleepQualityCounts.buona + " notti (" + (sleepData.length > 0 ? Math.round(sleepQualityCounts.buona / sleepData.length * 100) : 0) + "%)"} />
              <Bar value={sleepQualityCounts.media} max={sleepQMax} color={col.amb} label="Media" text={sleepQualityCounts.media + " notti (" + (sleepData.length > 0 ? Math.round(sleepQualityCounts.media / sleepData.length * 100) : 0) + "%)"} />
              <Bar value={sleepQualityCounts.scarsa} max={sleepQMax} color={col.acc} label="Scarsa" text={sleepQualityCounts.scarsa + " notti (" + (sleepData.length > 0 ? Math.round(sleepQualityCounts.scarsa / sleepData.length * 100) : 0) + "%)"} />

              {/* Correlation note */}
              {epAfterPoorSleep.length > 0 && (
                <Alert bg={col.accL} border={col.acc} color={col.acc}>
                  <strong>Correlazione sonno-emicrania:</strong> {epAfterPoorSleep.length} episodi si sono verificati il giorno stesso o il giorno dopo una notte di sonno scarso.
                  {epAfterPoorSleep.length > 0 && (
                    <div style={{ marginTop: "6px", fontSize: "11px" }}>
                      Date: {epAfterPoorSleep.map(function (e) { return fmtD(e.date); }).join(", ")}
                    </div>
                  )}
                </Alert>
              )}

              {epAfterPoorSleep.length === 0 && (
                <Alert bg={col.bluL} border={col.blu} color={col.blu}>
                  <strong>Nota:</strong> Nessun episodio trovato nel giorno stesso o il giorno dopo una notte di sonno scarso nel periodo analizzato. Continuare il monitoraggio per raccogliere più dati.
                </Alert>
              )}
            </div>
          </div>
        )}

        {/* FOOTER */}
        <div style={{ marginTop: "22px", paddingTop: "10px", borderTop: "1px solid " + col.bdr, fontSize: "9px", color: col.mut, textAlign: "center" }}>
          Generato: 11/03/2026 · 62 episodi (giu/2024 — mar/2026) · Interpretazione di competenza del medico specialista
        </div>
      </div>
    </div>
  );
}
