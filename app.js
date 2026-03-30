
const demoData = {
  patients: [
    { id: "P1042", acuity: "Orange", zone: "Majors", arrivalMode: "Ambulance", stage: "Treatment", arrivalAt: "2026-03-18T07:45:00", triageAt: "2026-03-18T07:58:00", clinicianAt: "2026-03-18T08:22:00", dispositionAt: null, departureAt: null, clinician: "Dr Ahmed", alerts: ["Imaging pending"] },
    { id: "P1043", acuity: "Yellow", zone: "Assessment", arrivalMode: "Walk in", stage: "Assessment", arrivalAt: "2026-03-18T08:02:00", triageAt: "2026-03-18T08:16:00", clinicianAt: null, dispositionAt: null, departureAt: null, clinician: "Dr Shah", alerts: ["Waiting for review"] },
    { id: "P1044", acuity: "Green", zone: "Minors", arrivalMode: "Walk in", stage: "Triage", arrivalAt: "2026-03-18T08:19:00", triageAt: null, clinicianAt: null, dispositionAt: null, departureAt: null, clinician: "Dr Patel", alerts: [] },
    { id: "P1045", acuity: "Red", zone: "Resus", arrivalMode: "Ambulance", stage: "Treatment", arrivalAt: "2026-03-18T08:28:00", triageAt: "2026-03-18T08:29:00", clinicianAt: "2026-03-18T08:30:00", dispositionAt: null, departureAt: null, clinician: "Dr Khan", alerts: ["Critical care review"] },
    { id: "P1046", acuity: "Yellow", zone: "Waiting", arrivalMode: "GP referral", stage: "Arrival", arrivalAt: "2026-03-18T08:40:00", triageAt: null, clinicianAt: null, dispositionAt: null, departureAt: null, clinician: "Unassigned", alerts: ["Pending triage"] },
    { id: "P1047", acuity: "Orange", zone: "Majors", arrivalMode: "Ambulance", stage: "Decision to admit", arrivalAt: "2026-03-18T06:55:00", triageAt: "2026-03-18T07:03:00", clinicianAt: "2026-03-18T07:22:00", dispositionAt: "2026-03-18T09:18:00", departureAt: null, clinician: "Dr Ahmed", alerts: ["Awaiting bed"] },
    { id: "P1048", acuity: "Green", zone: "Minors", arrivalMode: "Walk in", stage: "Discharged", arrivalAt: "2026-03-18T06:40:00", triageAt: "2026-03-18T06:52:00", clinicianAt: "2026-03-18T07:12:00", dispositionAt: null, departureAt: "2026-03-18T08:04:00", clinician: "Dr Patel", alerts: [] },
    { id: "P1049", acuity: "Yellow", zone: "Minors", arrivalMode: "Walk in", stage: "Discharged", arrivalAt: "2026-03-18T05:58:00", triageAt: "2026-03-18T06:10:00", clinicianAt: "2026-03-18T06:38:00", dispositionAt: null, departureAt: "2026-03-18T08:16:00", clinician: "Dr Singh", alerts: [] },
    { id: "P1050", acuity: "Orange", zone: "Majors", arrivalMode: "Ambulance", stage: "Boarding", arrivalAt: "2026-03-18T05:35:00", triageAt: "2026-03-18T05:42:00", clinicianAt: "2026-03-18T05:59:00", dispositionAt: "2026-03-18T08:05:00", departureAt: null, clinician: "Dr Khan", alerts: ["Bed request overdue"] },
    { id: "P1051", acuity: "Blue", zone: "Waiting", arrivalMode: "Walk in", stage: "Arrival", arrivalAt: "2026-03-18T09:02:00", triageAt: null, clinicianAt: null, dispositionAt: null, departureAt: null, clinician: "Unassigned", alerts: [] },
    { id: "P1052", acuity: "Yellow", zone: "Assessment", arrivalMode: "GP referral", stage: "Assessment", arrivalAt: "2026-03-18T07:30:00", triageAt: "2026-03-18T07:44:00", clinicianAt: "2026-03-18T08:10:00", dispositionAt: null, departureAt: null, clinician: "Dr Shah", alerts: [] },
    { id: "P1053", acuity: "Green", zone: "Minors", arrivalMode: "Walk in", stage: "Treatment", arrivalAt: "2026-03-18T08:12:00", triageAt: "2026-03-18T08:22:00", clinicianAt: "2026-03-18T08:44:00", dispositionAt: null, departureAt: null, clinician: "Dr Singh", alerts: ["Lab pending"] },
    { id: "P1054", acuity: "Orange", zone: "Majors", arrivalMode: "Ambulance", stage: "Assessment", arrivalAt: "2026-03-18T08:48:00", triageAt: "2026-03-18T08:52:00", clinicianAt: null, dispositionAt: null, departureAt: null, clinician: "Dr Ahmed", alerts: ["Waiting for clinician"] },
    { id: "P1055", acuity: "Green", zone: "Minors", arrivalMode: "Walk in", stage: "Treatment", arrivalAt: "2026-03-18T08:50:00", triageAt: "2026-03-18T08:58:00", clinicianAt: "2026-03-18T09:05:00", dispositionAt: null, departureAt: null, clinician: "Dr Patel", alerts: [] }
  ],
  staffing: [
    { role: "Nurses", required: 14, rostered: 12, present: 12, agency: 2 },
    { role: "Doctors", required: 8, rostered: 6, present: 6, agency: 1 },
    { role: "Healthcare assistants", required: 4, rostered: 4, present: 3, agency: 0 },
    { role: "Porters", required: 2, rostered: 2, present: 2, agency: 0 },
    { role: "Security", required: 2, rostered: 2, present: 1, agency: 0 }
  ],
  breakPlanner: [
    { time: "11:00", role: "RN", zone: "Majors" },
    { time: "11:15", role: "RN", zone: "Minors" },
    { time: "11:30", role: "Doctor", zone: "Assessment" },
    { time: "11:45", role: "HCA", zone: "Triage" }
  ],
  bedStates: [
    { area: "Resus bays", open: 1, occupied: 3, cleaning: 0, blocked: 1 },
    { area: "Majors cubicles", open: 2, occupied: 14, cleaning: 2, blocked: 0 },
    { area: "Minors spaces", open: 5, occupied: 7, cleaning: 1, blocked: 0 },
    { area: "Isolation rooms", open: 1, occupied: 1, cleaning: 0, blocked: 0 }
  ],
  bedTurnarounds: [
    { bed: "R1", area: "Resus", vacatedAt: "2026-03-18T08:45:00", readyAt: "2026-03-18T09:05:00", status: "Ready" },
    { bed: "R2", area: "Resus", vacatedAt: "2026-03-18T09:02:00", readyAt: null, status: "Cleaning" },
    { bed: "M1", area: "Majors", vacatedAt: "2026-03-18T08:32:00", readyAt: "2026-03-18T08:58:00", status: "Occupied" },
    { bed: "M4", area: "Majors", vacatedAt: "2026-03-18T08:10:00", readyAt: "2026-03-18T08:42:00", status: "Ready" },
    { bed: "N3", area: "Minors", vacatedAt: "2026-03-18T08:18:00", readyAt: "2026-03-18T08:31:00", status: "Ready" },
    { bed: "A2", area: "Assessment", vacatedAt: "2026-03-18T08:55:00", readyAt: null, status: "Blocked" }
  ],
  alerts: [
    { severity: "High", title: "CT delay > 45 min", owner: "Flow lead" },
    { severity: "High", title: "1 resus bay blocked", owner: "Nurse in charge" },
    { severity: "Medium", title: "3 mental health waits > 6 h", owner: "Liaison" },
    { severity: "Medium", title: "Ambulance queue rising", owner: "Site manager" }
  ],
  risks: [
    { severity: "High", title: "No float nurse", detail: "Short cover in majors from 10:30" },
    { severity: "High", title: "CT queue rising", detail: "Imaging delays affecting flow" },
    { severity: "Medium", title: "1 blocked cubicle", detail: "Capacity reduction in majors" },
    { severity: "Medium", title: "Low porter cover", detail: "Potential transport delays" }
  ],
  incidentSummary: [
    { label: "Incident", value: "Ambulance queue and bed saturation" },
    { label: "Status", value: "Active" },
    { label: "Declared at", value: "09:05" },
    { label: "Incident lead", value: "Nurse in charge" },
    { label: "Objective", value: "Reduce handover delay and restore flow" },
    { label: "Current level", value: "High operational pressure" }
  ],
  actions: [
    { action: "Open escalation bay", owner: "Flow lead", due: "09:30" },
    { action: "Call site manager", owner: "Charge nurse", due: "09:20" },
    { action: "Prioritise discharges", owner: "Bed manager", due: "09:25" },
    { action: "Review majors backlog", owner: "Senior doctor", due: "09:40" }
  ],
  checklist: [
    "Review resus capacity and blocked bays",
    "Activate surge areas if approved",
    "Confirm senior decision maker availability",
    "Prioritise patients close to discharge",
    "Request inpatient bed status update",
    "Review ambulance offload queue every 15 min",
    "Update executive team on current risk and mitigation"
  ],
  communications: [
    { audience: "Site team", message: "Crowding high, 2 actions underway", time: "09:12" },
    { audience: "Ward coordinators", message: "Urgent discharge review requested", time: "09:15" },
    { audience: "Ambulance lead", message: "Expected review in 15 min", time: "09:18" }
  ],
  pressureTrend: [
    { hour: "04:00", arrivals: 4, breaches: 1, handover: 0, occupancy: 48 },
    { hour: "05:00", arrivals: 6, breaches: 1, handover: 1, occupancy: 52 },
    { hour: "06:00", arrivals: 8, breaches: 2, handover: 1, occupancy: 58 },
    { hour: "07:00", arrivals: 10, breaches: 3, handover: 2, occupancy: 66 },
    { hour: "08:00", arrivals: 14, breaches: 4, handover: 4, occupancy: 77 },
    { hour: "09:00", arrivals: 12, breaches: 4, handover: 6, occupancy: 83 }
  ],
  flowTrend: [
    { hour: "04:00", arrivals: 4, discharges: 3 },
    { hour: "05:00", arrivals: 6, discharges: 4 },
    { hour: "06:00", arrivals: 8, discharges: 5 },
    { hour: "07:00", arrivals: 10, discharges: 6 },
    { hour: "08:00", arrivals: 14, discharges: 7 },
    { hour: "09:00", arrivals: 12, discharges: 5 }
  ]
};

