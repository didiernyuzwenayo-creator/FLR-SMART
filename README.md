# FLR SMART — Field & Learning Assistant

FLR SMART is a mobile-friendly Field Officer workspace for learning and organizing basic Forest Landscape Restoration (FLR) field activities.

## Current Field Officer workspace

- Dashboard with summary cards and quick actions.
- Farmer registration and farmer records.
- Tree distribution records and allocation review.
- Planting survey for recording planted trees.
- Field report creation and review.
- Spacing calculator for estimating planting points from plot dimensions and spacing.
- FLR Learning Center with short lessons and knowledge checks.
- English and Kinyarwanda language switching.
- Responsive layout for phones, tablets and desktop browsers.
- Local browser storage for the records entered in this prototype.

## Design and files

The selected dashboard design is implemented as a shared, separate set of files:

- `index.html` — page structure and application shell.
- `style.css` — colors, cards, navigation and responsive layout.
- `app.js` — dashboard rendering, forms, language switching and local record handling.
- `manifest.json` — installable web-app metadata.
- `sw.js` — service worker with an updated app cache and offline shell fallback.

The layout follows the supplied FLR SMART dashboard reference: green-and-white theme, compact top bar, summary cards and three-column quick actions on tablet-sized screens.

## Important limitations

- This is a development prototype. It is **not an officially approved Tubura or One Acre Fund system**.
- Dashboard figures and example farmer entries are sample/demo data. They must not be treated as official project results.
- Records are saved in the browser on the current device only. There is no secure account system, shared database, supervisor approval, cross-device sync or server backup yet.
- Do not enter real farmer personal information, confidential project data or sensitive coordinates until an approved secure backend and access controls are implemented.
- Technical species, spacing, package and monitoring standards must be checked against the latest approved FLR guidance before field use.

## Next development phase

1. Validate every form and dashboard action on phones and tablets.
2. Confirm the official FLR field indicators and approved technical guidance.
3. Set up a separate FLR SMART database and secure multi-user authentication (not the MOTARI project).
4. Add role approval and controlled dashboards for Field Officers, Supervisors, Project Managers and higher management.
5. Test backup, privacy, authorization and data recovery before operational use.
