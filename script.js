/* =========================================================
   DATA: edit these arrays to update the portfolio
   ========================================================= */
const GITHUB = "https://github.com/Sparsh9844";

/* The flagship project (StudyAI) is in index.html (#studyai); these are its screenshot tabs */
const studyAiShots = [
  { file: "dashboard.jpg", label: "Dashboard", path: "dashboard" },
  { file: "dsa.jpg", label: "DSA Sheet", path: "dsa" },
  { file: "aptitude.jpg", label: "Aptitude", path: "aptitude" },
  { file: "core-cs.jpg", label: "Core CS", path: "core-cs" },
  { file: "assistant.jpg", label: "Sage AI", path: "assistant" },
  { file: "prep-hub.jpg", label: "Prep Hub", path: "prep-hub" },
  { file: "flashcards.jpg", label: "Flashcards", path: "flashcards" },
  { file: "landing.jpg", label: "Landing", path: "" },
];

const projects = [
  {
    title: "AskPdf: AI Document Q&A",
    icon: "🔎",
    tagline: "RAG platform with verifiable answers",
    desc: "A RAG platform for chatting with PDF, DOCX and XLSX files. It runs vector search over 384-dim embeddings and streams answers in real time with source citations. It also includes fact-checking and quiz generation.",
    highlights: [
      "Vector search with MongoDB/Qdrant over 384-dim embeddings",
      "Real-time answers streamed over SSE with source citations",
      "Fact-checking and quiz generation",
      "JWT auth, Redis caching and rate limiting",
      "Frontend on Vercel, backend on Render",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Qdrant", "Redis", "Groq LLM", "SSE", "Vercel", "Render"],
    tags: ["ai", "fullstack"],
    live: "https://askpdf-rho.vercel.app",
    repo: `${GITHUB}/AskPdf`,
    featured: true,
  },
  {
    title: "Scalable Real-Time Chat",
    icon: "💬",
    tagline: "horizontally scaled WebSockets",
    desc: "A production-style private chat app that runs across multiple Node.js instances behind NGINX, kept in sync with Redis Pub/Sub and the Socket.IO Redis adapter.",
    highlights: [
      "JWT auth with bcrypt-hashed passwords",
      "Typing indicators and ✓/✓✓ delivery ticks",
      "Delete-for-everyone, synced across servers",
      "Dockerized multi-instance setup with NGINX load balancing",
    ],
    stack: ["React", "Vite", "Node.js", "Express", "Socket.IO", "Redis", "NGINX", "Docker", "MongoDB", "Railway"],
    tags: ["realtime", "fullstack"],
    live: "https://real-time-chat-app-drab-eight.vercel.app",
    repo: `${GITHUB}/Real-Time_chat_app`,
  },
  {
    title: "YouTube Watch Party",
    icon: "🎬",
    tagline: "synced playback for friends",
    desc: "Create a room, share a 6-character code and watch YouTube together. Play, pause and seek reach every participant in under a second, with live chat built in.",
    highlights: [
      "Latency compensation and drift correction",
      "Host and moderator roles with auto host-transfer",
      "No sign-up needed",
    ],
    stack: ["React", "Node.js", "Socket.IO", "MongoDB", "YouTube IFrame API"],
    tags: ["realtime", "fullstack"],
    live: "https://youtube-watch-party-system-rust.vercel.app",
    repo: `${GITHUB}/Youtube_watch_party_system`,
  },
  {
    title: "Sensai: AI Career Coach",
    icon: "🧭",
    tagline: "AI career toolkit",
    desc: "An AI career coach with personalised onboarding, an industry-insights dashboard, an AI cover-letter generator and mock interview prep, with background jobs handled by Inngest.",
    highlights: [
      "Clerk authentication and protected routes",
      "Prisma ORM on PostgreSQL",
      "Scheduled insight generation with Inngest",
    ],
    stack: ["Next.js", "React", "Clerk", "Prisma", "Inngest", "shadcn/ui", "Tailwind CSS"],
    tags: ["ai", "fullstack"],
    repo: `${GITHUB}/Sensai-AI-powered-Career-Coach`,
  },
  {
    title: "Fruit Ripeness Detection",
    icon: "🍎",
    tagline: "computer vision · YOLOv8",
    desc: "A computer vision app that detects fruits and classifies how ripe they are with a custom-trained YOLOv8 model, served through a web frontend and backend.",
    highlights: ["Custom-annotated dataset (Labelme)", "YOLOv8 training and inference pipeline"],
    stack: ["Python", "YOLOv8", "OpenCV", "Node.js", "React"],
    tags: ["ai"],
    repo: `${GITHUB}/fruit_ripenss_detection`,
  },
  {
    title: "GitHub Profile Finder",
    icon: "🐙",
    tagline: "GitHub REST API explorer",
    desc: "Search any GitHub username and get their profile, bio, stats and links instantly through the GitHub REST API.",
    highlights: ["Async fetch with error handling", "Responsive card UI"],
    stack: ["HTML", "CSS", "JavaScript", "GitHub API"],
    tags: ["frontend"],
    live: "https://github-profile-finder-coral-ten.vercel.app",
    repo: `${GITHUB}/GITHUB_PROFILE_FINDER`,
  },
];

const miniProjects = [
  { title: "Internship Auto-Apply", icon: "⚙️", desc: "n8n automation workflow that finds and applies to internships.", tag: "Automation" },
  { title: "Movie Finder", icon: "🎞️", desc: "Movie search app using DOM, event listeners and API fetching.", live: "https://sparsh9844.github.io/Movie_FINDER/", repo: `${GITHUB}/Movie_FINDER` },
  { title: "One-Note", icon: "📝", desc: "Note-taking app built while learning JavaScript.", live: "https://sparsh9844.github.io/One-note/", repo: `${GITHUB}/One-note` },
  { title: "Finance Tracker", icon: "💸", desc: "AI-based personal finance tracker with a backend.", repo: `${GITHUB}/Finance_Tracker` },
  { title: "DBMS Agentic AI", icon: "🤖", desc: "Agent that answers DBMS queries, built in summer training.", repo: `${GITHUB}/DBMS_agentic_ai` },
  { title: "CI/CD Pipeline", icon: "🚀", desc: "Learning GitHub Actions and CI/CD with TypeScript.", repo: `${GITHUB}/CI-CD` },
  { title: "Starbucks Clone", icon: "☕", desc: "Starbucks landing page with HTML, CSS and Bootstrap.", repo: `${GITHUB}/Starbucks-clone` },
  { title: "Amazon UI Clone", icon: "🛒", desc: "Pixel-focused recreation of the Amazon homepage.", repo: `${GITHUB}/Amazon_UI` },
];

const skills = [
  { group: "languages", icon: "⌨️", items: ["JavaScript", "Java"] },
  { group: "frontend", icon: "🎨", items: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"] },
  { group: "backend", icon: "🛠️", items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "Server-Sent Events", "Redis", "Socket.IO"] },
  { group: "databases", icon: "🗄️", items: ["MongoDB", "PostgreSQL", "MySQL", "Supabase", "Qdrant (Vector DB)"] },
  { group: "ai_ml", icon: "🧠", items: ["Agentic AI", "RAG", "Chunking", "Vector Embeddings", "LLM Integration (Groq)", "Claude Code"] },
  { group: "cloud_devops", icon: "☁️", items: ["Git", "GitHub", "GitHub Actions", "CI/CD", "Docker", "AWS", "Vercel", "Render"] },
  { group: "cs_fundamentals", icon: "📐", items: ["Data Structures & Algorithms", "DBMS", "Operating Systems"] },
  { group: "soft_skills", icon: "🤝", items: ["Problem Solving", "Communication", "Team Collaboration", "Adaptability", "Time Management"] },
];

const filters = [
  { key: "all", label: "all" },
  { key: "ai", label: "ai / ml" },
  { key: "realtime", label: "real-time" },
  { key: "fullstack", label: "full-stack" },
  { key: "frontend", label: "frontend" },
];

/* =========================================================
   RENDER
   ========================================================= */
const $ = (s, el = document) => el.querySelector(s);
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

$("#skillsGrid").innerHTML = skills
  .map(
    (s) => `
    <div class="skill-card reveal">
      <h3><span class="icon">${s.icon}</span>${s.group}<span class="accent">[]</span></h3>
      <div class="chips">${s.items.map((i) => `<span class="chip">${esc(i)}</span>`).join("")}</div>
    </div>`
  )
  .join("");

$("#projectsGrid").innerHTML = projects
  .map(
    (p) => `
    <article class="project reveal${p.featured ? " featured" : ""}" data-tags="${p.tags.join(" ")}">
      <div class="p-top">
        <span class="p-icon">${p.icon}</span>
        ${p.live ? `<span class="badge-live">live on vercel</span>` : `<span class="badge-code">source on github</span>`}
      </div>
      <h3>${esc(p.title)}</h3>
      <p class="p-tagline">// ${esc(p.tagline)}</p>
      <p class="desc">${esc(p.desc)}</p>
      <ul class="highlights">${p.highlights.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>
      <div class="stack">${p.stack.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
      <div class="p-links">
        ${p.live ? `<a class="p-link live" href="${p.live}" target="_blank" rel="noopener">▶ Live demo</a>` : ""}
        <a class="p-link" href="${p.repo}" target="_blank" rel="noopener">&lt;/&gt; Source</a>
      </div>
    </article>`
  )
  .join("");

$("#miniGrid").innerHTML = miniProjects
  .map(
    (m) => `
    <div class="mini reveal">
      <div class="mini-head"><h4>${m.icon} ${esc(m.title)}</h4></div>
      <p>${esc(m.desc)}</p>
      <div class="links">
        ${m.live ? `<a class="live" href="${m.live}" target="_blank" rel="noopener">live ↗</a>` : ""}
        ${m.repo ? `<a href="${m.repo}" target="_blank" rel="noopener">github ↗</a>` : ""}
        ${m.tag ? `<span class="muted">${m.tag}</span>` : ""}
      </div>
    </div>`
  )
  .join("");

/* StudyAI screenshot gallery */
const shotMain = $("#shotMain"), shotPath = $("#shotPath"), shotTabs = $("#shotTabs");
const shotBase = (s) => `assets/studyai/${s.file.replace(/\.jpg$/, "")}`;
const shotSrcset = (s) => `${shotBase(s)}-720.webp 720w, ${shotBase(s)}-1280.webp 1280w`;
/* preload the other screenshots only once the gallery is near the viewport, so they don't compete with first paint */
const preloadShots = () =>
  studyAiShots.forEach((s) => {
    const img = new Image();
    img.sizes = shotMain.sizes;
    img.srcset = shotSrcset(s);
  });
const galleryIO = new IntersectionObserver(
  (entries) => {
    if (!entries.some((en) => en.isIntersecting)) return;
    galleryIO.disconnect();
    (window.requestIdleCallback || setTimeout)(preloadShots);
  },
  { rootMargin: "400px 0px" }
);
galleryIO.observe(shotMain);
shotTabs.innerHTML = studyAiShots
  .map((s, i) => `<button class="shot-tab${i === 0 ? " active" : ""}" data-i="${i}">${s.label}</button>`)
  .join("");
const showShot = (i) => {
  const s = studyAiShots[i];
  shotMain.classList.add("fade");
  setTimeout(() => {
    shotMain.srcset = shotSrcset(s);
    shotMain.src = `${shotBase(s)}-1280.webp`;
    shotMain.alt = `StudyAI ${s.label} screenshot`;
    shotPath.textContent = s.path;
    shotMain.classList.remove("fade");
  }, 180);
  shotTabs.querySelectorAll(".shot-tab").forEach((b) => b.classList.toggle("active", +b.dataset.i === i));
};
shotTabs.addEventListener("click", (e) => {
  const b = e.target.closest(".shot-tab");
  if (b) showShot(+b.dataset.i);
});

/* filters */
const filterBar = $("#filters");
filterBar.innerHTML = filters
  .map((f, i) => `<button class="filter${i === 0 ? " active" : ""}" data-filter="${f.key}" role="tab">${f.label}</button>`)
  .join("");
filterBar.addEventListener("click", (e) => {
  const btn = e.target.closest(".filter");
  if (!btn) return;
  filterBar.querySelectorAll(".filter").forEach((b) => b.classList.toggle("active", b === btn));
  const key = btn.dataset.filter;
  document.querySelectorAll(".project").forEach((card) => {
    card.classList.toggle("hide", key !== "all" && !card.dataset.tags.split(" ").includes(key));
  });
});

/* card spotlight follows the mouse (one update per frame) */
document.querySelectorAll(".project").forEach((card) => {
  let frame = 0, x = 0, y = 0;
  card.addEventListener("mousemove", (e) => {
    x = e.clientX; y = e.clientY;
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${x - r.left}px`);
      card.style.setProperty("--my", `${y - r.top}px`);
    });
  });
});

/* =========================================================
   EFFECTS
   ========================================================= */
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* scroll reveal */
const io = new IntersectionObserver(
  (entries) => entries.forEach((en) => en.isIntersecting && (en.target.classList.add("in"), io.unobserve(en.target))),
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

/* cursor glow: transform only (no layout), one update per frame, mouse only */
const glow = $(".cursor-glow");
let glowFrame = 0, gx = 0, gy = 0;
window.addEventListener("pointermove", (e) => {
  if (e.pointerType !== "mouse") return;
  gx = e.clientX; gy = e.clientY;
  if (glowFrame) return;
  glowFrame = requestAnimationFrame(() => {
    glowFrame = 0;
    glow.style.transform = `translate3d(${gx - 240}px, ${gy - 240}px, 0)`;
  });
}, { passive: true });

/* typed hero phrases */
const phrases = ["scalable systems", "real-time apps", "RAG pipelines", "AI-powered SaaS", "clean APIs"];
const typedEl = $("#typed");
if (!reduceMotion) {
  let pi = 0, ci = phrases[0].length, deleting = true;
  const tick = () => {
    const word = phrases[pi];
    ci += deleting ? -1 : 1;
    typedEl.textContent = word.slice(0, ci);
    let delay = deleting ? 45 : 90;
    if (!deleting && ci === word.length) { deleting = true; delay = 1800; }
    else if (deleting && ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; delay = 350; }
    setTimeout(tick, delay);
  };
  setTimeout(tick, 2200);
}

/* terminal animation */
const termLines = [
  [`<span class="p">➜</span> <span class="c">~</span> whoami`, 400],
  [`<span class="s">Sparsh Chauhan</span> <span class="m">· Full Stack Developer · AI/ML Intern</span>`, 200],
  [``, 0],
  [`<span class="p">➜</span> <span class="c">~</span> cat stack.json`, 400],
  [`{ <span class="k">"frontend"</span>: [<span class="s">"React"</span>, <span class="s">"Next.js"</span>, <span class="s">"Tailwind"</span>],`, 120],
  [`  <span class="k">"backend"</span>:  [<span class="s">"Node"</span>, <span class="s">"Express"</span>, <span class="s">"SSE"</span>],`, 120],
  [`  <span class="k">"data"</span>:     [<span class="s">"MongoDB"</span>, <span class="s">"Postgres"</span>, <span class="s">"Qdrant"</span>],`, 120],
  [`  <span class="k">"ai"</span>:       [<span class="s">"RAG"</span>, <span class="s">"Agentic AI"</span>, <span class="s">"Groq"</span>] }`, 200],
  [``, 0],
  [`<span class="p">➜</span> <span class="c">~</span> ls ./deployed`, 400],
  [`<span class="s">★ study-ai/</span>  <span class="c">askpdf/</span>  <span class="c">chat-app/</span>  <span class="c">watch-party/</span>`, 200],
  [``, 0],
  [`<span class="p">➜</span> <span class="c">~</span> <span class="m">press</span> <span class="k">Ctrl+K</span> <span class="m">to explore ▌</span>`, 0],
];
const term = $("#terminal");
if (reduceMotion) {
  term.innerHTML = termLines.map((l) => l[0]).join("\n");
} else {
  let li = 0;
  const nextLine = () => {
    if (li >= termLines.length) return;
    const [html, wait] = termLines[li++];
    term.insertAdjacentHTML("beforeend", (li > 1 ? "\n" : "") + html);
    setTimeout(nextLine, wait + 160);
  };
  setTimeout(nextLine, 500);
}

/* stat counters */
const counterIO = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (!en.isIntersecting) return;
    const el = en.target, target = +el.dataset.count, suffix = el.dataset.suffix || "";
    let n = 0;
    const step = () => {
      n += Math.max(1, Math.ceil(target / 30));
      el.textContent = Math.min(n, target) + (n >= target ? suffix : "");
      if (n < target) requestAnimationFrame(step);
    };
    step();
    counterIO.unobserve(el);
  });
});
document.querySelectorAll("[data-count]").forEach((el) => counterIO.observe(el));

/* active nav link */
const navLinks = document.querySelectorAll(".nav-links a");
const sectionIO = new IntersectionObserver(
  (entries) => entries.forEach((en) => {
    if (en.isIntersecting) navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${en.target.id}`));
  }),
  { rootMargin: "-45% 0px -50% 0px" }
);
document.querySelectorAll("section[id]").forEach((s) => sectionIO.observe(s));

