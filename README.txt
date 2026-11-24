MY MechMaster AI — Phase 1 starter

WHAT THIS IS
A phone-friendly Progressive Web App (PWA) starter for a personal Mechanical Engineering learning workspace. It includes a dashboard, subject directory, CAD learning outline, workshop tool notes, stress calculator, YouTube search shortcuts, AI provider links with a mechanical-engineering prompt helper, and locally saved notes.

IMPORTANT LIMITATIONS
- This is a PWA, not a native APK yet.
- The AI buttons open ChatGPT, Gemini and Claude websites. This starter does not merge their models or provide direct API access.
- The engineering-only prompt is a request to the external AI, not a technical restriction enforced by those services.
- The offline cache covers the app shell. External AI services, YouTube, and internet searches require connectivity.
- Saved notes stay in this browser on this device. Clearing browser data may erase them.
- Solid Edge V18 is desktop Windows software; this app provides learning material, not the Solid Edge program.
- This is a starter educational library, not a complete verified engineering textbook.

ANDROID + GITHUB PAGES SETUP
1. Download and extract the ZIP on your phone.
2. Sign in to GitHub and create a new repository named my-mechmaster-ai.
3. Upload the five project files and README.txt from the extracted folder to the repository root:
   index.html, styles.css, app.js, manifest.json, sw.js, icon.svg.
4. Open repository Settings > Pages.
5. Under Build and deployment choose Deploy from a branch.
6. Choose branch main and folder /(root), then Save.
7. Wait for GitHub Pages to publish. Open the Visit site link.
8. In Chrome on Android, open the site menu (three dots) and choose Install app or Add to Home screen.
9. Open the installed app once while online. Then test offline by turning off Wi-Fi/mobile data and reopening it.

UPDATES
After changing files in GitHub, wait for Pages to publish. If an old version remains, refresh the site or clear that site's cached data; the service worker cache version may need to be incremented in sw.js.

NEXT PHASE
Add chapter content, formulas, verified diagrams, quizzes, CAD exercises, file/PDF support, and a secure backend before connecting AI APIs. Never put provider API keys in app.js or any public repository.
