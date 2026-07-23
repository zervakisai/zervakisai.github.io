# zervakisai.github.io

Personal site of **Konstantinos Zervakis** — AI Engineer (production ML, LLMs & multi-agent systems).
A single-page, zero-build static site: dark "Neural Obsidian" aesthetic, case files as
**problem → solution → result**, and a **live** GitHub "hot repos" feed.

## Files

| File | What it is |
|------|-----------|
| `index.html` | Structure & copy |
| `styles.css` | All design (CSS variables, glow, glass, animations) |
| `app.js` | Interactions + live GitHub feed. **All content lives in the `PROJECTS`, `STACK`, and `BEYOND` arrays at the top** — edit there. |
| `.nojekyll` | Tells GitHub Pages to serve files as-is |

## Edit the content

Open `app.js` and edit the data blocks near the top:

- `PROJECTS` — your case files (title, subtitle, tags, `problem`, `solution`, `result`, `metric`, `repo`, `private`). HTML is allowed in `problem/solution/result`.
- `STACK` — skill groups. A trailing `*` on a tag renders it highlighted (e.g. `'Pydantic AI*'`).
- `BEYOND` — the "beyond the code" cards.
- `CONFIG` — GitHub username and the "hot repos" window (`hotWindowDays`, `hotMinStars`, `hotCount`).

## Preview locally

```bash
cd ~/Documents/page
python3 -m http.server 8080
# open http://localhost:8080
```

(Open via a server, not `file://` — the GitHub API `fetch` needs `http`.)

## Deploy to GitHub Pages

This is a **user site**, so the repo must be named exactly `zervakisai.github.io`.

```bash
cd ~/Documents/page
git init
git add -A
git commit -m "Launch zervakisai.github.io"
git branch -M main
git remote add origin https://github.com/zervakisai/zervakisai.github.io.git
git push -u origin main
```

Then GitHub → repo **Settings → Pages → Build and deployment → Source: Deploy from a branch → `main` / root**.
Live at **https://zervakisai.github.io** within a minute or two.

## The "hot repos" feed

GitHub has no official *trending* API, so the site uses the official **Search API**: the
fastest-rising repositories created in the last `hotWindowDays` days, sorted by stars.
It's genuinely live on every page load. Unauthenticated search is rate-limited (~10 req/min),
which is plenty for page views; the feed degrades gracefully with a retry if it's ever throttled.

## Notes on featured projects

- **AIRTH** is presented as a Pydantic AI case file but linked as a **private repo** (no public
  link, no confidential brief/data) since the original is a confidential exercise.
- The agent projects (AIRTH, AgenticRAG) lead with **Pydantic AI**; FLARE and QBench are research
  /benchmark work and are described accurately as such.
