
const DB = {
  dates: {
    "2026-03-18": {
      patients: [
        {id:"P1042", acuity:"Orange", zone:"Majors", arrivalMode:"Ambulance", shift:"Day", stage:"Treatment", arrivalAt:"2026-03-18T07:45:00", triageAt:"2026-03-18T07:58:00", clinicianAt:"2026-03-18T08:22:00", departureAt:null, clinician:"Dr Ahmed", alerts:["Imaging pending"]},
        {id:"P1043", acuity:"Yellow", zone:"Assessment", arrivalMode:"Walk in", shift:"Day", stage:"Assessment", arrivalAt:"2026-03-18T08:02:00", triageAt:"2026-03-18T08:16:00", clinicianAt:null, departureAt:null, clinician:"Dr Shah", alerts:["Waiting for review"]},
        {id:"P1044", acuity:"Green", zone:"Minors", arrivalMode:"Walk in", shift:"Day", stage:"Triage", arrivalAt:"2026-03-18T08:19:00", triageAt:null, clinicianAt:null, departureAt:null, clinician:"Dr Patel", alerts:[]},
        {id:"P1045", acuity:"Red", zone:"Resus", arrivalMode:"Ambulance", shift:"Day", stage:"Treatment", arrivalAt:"2026-03-18T08:28:00", triageAt:"2026-03-18T08:29:00", clinicianAt:"2026-03-18T08:30:00", departureAt:null, clinician:"Dr Khan", alerts:["Critical care review"]},
        {id:"P1046", acuity:"Yellow", zone:"Waiting", arrivalMode:"GP referral", shift:"Day", stage:"Arrival", arrivalAt:"2026-03-18T08:40:00", triageAt:null, clinicianAt:null, departureAt:null, clinician:"Unassigned", alerts:["Pending triage"]},
        {id:"P1047", acuity:"Orange", zone:"Majors", arrivalMode:"Ambulance", shift:"Day", stage:"Decision to admit", arrivalAt:"2026-03-18T06:55:00", triageAt:"2026-03-18T07:03:00", clinicianAt:"2026-03-18T07:22:00", departureAt:null, clinician:"Dr Ahmed", alerts:["Awaiting bed"]},
        {id:"P1048", acuity:"Green", zone:"Minors", arrivalMode:"Walk in", shift:"Day", stage:"Discharged", arrivalAt:"2026-03-18T06:40:00", triageAt:"2026-03-18T06:52:00", clinicianAt:"2026-03-18T07:12:00", departureAt:"2026-03-18T08:04:00", clinician:"Dr Patel", alerts:[]},
        {id:"P1049", acuity:"Yellow", zone:"Minors", arrivalMode:"Walk in", shift:"Day", stage:"Discharged", arrivalAt:"2026-03-18T05:58:00", triageAt:"2026-03-18T06:10:00", clinicianAt:"2026-03-18T06:38:00", departureAt:"2026-03-18T08:16:00", clinician:"Dr Singh", alerts:[]},
        {id:"P1050", acuity:"Orange", zone:"Majors", arrivalMode:"Ambulance", shift:"Day", stage:"Boarding", arrivalAt:"2026-03-18T05:35:00", triageAt:"2026-03-18T05:42:00", clinicianAt:"2026-03-18T05:59:00", departureAt:null, clinician:"Dr Khan", alerts:["Bed request overdue"]},
        {id:"P1051", acuity:"Blue", zone:"Waiting", arrivalMode:"Walk in", shift:"Day", stage:"Arrival", arrivalAt:"2026-03-18T09:02:00", triageAt:null, clinicianAt:null, departureAt:null, clinician:"Unassigned", alerts:[]},
        {id:"P1052", acuity:"Yellow", zone:"Assessment", arrivalMode:"GP referral", shift:"Day", stage:"Assessment", arrivalAt:"2026-03-18T07:30:00", triageAt:"2026-03-18T07:44:00", clinicianAt:"2026-03-18T08:10:00", departureAt:null, clinician:"Dr Shah", alerts:[]},
        {id:"P1053", acuity:"Green", zone:"Minors", arrivalMode:"Walk in", shift:"Day", stage:"Treatment", arrivalAt:"2026-03-18T08:12:00", triageAt:"2026-03-18T08:22:00", clinicianAt:"2026-03-18T08:44:00", departureAt:null, clinician:"Dr Singh", alerts:["Lab pending"]},
        {id:"P1054", acuity:"Orange", zone:"Majors", arrivalMode:"Ambulance", shift:"Day", stage:"Assessment", arrivalAt:"2026-03-18T08:48:00", triageAt:"2026-03-18T08:52:00", clinicianAt:null, departureAt:null, clinician:"Dr Ahmed", alerts:["Waiting for clinician"]},
        {id:"P1055", acuity:"Green", zone:"Minors", arrivalMode:"Walk in", shift:"Day", stage:"Treatment", arrivalAt:"2026-03-18T08:50:00", triageAt:"2026-03-18T08:58:00", clinicianAt:"2026-03-18T09:05:00", departureAt:null, clinician:"Dr Patel", alerts:[]}
      ],
      trend: [
        {hour:"04:00", arrivals:4, discharges:3, occupancy:48, breaches:1, handover:0},
        {hour:"05:00", arrivals:6, discharges:4, occupancy:52, breaches:1, handover:1},
        {hour:"06:00", arrivals:8, discharges:5, occupancy:58, breaches:2, handover:1},
        {hour:"07:00", arrivals:10, discharges:6, occupancy:66, breaches:3, handover:2},
        {hour:"08:00", arrivals:14, discharges:7, occupancy:77, breaches:4, handover:4},
        {hour:"09:00", arrivals:12, discharges:5, occupancy:83, breaches:4, handover:6}
      ]
    },
    "2026-03-19": {
      patients: [
        {id:"P1101", acuity:"Yellow", zone:"Assessment", arrivalMode:"Walk in", shift:"Day", stage:"Assessment", arrivalAt:"2026-03-19T07:50:00", triageAt:"2026-03-19T08:00:00", clinicianAt:"2026-03-19T08:18:00", departureAt:null, clinician:"Dr Shah", alerts:["Bloods pending"]},
        {id:"P1102", acuity:"Green", zone:"Minors", arrivalMode:"Walk in", shift:"Day", stage:"Treatment", arrivalAt:"2026-03-19T08:14:00", triageAt:"2026-03-19T08:22:00", clinicianAt:"2026-03-19T08:40:00", departureAt:null, clinician:"Dr Patel", alerts:[]},
        {id:"P1103", acuity:"Orange", zone:"Majors", arrivalMode:"Ambulance", shift:"Day", stage:"Treatment", arrivalAt:"2026-03-19T07:40:00", triageAt:"2026-03-19T07:46:00", clinicianAt:"2026-03-19T07:59:00", departureAt:null, clinician:"Dr Ahmed", alerts:["Senior review due"]},
        {id:"P1104", acuity:"Red", zone:"Resus", arrivalMode:"Ambulance", shift:"Day", stage:"Treatment", arrivalAt:"2026-03-19T08:34:00", triageAt:"2026-03-19T08:35:00", clinicianAt:"2026-03-19T08:36:00", departureAt:null, clinician:"Dr Khan", alerts:["Critical care review"]},
        {id:"P1105", acuity:"Green", zone:"Minors", arrivalMode:"Walk in", shift:"Day", stage:"Discharged", arrivalAt:"2026-03-19T06:20:00", triageAt:"2026-03-19T06:31:00", clinicianAt:"2026-03-19T06:52:00", departureAt:"2026-03-19T07:39:00", clinician:"Dr Singh", alerts:[]},
        {id:"P1106", acuity:"Yellow", zone:"Waiting", arrivalMode:"GP referral", shift:"Day", stage:"Arrival", arrivalAt:"2026-03-19T08:54:00", triageAt:null, clinicianAt:null, departureAt:null, clinician:"Unassigned", alerts:["Pending triage"]},
        {id:"P1107", acuity:"Orange", zone:"Majors", arrivalMode:"Ambulance", shift:"Day", stage:"Boarding", arrivalAt:"2026-03-19T05:42:00", triageAt:"2026-03-19T05:49:00", clinicianAt:"2026-03-19T06:05:00", departureAt:null, clinician:"Dr Ahmed", alerts:["Awaiting bed"]},
        {id:"P1108", acuity:"Blue", zone:"Waiting", arrivalMode:"Walk in", shift:"Day", stage:"Arrival", arrivalAt:"2026-03-19T09:10:00", triageAt:null, clinicianAt:null, departureAt:null, clinician:"Unassigned", alerts:[]}
      ],
      trend: [
        {hour:"04:00", arrivals:3, discharges:4, occupancy:40, breaches:0, handover:0},
        {hour:"05:00", arrivals:5, discharges:4, occupancy:46, breaches:1, handover:1},
        {hour:"06:00", arrivals:6, discharges:6, occupancy:50, breaches:1, handover:1},
        {hour:"07:00", arrivals:9, discharges:8, occupancy:61, breaches:2, handover:1},
        {hour:"08:00", arrivals:11, discharges:9, occupancy:70, breaches:2, handover:2},
        {hour:"09:00", arrivals:8, discharges:6, occupancy:68, breaches:2, handover:3}
      ]
    },
    "2026-03-20": {
      patients: [
        {id:"P1201", acuity:"Green", zone:"Minors", arrivalMode:"Walk in", shift:"Day", stage:"Treatment", arrivalAt:"2026-03-20T08:06:00", triageAt:"2026-03-20T08:12:00", clinicianAt:"2026-03-20T08:28:00", departureAt:null, clinician:"Dr Patel", alerts:[]},
        {id:"P1202", acuity:"Yellow", zone:"Assessment", arrivalMode:"GP referral", shift:"Day", stage:"Assessment", arrivalAt:"2026-03-20T07:52:00", triageAt:"2026-03-20T08:01:00", clinicianAt:"2026-03-20T08:16:00", departureAt:null, clinician:"Dr Shah", alerts:["Awaiting result"]},
        {id:"P1203", acuity:"Orange", zone:"Majors", arrivalMode:"Ambulance", shift:"Day", stage:"Treatment", arrivalAt:"2026-03-20T07:34:00", triageAt:"2026-03-20T07:40:00", clinicianAt:"2026-03-20T07:56:00", departureAt:null, clinician:"Dr Ahmed", alerts:["Observation repeat"]},
        {id:"P1204", acuity:"Green", zone:"Minors", arrivalMode:"Walk in", shift:"Day", stage:"Discharged", arrivalAt:"2026-03-20T06:12:00", triageAt:"2026-03-20T06:18:00", clinicianAt:"2026-03-20T06:42:00", departureAt:"2026-03-20T07:28:00", clinician:"Dr Singh", alerts:[]},
        {id:"P1205", acuity:"Yellow", zone:"Waiting", arrivalMode:"Walk in", shift:"Day", stage:"Arrival", arrivalAt:"2026-03-20T08:58:00", triageAt:null, clinicianAt:null, departureAt:null, clinician:"Unassigned", alerts:["Pending triage"]},
        {id:"P1206", acuity:"Red", zone:"Resus", arrivalMode:"Ambulance", shift:"Day", stage:"Treatment", arrivalAt:"2026-03-20T08:41:00", triageAt:"2026-03-20T08:42:00", clinicianAt:"2026-03-20T08:43:00", departureAt:null, clinician:"Dr Khan", alerts:["Critical review"]},
        {id:"P1207", acuity:"Blue", zone:"Waiting", arrivalMode:"Walk in", shift:"Day", stage:"Arrival", arrivalAt:"2026-03-20T09:14:00", triageAt:null, clinicianAt:null, departureAt:null, clinician:"Unassigned", alerts:[]}
      ],
      trend: [
        {hour:"04:00", arrivals:2, discharges:3, occupancy:34, breaches:0, handover:0},
        {hour:"05:00", arrivals:4, discharges:4, occupancy:39, breaches:0, handover:1},
        {hour:"06:00", arrivals:5, discharges:5, occupancy:43, breaches:1, handover:1},
        {hour:"07:00", arrivals:7, discharges:8, occupancy:50, breaches:1, handover:1},
        {hour:"08:00", arrivals:9, discharges:9, occupancy:57, breaches:1, handover:2},
        {hour:"09:00", arrivals:6, discharges:7, occupancy:55, breaches:1, handover:2}
      ]
    }
  },
  staffing: [
    {role:"Nurses", required:14, present:12, agency:2},
    {role:"Doctors", required:8, present:6, agency:1},
    {role:"Healthcare assistants", required:4, present:3, agency:0},
    {role:"Porters", required:2, present:2, agency:0},
    {role:"Security", required:2, present:1, agency:0}
  ],
  staffingHeat: [
    {role:"Nurses", "08:00":82, "09:00":78, "10:00":72, "11:00":70, "12:00":76},
    {role:"Doctors", "08:00":75, "09:00":70, "10:00":68, "11:00":72, "12:00":80},
    {role:"HCAs", "08:00":88, "09:00":78, "10:00":75, "11:00":68, "12:00":73},
    {role:"Porters", "08:00":90, "09:00":84, "10:00":74, "11:00":70, "12:00":79}
  ],
  bedStates: [
    {area:"Resus bays", open:1, occupied:3, cleaning:0, blocked:1},
    {area:"Majors cubicles", open:2, occupied:14, cleaning:2, blocked:0},
    {area:"Minors spaces", open:5, occupied:7, cleaning:1, blocked:0},
    {area:"Isolation rooms", open:1, occupied:1, cleaning:0, blocked:0}
  ],
  bedTurnarounds: [
    {bed:"R1", minutes:20, status:"Ready"},
    {bed:"R2", minutes:null, status:"Cleaning"},
    {bed:"M1", minutes:26, status:"Occupied"},
    {bed:"M4", minutes:32, status:"Ready"},
    {bed:"N3", minutes:13, status:"Ready"},
    {bed:"A2", minutes:null, status:"Blocked"}
  ],
  breakPlanner: [
    {time:"11:00", role:"RN", zone:"Majors"},
    {time:"11:15", role:"RN", zone:"Minors"},
    {time:"11:30", role:"Doctor", zone:"Assessment"},
    {time:"11:45", role:"HCA", zone:"Triage"}
  ],
  alerts: [
    {severity:"High", title:"CT delay > 45 min", owner:"Flow lead"},
    {severity:"High", title:"1 resus bay blocked", owner:"Nurse in charge"},
    {severity:"Medium", title:"Mental health waits > 6 h", owner:"Liaison"},
    {severity:"Medium", title:"Ambulance queue rising", owner:"Site manager"}
  ],
  risks: [
    {severity:"High", title:"No float nurse", detail:"Short cover in majors from 10:30"},
    {severity:"High", title:"CT queue rising", detail:"Imaging delays affecting flow"},
    {severity:"Medium", title:"1 blocked cubicle", detail:"Capacity reduction in majors"},
    {severity:"Medium", title:"Low porter cover", detail:"Potential transport delays"}
  ],
  breachReasons: [
    {label:"Awaiting bed", value:42, color:"#dc2626"},
    {label:"Imaging delay", value:24, color:"#f97316"},
    {label:"Lab delay", value:18, color:"#eab308"},
    {label:"Specialty review", value:16, color:"#7c3aed"}
  ],
  rules: [
    "Red acuity patients remain highest priority regardless of waiting time.",
    "Orange acuity patients waiting more than 15 minutes for clinician review should be escalated.",
    "Any patient above 180 minutes should be checked for early 4 hour breach risk.",
    "Boarding patients waiting after admission decision should be raised during the bed huddle.",
    "Ambulance arrivals waiting for triage should be visible in both patient flow and incident command."
  ],
  actions: [
    {action:"Open escalation bay", owner:"Flow lead", due:"09:30", status:"Open"},
    {action:"Call site manager", owner:"Charge nurse", due:"09:20", status:"In progress"},
    {action:"Prioritise discharges", owner:"Bed manager", due:"09:25", status:"Open"},
    {action:"Review majors backlog", owner:"Senior doctor", due:"09:40", status:"Open"}
  ],
  communications: [
    {audience:"Site team", message:"Crowding high, 2 actions underway", time:"09:12"},
    {audience:"Ward coordinators", message:"Urgent discharge review requested", time:"09:15"},
    {audience:"Ambulance lead", message:"Expected review in 15 min", time:"09:18"}
  ],
  checklist: [
    "Review resus capacity and blocked bays",
    "Activate surge area if approved",
    "Confirm senior decision maker availability",
    "Prioritise patients close to discharge",
    "Request inpatient bed status update",
    "Review ambulance offload queue every 15 minutes",
    "Update executive team on current risk and mitigation"
  ],
  feedbackThemes: [
    {severity:"High", title:"Patient list table needed further improvement", detail:"A tester said it was difficult to sort out patients by highlighting colours only. This version adds priority scores, sorting, and alert text."},
    {severity:"High", title:"Charts still felt basic", detail:"A tester said more detailed analysis in charts could improve real clinical usefulness. This version adds a chart analysis tab, insight cards, and breach reason analysis."},
    {severity:"Medium", title:"Filters could be more interactive", detail:"The filter bar now includes active filter summaries, high priority only view, filter impact panel, and more searchable fields."},
    {severity:"Low", title:"Layout and colours were mostly approved", detail:"Testers reported that the layout was clearer, charts were easier to follow, and colours were calmer, so this version keeps the lighter visual direction."},
    {severity:"Low", title:"Glossary helped understanding", detail:"The clearer metric language is retained through target notes, formula labels, and explanatory text inside the cards."}
  ],
  changeLog: [
    {title:"Added sortable patient table", detail:"The table can now be sorted by priority, waiting time, acuity, stage, or patient ID."},
    {title:"Added priority score", detail:"The score reduces dependence on colour only and supports clearer triage style prioritisation."},
    {title:"Added chart analysis tab", detail:"Charts now include interpretation, breach reasons, and suggested data points."},
    {title:"Added filter impact panel", detail:"Users can see how many records remain, how many are active, and how many are high priority."},
    {title:"Strengthened staffing section", detail:"A staffing heatmap was added because the staffing section was identified as useful."},
    {title:"Made incident checklist functional", detail:"Checklist items can now be clicked, so the screen feels less static and more realistic."}
  ]
};

