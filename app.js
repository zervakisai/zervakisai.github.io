/* =====================================================================
   Konstantinos Zervakis — zervakisai.github.io
   Interactions, live GitHub feed, and content data.
   Edit the DATA blocks below to update the site — no build step.
   ===================================================================== */

'use strict';

const CONFIG = {
  githubUser: 'zervakisai',
  // "Hot repos" = fastest-rising repositories created in the last N days.
  // (GitHub has no official trending API; this is the robust, official way.)
  hotWindowDays: 30,
  hotMinStars: 100,
  hotCount: 12,
};

/* ---------------------------------------------------------------------
   DATA — CASE FILES (problem → solution → result)
   Agent projects lead with Pydantic AI (same architecture as AIRTH).
   --------------------------------------------------------------------- */
const PROJECTS = [
  {
    title: 'AIRTH',
    subtitle: 'Agronomic decision agents for a vineyard',
    framework: 'Pydantic AI',
    tags: ['Pydantic AI', 'pydantic-graph', 'typed contracts', 'uv', 'OTel / Logfire'],
    problem:
      '“Should I irrigate? Can I spray?” A grower’s daily calls hide real cost — a wrong one wastes scarce water, or sprays into the wrong window and risks the vintage. A raw LLM will confidently invent the agronomy.',
    solution:
      'A Pydantic AI graph of three typed agents — Irrigation, Spray, and a Coordinator that reconciles them — sitting on an <em>exact</em> deterministic agronomy core. The LLM is a bounded judgement-and-explanation layer; because the physics is ground truth, every decision is scored precisely, not guessed by an LLM judge. Retries owned in one layer; offline-testable with <code>TestModel</code>.',
    result: 'Full 3-agent advisory runs end-to-end via <strong>pydantic-graph</strong>, confidence bounded by data quality — and <strong>a zero-key deterministic fallback</strong> means <code>uv run airth</code> always produces output.',
    metric: '3 typed agents · fully offline-testable',
    repo: null,
    private: true,
  },
  {
    title: 'AgenticRAG',
    subtitle: 'Multi-agent RAG orchestrator with a custom MCP server',
    framework: 'Pydantic AI',
    tags: ['Pydantic AI', 'MCP / FastMCP', 'DAG orchestration', 'quality gates', 'JSON-RPC 2.0'],
    problem:
      'Single LLMs collapse on complex, multi-step questions — and let hallucinations walk straight through to the user.',
    solution:
      'A production orchestrator that decomposes a query into a pipeline of specialist agents — Researcher, Analyst, Coder, Writer — with DAG-based execution and quality gates that catch hallucinations before they ship. Tools exposed over a custom MCP server (FastMCP, JSON-RPC 2.0, 12 specialist tools).',
    result: '<strong>83.9% F1</strong> on complex multi-step queries — <strong>+42.7%</strong> over a single-agent baseline · 88.4% source relevance · 91.7% quality-gate pass rate.',
    metric: '+42.7% F1 vs single-agent',
    repo: 'https://github.com/zervakisai/agentic-rag-orchestrator',
    private: false,
  },
  {
    title: 'SmartFactory-RAG',
    subtitle: 'Industrial AI — RAG + predictive maintenance + live sensors',
    framework: null,
    tags: ['RAG', 'BGE-M3', 'hybrid retrieval', 'predictive maintenance', 'FastAPI'],
    problem:
      'On a factory floor, one hour of downtime costs €50,000+ — yet teams buy three separate vendors for document retrieval, failure prediction, and sensor monitoring.',
    solution:
      'One assistant that unifies technical-document retrieval, equipment-failure prediction, and live sensor monitoring. Hybrid retrieval — BM25 + BGE-M3 + a cross-encoder reranker — beats a dense-only baseline by 23%.',
    result: '<strong>94.2%</strong> retrieval accuracy · <strong>0.91 F1</strong> on failure prediction · 120 ms p95 latency · 10K msg/s sensor throughput.',
    metric: '94.2% retrieval · 120 ms p95',
    repo: 'https://github.com/zervakisai/smart-factory-rag',
    private: false,
  },
  {
    title: 'FLARE Benchmark',
    subtitle: 'Risk-parameterised UAV path planning under uncertainty',
    framework: null,
    tags: ['reinforcement learning', 'benchmark', 'risk coefficient ρ', 'statistics', 'Python'],
    problem:
      'Safety-tuned planners <em>paradoxically</em> increase total mission cost by 23–38% when timing constraints exist — and nobody could audit the safety-vs-throughput trade-off.',
    solution:
      'A deterministic wildfire-response benchmark for risk-parameterised UAV path planning, with a configurable risk coefficient ρ that makes the trade-off explicit and auditable.',
    result: '<strong>450+</strong> experimental runs · Friedman χ²(4) = 190.8 (p &lt; 0.001), Wilcoxon (Bonferroni), Cliff’s δ. Submitted to <strong>Sensors (MDPI) 2026</strong> — lead author.',
    metric: 'Sensors / MDPI 2026 · 450+ runs',
    repo: 'https://github.com/zervakisai/uavplan',
    private: false,
  },
  {
    title: 'QBench',
    subtitle: 'Quantum-classical ML benchmark suite',
    framework: null,
    tags: ['Quantum ML', 'PennyLane', 'Ray', 'ONNX', 'Apache-2.0'],
    problem:
      'Quantum-ML hype is everywhere; rigorous, fair comparison isn’t.',
    solution:
      'An open-source framework for head-to-head evaluation of quantum vs classical ML on sequential decision-making — equal compute budgets, seeded and checkpointed for full reproducibility.',
    result: 'Demšar (2006) methodology across <strong>12 algorithms × 7 environments</strong> · distributed training on Ray · ONNX export for deployment.',
    metric: '12 algos × 7 envs · reproducible',
    repo: 'https://github.com/zervakisai/quantum-ml-pipeline',
    private: false,
  },
];

