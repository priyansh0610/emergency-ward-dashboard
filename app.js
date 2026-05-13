
const A = { Red: "Red", Orange: "Orange", Yellow: "Yellow", Green: "Green", Blue: "Blue" };
const STAGES = ["Arrival", "Triage", "Assessment", "Treatment", "Decision to admit", "Boarding", "Discharged"];
const ZONES = ["Resus", "Majors", "Minors", "Assessment", "Waiting"];
const CLINICIANS = ["Dr Ahmed", "Dr Shah", "Dr Patel", "Dr Khan", "Dr Singh", "Dr Lewis", "Dr Roberts", "Unassigned"];
const ALERTS = ["Imaging pending", "Lab pending", "Awaiting bed", "Waiting for review", "Bed request overdue", "Senior review due", "Critical review", "Ambulance handover delay", "Isolation required"];
const acuityColor = { Red:"#dc2626", Orange:"#f97316", Yellow:"#eab308", Green:"#22c55e", Blue:"#3b82f6" };
const stageColor = { "Arrival":"#cbd5e1","Triage":"#93c5fd","Assessment":"#c4b5fd","Treatment":"#86efac","Decision to admit":"#fde68a","Boarding":"#fda4af","Discharged":"#cbd5e1" };
const stageClass = { "Arrival":"st-arrival","Triage":"st-triage","Assessment":"st-assessment","Treatment":"st-treatment","Decision to admit":"st-decision","Boarding":"st-boarding","Discharged":"st-discharged" };

let selectedId = null;
let visibleRows = [];

function pad(n){ return String(n).padStart(2, "0"); }
function makeTime(date, h, m){ return `${date}T${pad(h)}:${pad(m)}:00`; }

function buildPatients(date, count, offset){
  const ac = ["Red","Orange","Yellow","Green","Blue"];
  const modes = ["Ambulance","Walk in","GP referral"];
  const shifts = ["Day","Night"];
  const rows = [];
  for(let i=0;i<count;i++){
    const id = `P${offset+i}`;
    const acuity = i % 13 === 0 ? "Red" : ac[(i + offset) % ac.length];
    const zone = ZONES[(i * 2 + offset) % ZONES.length];
    const stage = STAGES[(i * 3 + offset) % STAGES.length];
    const arrivalHour = 5 + (i % 5);
    const arrivalMin = (i * 7) % 60;
    const arrivalAt = makeTime(date, arrivalHour, arrivalMin);
    const hasTriage = !["Arrival"].includes(stage);
    const hasClinician = !["Arrival","Triage"].includes(stage);
    const departure = stage === "Discharged";
    const triageAt = hasTriage ? makeTime(date, arrivalHour, Math.min(arrivalMin + 8 + (i % 6), 59)) : null;
    const clinicianAt = hasClinician ? makeTime(date, Math.min(arrivalHour + 1, 12), (arrivalMin + 22 + i) % 60) : null;
    const departureAt = departure ? makeTime(date, Math.min(arrivalHour + 2, 13), (arrivalMin + 45 + i) % 60) : null;
    const alerts = [];
    if(i % 4 === 0) alerts.push(ALERTS[i % ALERTS.length]);
    if(i % 9 === 0) alerts.push("Awaiting bed");
    if(acuity === "Red") alerts.push("Critical review");
    rows.push({
      id, acuity, zone, stage, arrivalAt, triageAt, clinicianAt, departureAt,
      arrivalMode:modes[i % modes.length], shift:shifts[i % shifts.length],
      clinician: CLINICIANS[i % CLINICIANS.length], alerts
    });
  }
  return rows;
}