/* copy email */
const toast = (msg) => {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 1800);
};
const copyEmail = () => navigator.clipboard.writeText($("#email").textContent).then(() => toast("Email copied to clipboard ✓"));
$("#copyEmail").addEventListener("click", copyEmail);

/* =========================================================
   COMMAND PALETTE (Ctrl/Cmd + K)
   ========================================================= */
const commands = [
  ...["about", "skills", "projects", "experience", "contact"].map((s) => ({ label: `Go to ${s}`, hint: "section", run: () => location.assign(`#${s}`) })),
  { label: "★ StudyAI: flagship project", hint: "section", run: () => location.assign("#studyai") },
  { label: "Open StudyAI: live", hint: "vercel ↗", run: () => window.open("https://study-ai-mu-lime.vercel.app", "_blank") },
  { label: "StudyAI: source", hint: "github ↗", run: () => window.open(`${GITHUB}/StudyAI`, "_blank") },
  ...projects.filter((p) => p.live).map((p) => ({ label: `Open ${p.title}: live`, hint: "vercel ↗", run: () => window.open(p.live, "_blank") })),
  ...projects.map((p) => ({ label: `${p.title}: source`, hint: "github ↗", run: () => window.open(p.repo, "_blank") })),
  { label: "Open GitHub profile", hint: "github ↗", run: () => window.open(GITHUB, "_blank") },
  { label: "Open LinkedIn", hint: "linkedin ↗", run: () => window.open("https://www.linkedin.com/in/sparsh-chauhan0077", "_blank") },
  { label: "Copy email address", hint: "clipboard", run: copyEmail },
  { label: "Send an email", hint: "mailto", run: () => location.assign("mailto:rajputsparsh570@gmail.com") },
];
const palette = $("#palette"), pInput = $("#paletteInput"), pList = $("#paletteList");
let results = [], sel = 0;