/* ---------------------------------------------------------------------
   DATA — STACK
   --------------------------------------------------------------------- */
const STACK = [
  { group: 'Generative AI & Agents', tags: ['Pydantic AI*', 'MCP / FastMCP', 'Claude API', 'OpenAI API', 'Anthropic Agent SDK', 'LangChain', 'LlamaIndex'] },
  { group: 'RAG & Retrieval', tags: ['BGE-M3', 'FAISS', 'ChromaDB', 'hybrid search', 'rerankers', 'promptfoo'] },
  { group: 'Machine Learning', tags: ['PyTorch', 'scikit-learn', 'LightGBM', 'JAX / Flax', 'ONNX', 'reinforcement learning', 'time-series'] },
  { group: 'MLOps & Cloud', tags: ['OpenTelemetry', 'Langfuse', 'Prometheus', 'Grafana', 'MLflow', 'Docker', 'Kubernetes', 'FastAPI', 'Ray'] },
  { group: 'Quantum ML', tags: ['PennyLane', 'Variational Quantum Circuits', 'QAE-CVaR'] },
  { group: 'Languages', tags: ['Python (async, typed)', 'C / C++', 'SQL', 'MATLAB', 'Bash'] },
];

/* ---------------------------------------------------------------------
   DATA — BEYOND THE CODE
   --------------------------------------------------------------------- */
const BEYOND = [
  { icon: '🤺', kicker: 'Discipline', title: '2× Silver Medalist — National & Global Fencing', body: 'Épée teaches what shipping does: read the opening, commit fully, and own the outcome in real time.' },
  { icon: '🎙️', kicker: 'SKAI Crete FM', title: 'Live national radio on AI & autonomous systems', body: 'Featured guest on the trajectory of AI, autonomous systems, and emerging aerospace career paths.' },
  { icon: '🎧', kicker: 'Long-form podcast', title: 'Translating agentic AI for non-specialists', body: 'Turned complex agentic-AI concepts and current industry shifts into something a general professional audience could actually use.' },
  { icon: '✍️', kicker: 'Medium essay', title: '“From the Bronze Age to the Periclean Era”', body: 'Argues the executive KPI of AI is shifting from productivity to orchestration integrity — introducing FLARE’s ρ as a managerial tuning knob.' },
];

/* =====================================================================
   Helpers
   ===================================================================== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

/* =====================================================================
   Render — case files
   ===================================================================== */
