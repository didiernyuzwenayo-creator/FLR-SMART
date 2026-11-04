# FLR SMART – My Field Assistant

**Version:** 1.0 – Field Officer Edition  
**Status:** Personal prototype / early development

## Current prototype features
- Dashboard with record counts and recent entries.
- Activity, sample farmer follow-up, expanded tree monitoring, and daily report forms.
- Tree monitoring fields for species, planting date, monitoring date, sample site label, planting method, condition, planted quantity, and observed living quantity.
- Dashboard charts for monthly activities and planting trends, plus a clearly qualified survival estimate based on the latest observation per species and sample site.
- Date-range field summaries and monthly field reports with print / Save as PDF.
- Field Calendar for planned activities, optional times, categories, sample areas, status tracking, and in-app overdue / due-today indicators.
- English and Kinyarwanda interface switching.
- Local browser storage, JSON backup export, and CSV exports for all records or individual sections (CSV files open in Excel and Google Sheets).
- Responsive layout for phones, tablets, and computers.
- Basic service-worker caching of the app shell after the first successful load.

## Important limitations
- This is a personal prototype, **not an officially approved Tubura or One Acre Fund system**.
- Use fictional/sample information only. Do not enter confidential work information, real farmer personal data, employee data, or sensitive coordinates.
- Records stay in the browser on the device used. There is no user account, cloud database, secure multi-user access, or cross-device synchronization.
- Calendar reminders are visible only inside the app; there are no push notifications or background alarms.
- Service-worker caching is not the same as full offline data synchronization. The app shell may reopen after it has loaded successfully once, but this must be tested on the target browser.
- No KoboToolbox, ODK, Google Forms/Sheets, GIS, or AI integration is implemented.
- The prototype is not ready for operational or organizational use.

## Next development steps
1. Test both languages, daily and monthly reports, forms, and CSV exports on mobile and desktop.
2. Test repeated tree observations and older saved records.
3. Review data protection and authorization requirements before adding real data.
4. Consider authentication and a database only after the prototype is validated.

## Technology
HTML, CSS, JavaScript, browser localStorage, and a basic service worker.