const now = new Date("2026-03-18T09:20:00");
const stageOrder = ["Arrival","Triage","Assessment","Treatment","Decision to admit","Boarding","Discharged"];

let patientTableRows = [];
let selectedPatient = null;
let charts = {};

function minutesBetween(start, end){
  if(!start || !end) return null;
  return Math.max(0, Math.round((new Date(end) - new Date(start)) / 60000));
}
function minutesFromNow(start){
  if(!start) return null;
  return Math.max(0, Math.round((now - new Date(start)) / 60000));
}
function formatMinutes(min){
  if(min === null || Number.isNaN(min)) return "—";
  const h = Math.floor(min / 60);
  const m = min % 60;
  return h > 0 ? `${h} h ${m} min` : `${m} min`;
}
function average(arr){
  const ok = arr.filter(v => typeof v === "number");
  return ok.length ? Math.round(ok.reduce((a,b)=>a+b,0) / ok.length) : 0;
}
function severityClass(sev){
  if(sev === "High") return "high";
  if(sev === "Medium") return "medium";
  return "low";
}
function acuityClass(a){
  return `a-${String(a).toLowerCase()}`;
}
function stageClass(stage){
  const map = {
    "Arrival":"st-arrival",
    "Triage":"st-triage",
    "Assessment":"st-assessment",
    "Treatment":"st-treatment",
    "Decision to admit":"st-decision",
    "Boarding":"st-boarding",
    "Discharged":"st-discharged"
  };
  return map[stage] || "st-arrival";
}
function escapeHtml(str){
  return String(str ?? "").replace(/[&<>"']/g, m => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[m]));
}

function getFilteredPatients(){
  const zone = document.getElementById("zoneFilter").value;
  const acuity = document.getElementById("acuityFilter").value;
  const arrivalMode = document.getElementById("arrivalFilter").value;
  const search = document.getElementById("searchFilter").value.trim().toLowerCase();

  return demoData.patients.filter(p => {
    const zoneOk = zone === "All" || p.zone === zone;
    const acuityOk = acuity === "All" || p.acuity === acuity;
    const arrivalOk = arrivalMode === "All" || p.arrivalMode === arrivalMode;
    const searchOk = !search || p.id.toLowerCase().includes(search) || p.clinician.toLowerCase().includes(search);
    return zoneOk && acuityOk && arrivalOk && searchOk;
  });
}

function populateFilters(){
  const zoneSet = [...new Set(demoData.patients.map(p => p.zone))];
  const acuitySet = [...new Set(demoData.patients.map(p => p.acuity))];
  const arrivalSet = [...new Set(demoData.patients.map(p => p.arrivalMode))];

  zoneSet.forEach(z => {
    const opt = document.createElement("option");
    opt.textContent = z;
    opt.value = z;
    document.getElementById("zoneFilter").appendChild(opt);
  });
  acuitySet.forEach(a => {
    const opt = document.createElement("option");
    opt.textContent = a;
    opt.value = a;
    document.getElementById("acuityFilter").appendChild(opt);
  });
  arrivalSet.forEach(a => {
    const opt = document.createElement("option");
    opt.textContent = a;
    opt.value = a;
    document.getElementById("arrivalFilter").appendChild(opt);
  });
}

function renderKpis(filtered){
  const active = filtered.filter(p => p.stage !== "Discharged");
  const discharged = filtered.filter(p => p.departureAt);
  const patientTat = average(discharged.map(p => minutesBetween(p.arrivalAt,p.departureAt)));
  const doorToTriage = average(filtered.map(p => minutesBetween(p.arrivalAt,p.triageAt)));
  const doorToClinician = average(filtered.map(p => minutesBetween(p.arrivalAt,p.clinicianAt)));
  const bedTat = average(demoData.bedTurnarounds.map(b => minutesBetween(b.vacatedAt,b.readyAt)));
  const occupancy = Math.round((active.length / 16) * 100);
  const breaches = discharged.length
    ? Math.round((discharged.filter(p => (minutesBetween(p.arrivalAt,p.departureAt) || 0) > 240).length / discharged.length) * 100)
    : 0;

  const items = [
    { label:"Current census", value:`${active.length} / 16`, sub:`${occupancy}% visible occupancy in demo layout` },
    { label:"Average patient turnaround", value:formatMinutes(patientTat), sub:"Departure time − arrival time" },
    { label:"Door to triage", value:formatMinutes(doorToTriage), sub:"Triage time − arrival time" },
    { label:"Door to clinician", value:formatMinutes(doorToClinician), sub:"Clinician time − arrival time" },
    { label:"Average bed turnaround", value:formatMinutes(bedTat), sub:"Bed ready time − bed vacated time" },
    { label:"4 hour breach rate", value:`${breaches}%`, sub:"Completed patient journeys breaching 4 hours" }
  ];

  document.getElementById("kpiGrid").innerHTML = items.map(item => `
    <div class="card kpi-card">
      <p class="kpi-label">${escapeHtml(item.label)}</p>
      <p class="kpi-value">${escapeHtml(item.value)}</p>
      <p class="kpi-sub">${escapeHtml(item.sub)}</p>
    </div>
  `).join("");
}

function renderOverview(filtered){
  document.getElementById("alertList").innerHTML = demoData.alerts.map(a => `
    <div class="alert-item">
      <div class="alert-top">
        <div>
          <strong>${escapeHtml(a.title)}</strong>
          <div class="staff-stat">Owner: ${escapeHtml(a.owner)}</div>
        </div>
        <span class="status-tag ${severityClass(a.severity)}">${escapeHtml(a.severity)}</span>
      </div>
    </div>
  `).join("");

  const active = filtered.filter(p => p.stage !== "Discharged");
  const stageCounts = stageOrder.slice(0,6).map(stage => active.filter(p => p.stage === stage).length);
  const acuityLabels = ["Red","Orange","Yellow","Green","Blue"];
  const acuityCounts = acuityLabels.map(a => active.filter(p => p.acuity === a).length);

  if(charts.stageChart) charts.stageChart.destroy();
  charts.stageChart = new Chart(document.getElementById("stageChart"),{
    type:"bar",
    data:{
      labels:["Arrival","Triage","Assessment","Treatment","Decision","Boarding"],
      datasets:[{
        label:"Patients",
        data:stageCounts,
        backgroundColor:["#cbd5e1","#93c5fd","#c4b5fd","#86efac","#fde68a","#fda4af"],
        borderRadius:12
      }]
    },
    options:{plugins:{legend:{display:false}},scales:{y:{beginAtZero:true,ticks:{stepSize:1}}}}
  });

  if(charts.arrivalChart) charts.arrivalChart.destroy();
  charts.arrivalChart = new Chart(document.getElementById("arrivalChart"),{
    type:"line",
    data:{
      labels:demoData.flowTrend.map(x => x.hour),
      datasets:[
        {label:"Arrivals",data:demoData.flowTrend.map(x => x.arrivals),borderColor:"#dc2626",backgroundColor:"rgba(220,38,38,0.08)",tension:0.35,fill:true},
        {label:"Discharges",data:demoData.flowTrend.map(x => x.discharges),borderColor:"#2563eb",backgroundColor:"rgba(37,99,235,0.04)",tension:0.35,fill:true}
      ]
    },
    options:{responsive:true}
  });

  if(charts.acuityChart) charts.acuityChart.destroy();
  charts.acuityChart = new Chart(document.getElementById("acuityChart"),{
    type:"doughnut",
    data:{
      labels:acuityLabels,
      datasets:[{
        data:acuityCounts,
        backgroundColor:["#dc2626","#f97316","#eab308","#22c55e","#3b82f6"]
      }]
    },
    options:{plugins:{legend:{position:"bottom"}}}
  });
}

function renderPatientFlow(filtered){
  const active = filtered.filter(p => p.stage !== "Discharged");

  const lanes = stageOrder.slice(0,6).map(stage => {
    const pts = active.filter(p => p.stage === stage);
    return `
      <div class="queue-lane">
        <div class="queue-lane-title">${escapeHtml(stage)}</div>
        <div class="queue-lane-patients">
          ${pts.length ? pts.map(p => `<div class="patient-chip">${escapeHtml(p.id)}<br><small>${escapeHtml(p.acuity)} · ${escapeHtml(p.zone)}</small></div>`).join("") : `<div class="patient-chip">No patients</div>`}
        </div>
      </div>
    `;
  }).join("");
  document.getElementById("queueMap").innerHTML = lanes;

  const tbody = document.querySelector("#patientTable tbody");
  patientTableRows = filtered.map(p => ({
    ...p,
    timeInDept: minutesFromNow(p.arrivalAt),
    doorToTriage: minutesBetween(p.arrivalAt,p.triageAt),
    doorToClinician: minutesBetween(p.arrivalAt,p.clinicianAt),
    turnaround: minutesBetween(p.arrivalAt,p.departureAt)
  }));

  tbody.innerHTML = patientTableRows.map(p => `
    <tr data-patient="${escapeHtml(p.id)}">
      <td>${escapeHtml(p.id)}</td>
      <td><span class="badge-inline ${acuityClass(p.acuity)}">${escapeHtml(p.acuity)}</span></td>
      <td>${escapeHtml(p.zone)}</td>
      <td>${escapeHtml(p.arrivalMode)}</td>
      <td><span class="stage-tag ${stageClass(p.stage)}">${escapeHtml(p.stage)}</span></td>
      <td>${escapeHtml(formatMinutes(p.timeInDept))}</td>
      <td>${escapeHtml(formatMinutes(p.doorToTriage))}</td>
      <td>${escapeHtml(formatMinutes(p.doorToClinician))}</td>
      <td>${escapeHtml(formatMinutes(p.turnaround))}</td>
      <td>${escapeHtml(p.clinician)}</td>
      <td>${p.alerts.length ? p.alerts.map(a => `<span class="badge-inline a-blue">${escapeHtml(a)}</span>`).join(" ") : "—"}</td>
    </tr>
  `).join("");

  if(!selectedPatient || !filtered.find(p => p.id === selectedPatient.id)) {
    selectedPatient = filtered[0] || null;
  }
  renderSelectedPatient();

  document.querySelectorAll("#patientTable tbody tr").forEach(tr => {
    tr.addEventListener("click", () => {
      const id = tr.getAttribute("data-patient");
      selectedPatient = filtered.find(p => p.id === id) || null;
      renderSelectedPatient();
    });
  });

  const rules = [
    "Red patient outside resus",
    "Orange patient waiting > 15 min for clinician",
    "Any patient > 4 h total time in department",
    "Boarding patient > 2 h after admit decision",
    "Ambulance arrival waiting for triage > 30 min"
  ];
  document.getElementById("ruleList").innerHTML = rules.map(r => `<button class="action-btn">${escapeHtml(r)}</button>`).join("");
}

function renderSelectedPatient(){
  const host = document.getElementById("selectedPatient");
  if(!selectedPatient){
    host.innerHTML = `<div class="summary-box"><div class="label">No patient selected</div><div class="value">Filter has removed all visible rows.</div></div>`;
    return;
  }
  const p = selectedPatient;
  const fields = [
    ["Patient ID", p.id],
    ["Acuity", p.acuity],
    ["Current location", `${p.zone} · ${p.stage}`],
    ["Arrival mode", p.arrivalMode],
    ["Time in department", formatMinutes(minutesFromNow(p.arrivalAt))],
    ["Door to triage", formatMinutes(minutesBetween(p.arrivalAt,p.triageAt))],
    ["Door to clinician", formatMinutes(minutesBetween(p.arrivalAt,p.clinicianAt))],
    ["Clinician", p.clinician],
    ["Disposition time", p.dispositionAt ? new Date(p.dispositionAt).toLocaleTimeString([], {hour:"2-digit",minute:"2-digit"}) : "—"],
    ["Departure time", p.departureAt ? new Date(p.departureAt).toLocaleTimeString([], {hour:"2-digit",minute:"2-digit"}) : "—"],
    ["Alerts", p.alerts.length ? p.alerts.join(", ") : "None"],
    ["Turnaround time", formatMinutes(minutesBetween(p.arrivalAt,p.departureAt))]
  ];
  host.innerHTML = fields.map(([label,value]) => `
    <div class="summary-box">
      <div class="label">${escapeHtml(label)}</div>
      <div class="value">${escapeHtml(value)}</div>
    </div>
  `).join("");
}

function renderStaffing(){
  document.getElementById("staffingCards").innerHTML = demoData.staffing.map(row => {
    const coverage = Math.round((row.present / row.required) * 100);
    const gap = Math.max(0, row.required - row.present);
    return `
      <div class="staff-item">
        <div class="staff-top">
          <div>
            <strong>${escapeHtml(row.role)}</strong>
            <div class="staff-stat">Required ${row.required} · Rostered ${row.rostered} · Present ${row.present} · Agency ${row.agency}</div>
          </div>
          <span class="status-tag ${gap > 1 ? 'high' : gap === 1 ? 'medium' : 'low'}">Gap ${gap}</span>
        </div>
        <div class="progress"><span style="width:${coverage}%"></span></div>
      </div>
    `;
  }).join("");

  const breakBody = document.querySelector("#breakTable tbody");
  breakBody.innerHTML = demoData.breakPlanner.map(r => `<tr><td>${escapeHtml(r.time)}</td><td>${escapeHtml(r.role)}</td><td>${escapeHtml(r.zone)}</td></tr>`).join("");

  const bedBody = document.querySelector("#bedStateTable tbody");
  bedBody.innerHTML = demoData.bedStates.map(r => `
    <tr>
      <td>${escapeHtml(r.area)}</td>
      <td>${r.open}</td>
      <td>${r.occupied}</td>
      <td>${r.cleaning}</td>
      <td>${r.blocked}</td>
    </tr>
  `).join("");

  document.getElementById("riskRegister").innerHTML = demoData.risks.map(r => `
    <div class="risk-item">
      <div class="risk-top">
        <div>
          <strong>${escapeHtml(r.title)}</strong>
          <div class="staff-stat">${escapeHtml(r.detail)}</div>
        </div>
        <span class="status-tag ${severityClass(r.severity)}">${escapeHtml(r.severity)}</span>
      </div>
    </div>
  `).join("");

  if(charts.staffingChart) charts.staffingChart.destroy();
  charts.staffingChart = new Chart(document.getElementById("staffingChart"),{
    type:"bar",
    data:{
      labels:demoData.staffing.map(x => x.role),
      datasets:[
        {label:"Required",data:demoData.staffing.map(x => x.required),backgroundColor:"#cbd5e1",borderRadius:12},
        {label:"Present",data:demoData.staffing.map(x => x.present),backgroundColor:"#2563eb",borderRadius:12}
      ]
    },
    options:{plugins:{legend:{position:"bottom"}},scales:{y:{beginAtZero:true,ticks:{stepSize:1}}}}
  });

  if(charts.turnaroundChart) charts.turnaroundChart.destroy();
  charts.turnaroundChart = new Chart(document.getElementById("turnaroundChart"),{
    type:"bar",
    data:{
      labels:demoData.bedTurnarounds.map(x => x.bed),
      datasets:[{
        label:"Minutes",
        data:demoData.bedTurnarounds.map(x => minutesBetween(x.vacatedAt,x.readyAt)),
        backgroundColor:"#0f766e",
        borderRadius:12
      }]
    },
    options:{plugins:{legend:{display:false}},scales:{y:{beginAtZero:true}}}
  });
}

function renderIncidents(){
  document.getElementById("incidentSummary").innerHTML = demoData.incidentSummary.map(item => `
    <div class="summary-box">
      <div class="label">${escapeHtml(item.label)}</div>
      <div class="value">${escapeHtml(item.value)}</div>
    </div>
  `).join("");

  const actionBody = document.querySelector("#actionTable tbody");
  actionBody.innerHTML = demoData.actions.map(a => `<tr><td>${escapeHtml(a.action)}</td><td>${escapeHtml(a.owner)}</td><td>${escapeHtml(a.due)}</td></tr>`).join("");

  document.getElementById("checklist").innerHTML = demoData.checklist.map(item => `
    <div class="check-item">
      <div class="check-box"></div>
      <div>${escapeHtml(item)}</div>
    </div>
  `).join("");

  const commBody = document.querySelector("#commTable tbody");
  commBody.innerHTML = demoData.communications.map(c => `<tr><td>${escapeHtml(c.audience)}</td><td>${escapeHtml(c.message)}</td><td>${escapeHtml(c.time)}</td></tr>`).join("");

  if(charts.pressureChart) charts.pressureChart.destroy();
  charts.pressureChart = new Chart(document.getElementById("pressureChart"),{
    type:"line",
    data:{
      labels:demoData.pressureTrend.map(x => x.hour),
      datasets:[
        {label:"Arrivals",data:demoData.pressureTrend.map(x => x.arrivals),borderColor:"#2563eb",backgroundColor:"rgba(37,99,235,0.05)",tension:0.35},
        {label:"4 h breaches",data:demoData.pressureTrend.map(x => x.breaches),borderColor:"#dc2626",backgroundColor:"rgba(220,38,38,0.05)",tension:0.35},
        {label:"Ambulance handover delays",data:demoData.pressureTrend.map(x => x.handover),borderColor:"#d97706",backgroundColor:"rgba(217,119,6,0.05)",tension:0.35},
        {label:"Occupancy %",data:demoData.pressureTrend.map(x => x.occupancy),borderColor:"#7c3aed",backgroundColor:"rgba(124,58,237,0.05)",tension:0.35}
      ]
    },
    options:{plugins:{legend:{position:"bottom"}}}
  });
}

function exportCsv(){
  const headers = ["Patient ID","Acuity","Zone","Arrival mode","Stage","Arrival time","Triage time","Clinician time","Departure time","Clinician","Alerts"];
  const rows = patientTableRows.map(p => [
    p.id,p.acuity,p.zone,p.arrivalMode,p.stage,p.arrivalAt,p.triageAt || "",p.clinicianAt || "",p.departureAt || "",p.clinician,p.alerts.join("; ")
  ]);
  const csv = [headers, ...rows].map(r => r.map(v => `"${String(v ?? "").replace(/"/g,'""')}"`).join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "emergency_ward_patient_flow_demo.csv";
  a.click();
  URL.revokeObjectURL(url);
}

function renderAll(){
  const filtered = getFilteredPatients();
  renderKpis(filtered);
  renderOverview(filtered);
  renderPatientFlow(filtered);
  renderStaffing();
  renderIncidents();
}

function setupTabs(){
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const tab = btn.getAttribute("data-tab");
      document.querySelectorAll(".tab-panel").forEach(panel => panel.classList.remove("active"));
      document.getElementById(`tab-${tab}`).classList.add("active");
    });
  });
}

function setupFilters(){
  ["zoneFilter","acuityFilter","arrivalFilter","searchFilter","dateFilter","shiftFilter"].forEach(id => {
    document.getElementById(id).addEventListener("input", renderAll);
    document.getElementById(id).addEventListener("change", renderAll);
  });
  document.getElementById("resetBtn").addEventListener("click", () => {
    document.getElementById("zoneFilter").value = "All";
    document.getElementById("acuityFilter").value = "All";
    document.getElementById("arrivalFilter").value = "All";
    document.getElementById("searchFilter").value = "";
    renderAll();
  });
  document.getElementById("exportBtn").addEventListener("click", exportCsv);
}

function init(){
  populateFilters();
  setupTabs();
  setupFilters();
  renderAll();
}
document.addEventListener("DOMContentLoaded", init);
