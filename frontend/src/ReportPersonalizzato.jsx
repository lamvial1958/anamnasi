import { useState } from "react";

/* Report personalizzato: grafico episodi + registro eventi nel periodo scelto.
   Solo conteggi e dati registrati, nessuna interpretazione. */

var MONTHS = ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"];

var COLUMNS = [
  ["wd", "Giorno"],
  ["time", "Ora"],
  ["lato", "Lato"],
  ["intensita", "Intensità"],
  ["bp", "PA"],
  ["alcohol", "Alcol"],
  ["context", "Contesto"],
  ["notes", "Note"]
];

function pad(n) { return n < 10 ? "0" + n : "" + n; }
function toIso(d) { return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); }
function fromIso(s) { return new Date(s + "T12:00:00"); }
function addDays(iso, n) { var d = fromIso(iso); d.setDate(d.getDate() + n); return toIso(d); }

function bucketStart(iso, gran) {
  if (gran === "day") return iso;
  if (gran === "month") return iso.slice(0, 7) + "-01";
  var d = fromIso(iso);
  var back = (d.getDay() + 6) % 7; /* lunedì */
  return addDays(iso, -back);
}

function nextBucket(iso, gran) {
  if (gran === "day") return addDays(iso, 1);
  if (gran === "week") return addDays(iso, 7);
  var d = fromIso(iso);
  d.setDate(1);
  d.setMonth(d.getMonth() + 1);
  return toIso(d);
}

function bucketLabel(iso, gran) {
  var p = iso.split("-");
  if (gran === "month") return MONTHS[parseInt(p[1]) - 1] + " " + p[0].slice(2);
  return p[2] + "/" + p[1];
}