const DB = {
  dates: {
    "2026-05-01": {
      patients: buildPatients("2026-05-01", 42, 2101),
      trend: [
        {hour:"04:00", arrivals:6, discharges:4, occupancy:58, breaches:2, handover:1},
        {hour:"05:00", arrivals:8, discharges:5, occupancy:64, breaches:2, handover:2},
        {hour:"06:00", arrivals:10, discharges:6, occupancy:71, breaches:3, handover:3},
        {hour:"07:00", arrivals:14, discharges:8, occupancy:78, breaches:4, handover:4},
        {hour:"08:00", arrivals:18, discharges:9, occupancy:86, breaches:5, handover:6},
        {hour:"09:00", arrivals:16, discharges:10, occupancy:82, breaches:5, handover:5}
      ]
    },
    "2026-05-02": {
      patients: buildPatients("2026-05-02", 36, 2201),
      trend: [
        {hour:"04:00", arrivals:4, discharges:5, occupancy:47, breaches:1, handover:1},
        {hour:"05:00", arrivals:7, discharges:6, occupancy:55, breaches:1, handover:2},
        {hour:"06:00", arrivals:9, discharges:7, occupancy:62, breaches:2, handover:2},
        {hour:"07:00", arrivals:12, discharges:8, occupancy:70, breaches:3, handover:3},
        {hour:"08:00", arrivals:13, discharges:9, occupancy:74, breaches:3, handover:4},
        {hour:"09:00", arrivals:10, discharges:10, occupancy:69, breaches:2, handover:3}
      ]
    }
  },
  staffing: [
    {role:"Nurses", required:18, present:15, agency:2},
    {role:"Doctors", required:10, present:8, agency:1},
    {role:"Healthcare assistants", required:6, present:5, agency:0},
    {role:"Porters", required:3, present:2, agency:0},
    {role:"Security", required:2, present:2, agency:0}
  ],
  heatmap: [
    {role:"Nurses","08:00":82,"09:00":78,"10:00":72,"11:00":70,"12:00":76},
    {role:"Doctors","08:00":75,"09:00":70,"10:00":68,"11:00":72,"12:00":80},
    {role:"HCAs","08:00":88,"09:00":78,"10:00":75,"11:00":68,"12:00":73},
    {role:"Porters","08:00":90,"09:00":84,"10:00":74,"11:00":70,"12:00":79}
  ],
  beds: [
    {area:"Resus bays", open:1, occupied:4, cleaning:0, blocked:1},
    {area:"Majors cubicles", open:3, occupied:18, cleaning:2, blocked:1},
    {area:"Minors spaces", open:6, occupied:10, cleaning:1, blocked:0},
    {area:"Assessment spaces", open:2, occupied:8, cleaning:1, blocked:0},
    {area:"Isolation rooms", open:1, occupied:2, cleaning:0, blocked:1}
  ],
  bedTurnaround: [
    {bed:"R1", minutes:20}, {bed:"R2", minutes:34}, {bed:"M1", minutes:26},
    {bed:"M4", minutes:32}, {bed:"N3", minutes:13}, {bed:"A2", minutes:28}, {bed:"I1", minutes:41}
  ],
  baseIncidents: [
    {patient:"P2104", type:"Ambulance handover delay", severity:"High", notes:"Handover over target window", time:"09:12"},
    {patient:"P2112", type:"Bed allocation delay", severity:"Medium", notes:"Awaiting inpatient bed decision", time:"09:20"},
    {patient:"P2118", type:"Imaging delay", severity:"Medium", notes:"CT queue longer than expected", time:"09:35"}
  ]
};

const featureGuide = [
  {tab:"Dashboard", features:["KPI cards","Risk queue preview","Pressure chart","Acuity mix","Situation interpretation"]},
  {tab:"Patient List", features:["Full patient list menu","Sorting","Search","Selected patient panel","CSV export"]},
  {tab:"Risk Queue", features:["Dedicated high risk queue","Risk score explanation","Risk distribution"]},
  {tab:"Flow Map", features:["Queue by stage","Patient cards","Flow chart","Congestion notes"]},
  {tab:"Incident Report", features:["Incident entry form","Incident log","Interactive checklist","Communications panel"]},
  {tab:"Staffing and Beds", features:["Roster gaps","Heatmap","Bed state table","Bed turnaround"]},
  {tab:"Inquiry Centre", features:["Preset inquiry questions","Filtered answers","Long waits","Boarding and imaging queries"]},
  {tab:"Feature Guide", features:["Tab explanations","Feedback response log","Prototype limitations"]}
];

const feedbackResponse = [
  ["Patient list menu requested","A dedicated Patient List tab has been added and the patient table is no longer hidden inside another section."],
  ["Risk queue not visible enough","A risk queue summary is visible on the main dashboard and a full Risk Queue tab has been added."],
  ["Increase patient numbers","The main demo dataset now includes 42 patient records on the first date and 36 on the second date."],
  ["More inquiry features requested","A new Inquiry Centre lets testers run preset questions against the filtered data."],
  ["Incident reporting should be expanded","A patient incident reporting form and incident log have been added."],
  ["Display features for each tab","A full Feature Guide tab explains what each screen does."]
];

let selectedPatient = null;
let currentRows = [];