function renderCases() {
  const el = $('#cases');
  if (!el) return;
  el.innerHTML = PROJECTS.map((p, i) => {
    const num = String(i + 1).padStart(2, '0');
    const tags = p.tags.map((t) => `<span class="case-tag">${esc(t)}</span>`).join('');
    const badge = p.framework ? `<span class="case-tag" style="color:#04120F;background:var(--cyan);border-color:var(--cyan)">${esc(p.framework)}</span>` : '';
    const link = p.private
      ? `<span class="case-tag" title="Private repository">🔒 private repo</span>`
      : `<a class="case-tag" href="${p.repo}" target="_blank" rel="noopener">View on GitHub ↗</a>`;
    return `
      <article class="case reveal" data-reveal>
        <div class="case-aside">
          <span class="case-num">CASE ${num}</span>
          <h3 class="case-title">${esc(p.title)}</h3>
          <p class="muted" style="color:var(--muted);font-size:.92rem">${esc(p.subtitle)}</p>
          <div class="case-tags">${badge}${tags}</div>
          <div class="case-tags" style="margin-top:auto">${link}</div>
        </div>
        <div class="case-body">
          <div class="psr psr-p"><span class="psr-key">Problem</span><span class="psr-val">${p.problem}</span></div>
          <div class="psr-divider"></div>
          <div class="psr psr-s"><span class="psr-key">Solution</span><span class="psr-val">${p.solution}</span></div>
          <div class="psr-divider"></div>
          <div class="psr psr-r"><span class="psr-key">Result</span><span class="psr-val">${p.result}<br><span style="font-family:var(--font-mono);font-size:.8rem;color:var(--muted)">↳ ${esc(p.metric)}</span></span></div>
        </div>
      </article>`;
  }).join('');
}

function renderStack() {
  const el = $('#stack-grid');
  if (!el) return;
  el.innerHTML = STACK.map((g, i) => {
    const tags = g.tags.map((t) => {
      const hot = t.endsWith('*');
      const label = hot ? t.slice(0, -1) : t;
      return `<span class="stack-tag${hot ? ' hot' : ''}">${esc(label)}</span>`;
    }).join('');
    return `<div class="stack-group reveal" data-reveal data-delay="${i % 3}"><h3>${esc(g.group)}</h3><div class="stack-tags">${tags}</div></div>`;
  }).join('');
}

function renderBeyond() {
  const el = $('#beyond-grid');
  if (!el) return;
  el.innerHTML = BEYOND.map((b, i) => `
    <div class="beyond-card reveal" data-reveal data-delay="${i % 4}">
      <span class="beyond-icon">${b.icon}</span>
      <span class="beyond-kicker">${esc(b.kicker)}</span>
      <h3>${esc(b.title)}</h3>
      <p>${esc(b.body)}</p>
    </div>`).join('');
}

/* =====================================================================
   Live GitHub "Hot Repos"
   ===================================================================== */
const LANG_COLORS = {
  TypeScript: '#3178c6', JavaScript: '#f1e05a', Python: '#3572A5', Rust: '#dea584',
  Go: '#00ADD8', 'C++': '#f34b7d', C: '#555555', Java: '#b07219', 'Jupyter Notebook': '#DA5B0B',
  Ruby: '#701516', PHP: '#4F5D95', Swift: '#F05138', Kotlin: '#A97BFF', Shell: '#89e051',
  HTML: '#e34c26', CSS: '#563d7c', 'C#': '#178600', Dart: '#00B4AB', Zig: '#ec915c',
};

let currentLang = '';

function daysAgoISO(days) {
  const d = new Date(Date.now() - days * 86400000);
  return d.toISOString().slice(0, 10);
}
function fmtStars(n) {
  return n >= 1000 ? (n / 1000).toFixed(1).replace(/\.0$/, '') + 'k' : String(n);
}
function daysSince(iso) {
  const d = Math.floor((Date.now() - new Date(iso).getTime()) / 86400000);
  return d <= 0 ? 'today' : d === 1 ? '1 day ago' : `${d} days ago`;
}