export default function ReportPersonalizzato({ episodes, col, cardS, inputS, fmtD }) {
  var minDate = episodes.length ? episodes[0].date : "";
  var maxDate = episodes.length ? episodes[episodes.length - 1].date : "";

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [gran, setGran] = useState("month");
  const [title, setTitle] = useState("Report episodi di emicrania");
  const [showChart, setShowChart] = useState(true);
  const [showTable, setShowTable] = useState(true);
  const [cols, setCols] = useState({ wd: true, time: true, lato: true, intensita: true, bp: true, alcohol: true, context: true, notes: false });

  var rFrom = from || minDate;
  var rTo = to || maxDate;

  function setPreset(days) {
    var today = toIso(new Date());
    setTo(today);
    setFrom(days ? addDays(today, -days) : "");
    if (!days) setTo("");
  }

  var list = episodes.filter(function (e) { return e.date >= rFrom && e.date <= rTo; });

  /* buckets (zero-filled) */
  var buckets = [];
  if (rFrom && rTo && rFrom <= rTo) {
    var cur = bucketStart(rFrom, gran);
    var guard = 0;
    while (cur <= rTo && guard < 5000) {
      buckets.push({ key: cur, count: 0 });
      cur = nextBucket(cur, gran);
      guard++;
    }
    list.forEach(function (e) {
      var k = bucketStart(e.date, gran);
      for (var i = 0; i < buckets.length; i++) { if (buckets[i].key === k) { buckets[i].count++; break; } }
    });
  }

  var maxCount = Math.max.apply(null, buckets.map(function (b) { return b.count; }).concat([1]));
  var W = 900, H = 280, padL = 34, padR = 10, padT = 18, padB = 34;
  var innerW = W - padL - padR, innerH = H - padT - padB;
  var slot = buckets.length ? innerW / buckets.length : innerW;
  var barW = Math.max(Math.min(slot * 0.7, 40), 1.5);
  var labelEvery = Math.max(1, Math.ceil(buckets.length / 14));
  var showCounts = buckets.length <= 40;
  var yTicks = [];
  for (var t = 0; t <= maxCount; t += Math.max(1, Math.ceil(maxCount / 5))) yTicks.push(t);

  var granName = { day: "giorno", week: "settimana", month: "mese" }[gran];

  function colVal(e, key) {
    if (key === "lato") return e.lato ? e.lato.charAt(0).toUpperCase() + e.lato.slice(1) : "—";
    if (key === "intensita") return e.intensita != null ? e.intensita + "/10" : "—";
    return e[key] || "—";
  }

  var activeCols = COLUMNS.filter(function (c) { return cols[c[0]]; });
  var chipS = function (a) {
    return { padding: "6px 12px", fontSize: "11px", fontWeight: a ? "600" : "400", color: a ? "#fff" : col.mut, background: a ? col.acc : "#fff", border: "1px solid " + (a ? col.acc : col.bdr), borderRadius: "6px", cursor: "pointer", fontFamily: "inherit" };
  };
  var thS = { textAlign: "left", padding: "6px 8px", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.5px", color: col.mut, borderBottom: "2px solid " + col.bdr };
  var tdS = { padding: "6px 8px", fontSize: "12px", borderBottom: "1px solid " + col.bdr, verticalAlign: "top" };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

      {/* CONTROLLI */}
      <div className="no-print" style={cardS}>
        <h3 style={{ fontSize: "14px", fontWeight: "600", margin: "0 0 14px" }}>Report personalizzato</h3>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
            <span style={{ fontSize: "11px", fontWeight: "600", minWidth: "70px" }}>Periodo:</span>
            <label style={{ fontSize: "11px", color: col.mut }}>Da:
              <input type="date" value={from} min={minDate} max={maxDate} onChange={function (e) { setFrom(e.target.value); }} style={{ ...inputS, marginLeft: "4px" }} />
            </label>
            <label style={{ fontSize: "11px", color: col.mut }}>A:
              <input type="date" value={to} min={minDate} onChange={function (e) { setTo(e.target.value); }} style={{ ...inputS, marginLeft: "4px" }} />
            </label>
          </div>

          <div style={{ display: "flex", gap: "6px", alignItems: "center", flexWrap: "wrap" }}>
            <span style={{ fontSize: "11px", fontWeight: "600", minWidth: "70px" }}>Rapido:</span>
            <button onClick={function () { setPreset(30); }} style={chipS(false)}>Ultimi 30 gg</button>
            <button onClick={function () { setPreset(90); }} style={chipS(false)}>Ultimi 3 mesi</button>
            <button onClick={function () { setPreset(180); }} style={chipS(false)}>Ultimi 6 mesi</button>
            <button onClick={function () { setPreset(365); }} style={chipS(false)}>Ultimo anno</button>
            <button onClick={function () { setPreset(0); }} style={chipS(false)}>Tutto</button>
          </div>

          <div style={{ display: "flex", gap: "6px", alignItems: "center", flexWrap: "wrap" }}>
            <span style={{ fontSize: "11px", fontWeight: "600", minWidth: "70px" }}>Grafico per:</span>
            <button onClick={function () { setGran("day"); }} style={chipS(gran === "day")}>Giorno</button>
            <button onClick={function () { setGran("week"); }} style={chipS(gran === "week")}>Settimana</button>
            <button onClick={function () { setGran("month"); }} style={chipS(gran === "month")}>Mese</button>
          </div>

          <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap" }}>
            <span style={{ fontSize: "11px", fontWeight: "600", minWidth: "70px" }}>Titolo:</span>
            <input type="text" value={title} onChange={function (e) { setTitle(e.target.value); }} style={{ ...inputS, flex: 1, minWidth: "200px" }} />
          </div>

          <div style={{ display: "flex", gap: "14px", alignItems: "center", flexWrap: "wrap" }}>
            <span style={{ fontSize: "11px", fontWeight: "600", minWidth: "70px" }}>Includi:</span>
            <label style={{ fontSize: "12px" }}><input type="checkbox" checked={showChart} onChange={function (e) { setShowChart(e.target.checked); }} /> Grafico</label>
            <label style={{ fontSize: "12px" }}><input type="checkbox" checked={showTable} onChange={function (e) { setShowTable(e.target.checked); }} /> Registro eventi</label>
          </div>

          {showTable && (
            <div style={{ display: "flex", gap: "14px", alignItems: "center", flexWrap: "wrap" }}>
              <span style={{ fontSize: "11px", fontWeight: "600", minWidth: "70px" }}>Colonne:</span>
              {COLUMNS.map(function (c) {
                return (
                  <label key={c[0]} style={{ fontSize: "12px" }}>
                    <input type="checkbox" checked={!!cols[c[0]]} onChange={function (e) { var n = Object.assign({}, cols); n[c[0]] = e.target.checked; setCols(n); }} /> {c[1]}
                  </label>
                );
              })}
            </div>
          )}

          <div>
            <button onClick={function () { window.print(); }} style={{ padding: "9px 18px", fontSize: "12px", fontWeight: "600", color: "#fff", background: col.acc, border: "none", borderRadius: "6px", cursor: "pointer", fontFamily: "inherit" }}>
              Stampa / Salva PDF
            </button>
          </div>
        </div>
      </div>

      {/* REPORT (anteprima e stampa) */}
      <div style={cardS}>
        <h2 style={{ fontFamily: "'DM Serif Display',Georgia,serif", fontSize: "22px", fontWeight: 400, margin: "0 0 4px" }}>{title}</h2>
        <div style={{ fontSize: "12px", color: col.mut, marginBottom: "16px" }}>
          Periodo: {rFrom ? fmtD(rFrom) : "—"} — {rTo ? fmtD(rTo) : "—"} · Episodi registrati: <strong style={{ color: col.txt }}>{list.length}</strong>
        </div>

        {showChart && (
          <div className="print-section" style={{ marginBottom: "22px" }}>
            <div style={{ fontSize: "12px", fontWeight: "600", marginBottom: "6px" }}>Episodi per {granName}</div>
            {buckets.length === 0 ? (
              <div style={{ fontSize: "12px", color: col.mut }}>Periodo non valido.</div>
            ) : (
              <svg viewBox={"0 0 " + W + " " + H} style={{ width: "100%", height: "auto", display: "block" }}>
                {yTicks.map(function (v) {
                  var y = padT + innerH - (v / maxCount) * innerH;
                  return (
                    <g key={"y" + v}>
                      <line x1={padL} x2={W - padR} y1={y} y2={y} stroke={col.bdr} strokeWidth="1" />
                      <text x={padL - 6} y={y + 3} textAnchor="end" fontSize="10" fill={col.mut}>{v}</text>
                    </g>
                  );
                })}
                {buckets.map(function (b, i) {
                  var cx = padL + slot * i + slot / 2;
                  var h = (b.count / maxCount) * innerH;
                  return (
                    <g key={b.key}>
                      {b.count > 0 && <rect x={cx - barW / 2} y={padT + innerH - h} width={barW} height={h} fill={col.acc} rx="2" />}
                      {showCounts && b.count > 0 && <text x={cx} y={padT + innerH - h - 4} textAnchor="middle" fontSize="10" fontWeight="600" fill={col.acc}>{b.count}</text>}
                      {i % labelEvery === 0 && <text x={cx} y={padT + innerH + 15} textAnchor="middle" fontSize="10" fill={col.mut}>{bucketLabel(b.key, gran)}</text>}
                    </g>
                  );
                })}
                <line x1={padL} x2={W - padR} y1={padT + innerH} y2={padT + innerH} stroke={col.mut} strokeWidth="1" />
              </svg>
            )}
            {gran === "week" && <div style={{ fontSize: "10px", color: col.mut, marginTop: "4px" }}>Ogni barra = settimana che inizia nella data indicata (lunedì).</div>}
          </div>
        )}

        {showTable && (
          <div>
            <div style={{ fontSize: "12px", fontWeight: "600", marginBottom: "6px" }}>Registro eventi</div>
            {list.length === 0 ? (
              <div style={{ fontSize: "12px", color: col.mut }}>Nessun episodio registrato nel periodo.</div>
            ) : (
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr>
                      <th style={thS}>#</th>
                      <th style={thS}>Data</th>
                      {activeCols.map(function (c) { return <th key={c[0]} style={thS}>{c[1]}</th>; })}
                    </tr>
                  </thead>
                  <tbody>
                    {list.slice().reverse().map(function (e, i) {
                      return (
                        <tr key={e.date + "-" + i} style={{ breakInside: "avoid" }}>
                          <td style={{ ...tdS, color: col.mut }}>{list.length - i}</td>
                          <td style={{ ...tdS, fontWeight: 600, whiteSpace: "nowrap" }}>{fmtD(e.date)}</td>
                          {activeCols.map(function (c) { return <td key={c[0]} style={tdS}>{colVal(e, c[0])}</td>; })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
            <div style={{ fontSize: "10px", color: col.mut, marginTop: "8px" }}>"—" = dato non registrato.</div>
          </div>
        )}
      </div>
    </div>
  );
}