function esc(s){ return String(s ?? "").replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m])); }
function val(id){ return document.getElementById(id).value; }
function currentDate(){ return val("dateFilter"); }
function data(){ return DB.dates[currentDate()]; }
function mBetween(a,b){ if(!a || !b) return null; return Math.max(0, Math.round((new Date(b)-new Date(a))/60000)); }
function mNow(a){ if(!a) return null; return Math.max(0, Math.round((new Date(currentDate()+"T09:30:00")-new Date(a))/60000)); }
function fmtM(m){ if(m === null || Number.isNaN(m)) return "—"; const h = Math.floor(m/60), n=m%60; return h ? `${h} h ${n} min` : `${n} min`; }
function avg(arr){ const n = arr.filter(x => typeof x === "number"); return n.length ? Math.round(n.reduce((a,b)=>a+b,0)/n.length) : 0; }
function uniq(a){ return [...new Set(a)]; }

function riskScore(p){
  const base = {Red:85, Orange:65, Yellow:42, Green:22, Blue:10}[p.acuity] || 0;
  const wait = Math.min(35, Math.round((mNow(p.arrivalAt) || 0) / 7));
  const alert = (p.alerts || []).length * 8;
  const boarding = p.stage === "Boarding" ? 12 : 0;
  return Math.min(100, base + wait + alert + boarding);
}
function riskClass(score){ return score >= 80 ? "risk-high" : score >= 55 ? "risk-medium" : "risk-low"; }
function severityClass(s){ return s === "High" ? "high" : s === "Medium" ? "medium" : "low"; }

function setup(){
  fill("dateFilter", Object.keys(DB.dates));
  fill("zoneFilter", ["All zones", ...ZONES]);
  fill("acuityFilter", ["All acuity", "Red", "Orange", "Yellow", "Green", "Blue"]);
  setupIncidentPatientSelect();
  setupEvents();
  renderAll();
}
function fill(id, items){
  const el = document.getElementById(id);
  el.innerHTML = items.map(x => `<option value="${esc(x)}">${esc(x)}</option>`).join("");
}
function setupIncidentPatientSelect(){
  const all = Object.values(DB.dates).flatMap(d => d.patients).map(p => p.id);
  fill("incidentPatient", uniq(all));
}
function setupEvents(){
  document.querySelectorAll(".tab").forEach(btn => btn.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(x => x.classList.remove("active"));
    document.querySelectorAll(".panel").forEach(x => x.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById("panel-" + btn.dataset.tab).classList.add("active");
    setTimeout(renderAll, 30);
  }));
  ["dateFilter","shiftFilter","zoneFilter","acuityFilter","viewFilter","searchInput","sortSelect"].forEach(id => {
    const el = document.getElementById(id);
    if(el) el.addEventListener(id === "searchInput" ? "input" : "change", renderAll);
  });
  document.getElementById("resetBtn").addEventListener("click", () => {
    document.getElementById("dateFilter").value = Object.keys(DB.dates)[0];
    document.getElementById("shiftFilter").value = "All";
    document.getElementById("zoneFilter").value = "All zones";
    document.getElementById("acuityFilter").value = "All acuity";
    document.getElementById("viewFilter").value = "All";
    document.getElementById("searchInput").value = "";
    selectedPatient = null;
    renderAll();
  });
  document.getElementById("exportBtn").addEventListener("click", exportCsv);
  document.getElementById("incidentForm").addEventListener("submit", addIncident);
  document.getElementById("clearIncidents").addEventListener("click", () => {
    localStorage.removeItem("ewFinalIncidents");
    renderIncident();
  });
  document.getElementById("runInquiry").addEventListener("click", renderInquiry);
  document.getElementById("inquiryType").addEventListener("change", renderInquiry);
  window.addEventListener("resize", () => setTimeout(renderAll, 80));
}

function getRows(){
  const zone = val("zoneFilter"), acuity = val("acuityFilter"), shift = val("shiftFilter"), view = val("viewFilter");
  const q = val("searchInput").trim().toLowerCase();
  let rows = data().patients.filter(p => {
    const search = !q || [p.id, p.acuity, p.zone, p.stage, p.clinician, p.arrivalMode, ...(p.alerts||[])].join(" ").toLowerCase().includes(q);
    return (zone === "All zones" || p.zone === zone) &&
      (acuity === "All acuity" || p.acuity === acuity) &&
      (shift === "All" || p.shift === shift) && search;
  });
  if(view === "Active") rows = rows.filter(p => p.stage !== "Discharged");
  if(view === "Completed") rows = rows.filter(p => p.stage === "Discharged");
  if(view === "Boarding") rows = rows.filter(p => p.stage === "Boarding");
  if(view === "HighRisk") rows = rows.filter(p => riskScore(p) >= 70);
  currentRows = rows;
  return rows;
}