const renderPalette = () => {
  const q = pInput.value.toLowerCase().trim();
  results = commands.filter((c) => c.label.toLowerCase().includes(q));
  sel = Math.min(sel, Math.max(results.length - 1, 0));
  pList.innerHTML = results.length
    ? results.map((c, i) => `<li data-i="${i}" class="${i === sel ? "sel" : ""}"><span>${esc(c.label)}</span><span class="hint">${c.hint}</span></li>`).join("")
    : `<li class="empty">No results for "${esc(q)}"</li>`;
  pList.querySelector(".sel")?.scrollIntoView({ block: "nearest" });
};
const openPalette = () => { palette.hidden = false; pInput.value = ""; sel = 0; renderPalette(); pInput.focus(); };
const closePalette = () => { palette.hidden = true; };
const runSel = (i = sel) => { const c = results[i]; if (c) { closePalette(); c.run(); } };

$("#openPalette").addEventListener("click", openPalette);
pInput.addEventListener("input", () => { sel = 0; renderPalette(); });
pList.addEventListener("click", (e) => { const li = e.target.closest("li[data-i]"); if (li) runSel(+li.dataset.i); });
palette.addEventListener("click", (e) => { if (e.target === palette) closePalette(); });
document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); palette.hidden ? openPalette() : closePalette(); return; }
  if (palette.hidden) return;
  if (e.key === "Escape") closePalette();
  else if (e.key === "ArrowDown") { e.preventDefault(); sel = (sel + 1) % Math.max(results.length, 1); renderPalette(); }
  else if (e.key === "ArrowUp") { e.preventDefault(); sel = (sel - 1 + results.length) % Math.max(results.length, 1); renderPalette(); }
  else if (e.key === "Enter") runSel();
});

console.log("%c<sparsh/> 👋 Hey, fellow dev! Like what you see? → rajputsparsh570@gmail.com", "color:#a78bfa;font:600 14px monospace");
