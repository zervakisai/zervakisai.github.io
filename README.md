# zervakisai.github.io

Personal portfolio / mission-control site — ML × Aerospace.

## Features

- **Interactive 3D mission control** (Three.js) — drone flies between waypoints, each waypoint briefs one of my projects.
- **AI chat with me** — keyword-matched CV knowledge base answers recruiter questions as me, with a typewriter stream.
- **Cyberpunk / terminal aesthetic** — matrix rain, CRT scanlines, glitch effects, boot sequence.
- **Full CV content** — OHB Hellas, PhD, FLARE (Drones, MDPI 2026), HAR-Drive, LightningText, Formula Student, skills.
- **Static, self-contained** — one `index.html`, one CDN dep (three.js). Fine for GitHub Pages.

## Deploy

This repo is served by GitHub Pages at `https://zervakisai.github.io/`.

```bash
git add -A
git commit -m "Redesign: cyberpunk mission-control + 3D scene + AI chat"
git push origin main
```

Pages will update in ~1 min.

## Local preview

```bash
python3 -m http.server 8000
# open http://127.0.0.1:8000
```

## Files

| File | Purpose |
|---|---|
| `index.html` | Main portfolio (single-file app). |
| `har-drive.html`, `lightningtext.html`, `formula-student.html`, `predictive-maintenance.html` | Legacy project detail pages, linked from `index.html`. |
| `report.pdf`, `BD.pdf`, `MLDS (7).pdf`, `BD.ipynb`, `MLDS (2).ipynb` | Project artefacts referenced in the projects section. |

## Updating the AI chat

The knowledge base is the `KB` array in the inline `<script>` of `index.html`. Each entry is:

```js
{ k: ['keyword','another keyword'], r: 'Answer in lightweight markdown.' }
```

Add an entry, push, done.