function renderAll(){
  const rows = getRows();
  updateSummary(rows);
  renderKpis(rows);
  renderDashboard(rows);
  renderPatients(rows);
  renderRisk(rows);
  renderFlow(rows);
  renderIncident();
  renderStaffing();
  renderInquiry();
  renderGuide();
}

function updateSummary(rows){
  const active = rows.filter(p => p.stage !== "Discharged").length;
  const high = rows.filter(p => riskScore(p) >= 70).length;
  document.getElementById("heroActive").textContent = active;
  document.getElementById("heroRisk").textContent = high;
  const bits = [currentDate(), val("shiftFilter"), val("zoneFilter"), val("acuityFilter"), val("viewFilter")].filter(x => !["All","All zones","All acuity","All patients"].includes(x));
  if(val("searchInput").trim()) bits.push(`Search "${val("searchInput").trim()}"`);
  document.getElementById("filterSummary").textContent = `${bits.join(" • ") || "All filters"} • ${rows.length} records visible`;
}
function renderKpis(rows){
  const active = rows.filter(p => p.stage !== "Discharged");
  const completed = rows.filter(p => p.departureAt);
  const tat = avg(completed.map(p => mBetween(p.arrivalAt, p.departureAt)));
  const dtt = avg(rows.map(p => mBetween(p.arrivalAt, p.triageAt)));
  const dtc = avg(rows.map(p => mBetween(p.arrivalAt, p.clinicianAt)));
  const bed = avg(DB.bedTurnaround.map(b => b.minutes));
  const high = rows.filter(p => riskScore(p) >= 70).length;
  const incidents = getIncidents().length;
  const items = [
    ["Total visible patients", rows.length, "Expanded dataset addresses feedback about needing more patients."],
    ["Current census", `${active.length} / 42`, "Active patients excluding completed journeys."],
    ["High risk queue", high, "Dedicated risk count now visible from the top of the dashboard."],
    ["Average patient turnaround", fmtM(tat), "Departure time − arrival time."],
    ["Door to triage", fmtM(dtt), "Triage time − arrival time."],
    ["Incident reports", incidents, "Demo incident reporting system entries."]
  ];
  document.getElementById("kpiGrid").innerHTML = items.map(i => `<article class="card kpi"><p class="kpi-label">${esc(i[0])}</p><p class="kpi-value">${esc(i[1])}</p><p class="kpi-sub">${esc(i[2])}</p></article>`).join("");
}
function renderDashboard(rows){
  lineChart("pressureChart", data().trend, [
    {key:"arrivals", label:"Arrivals", color:"#2563eb"},
    {key:"discharges", label:"Discharges", color:"#16a34a"},
    {key:"occupancy", label:"Occupancy %", color:"#7c3aed"},
    {key:"handover", label:"Handover delay", color:"#f97316"}
  ], 100);
  legend("pressureLegend", [["Arrivals","#2563eb"],["Discharges","#16a34a"],["Occupancy %","#7c3aed"],["Handover delay","#f97316"]]);
  const active = rows.filter(p => p.stage !== "Discharged");
  barList("stageBars", STAGES.slice(0,6).map(s => ({label:s, value:active.filter(p => p.stage === s).length, color:stageColor[s]})));
  const acuity = ["Red","Orange","Yellow","Green","Blue"].map(a => {
    const v = active.filter(p => p.acuity === a).length;
    const pct = Math.round((v / Math.max(1, active.length)) * 100);
    return {label:a, value:v, color:acuityColor[a], display:`${v} (${pct}%)`};
  });
  barList("acuityBars", acuity);
  renderRiskPreview(rows);
  document.getElementById("alertList").innerHTML = [
    ["High", "Ambulance handover delay rising", "Flow lead"],
    ["High", "1 resus bay blocked", "Nurse in charge"],
    ["Medium", "CT queue above expected level", "Site manager"],
    ["Medium", "Bed requests pending", "Bed coordinator"]
  ].map(a => `<div class="info-card"><div class="info-top"><strong>${esc(a[1])}</strong><span class="status ${severityClass(a[0])}">${a[0]}</span></div><div class="info-sub">Owner: ${esc(a[2])}</div></div>`).join("");
  const high = rows.filter(p => riskScore(p) >= 70).length;
  const boarding = rows.filter(p => p.stage === "Boarding").length;
  const unassigned = rows.filter(p => p.clinician === "Unassigned").length;
  const incidents = getIncidents().length;
  document.getElementById("insights").innerHTML = [
    ["High risk patients", high, high ? "Use the Risk Queue tab to identify who needs attention first." : "No high risk patients under the current filters."],
    ["Boarding pressure", boarding, boarding ? "Boarding may indicate exit block and should be discussed with bed management." : "No boarding queue visible under current filters."],
    ["Unassigned patients", unassigned, unassigned ? "Unassigned patients need review because ownership is unclear." : "All visible patients have an assigned clinician."],
    ["Incident reporting", incidents, "Incident reporting is now visible and can be updated during testing."]
  ].map(i => `<div class="insight summary-box"><div class="label">${esc(i[0])}</div><div class="value">${esc(i[1])}</div><div class="text">${esc(i[2])}</div></div>`).join("");
}
function renderRiskPreview(rows){
  const risk = rows.filter(p => p.stage !== "Discharged").sort((a,b)=>riskScore(b)-riskScore(a)).slice(0,6);
  document.getElementById("riskQueuePreview").innerHTML = risk.map(p => riskCard(p)).join("") || `<div class="info-card">No risk queue entries under current filters.</div>`;
}
function riskCard(p){
  const score = riskScore(p);
  return `<div class="info-card">
    <div class="info-top"><strong>${esc(p.id)} · ${esc(p.stage)}</strong><span class="risk-score ${riskClass(score)}">${score}</span></div>
    <div class="info-sub">${esc(p.acuity)} · ${esc(p.zone)} · ${fmtM(mNow(p.arrivalAt))} in department<br>${(p.alerts||[]).join(", ") || "No active alert"}</div>
  </div>`;
}
function renderPatients(rows){
  let sorted = [...rows];
  const sort = val("sortSelect") || "riskDesc";
  if(sort === "riskDesc") sorted.sort((a,b)=>riskScore(b)-riskScore(a));
  if(sort === "waitDesc") sorted.sort((a,b)=>(mNow(b.arrivalAt)||0)-(mNow(a.arrivalAt)||0));
  if(sort === "acuity"){ const order={Red:1,Orange:2,Yellow:3,Green:4,Blue:5}; sorted.sort((a,b)=>order[a.acuity]-order[b.acuity]); }
  if(sort === "stage") sorted.sort((a,b)=>a.stage.localeCompare(b.stage));
  if(sort === "id") sorted.sort((a,b)=>a.id.localeCompare(b.id));
  if(!selectedPatient || !rows.find(p => p.id === selectedPatient)) selectedPatient = sorted[0]?.id || null;
  document.querySelector("#patientTable tbody").innerHTML = sorted.map(p => {
    const score = riskScore(p);
    return `<tr data-id="${p.id}" class="${selectedPatient === p.id ? "selected-row" : ""}">
      <td><strong>${esc(p.id)}</strong></td>
      <td><span class="risk-score ${riskClass(score)}">${score}</span></td>
      <td><span class="badge a-${p.acuity.toLowerCase()}">${esc(p.acuity)}</span></td>
      <td>${esc(p.zone)}</td>
      <td><span class="stage ${stageClass[p.stage]}">${esc(p.stage)}</span></td>
      <td>${fmtM(mNow(p.arrivalAt))}</td>
      <td>${fmtM(mBetween(p.arrivalAt,p.triageAt))}</td>
      <td>${fmtM(mBetween(p.arrivalAt,p.clinicianAt))}</td>
      <td>${esc(p.clinician)}</td>
      <td>${(p.alerts||[]).length ? p.alerts.map(a=>`<span class="badge neutral">${esc(a)}</span>`).join(" ") : "—"}</td>
    </tr>`;
  }).join("");
  document.querySelectorAll("#patientTable tbody tr").forEach(tr => tr.addEventListener("click", () => {
    selectedPatient = tr.dataset.id;
    renderPatients(getRows());
  }));
  renderSelected(rows);
}
function renderSelected(rows){
  const p = rows.find(x => x.id === selectedPatient);
  const host = document.getElementById("selectedPatient");
  if(!p){ host.innerHTML = `<div class="summary-box"><div class="label">No patient selected</div><div class="value">No visible row found.</div></div>`; return; }
  const items = [
    ["Patient ID", p.id], ["Risk score", riskScore(p)], ["Acuity", p.acuity], ["Zone", p.zone],
    ["Stage", p.stage], ["Time in department", fmtM(mNow(p.arrivalAt))], ["Door to triage", fmtM(mBetween(p.arrivalAt,p.triageAt))],
    ["Door to clinician", fmtM(mBetween(p.arrivalAt,p.clinicianAt))], ["Clinician", p.clinician], ["Alerts", (p.alerts||[]).join(", ") || "None"]
  ];
  host.innerHTML = items.map(i => `<div class="summary-box"><div class="label">${esc(i[0])}</div><div class="value">${esc(i[1])}</div></div>`).join("");
}
function renderRisk(rows){
  const active = rows.filter(p => p.stage !== "Discharged").sort((a,b)=>riskScore(b)-riskScore(a));
  document.getElementById("riskQueueFull").innerHTML = active.slice(0,12).map(p => riskCard(p)).join("") || `<div class="info-card">No high risk records visible.</div>`;
  const dist = [
    {label:"High", value:active.filter(p=>riskScore(p)>=80).length, color:"#dc2626"},
    {label:"Medium", value:active.filter(p=>riskScore(p)>=55 && riskScore(p)<80).length, color:"#eab308"},
    {label:"Low", value:active.filter(p=>riskScore(p)<55).length, color:"#16a34a"}
  ];
  barList("riskDistribution", dist);
}
function renderFlow(rows){
  const active = rows.filter(p => p.stage !== "Discharged");
  document.getElementById("queueMap").innerHTML = STAGES.slice(0,6).map(s => {
    const subset = active.filter(p => p.stage === s).slice(0,10);
    return `<div class="queue-lane"><div class="queue-title">${esc(s)} (${active.filter(p=>p.stage===s).length})</div><div class="queue-patients">${subset.length ? subset.map(p => `<div class="patient-chip"><strong>${p.id}</strong><span class="badge a-${p.acuity.toLowerCase()}">${p.acuity}</span><br>${fmtM(mNow(p.arrivalAt))}</div>`).join("") : "<div class='patient-chip'>No patients</div>"}</div></div>`;
  }).join("");
  lineChart("flowAnalysisChart", data().trend, [
    {key:"arrivals", label:"Arrivals", color:"#2563eb"},
    {key:"discharges", label:"Discharges", color:"#16a34a"},
    {key:"breaches", label:"Breaches", color:"#dc2626"}
  ], 25);
  legend("flowLegend", [["Arrivals","#2563eb"],["Discharges","#16a34a"],["Breaches","#dc2626"]]);
  document.getElementById("flowNotes").innerHTML = [
    ["Largest queue", largestStage(active), "This identifies the pathway stage with the greatest visible patient load."],
    ["Flow balance", flowBalance(), "Compares recent arrivals and discharges in the simulated trend."]
  ].map(i => `<div class="summary-box"><div class="label">${i[0]}</div><div class="value">${i[1]}</div><div class="text">${i[2]}</div></div>`).join("");
}
function largestStage(active){
  const counts = STAGES.slice(0,6).map(s => [s, active.filter(p=>p.stage===s).length]).sort((a,b)=>b[1]-a[1]);
  return `${counts[0][0]} (${counts[0][1]})`;
}
function flowBalance(){
  const t = data().trend, last = t[t.length-1];
  return last.arrivals > last.discharges ? "Arrivals exceed discharges" : "Discharges match or exceed arrivals";
}
function getIncidents(){
  const saved = JSON.parse(localStorage.getItem("ewFinalIncidents") || "[]");
  return [...DB.baseIncidents, ...saved];
}
function addIncident(e){
  e.preventDefault();
  const item = { patient: val("incidentPatient"), type: val("incidentType"), severity: val("incidentSeverity"), notes: document.getElementById("incidentNotes").value || "No notes entered", time: new Date().toLocaleTimeString([], {hour:"2-digit", minute:"2-digit"}) };
  const saved = JSON.parse(localStorage.getItem("ewFinalIncidents") || "[]");
  saved.push(item);
  localStorage.setItem("ewFinalIncidents", JSON.stringify(saved));
  document.getElementById("incidentNotes").value = "";
  renderAll();
}
function renderIncident(){
  const incidents = getIncidents();
  document.getElementById("incidentLog").innerHTML = incidents.map(i => `<div class="info-card"><div class="info-top"><strong>${esc(i.patient)} · ${esc(i.type)}</strong><span class="status ${severityClass(i.severity)}">${esc(i.severity)}</span></div><div class="info-sub">${esc(i.notes)}<br>Time: ${esc(i.time)}</div></div>`).join("");
  document.getElementById("checklist").innerHTML = [
    "Review high risk queue",
    "Confirm resus capacity",
    "Escalate boarding delays",
    "Check ambulance handover pressure",
    "Confirm staffing gaps by role",
    "Update site team and bed manager"
  ].map(x => `<div class="check-item"><div class="check-square"></div><div class="check-text">${esc(x)}</div></div>`).join("");
  document.querySelectorAll(".check-item").forEach(item => item.addEventListener("click", () => item.classList.toggle("done")));
  document.getElementById("commLog").innerHTML = [
    ["Site manager","High risk queue and occupancy reviewed","09:15"],
    ["Bed manager","Boarding patients flagged for huddle","09:20"],
    ["Ambulance lead","Handover delay trend shared","09:25"]
  ].map(c => `<div class="info-card"><strong>${esc(c[0])}</strong><div class="info-sub">${esc(c[1])}<br>Time: ${esc(c[2])}</div></div>`).join("");
}
function renderStaffing(){
  document.getElementById("staffingCards").innerHTML = DB.staffing.map(s => {
    const gap = Math.max(0, s.required - s.present);
    const cov = Math.round((s.present / s.required) * 100);
    return `<div class="info-card"><div class="info-top"><strong>${esc(s.role)}</strong><span class="status ${gap>1?"high":gap?"medium":"low"}">Gap ${gap}</span></div><div class="info-sub">Required ${s.required} · Present ${s.present} · Agency ${s.agency}</div><div class="bar-track" style="margin-top:10px"><div class="bar-fill" style="width:${cov}%;background:#2563eb"></div></div></div>`;
  }).join("");
  const hours = ["08:00","09:00","10:00","11:00","12:00"];
  document.getElementById("coverageHeatmap").innerHTML = `<div></div>${hours.map(h=>`<div class="heat-head">${h}</div>`).join("")}` + DB.heatmap.map(r => `<div class="heat-head">${r.role}</div>${hours.map(h => `<div class="heat-cell ${r[h]>=80?"good":r[h]>=70?"warn":"bad"}">${r[h]}%</div>`).join("")}`).join("");
  document.querySelector("#bedTable tbody").innerHTML = DB.beds.map(b => `<tr><td>${esc(b.area)}</td><td>${b.open}</td><td>${b.occupied}</td><td>${b.cleaning}</td><td>${b.blocked}</td></tr>`).join("");
  barList("bedTurnaround", DB.bedTurnaround.map(b => ({label:b.bed, value:b.minutes, display:`${b.minutes} min`, color:b.minutes>35?"#dc2626":"#0f766e"})), 45);
  document.getElementById("staffRisks").innerHTML = [
    ["High","Nursing gap in majors", "2 nurses below planned cover"],
    ["Medium","Porter cover pressure", "Potential imaging transfer delay"],
    ["Medium","Break overlap risk", "Doctor and HCA breaks overlap at 11:30"]
  ].map(r => `<div class="info-card"><div class="info-top"><strong>${esc(r[1])}</strong><span class="status ${severityClass(r[0])}">${r[0]}</span></div><div class="info-sub">${esc(r[2])}</div></div>`).join("");
}
function renderInquiry(){
  const type = val("inquiryType");
  let rows = getRows();
  if(type === "longWait") rows = rows.filter(p => p.stage !== "Discharged").sort((a,b)=>(mNow(b.arrivalAt)||0)-(mNow(a.arrivalAt)||0)).slice(0,8);
  if(type === "highRisk") rows = rows.filter(p => riskScore(p) >= 70).sort((a,b)=>riskScore(b)-riskScore(a)).slice(0,8);
  if(type === "boarding") rows = rows.filter(p => p.stage === "Boarding").slice(0,8);
  if(type === "imaging") rows = rows.filter(p => (p.alerts||[]).join(" ").toLowerCase().includes("imaging")).slice(0,8);
  if(type === "unassigned") rows = rows.filter(p => p.clinician === "Unassigned").slice(0,8);
  document.getElementById("inquiryResults").innerHTML = rows.length ? rows.map(p => riskCard(p)).join("") : `<div class="info-card">No matching records under current filters.</div>`;
}
function renderGuide(){
  document.getElementById("featureGuide").innerHTML = featureGuide.map(f => `<div class="feature-card"><h4>${esc(f.tab)}</h4><ul>${f.features.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></div>`).join("");
  document.getElementById("feedbackResponse").innerHTML = feedbackResponse.map(f => `<div class="info-card"><strong>${esc(f[0])}</strong><div class="info-sub">${esc(f[1])}</div></div>`).join("");
}
function barList(host, items, maxOverride){
  const max = maxOverride || Math.max(1, ...items.map(i => i.value || 0));
  document.getElementById(host).innerHTML = items.map(i => `<div class="bar-row"><div class="bar-label">${esc(i.label)}</div><div class="bar-track"><div class="bar-fill" style="width:${Math.min(100, ((i.value||0)/max)*100)}%;background:${i.color}"></div></div><div class="bar-value">${esc(i.display ?? i.value)}</div></div>`).join("");
}
function lineChart(hostId, rows, series, maxVal){
  const host = document.getElementById(hostId);
  const w = host.clientWidth || 520, h = host.clientHeight || 280, pad = 30;
  const innerW = w - pad*2, innerH = h - pad*2;
  const max = maxVal || Math.max(1, ...rows.flatMap(r => series.map(s => r[s.key])));
  const x = i => pad + (rows.length === 1 ? innerW/2 : innerW * i / (rows.length-1));
  const y = v => pad + innerH - (v/max) * innerH;
  const grid = [0.25,0.5,0.75,1].map(g => `<line x1="${pad}" y1="${pad+innerH-innerH*g}" x2="${w-pad}" y2="${pad+innerH-innerH*g}" stroke="#e2e8f0"/><text x="${pad-8}" y="${pad+innerH-innerH*g+4}" font-size="10" text-anchor="end" fill="#64748b">${Math.round(max*g)}</text>`).join("");
  const labels = rows.map((r,i) => `<text x="${x(i)}" y="${h-8}" font-size="10" text-anchor="middle" fill="#64748b">${r.hour}</text>`).join("");
  const lines = series.map(s => {
    const pts = rows.map((r,i) => `${x(i)},${y(r[s.key])}`).join(" ");
    const dots = rows.map((r,i) => `<circle cx="${x(i)}" cy="${y(r[s.key])}" r="3.5" fill="${s.color}"/>`).join("");
    return `<polyline fill="none" stroke="${s.color}" stroke-width="3" points="${pts}" stroke-linecap="round" stroke-linejoin="round"/>${dots}`;
  }).join("");
  host.innerHTML = `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none"><rect x="0" y="0" width="${w}" height="${h}" rx="18" fill="#fbfdff"/>${grid}<line x1="${pad}" y1="${pad}" x2="${pad}" y2="${h-pad}" stroke="#cbd5e1"/><line x1="${pad}" y1="${h-pad}" x2="${w-pad}" y2="${h-pad}" stroke="#cbd5e1"/>${lines}${labels}</svg>`;
}
function legend(host, items){
  document.getElementById(host).innerHTML = items.map(i => `<span class="legend-item"><span class="legend-dot" style="background:${i[1]}"></span>${esc(i[0])}</span>`).join("");
}
function exportCsv(){
  const headers = ["Patient","Risk","Acuity","Zone","Stage","Arrival mode","Time in dept","Door to triage","Door to clinician","Clinician","Alerts"];
  const lines = [headers.join(",")];
  currentRows.forEach(p => {
    const row = [p.id,riskScore(p),p.acuity,p.zone,p.stage,p.arrivalMode,fmtM(mNow(p.arrivalAt)),fmtM(mBetween(p.arrivalAt,p.triageAt)),fmtM(mBetween(p.arrivalAt,p.clinicianAt)),p.clinician,(p.alerts||[]).join("; ")];
    lines.push(row.map(v => `"${String(v).replace(/"/g,'""')}"`).join(","));
  });
  const blob = new Blob([lines.join("\n")], {type:"text/csv"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "emergency_ward_final_dashboard_patient_list.csv";
  a.click();
  URL.revokeObjectURL(url);
}
document.addEventListener("DOMContentLoaded", setup);
