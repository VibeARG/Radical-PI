# Radical-PI

A fictional 2026 private-investigation portal, built with React, TypeScript and Vite. In-universe website supplier: GRÅZON.

## Development

- `npm install`
- `npm run dev`
- `npm run build` — TypeScript checks and production bundle
- `npm run lint` — Oxlint
- `npm run preview` — local production preview

## Content

- `src/content/posts.ts`: add field notes with id, title, ISO date, excerpt, body and optional image URL. Keep IDs unique. Entries are currently presented as drafts.
- `src/config/telephone.ts`: set `recordingSrc` to a supplied recording URL (for example `/audio/office.mp3`, with the file inside `public/audio/`). Add the supplied transcript in `transcript`.
- `src/components/Switchboard.tsx`: reusable native modal dialog. Call connects, then Play Recording requires a separate user gesture. Null audio configuration makes no audio requests. Hang Up, close and unmount stop playback and clear the timer. Escape closes the dialog and focus returns to the opener.
- `src/App.tsx`: portal sections, reusable panels and lightweight SVG decoration.
- `src/App.css` and `src/index.css`: responsive layout and visual tokens.

No backend, tracking, real telephone integration or deployment is configured by this implementation. The visitor counter is a fixed local simulation.