function skeletons(n = 8) {
  return Array.from({ length: n }).map(() => `
    <div class="repo skeleton">
      <div class="repo-top"><span class="sk sk-line" style="width:30px"></span><span class="sk sk-line" style="width:48px"></span></div>
      <span class="sk sk-line" style="width:70%;height:18px"></span>
      <span class="sk sk-line" style="width:100%"></span>
      <span class="sk sk-line" style="width:85%"></span>
      <div class="repo-foot"><span class="sk sk-line" style="width:64px"></span><span class="sk sk-line" style="width:64px"></span></div>
    </div>`).join('');
}

async function loadHotRepos() {
  const grid = $('#repos');
  const meta = $('#hot-meta');
  if (!grid) return;
  grid.innerHTML = skeletons();
  if (meta) meta.textContent = 'fetching signal…';

  let q = `stars:>${CONFIG.hotMinStars} created:>${daysAgoISO(CONFIG.hotWindowDays)}`;
  if (currentLang) q += ` language:${currentLang}`;
  const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(q)}&sort=stars&order=desc&per_page=${CONFIG.hotCount}`;

  try {
    const res = await fetch(url, { headers: { Accept: 'application/vnd.github+json' } });
    if (!res.ok) throw new Error(res.status === 403 ? 'rate-limited' : `HTTP ${res.status}`);
    const data = await res.json();
    const items = data.items || [];
    if (!items.length) {
      grid.innerHTML = `<div class="repo-empty">No repositories matched — try another language.</div>`;
      if (meta) meta.textContent = '0 results';
      return;
    }
    grid.innerHTML = items.map((r, i) => {
      const lang = r.language || '—';
      const color = LANG_COLORS[r.language] || '#5EEAD4';
      const desc = r.description ? esc(r.description) : 'No description provided.';
      return `
        <a class="repo" href="${r.html_url}" target="_blank" rel="noopener" style="text-decoration:none">
          <div class="repo-top">
            <span class="repo-rank">#${String(i + 1).padStart(2, '0')}</span>
            <span class="repo-stars">★ ${fmtStars(r.stargazers_count)}</span>
          </div>
          <div class="repo-name"><span class="repo-owner">${esc(r.owner?.login || '')}/</span>${esc(r.name)}</div>
          <div class="repo-desc">${desc}</div>
          <div class="repo-foot">
            <span class="repo-lang"><span class="lang-dot" style="background:${color}"></span>${esc(lang)}</span>
            <span class="repo-gain">↑ new · ${daysSince(r.created_at)}</span>
          </div>
        </a>`;
    }).join('');
    if (meta) {
      const t = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      meta.textContent = `${items.length} rising repos · updated ${t}`;
    }
  } catch (err) {
    grid.innerHTML = `<div class="repo-error">Couldn't reach the GitHub API${err.message === 'rate-limited' ? ' (rate limit — try again in a minute)' : ''}.<br><a href="#hot" onclick="return false" id="retry-inline">retry ↻</a></div>`;
    if (meta) meta.textContent = 'signal lost';
    const retry = $('#retry-inline');
    if (retry) retry.addEventListener('click', loadHotRepos);
  }
}

function initHotFilters() {
  const filters = $('#hot-filters');
  if (!filters) return;
  filters.addEventListener('click', (e) => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    $$('.chip', filters).forEach((c) => c.classList.remove('is-active'));
    chip.classList.add('is-active');
    currentLang = chip.dataset.lang || '';
    loadHotRepos();
  });
  const btn = $('#refresh-btn');
  if (btn) btn.addEventListener('click', () => {
    btn.classList.add('spin');
    loadHotRepos().finally(() => setTimeout(() => btn.classList.remove('spin'), 700));
  });
}

/* =====================================================================
   Hero constellation canvas
   ===================================================================== */