const colors = {
  acuity: {Red:"#dc2626", Orange:"#f97316", Yellow:"#eab308", Green:"#22c55e", Blue:"#3b82f6"},
  stage: {"Arrival":"#cbd5e1","Triage":"#93c5fd","Assessment":"#c4b5fd","Treatment":"#86efac","Decision to admit":"#fde68a","Boarding":"#fda4af","Discharged":"#cbd5e1"}
};
const stageClasses = {"Arrival":"st-arrival","Triage":"st-triage","Assessment":"st-assessment","Treatment":"st-treatment","Decision to admit":"st-decision","Boarding":"st-boarding","Discharged":"st-discharged"};
let selectedId = null;
let visibleRows = [];

function safeLoad(key, fallback){
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch(e) {
    return fallback;
  }
}
function safeSave(key, value){
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch(e) {
    // Storage may be unavailable in some local browser settings. The dashboard still works without persistence.
  }
}
let actionStatuses = safeLoad("ew_action_statuses", DB.actions.map(a => a.status));
let checklistDone = safeLoad("ew_checklist_done", {});

function esc(s){return String(s ?? "").replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));}
function mBetween(a,b){ if(!a || !b) return null; return Math.max(0, Math.round((new Date(b)-new Date(a))/60000));}
function mFrom(a,date){ if(!a) return null; return Math.max(0, Math.round((new Date(date+"T09:20:00")-new Date(a))/60000));}
function fmtM(m){ if(m===null || Number.isNaN(m)) return "—"; const h=Math.floor(m/60), mm=m%60; return h?`${h} h ${mm} min`:`${mm} min`; }
function avg(a){ const n=a.filter(x=>typeof x==="number"); return n.length?Math.round(n.reduce((x,y)=>x+y,0)/n.length):0;}
function uniq(a){ return [...new Set(a)];}
function severityClass(s){ return s==="High"?"high":s==="Medium"?"medium":"low";}
function priorityScore(p,date){
  const acuityBase = {Red:100, Orange:75, Yellow:50, Green:25, Blue:10}[p.acuity] || 0;
  const wait = mFrom(p.arrivalAt,date) || 0;
  const waitPoints = Math.min(40, Math.round(wait/6));
  const alertPoints = (p.alerts || []).length * 7;
  const boardingPoints = p.stage === "Boarding" ? 15 : 0;
  return Math.min(100, acuityBase + waitPoints + alertPoints + boardingPoints);
}
function priorityBand(score){ return score>=80?"high-score":score>=55?"med-score":"low-score";}

