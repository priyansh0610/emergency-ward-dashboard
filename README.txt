Emergency Ward Dashboard - Feedback Revised Version

How to open
1. Extract this zip file.
2. Open index.html in Chrome, Edge, or Firefox.
3. No installation is required.

Why this version was revised
This version responds to Cycle 2 feedback. The strongest feedback themes were:
1. the revised design was clearer and calmer than the first version
2. the patient list table still needed improvement
3. relying only on colour was not enough for sorting patients
4. charts were useful but still slightly basic
5. filters were clearer but could be more interactive
6. the glossary and metric explanations were helpful

Main changes made
1. Added sortable patient list table.
2. Added numerical priority score.
3. Added high priority only filter.
4. Added chart analysis page with richer operational insights.
5. Added breach reason analysis.
6. Added filter impact panel.
7. Added staffing coverage heatmap.
8. Made incident checklist items functional.
9. Added feedback applied page for portfolio evidence.
10. Kept the calm, lighter layout because testers liked it.

Main formulas used
1. Patient turnaround time = departureAt − arrivalAt
2. Door to triage = triageAt − arrivalAt
3. Door to clinician = clinicianAt − arrivalAt
4. Bed turnaround time = readyAt − vacatedAt
5. Priority score = acuity score + waiting time score + alert score + boarding score

Important note
This dashboard is an educational prototype only. All patient data is fictional demo data and must not be used for real patient care.

Additional QA improvement
- Action tracker status changes and incident checklist ticks now persist in the same browser through local storage where the browser allows it.