function initConstellation() {
  const canvas = $('#constellation');
  if (!canvas || prefersReduced) return;
  const ctx = canvas.getContext('2d');
  let w, h, dpr, particles, raf;
  const mouse = { x: -9999, y: -9999 };

  function size() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth; h = canvas.clientHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.min(90, Math.floor((w * h) / 16000));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.6 + 0.6,
    }));
  }

  function frame() {
    ctx.clearRect(0, 0, w, h);
    for (const p of particles) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      const dx = p.x - mouse.x, dy = p.y - mouse.y;
      const md = Math.hypot(dx, dy);
      if (md < 130) { p.x += (dx / md) * 0.8; p.y += (dy / md) * 0.8; }
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(94,234,212,0.55)';
      ctx.fill();
    }
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 120) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(94,234,212,${(1 - d / 120) * 0.16})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
    raf = requestAnimationFrame(frame);
  }

  size();
  frame();
  window.addEventListener('resize', () => { cancelAnimationFrame(raf); size(); frame(); });
  window.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left; mouse.y = e.clientY - rect.top;
  });
  window.addEventListener('mouseleave', () => { mouse.x = -9999; mouse.y = -9999; });
}

/* =====================================================================
   Cursor, nav, progress, reveal, count-up, magnetic, footer
   ===================================================================== */
function initCursor() {
  const ring = $('#cursor'), dot = $('#cursor-dot');
  if (!ring || !dot || window.matchMedia('(pointer: coarse)').matches) return;
  let rx = 0, ry = 0, mx = 0, my = 0;
  window.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
  });
  (function loop() {
    rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
    ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
    requestAnimationFrame(loop);
  })();
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest('a, button, [data-magnetic], .repo, .case')) ring.classList.add('is-hover');
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest('a, button, [data-magnetic], .repo, .case')) ring.classList.remove('is-hover');
  });
}

function initNav() {
  const nav = $('#nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const toggle = $('#nav-toggle'), links = $('#nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    links.addEventListener('click', (e) => { if (e.target.tagName === 'A') links.classList.remove('open'); });
  }
}

function initProgress() {
  const bar = $('#progress-bar');
  if (!bar) return;
  const onScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = `${Math.min(100, (window.scrollY / max) * 100)}%`;
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

function animateCount(el) {
  const target = parseFloat(el.dataset.count);
  const suffix = el.dataset.suffix || '';
  const dur = 1400; const start = performance.now();
  function step(now) {
    const t = Math.min(1, (now - start) / dur);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = Math.round(target * eased) + suffix;
    if (t < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function initReveal() {
  const items = $$('[data-reveal]');
  items.forEach((el) => { if (el.dataset.delay) el.style.setProperty('--d', el.dataset.delay); });
  if (prefersReduced || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('in'));
    $$('[data-count]').forEach((el) => (el.textContent = Math.round(parseFloat(el.dataset.count)) + (el.dataset.suffix || '')));
    return;
  }
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      $$('[data-count]', e.target).forEach(animateCount);
      if (e.target.matches('[data-count]')) animateCount(e.target);
      obs.unobserve(e.target);
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
  items.forEach((el) => io.observe(el));
  $$('.stat').forEach((el) => io.observe(el));
}

function initMagnetic() {
  if (window.matchMedia('(pointer: coarse)').matches) return;
  $$('[data-magnetic]').forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
    });
    el.addEventListener('mouseleave', () => (el.style.transform = ''));
  });
}

function initFooterTyping() {
  const el = $('#footer-typed');
  if (!el || prefersReduced) { if (el) el.textContent = 'echo "let\'s build something that lasts"'; return; }
  const phrases = [
    'problem → solution → result',
    'ship what people depend on',
    'measure it, or it isn\'t done',
    'built with Pydantic AI',
    'available for select work',
  ];
  let pi = 0, ci = 0, deleting = false;
  function tick() {
    const full = phrases[pi];
    el.textContent = full.slice(0, ci);
    if (!deleting && ci < full.length) { ci++; setTimeout(tick, 55); }
    else if (!deleting && ci === full.length) { deleting = true; setTimeout(tick, 1900); }
    else if (deleting && ci > 0) { ci--; setTimeout(tick, 26); }
    else { deleting = false; pi = (pi + 1) % phrases.length; setTimeout(tick, 300); }
  }
  tick();
}

/* =====================================================================
   Boot
   ===================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  const y = $('#year'); if (y) y.textContent = new Date().getFullYear();
  renderCases();
  renderStack();
  renderBeyond();
  initReveal();
  initConstellation();
  initCursor();
  initNav();
  initProgress();
  initMagnetic();
  initFooterTyping();
  initHotFilters();
  loadHotRepos();
});