function currentDate(){ return document.getElementById("dateFilter").value; }
function dateData(){ return DB.dates[currentDate()]; }

function setupSelects(){
  const dates = Object.keys(DB.dates);
  fillSelect("dateFilter", dates);
  fillSelect("zoneFilter", ["All", ...uniq(Object.values(DB.dates).flatMap(d=>d.patients.map(p=>p.zone)))]);
  fillSelect("acuityFilter", ["All", ...uniq(Object.values(DB.dates).flatMap(d=>d.patients.map(p=>p.acuity)))]);
  fillSelect("arrivalFilter", ["All", ...uniq(Object.values(DB.dates).flatMap(d=>d.patients.map(p=>p.arrivalMode)))]);
}
function fillSelect(id, items){
  const el=document.getElementById(id); el.innerHTML="";
  items.forEach(x=>{const o=document.createElement("option");o.value=x;o.textContent=x;el.appendChild(o);});
}
function getRows(){
  const date=currentDate(), shift=val("shiftFilter"), zone=val("zoneFilter"), acuity=val("acuityFilter"), arrival=val("arrivalFilter"), view=val("viewFilter"), q=val("searchFilter").trim().toLowerCase();
  let rows = dateData().patients.filter(p=>{
    const searchOK = !q || [p.id,p.clinician,p.stage,p.zone,p.arrivalMode,...(p.alerts||[])].join(" ").toLowerCase().includes(q);
    return (shift==="All"||p.shift===shift) && (zone==="All"||p.zone===zone) && (acuity==="All"||p.acuity===acuity) && (arrival==="All"||p.arrivalMode===arrival) && searchOK;
  });
  if(view==="HighPriority") rows = rows.filter(p=>priorityScore(p,date)>=70);
  if(view==="ActiveOnly") rows = rows.filter(p=>p.stage!=="Discharged");
  if(view==="CompletedOnly") rows = rows.filter(p=>p.stage==="Discharged");
  visibleRows = rows;
  return rows;
}
function val(id){ return document.getElementById(id).value; }

