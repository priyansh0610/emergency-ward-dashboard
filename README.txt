Emergency Ward Dashboard Presentable Full Package

Files included
1. index.html
2. styles.css
3. app.js
4. README.txt

How to use
1. Extract the zip folder
2. Open index.html in Chrome, Edge, or Firefox
3. No installation is required
4. Use the left navigation to move between all 4 detailed screens:
   - Overview
   - Patient Flow
   - Staffing and Beds
   - Incident Command

What is included
- Detailed version of all 4 wireframe screens
- Presentable visual styling
- Demo data for patients, staffing, beds, actions, communications, and incidents
- Filters for zone, acuity, arrival mode, date, shift, and search
- Charts using Chart.js
- CSV export for patient flow data
- Automatically calculated waiting and turnaround time metrics

Main formulas used
1. Patient turnaround time = departureAt − arrivalAt
2. Door to triage = triageAt − arrivalAt
3. Door to clinician = clinicianAt − arrivalAt
4. Bed turnaround time = readyAt − vacatedAt
5. Average turnaround time = Σ individual turnaround times ÷ number of completed events

How to customize
- Open app.js
- Replace the demoData object with your own data
- Keep date and time values in ISO format such as 2026-03-18T08:22:00

Presentation tip
For screenshots or portfolio submission, use the browser at full screen width so the dashboard resembles a complete ward operations console.