function renderAll(){
  const rows=getRows();
  updateFilterSummary(rows);
  renderKpis(rows);
  renderOverview(rows);
  renderFlow(rows);
  renderAnalysis(rows);
  renderStaffing();
  renderIncident();
  renderFeedback();
}

function updateFilterSummary(rows){
  const bits = [`Date ${currentDate()}`];
  ["shiftFilter","zoneFilter","acuityFilter","arrivalFilter","viewFilter"].forEach(id=>{
    const v=val(id); if(v!=="All" && v!=="All patients") bits.push(v);
  });
  if(val("searchFilter").trim()) bits.push(`Search "${val("searchFilter").trim()}"`);
  document.getElementById("filterSummary").textContent = `${bits.join(" • ")} • ${rows.length} records visible`;
  document.getElementById("livePatients").textContent = rows.filter(p=>p.stage!=="Discharged").length;
  const pressure = Math.round(Math.min(100, ((rows.filter(p=>p.stage!=="Discharged").length/16)*45) + (rows.filter(p=>priorityScore(p,currentDate())>=70).length*9)));
  document.getElementById("heroPressure").textContent = `Estimated pressure index ${pressure}%`;
}
function renderKpis(rows){
  const date=currentDate();
  const active=rows.filter(p=>p.stage!=="Discharged");
  const completed=rows.filter(p=>p.departureAt);
  const ptat=avg(completed.map(p=>mBetween(p.arrivalAt,p.departureAt)));
  const dtt=avg(rows.map(p=>mBetween(p.arrivalAt,p.triageAt)));
  const dtc=avg(rows.map(p=>mBetween(p.arrivalAt,p.clinicianAt)));
  const bed=avg(DB.bedTurnarounds.map(b=>b.minutes));
  const breach=completed.length?Math.round((completed.filter(p=>(mBetween(p.arrivalAt,p.departureAt)||0)>240).length/completed.length)*100):0;
  const high=rows.filter(p=>priorityScore(p,date)>=70).length;
  const items=[
    ["Current census",`${active.length} / 16`,"Active visible patients","Target: maintain safe visible capacity"],
    ["Average patient turnaround",fmtM(ptat),"Departure time − arrival time","Target: below 4 h where appropriate"],
    ["Door to triage",fmtM(dtt),"Triage time − arrival time","Target: shorter is better"],
    ["Door to clinician",fmtM(dtc),"Clinician time − arrival time","Target: improves flow"],
    ["Average bed turnaround",fmtM(bed),"Bed ready − bed vacated","Target: keep treatment spaces moving"],
    ["High priority patients",`${high}`,"Priority score ≥ 70","Added after feedback on table clarity"]
  ];
  document.getElementById("kpiGrid").innerHTML=items.map(i=>`
    <article class="card kpi">
      <p class="kpi-label">${esc(i[0])}</p><p class="kpi-value">${esc(i[1])}</p><p class="kpi-sub">${esc(i[2])}</p><span class="kpi-target">${esc(i[3])}</span>
    </article>`).join("");
}
function barList(host, items, maxOverride){
  const max=maxOverride || Math.max(...items.map(i=>i.value),1);
  document.getElementById(host).innerHTML=items.map(i=>`
    <div class="bar-row"><div class="bar-label">${esc(i.label)}</div><div class="bar-track"><div class="bar-fill" style="width:${Math.min(100,(i.value/max)*100)}%;background:${i.color}"></div></div><div class="bar-value">${esc(i.display ?? i.value)}</div></div>`).join("");
}
function renderOverview(rows){
  const active=rows.filter(p=>p.stage!=="Discharged");
  const stages=["Arrival","Triage","Assessment","Treatment","Decision to admit","Boarding"];
  barList("stageBars", stages.map(s=>({label:s,value:active.filter(p=>p.stage===s).length,color:colors.stage[s]})));
  const acuityOrder=["Red","Orange","Yellow","Green","Blue"];
  barList("acuityBreakdown", acuityOrder.map(a=>{
    const value=active.filter(p=>p.acuity===a).length; const pct=Math.round((value/Math.max(1,active.length))*100);
    return {label:a,value,color:colors.acuity[a],display:`${value} (${pct}%)`};
  }));
  const date=currentDate();
  const risk=rows.filter(p=>p.stage!=="Discharged").sort((a,b)=>priorityScore(b,date)-priorityScore(a,date)).slice(0,5);
  document.getElementById("riskQueue").innerHTML=risk.map(p=>{
    const score=priorityScore(p,date);
    return `<div class="info-card"><div class="info-top"><strong>${esc(p.id)} · ${esc(p.stage)}</strong><span class="priority ${priorityBand(score)}">${score}</span></div><div class="info-sub">${esc(p.acuity)} · ${esc(p.zone)} · ${fmtM(mFrom(p.arrivalAt,date))} in department</div></div>`;
  }).join("") || `<div class="info-card">No visible active patients.</div>`;
  document.getElementById("alerts").innerHTML=DB.alerts.map(a=>`<div class="info-card"><div class="info-top"><strong>${esc(a.title)}</strong><span class="status ${severityClass(a.severity)}">${esc(a.severity)}</span></div><div class="info-sub">Owner: ${esc(a.owner)}</div></div>`).join("");
  lineChart("overviewLineChart", dateData().trend, [
    {key:"arrivals", label:"Arrivals", color:"#2563eb"},
    {key:"discharges", label:"Discharges", color:"#16a34a"},
    {key:"occupancy", label:"Occupancy %", color:"#7c3aed"}
  ], 100);
  legend("overviewLegend", [
    ["Arrivals","#2563eb"],["Discharges","#16a34a"],["Occupancy %","#7c3aed"]
  ]);
  renderInterpretation(rows);
}
function renderInterpretation(rows){
  const date=currentDate();
  const active=rows.filter(p=>p.stage!=="Discharged").length;
  const high=rows.filter(p=>priorityScore(p,date)>=70).length;
  const boarding=rows.filter(p=>p.stage==="Boarding").length;
  const orangeRed=rows.filter(p=>["Red","Orange"].includes(p.acuity) && p.stage!=="Discharged").length;
  const items=[
    ["Pressure interpretation", active>=10 ? "High active load" : "Moderate active load", `There are ${active} active visible patients. This indicates ${active>=10?"higher operational pressure":"manageable pressure"} in the demo snapshot.`],
    ["Priority interpretation", `${high} high priority`, high ? "The patient list should be sorted by priority first so the user does not rely only on colour." : "No high priority patients are visible under the current filters."],
    ["Boarding interpretation", `${boarding} boarding`, boarding ? "Boarding patients may indicate exit block and should be reviewed with bed management." : "No boarding pressure is visible in the current filtered view."],
    ["Acuity interpretation", `${orangeRed} red or orange`, "Higher acuity patients are more sensitive to delays, so the dashboard keeps them visible in risk queue and table."]
  ];
  document.getElementById("interpretation").innerHTML=items.map(i=>`<div class="insight"><div class="label">${esc(i[0])}</div><div class="value">${esc(i[1])}</div><div class="text">${esc(i[2])}</div></div>`).join("");
}
function renderFlow(rows){
  const date=currentDate();
  const active=rows.filter(p=>p.stage!=="Discharged").sort((a,b)=>priorityScore(b,date)-priorityScore(a,date));
  const stages=["Arrival","Triage","Assessment","Treatment","Decision to admit","Boarding"];
  document.getElementById("queueMap").innerHTML=stages.map(s=>{
    const subset=active.filter(p=>p.stage===s);
    return `<div class="queue-lane"><div class="queue-title">${esc(s)}</div><div class="queue-patients">${subset.length?subset.map(p=>`<div class="patient-chip"><strong>${esc(p.id)}</strong><span class="badge a-${p.acuity.toLowerCase()}">${esc(p.acuity)}</span><br>${fmtM(mFrom(p.arrivalAt,date))}</div>`).join(""):"<div class='patient-chip'>No patients</div>"}</div></div>`;
  }).join("");
  renderPatientTable(rows);
  document.getElementById("rules").innerHTML=DB.rules.map(r=>`<li>${esc(r)}</li>`).join("");
}
function renderPatientTable(rows){
  const date=currentDate(), sort=val("sortSelect") || "priorityDesc";
  let sorted=[...rows];
  if(sort==="priorityDesc") sorted.sort((a,b)=>priorityScore(b,date)-priorityScore(a,date));
  if(sort==="waitDesc") sorted.sort((a,b)=>(mFrom(b.arrivalAt,date)||0)-(mFrom(a.arrivalAt,date)||0));
  if(sort==="acuity"){ const order={Red:1,Orange:2,Yellow:3,Green:4,Blue:5}; sorted.sort((a,b)=>order[a.acuity]-order[b.acuity]);}
  if(sort==="stage") sorted.sort((a,b)=>a.stage.localeCompare(b.stage));
  if(sort==="id") sorted.sort((a,b)=>a.id.localeCompare(b.id));
  const tbody=document.querySelector("#patientTable tbody");
  tbody.innerHTML=sorted.map(p=>{
    const score=priorityScore(p,date);
    return `<tr data-id="${esc(p.id)}" class="${selectedId===p.id?'selected-row':''}">
      <td><strong>${esc(p.id)}</strong></td>
      <td><span class="priority ${priorityBand(score)}">${score}</span></td>
      <td><span class="badge a-${p.acuity.toLowerCase()}">${esc(p.acuity)}</span></td>
      <td>${esc(p.zone)}</td>
      <td><span class="stage ${stageClasses[p.stage]}">${esc(p.stage)}</span></td>
      <td>${fmtM(mFrom(p.arrivalAt,date))}</td>
      <td>${fmtM(mBetween(p.arrivalAt,p.triageAt))}</td>
      <td>${fmtM(mBetween(p.arrivalAt,p.clinicianAt))}</td>
      <td>${esc(p.clinician)}</td>
      <td>${(p.alerts||[]).length?p.alerts.map(a=>`<span class="badge neutral">${esc(a)}</span>`).join(" "):"—"}</td>
    </tr>`;
  }).join("");
  if(!selectedId || !rows.find(p=>p.id===selectedId)) selectedId = rows[0]?.id || null;
  document.querySelectorAll("#patientTable tbody tr").forEach(tr=>{
    tr.addEventListener("click",()=>{ selectedId=tr.dataset.id; renderPatientTable(rows); renderSelected(rows); });
  });
  renderSelected(rows);
}
function renderSelected(rows){
  const date=currentDate();
  const p=rows.find(x=>x.id===selectedId);
  const host=document.getElementById("selectedPatient");
  if(!p){ host.innerHTML=`<div class="summary-box"><div class="label">No patient selected</div><div class="value">No visible row found.</div></div>`; return; }
  const items=[
    ["Patient ID",p.id],["Priority score",priorityScore(p,date)],["Acuity",p.acuity],["Zone and stage",`${p.zone} · ${p.stage}`],
    ["Time in department",fmtM(mFrom(p.arrivalAt,date))],["Door to triage",fmtM(mBetween(p.arrivalAt,p.triageAt))],
    ["Door to clinician",fmtM(mBetween(p.arrivalAt,p.clinicianAt))],["Turnaround",fmtM(mBetween(p.arrivalAt,p.departureAt))],
    ["Clinician",p.clinician],["Alerts",(p.alerts||[]).join(", ") || "None"]
  ];
  host.innerHTML=items.map(i=>`<div class="summary-box"><div class="label">${esc(i[0])}</div><div class="value">${esc(i[1])}</div></div>`).join("");
}
function renderAnalysis(rows){
  const mode=val("analysisMode") || "pressure";
  if(mode==="pressure"){
    lineChart("analysisChart", dateData().trend, [
      {key:"occupancy",label:"Occupancy %",color:"#7c3aed"},
      {key:"breaches",label:"4 h breaches",color:"#dc2626"},
      {key:"handover",label:"Handover delays",color:"#f97316"}
    ],100);
    legend("analysisLegend",[["Occupancy %","#7c3aed"],["4 h breaches","#dc2626"],["Handover delays","#f97316"]]);
  } else if(mode==="flow"){
    lineChart("analysisChart", dateData().trend, [
      {key:"arrivals",label:"Arrivals",color:"#2563eb"},
      {key:"discharges",label:"Discharges",color:"#16a34a"}
    ],16);
    legend("analysisLegend",[["Arrivals","#2563eb"],["Discharges","#16a34a"]]);
  } else {
    lineChart("analysisChart", dateData().trend, [
      {key:"handover",label:"Handover delays",color:"#f97316"},
      {key:"arrivals",label:"Arrivals",color:"#2563eb"}
    ],16);
    legend("analysisLegend",[["Handover delays","#f97316"],["Arrivals","#2563eb"]]);
  }
  document.getElementById("chartInsights").innerHTML=[
    ["Richer analysis added","Charts now compare multiple signals instead of showing only one basic view."],
    ["Target interpretation","Occupancy and handover trends help show pressure before it becomes a 4 hour breach."],
    ["Patient list connection","High priority score links the table to the chart story, reducing reliance on colour only."],
    ["Next improvement","A real clinical version should connect this chart to laboratory, imaging, and bed management feeds."]
  ].map(i=>`<div class="info-card"><strong>${esc(i[0])}</strong><div class="info-sub">${esc(i[1])}</div></div>`).join("");
  barList("breachBars", DB.breachReasons.map(x=>({label:x.label,value:x.value,color:x.color,display:`${x.value}%`})),100);
  const active=rows.filter(p=>p.stage!=="Discharged").length, high=rows.filter(p=>priorityScore(p,currentDate())>=70).length, completed=rows.filter(p=>p.departureAt).length, total=rows.length;
  document.getElementById("filterImpact").innerHTML=[
    ["Visible records",total],["Active patients",active],["High priority",high],["Completed journeys",completed]
  ].map(i=>`<div class="summary-box"><div class="label">${esc(i[0])}</div><div class="value">${esc(i[1])}</div></div>`).join("");
}
function renderStaffing(){
  document.getElementById("staffingCards").innerHTML=DB.staffing.map(s=>{
    const gap=Math.max(0,s.required-s.present), cov=Math.round((s.present/s.required)*100);
    return `<div class="info-card"><div class="info-top"><strong>${esc(s.role)}</strong><span class="status ${gap>1?'high':gap?'medium':'low'}">Gap ${gap}</span></div><div class="info-sub">Required ${s.required} · Present ${s.present} · Agency ${s.agency}</div><div class="bar-track" style="margin-top:10px"><div class="bar-fill" style="width:${cov}%;background:#2563eb"></div></div></div>`;
  }).join("");
  const hours=["08:00","09:00","10:00","11:00","12:00"];
  document.getElementById("coverageHeatmap").innerHTML=`<div></div>${hours.map(h=>`<div class="heat-head">${h}</div>`).join("")}`+DB.staffingHeat.map(r=>`<div class="heat-head">${esc(r.role)}</div>${hours.map(h=>`<div class="heat-cell ${r[h]>=80?'good':r[h]>=70?'warn':'bad'}">${r[h]}%</div>`).join("")}`).join("");
  document.querySelector("#bedTable tbody").innerHTML=DB.bedStates.map(b=>`<tr><td>${esc(b.area)}</td><td>${b.open}</td><td>${b.occupied}</td><td>${b.cleaning}</td><td>${b.blocked}</td></tr>`).join("");
  barList("bedTurnaround", DB.bedTurnarounds.map(b=>({label:b.bed,value:b.minutes||0,color:b.minutes? "#0f766e":"#cbd5e1",display:b.minutes?`${b.minutes} min`:b.status})),40);
  document.querySelector("#breakTable tbody").innerHTML=DB.breakPlanner.map(b=>`<tr><td>${esc(b.time)}</td><td>${esc(b.role)}</td><td>${esc(b.zone)}</td></tr>`).join("");
  document.getElementById("riskRegister").innerHTML=DB.risks.map(r=>`<div class="info-card"><div class="info-top"><strong>${esc(r.title)}</strong><span class="status ${severityClass(r.severity)}">${esc(r.severity)}</span></div><div class="info-sub">${esc(r.detail)}</div></div>`).join("");
}
function renderIncident(){
  document.getElementById("incidentSummary").innerHTML=[
    ["Incident","Ambulance queue and bed saturation"],["Status","Active"],["Declared at","09:05"],["Incident lead","Nurse in charge"],["Objective","Reduce handover delay"],["Current level","High pressure"]
  ].map(i=>`<div class="summary-box"><div class="label">${esc(i[0])}</div><div class="value">${esc(i[1])}</div></div>`).join("");
  document.querySelector("#actionTable tbody").innerHTML=DB.actions.map((a,idx)=>{
    const status = actionStatuses[idx] || a.status;
    return `<tr><td>${esc(a.action)}</td><td>${esc(a.owner)}</td><td>${esc(a.due)}</td><td><select data-action="${idx}" class="mini-select status-edit"><option ${status==="Open"?"selected":""}>Open</option><option ${status==="In progress"?"selected":""}>In progress</option><option ${status==="Done"?"selected":""}>Done</option></select></td></tr>`;
  }).join("");
  document.querySelectorAll(".status-edit").forEach(sel => {
    sel.addEventListener("change", () => {
      actionStatuses[Number(sel.dataset.action)] = sel.value;
      safeSave("ew_action_statuses", actionStatuses);
    });
  });
  lineChart("incidentPressureChart", dateData().trend, [
    {key:"occupancy",label:"Occupancy %",color:"#7c3aed"},
    {key:"handover",label:"Handover",color:"#f97316"},
    {key:"breaches",label:"Breaches",color:"#dc2626"}
  ],100);
  legend("incidentLegend",[["Occupancy %","#7c3aed"],["Handover","#f97316"],["Breaches","#dc2626"]]);
  document.getElementById("checklist").innerHTML=DB.checklist.map((c,i)=>`<div class="check-item ${checklistDone[i] ? "done" : ""}" data-check="${i}"><div class="check-square"></div><div class="check-text">${esc(c)}</div></div>`).join("");
  document.querySelectorAll(".check-item").forEach(el=>el.addEventListener("click",()=>{
    el.classList.toggle("done");
    checklistDone[el.dataset.check] = el.classList.contains("done");
    safeSave("ew_checklist_done", checklistDone);
  }));
  document.querySelector("#commTable tbody").innerHTML=DB.communications.map(c=>`<tr><td>${esc(c.audience)}</td><td>${esc(c.message)}</td><td>${esc(c.time)}</td></tr>`).join("");
}
function renderFeedback(){
  document.getElementById("feedbackThemes").innerHTML=DB.feedbackThemes.map(f=>`<div class="info-card"><div class="info-top"><strong>${esc(f.title)}</strong><span class="status ${severityClass(f.severity)}">${esc(f.severity)}</span></div><div class="info-sub">${esc(f.detail)}</div></div>`).join("");
  document.getElementById("changeLog").innerHTML=DB.changeLog.map(f=>`<div class="info-card"><strong>${esc(f.title)}</strong><div class="info-sub">${esc(f.detail)}</div></div>`).join("");
}
function lineChart(hostId, rows, series, maxValue){
  const host=document.getElementById(hostId), w=host.clientWidth||520, h=host.clientHeight||260, pad=30;
  const innerW=w-pad*2, innerH=h-pad*2, max=maxValue || Math.max(...rows.flatMap(r=>series.map(s=>r[s.key])),1);
  const x=i=>pad+(rows.length===1?innerW/2:(innerW*i/(rows.length-1)));
  const y=v=>pad+innerH-(v/max)*innerH;
  const grid=[.25,.5,.75,1].map(g=>`<line x1="${pad}" y1="${pad+innerH-innerH*g}" x2="${w-pad}" y2="${pad+innerH-innerH*g}" stroke="#e2e8f0"/><text x="${pad-8}" y="${pad+innerH-innerH*g+4}" font-size="10" text-anchor="end" fill="#64748b">${Math.round(max*g)}</text>`).join("");
  const labels=rows.map((r,i)=>`<text x="${x(i)}" y="${h-8}" font-size="10" text-anchor="middle" fill="#64748b">${r.hour}</text>`).join("");
  const lines=series.map(s=>{
    const pts=rows.map((r,i)=>`${x(i)},${y(r[s.key])}`).join(" ");
    const dots=rows.map((r,i)=>`<circle cx="${x(i)}" cy="${y(r[s.key])}" r="3.5" fill="${s.color}"/>`).join("");
    return `<polyline fill="none" stroke="${s.color}" stroke-width="3" points="${pts}" stroke-linecap="round" stroke-linejoin="round"/>${dots}`;
  }).join("");
  host.innerHTML=`<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none"><rect x="0" y="0" width="${w}" height="${h}" rx="18" fill="#fbfdff"/>${grid}<line x1="${pad}" y1="${pad}" x2="${pad}" y2="${h-pad}" stroke="#cbd5e1"/><line x1="${pad}" y1="${h-pad}" x2="${w-pad}" y2="${h-pad}" stroke="#cbd5e1"/>${lines}${labels}</svg>`;
}
function legend(hostId, items){ document.getElementById(hostId).innerHTML=items.map(i=>`<span class="legend-item"><span class="legend-dot" style="background:${i[1]}"></span>${esc(i[0])}</span>`).join("");}
function exportCsv(){
  const headers=["Patient","Priority","Acuity","Zone","Arrival mode","Stage","Time in dept","Door to triage","Door to clinician","Clinician","Alerts"];
  const date=currentDate();
  const lines=[headers.join(",")];
  visibleRows.forEach(p=>{
    const row=[p.id,priorityScore(p,date),p.acuity,p.zone,p.arrivalMode,p.stage,fmtM(mFrom(p.arrivalAt,date)),fmtM(mBetween(p.arrivalAt,p.triageAt)),fmtM(mBetween(p.arrivalAt,p.clinicianAt)),p.clinician,(p.alerts||[]).join("; ")];
    lines.push(row.map(v=>`"${String(v).replace(/"/g,'""')}"`).join(","));
  });
  const blob=new Blob([lines.join("\n")],{type:"text/csv"});
  const a=document.createElement("a");
  a.href=URL.createObjectURL(blob);
  a.download="emergency_ward_feedback_revised_patient_flow.csv";
  a.click();
  URL.revokeObjectURL(a.href);
}
function setupTabs(){
  document.querySelectorAll(".tab").forEach(t=>t.addEventListener("click",()=>{
    document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active")); t.classList.add("active");
    document.querySelectorAll(".panel").forEach(x=>x.classList.remove("active")); document.getElementById("panel-"+t.dataset.tab).classList.add("active");
    setTimeout(()=>renderAll(),30);
  }));
}
function setupEvents(){
  ["dateFilter","shiftFilter","zoneFilter","acuityFilter","arrivalFilter","viewFilter","searchFilter","sortSelect","analysisMode"].forEach(id=>{
    const el=document.getElementById(id);
    if(el) el.addEventListener(id==="searchFilter"?"input":"change", renderAll);
  });
  document.getElementById("resetBtn").addEventListener("click",()=>{
    document.getElementById("dateFilter").value=Object.keys(DB.dates)[0];
    document.getElementById("shiftFilter").value="All";
    document.getElementById("zoneFilter").value="All";
    document.getElementById("acuityFilter").value="All";
    document.getElementById("arrivalFilter").value="All";
    document.getElementById("viewFilter").value="All";
    document.getElementById("searchFilter").value="";
    selectedId=null;
    renderAll();
  });
  document.getElementById("exportBtn").addEventListener("click",exportCsv);
  window.addEventListener("resize",()=>setTimeout(renderAll,80));
}
function init(){
  setupSelects();
  setupTabs();
  setupEvents();
  renderAll();
}
document.addEventListener("DOMContentLoaded", init);
