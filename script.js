// ============ DATA ============
const PROFILE = {
  name: "Adnan Bardgujar",
  role: "AI Systems Engineer",
  edu: "BE Computer Engineering, MHSSCE Mumbai",
  cgpa: "8.30 / 10",
  grad: "May 2026",
  email: "adnanbardgujar@gmail.com",
  phone: "+91-9321750759",
  location: "Mumbai, India",
  linkedin: "https://www.linkedin.com/in/adnan-bardgujar-b43b7a25b/",
  github: "https://github.com/Adnan-commits",
  google: "https://g.dev/nan11"
};

// ============ ASCII LOGO ============
const ASCII_LOGO =
` █████╗ ██████╗ ███╗   ██╗ █████╗ ███╗   ██╗   ██████╗ 
██╔══██╗██╔══██╗████╗  ██║██╔══██╗████╗  ██║   ██╔══██╗
███████║██║  ██║██╔██╗ ██║███████║██╔██╗ ██║   ██████╔╝
██╔══██║██║  ██║██║╚██╗██║██╔══██║██║╚██╗██║   ██╔══██╗
██║  ██║██████╔╝██║ ╚████║██║  ██║██║ ╚████║██╗██████╔╝
╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝╚═════╝ 
                                  AI SYSTEMS // MCP // EVAL`;

// ============ BOOT SEQUENCE ============
const bootLines = [
  { t: '<span class="dim">[    0.0000]</span> <span class="ok">OK</span>  Reached target Boot.', d: 80 },
  { t: '<span class="dim">[    0.0421]</span> <span class="ok">OK</span>  Mounted /portfolio/adnan_bardgujar', d: 60 },
  { t: '<span class="dim">[    0.1108]</span> <span class="ok">OK</span>  Started Resume Daemon (resumed.service)', d: 60 },
  { t: '<span class="dim">[    0.2241]</span> <span class="ok">OK</span>  Loaded modules: <span class="info">llm.ko mcp.ko eval.ko</span>', d: 80 },
  { t: '<span class="dim">[    0.3019]</span> <span class="ok">OK</span>  Verified credentials: <span class="ag">Anthropic MCP / GCP / OCI</span>', d: 90 },
  { t: '<span class="dim">[    0.4502]</span> <span class="ok">OK</span>  Established uplink: linkedin.com / github.com', d: 60 },
  { t: '<span class="dim">[    0.5337]</span> <span class="warn">..</span>  Initializing portfolio shell...', d: 120 },
  { t: '', d: 30 },
  { t: '<span class="ag">Welcome to AdnanOS 26.04 (GNU/Engineering)</span>', d: 40 },
  { t: '<span class="dim">Last login: ' + new Date().toUTCString() + ' from recruiter.tty1</span>', d: 30 },
  { t: '', d: 30 },
];

// ============ COMMANDS ============
const COMMANDS = {};

COMMANDS.help = () => `
<div class="card">
  <h3>AVAILABLE COMMANDS</h3>
  <p class="dim">Click a chip below or type a command and hit Enter.</p>
  <table>
    <tr><td class="label"><span class="cmd-link with-arrow" data-cmd="whoami">whoami</span></td><td>Quick intro // who is Adnan</td></tr>
    <tr><td class="label"><span class="cmd-link with-arrow" data-cmd="cat resume.txt">cat resume.txt</span></td><td>Full resume summary</td></tr>
    <tr><td class="label"><span class="cmd-link with-arrow" data-cmd="ls projects/">ls projects/</span></td><td>List featured projects</td></tr>
    <tr><td class="label"><span class="cmd-link with-arrow" data-cmd="./minerva.sh">./minerva.sh</span></td><td>Open Minerva project details</td></tr>
    <tr><td class="label"><span class="cmd-link with-arrow" data-cmd="./phishguard.sh">./phishguard.sh</span></td><td>Open PhishGuard project details</td></tr>
    <tr><td class="label"><span class="cmd-link with-arrow" data-cmd="./forestfire.sh">./forestfire.sh</span></td><td>Open Forest Fire project details</td></tr>
    <tr><td class="label"><span class="cmd-link with-arrow" data-cmd="cat experience.log">cat experience.log</span></td><td>Work experience at Aiolos Cloud</td></tr>
    <tr><td class="label"><span class="cmd-link with-arrow" data-cmd="stack --skills">stack --skills</span></td><td>Technical skills with proficiency</td></tr>
    <tr><td class="label"><span class="cmd-link with-arrow" data-cmd="certs --list">certs --list</span></td><td>Certifications and recognition</td></tr>
    <tr><td class="label"><span class="cmd-link with-arrow" data-cmd="contact">contact</span></td><td>How to reach me</td></tr>
    <tr><td class="label"><span class="cmd-link with-arrow" data-cmd="hire-me">hire-me</span></td><td>For HR / recruiters // plain English</td></tr>
    <tr><td class="label"><span class="cmd-link with-arrow" data-cmd="theme">theme [light|dark]</span></td><td>Toggle between dark and light terminal</td></tr>
    <tr><td class="label"><span class="cmd-link with-arrow" data-cmd="clear">clear</span></td><td>Clear the screen</td></tr>
    <tr><td class="label"><span class="cmd-link with-arrow" data-cmd="exit">exit</span></td><td>Don't. Please.</td></tr>
  </table>
</div>`;

COMMANDS.whoami = () => `
<div class="card cyan">
  <h3>// IDENTITY</h3>
  <p><span class="ag">${PROFILE.name}</span></p>
  <p class="dim">${PROFILE.role}</p>
  <br/>
  <p>I build and stress-test AI systems end-to-end. From MCP server design to structured capability evaluations, my focus is on making LLM-powered tools production-ready, not just demo-ready.</p>
  <br/>
  <p>I don't just build AI systems. I break them first, find the failure modes, and document what production actually needs.</p>
  <br/>
  <table>
    <tr><td class="label">role</td><td>${PROFILE.role}</td></tr>
    <tr><td class="label">edu</td><td>${PROFILE.edu}</td></tr>
    <tr><td class="label">cgpa</td><td>${PROFILE.cgpa}</td></tr>
    <tr><td class="label">graduating</td><td>${PROFILE.grad}</td></tr>
    <tr><td class="label">location</td><td>${PROFILE.location}</td></tr>
  </table>
</div>`;

COMMANDS["hire-me"] = () => `
<div class="card amber">
  <h3>// FOR RECRUITERS &amp; HIRING TEAMS</h3>
  <p class="dim">Plain English version. No buzzwords.</p>
  <br/>
  <p><span class="ag">What I do:</span> I build AI systems that use Large Language Models like Claude and LLaMA. I focus on making them safe, reliable, and ready for real production use, not just cool demos.</p>
  <br/>
  <p><span class="ag">My internship:</span> Spent 10 months at Aiolos Cloud Solutions building and testing AI tools, writing risk reports, and improving system reliability across 5 testing cycles.</p>
  <br/>
  <p><span class="ag">My biggest project:</span> Minerva, a research engine that cuts manual research time by 60%, reaching 82% accuracy across multiple topics.</p>
  <br/>
  <p><span class="ag">Why hire me:</span></p>
  <ul>
    <li>Anthropic MCP Certified (rare credential, official MCP architecture training)</li>
    <li>Selected for McKinsey Forward Program 2026</li>
    <li>Cloud certified on both GCP and Oracle Cloud Infrastructure</li>
    <li>Track record of finding and fixing AI failure modes before deployment</li>
    <li>Available from May 2026</li>
  </ul>
  <br/>
  <p>📞 <a href="tel:+919321750759">+91-9321750759</a> &nbsp; ✉ <a href="mailto:${PROFILE.email}">${PROFILE.email}</a></p>
</div>`;

COMMANDS["cat resume.txt"] = () => `
<div class="output">
<span class="dim">// reading /home/adnan/resume.txt ...</span><br/>
<span class="dim">// 2.1 KB, last modified: 2026-04-30</span><br/><br/>

<span class="ag">═══ SUMMARY ═══</span><br/>
AI Systems Engineer specialising in LLM integration, MCP server architecture, and production AI evaluation. Engineered and stress-tested 5 MCP tools, authored 5+ technical risk reports, and architected full-stack AI systems achieving 82%+ accuracy across multi-domain queries.<br/><br/>

<span class="ag">═══ EDUCATION ═══</span><br/>
<span class="bright">M.H. Saboo Siddik College of Engineering</span> | Mumbai<br/>
BE Computer Engineering | CGPA: <span class="amber">8.30</span> | Graduating <span class="amber">May 2026</span><br/><br/>

<span class="ag">═══ CERTIFICATIONS ═══</span><br/>
<span class="info">▸</span> Anthropic // Intro to MCP: Architecture, Tool Integration, Controlled AI Deployment<br/>
<span class="info">▸</span> McKinsey &amp; Company // McKinsey Forward Program 2026 (Selected Participant)<br/>
<span class="info">▸</span> Oracle // OCI AI Foundations Associate (2025)<br/>
<span class="info">▸</span> AWS // Cloud Security Foundations &amp; Operations<br/>
<span class="info">▸</span> IBM // Cybersecurity Fundamentals<br/>
<span class="info">▸</span> Google Cloud Skills Boost // Gold League<br/><br/>

<span class="dim">// run <span class="cmd-link" data-cmd="cat experience.log">cat experience.log</span> for work history, <span class="cmd-link" data-cmd="ls projects/">ls projects/</span> for projects</span>
</div>`;

COMMANDS["cat experience.log"] = () => `
<div class="card">
  <h3>// AIOLOS CLOUD SOLUTIONS PVT. LTD.</h3>
  <p class="meta">AI Systems Intern  ·  Jul 2025 – Apr 2026  ·  Mumbai, India</p>
  <ul>
    <li>Scoped, built, and stress-tested <span class="ag">5 MCP tools</span> across web and PDF modes over 5 iterative cycles, surfacing failure modes and driving mitigations to closure under a Senior Solutions Architect.</li>
    <li>Authored <span class="ag">5+ technical risk reports</span> on live system behaviour, translating findings into actionable mitigations for a cross-functional team and accelerating MVP progress toward production readiness.</li>
    <li>Engineered secure MCP server architecture and access controls across 5 tool integrations, enforcing defined safety and performance boundaries within a 4-member team.</li>
    <li>Optimised AI pipeline reliability by iterating on tool integration architecture, reducing identified failure points across 5 test cycles and contributing directly to a production-ready system.</li>
  </ul>
</div>`;

COMMANDS["ls projects/"] = () => `
<div class="output">
<span class="dim">total 3</span><br/>
<span class="ok">drwxr-xr-x</span> adnan adnan  <span class="amber cmd-link" data-cmd="./minerva.sh">minerva/</span>      <span class="dim">// AI research engine, MCP, LLaMA 3.3 70B</span><br/>
<span class="ok">drwxr-xr-x</span> adnan adnan  <span class="amber cmd-link" data-cmd="./phishguard.sh">phishguard/</span>   <span class="dim">// Hybrid phishing detection, 99.2% email accuracy</span><br/>
<span class="ok">drwxr-xr-x</span> adnan adnan  <span class="amber cmd-link" data-cmd="./forestfire.sh">forestfire/</span>   <span class="dim">// Fire risk prediction, 87% accuracy</span><br/><br/>
<span class="dim">// click a folder above or run ./[project].sh to view details</span>
</div>`;

COMMANDS["./minerva.sh"] = () => `
<div class="proj-block">
  <div class="proj-head">
    <span class="proj-name">▶ MINERVA // AI-POWERED RESEARCH ENGINE</span>
    <span class="proj-stack">Python · React · LLaMA 3.3 70B · MCP</span>
  </div>
  <div class="proj-body">
    <p>Architected a full-stack research engine integrating <span class="ag">4 AI tools</span> on a custom MCP server powered by LLaMA 3.3 70B, slashing manual research time by 60%.</p>
    <br/>
    <p>Engineered an evaluation framework with pass/fail thresholds and adversarial testing, achieving <span class="ag">82% accuracy</span> across multi-domain queries and surfacing critical reasoning failures before production.</p>
    <br/>
    <p>Delivered evaluation reports mapping capability boundaries and residual risks, directly driving go/no-go deployment decisions.</p>
    <br/>
    <span class="stat">↓ 60% research time</span>
    <span class="stat">↑ 82% multi-domain accuracy</span>
    <span class="stat">4 AI tools integrated</span>
    <span class="stat">Top 30 // Unthink Ideathon</span>
    <br/><br/>
    <p>🔗 <a href="https://github.com/Adnan-commits/minerva-portfolio" target="_blank">github.com/Adnan-commits/minerva-portfolio</a></p>
  </div>
</div>`;

COMMANDS["./phishguard.sh"] = () => `
<div class="proj-block">
  <div class="proj-head">
    <span class="proj-name">▶ PHISHGUARD // HYBRID PHISHING DETECTION</span>
    <span class="proj-stack">Python · Flask · ML Classifiers</span>
  </div>
  <div class="proj-body">
    <p>Developed a hybrid phishing detection system combining rule-based heuristics and ML classifiers, achieving <span class="ag">87.8% URL accuracy</span> and <span class="ag">99.2% email classification accuracy</span>.</p>
    <br/>
    <p>Red-teamed the system using obfuscated URLs and adversarial email samples, cataloguing failure modes per attack vector and validating mitigation adequacy.</p>
    <br/>
    <p>Implemented a risk scoring framework mapping features to threat probability, enabling interpretable outputs and human-in-the-loop review of borderline cases.</p>
    <br/>
    <span class="stat">87.8% URL accuracy</span>
    <span class="stat">99.2% email accuracy</span>
    <span class="stat">Adversarial tested</span>
    <br/><br/>
    <p>🔗 <a href="https://github.com/Adnan-commits/phishguard" target="_blank">github.com/Adnan-commits/phishguard</a></p>
  </div>
</div>`;

COMMANDS["./forestfire.sh"] = () => `
<div class="proj-block">
  <div class="proj-head">
    <span class="proj-name">▶ FOREST FIRE PREDICTION SYSTEM</span>
    <span class="proj-stack">Python · scikit-learn</span>
  </div>
  <div class="proj-body">
    <p>Constructed a fire risk model using feature engineering and cross-validation, achieving <span class="ag">87% accuracy</span> on held-out environmental test data.</p>
    <br/>
    <p>Stress-tested across edge-case conditions to map the performance envelope and pinpoint reliability degradation zones.</p>
    <br/>
    <span class="stat">87% accuracy</span>
    <span class="stat">Edge-case tested</span>
    <span class="stat">Feature engineered</span>
  </div>
</div>`;

COMMANDS["stack --skills"] = () => {
  const skills = [
    { name: "LLM Integration (Claude, LLaMA 3.3 70B)", val: 92 },
    { name: "MCP Server Architecture", val: 90 },
    { name: "AI Evaluation & Adversarial Testing", val: 88 },
    { name: "Prompt Engineering & RAG Pipelines", val: 85 },
    { name: "Python / Flask / Backend", val: 88 },
    { name: "React / Frontend", val: 78 },
    { name: "GCP (Certified)", val: 82 },
    { name: "OCI AI Foundations (Certified)", val: 80 },
    { name: "AWS Cloud Security", val: 75 },
    { name: "MySQL / MongoDB", val: 80 },
  ];
  let html = `<div class="card cyan"><h3>// CAPABILITY MATRIX</h3><p class="dim">Self-assessed proficiency. Real metrics below in projects.</p><br/>`;
  skills.forEach((s, i) => {
    html += `<div class="bar-row">
      <span class="bar-label">${s.name}</span>
      <div class="bar-track"><div class="bar-fill" data-val="${s.val}" style="--target:${s.val}%"></div></div>
      <span class="bar-val">${s.val}%</span>
    </div>`;
  });
  html += `</div>`;
  return html;
};

COMMANDS["certs --list"] = () => `
<div class="card pink">
  <h3>// CERTIFICATIONS &amp; RECOGNITION</h3>
  <table>
    <tr><th>Issuer</th><th>Credential</th><th>Year</th></tr>
    <tr><td class="label">Anthropic</td><td>Intro to MCP: Architecture, Tool Integration, Controlled AI Deployment</td><td>2025</td></tr>
    <tr><td class="label">McKinsey &amp; Co</td><td>McKinsey Forward Program (Selected)</td><td>2026</td></tr>
    <tr><td class="label">Oracle</td><td>OCI AI Foundations Associate</td><td>2025</td></tr>
    <tr><td class="label">AWS</td><td>Cloud Security Foundations &amp; Operations</td><td>—</td></tr>
    <tr><td class="label">IBM</td><td>Cybersecurity Fundamentals</td><td>—</td></tr>
    <tr><td class="label">Google Cloud</td><td>Skills Boost — Gold League</td><td>—</td></tr>
  </table>
  <br/>
  <h3>// LEADERSHIP</h3>
  <ul>
    <li><span class="ag">Top 30</span> // Unthink Ideathon (EDC × Programmers Club). Pitched Minerva.</li>
    <li><span class="ag">2nd Place</span> // Pitch Your Idea, IEEE Cell.</li>
    <li><span class="ag">Paper Presentation Winner</span> // EDC.</li>
    <li><span class="ag">Hackathon Host</span> // ERR 404 6.0, 36-hour national hackathon, 50+ teams.</li>
  </ul>
</div>`;

COMMANDS.contact = () => `
<div class="card amber">
  <h3>// ESTABLISH UPLINK</h3>
  <table>
    <tr><td class="label">email</td><td><a href="mailto:${PROFILE.email}">${PROFILE.email}</a></td></tr>
    <tr><td class="label">phone</td><td><a href="tel:+919321750759">${PROFILE.phone}</a></td></tr>
    <tr><td class="label">linkedin</td><td><a href="${PROFILE.linkedin}" target="_blank">linkedin.com/in/adnan-bardgujar</a></td></tr>
    <tr><td class="label">github</td><td><a href="${PROFILE.github}" target="_blank">github.com/Adnan-commits</a></td></tr>
    <tr><td class="label">google dev</td><td><a href="${PROFILE.google}" target="_blank">g.dev/nan11</a></td></tr>
    <tr><td class="label">location</td><td>${PROFILE.location}</td></tr>
  </table>
  <br/>
  <p class="dim">Available for full-time roles starting May 2026. Open to remote and on-site.</p>
</div>`;

COMMANDS.clear = () => "__CLEAR__";

COMMANDS.exit = () => `<div class="output err">// connection terminated... just kidding. type 'help' to continue.</div>`;

COMMANDS.sudo = () => `<div class="output err">[sudo] password for adnan: <span class="dim">_</span><br/>access denied. nice try though.</div>`;

COMMANDS.ls = () => COMMANDS["ls projects/"]();

COMMANDS.man = () => COMMANDS.help();

COMMANDS["uname -a"] = () => `<div class="output dim">AdnanOS 26.04 portfolio 6.8.0-engineering #1 SMP PREEMPT_DYNAMIC Mumbai_IST aarch64 GNU/Linux</div>`;

COMMANDS.date = () => `<div class="output">${new Date().toString()}</div>`;

COMMANDS["echo hello"] = () => `<div class="output ag">hello, world. // welcome to my terminal.</div>`;

COMMANDS.theme = (arg) => {
  const target = (arg || '').trim().toLowerCase();
  if (target === 'light' || target === 'dark') {
    applyTheme(target);
    return `<div class="output ok">// theme switched to ${target} mode</div>`;
  }
  toggleTheme();
  const now = document.body.classList.contains('light') ? 'light' : 'dark';
  return `<div class="output ok">// theme toggled. now in <span class="ag">${now}</span> mode. <span class="dim">// usage: theme [light|dark]</span></div>`;
};

// ============ ALIASES ============
const ALIASES = {
  "about": "whoami",
  "resume": "cat resume.txt",
  "experience": "cat experience.log",
  "projects": "ls projects/",
  "skills": "stack --skills",
  "certs": "certs --list",
  "minerva": "./minerva.sh",
  "phishguard": "./phishguard.sh",
  "forestfire": "./forestfire.sh",
  "hr": "hire-me",
  "?": "help",
  "h": "help",
};

// ============ MENU CHIPS (HR friendly) ============
const MENU_CHIPS = [
  { label: "whoami", cmd: "whoami", key: "1" },
  { label: "hire-me", cmd: "hire-me", key: "2" },
  { label: "cat resume.txt", cmd: "cat resume.txt", key: "3" },
  { label: "ls projects/", cmd: "ls projects/", key: "4" },
  { label: "./minerva.sh", cmd: "./minerva.sh" },
  { label: "./phishguard.sh", cmd: "./phishguard.sh" },
  { label: "./forestfire.sh", cmd: "./forestfire.sh" },
  { label: "cat experience.log", cmd: "cat experience.log" },
  { label: "stack --skills", cmd: "stack --skills" },
  { label: "certs --list", cmd: "certs --list" },
  { label: "contact", cmd: "contact" },
  { label: "theme", cmd: "theme" },
  { label: "help", cmd: "help" },
  { label: "clear", cmd: "clear" },
];

// ============ RUNTIME ============
const bootEl = document.getElementById('boot');
const historyEl = document.getElementById('history');
const promptRow = document.getElementById('prompt-row');
const cmdInput = document.getElementById('cmd-input');
const cursor = document.getElementById('cursor');

const startTime = Date.now();
let cmdHistory = [];
let historyIdx = -1;

function clock() {
  const d = new Date();
  document.getElementById('clock').textContent = d.toTimeString().slice(0,8);
  const u = Math.floor((Date.now() - startTime)/1000);
  const mm = Math.floor(u/60);
  const ss = u % 60;
  document.getElementById('uptime').textContent = mm > 0 ? `${mm}m ${ss}s` : `${ss}s`;
}
setInterval(clock, 1000);
clock();

function renderMenu() {
  let html = `<div class="menu-bar">
    <div class="menu-bar-label">// QUICK ACCESS // CLICK OR TYPE</div>`;
  MENU_CHIPS.forEach(c => {
    html += `<button class="chip" data-cmd="${c.cmd}">${c.label}</button>`;
  });
  html += `</div>`;
  return html;
}

// Event delegation: any element with data-cmd anywhere on the page becomes clickable.
// Works for chips, help table links, and any future clickable command output.
function bindMenu() {
  // Kept as a no-op for backwards compatibility with existing call sites.
}

document.addEventListener('click', (e) => {
  const target = e.target.closest('[data-cmd]');
  if (!target) return;
  const cmd = target.getAttribute('data-cmd');
  if (cmd) runCommand(cmd, true);
});

function animateBars() {
  setTimeout(() => {
    document.querySelectorAll('.bar-fill').forEach(b => {
      const v = b.getAttribute('data-val');
      b.style.width = v + '%';
    });
  }, 80);
}

function runCommand(raw, fromClick = false) {
  const cmd = raw.trim();
  if (!cmd) return;

  // Add to history
  cmdHistory.unshift(cmd);
  historyIdx = -1;

  // Echo prompt
  const echo = document.createElement('div');
  echo.className = 'prompt-row';
  echo.innerHTML = `<span class="prompt"><span class="user">adnan</span><span class="at">@</span><span class="host">portfolio</span><span class="sep">:</span><span class="path">~</span><span class="sep">$</span></span> <span class="ag">${escapeHtml(cmd)}</span>`;
  historyEl.appendChild(echo);

  // Resolve alias
  const resolved = ALIASES[cmd.toLowerCase()] || cmd;

  // Run. Try exact match first, then first-word match (so "theme light" routes to COMMANDS.theme).
  let output;
  if (COMMANDS[resolved]) {
    output = COMMANDS[resolved]();
  } else if (COMMANDS[resolved.toLowerCase()]) {
    output = COMMANDS[resolved.toLowerCase()]();
  } else {
    const firstWord = resolved.split(/\s+/)[0].toLowerCase();
    const rest = resolved.slice(firstWord.length).trim();
    if (COMMANDS[firstWord]) {
      output = COMMANDS[firstWord](rest);
    } else {
      output = `<div class="output err">bash: ${escapeHtml(cmd)}: command not found</div><div class="output dim">// type <span class="cmd-link" data-cmd="help">help</span> to see available commands</div>`;
    }
  }

  if (output === "__CLEAR__") {
    historyEl.innerHTML = '';
    historyEl.appendChild(buildIntro());
    bindMenu();
    cmdInput.value = '';
    scrollToBottom();
    return;
  }

  const out = document.createElement('div');
  out.innerHTML = output;
  historyEl.appendChild(out);

  animateBars();
  cmdInput.value = '';
  scrollToBottom();
  cmdInput.focus({ preventScroll: true });
}

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function scrollToBottom() {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

function buildIntro() {
  const wrap = document.createElement('div');
  wrap.innerHTML = `
    <pre class="ascii">${ASCII_LOGO}</pre>
    <div class="output">
      <span class="dim">// ${PROFILE.role} // ${PROFILE.location}</span><br/>
      <span class="ag">Type</span> <span class="amber cmd-link" data-cmd="help">help</span> <span class="ag">to see commands, or click a quick-access chip below.</span><br/>
      <span class="dim">Tip: HRs and recruiters, run</span> <span class="amber cmd-link" data-cmd="hire-me">hire-me</span> <span class="dim">for the plain-English version.</span>
    </div>
    ${renderMenu()}
  `;
  return wrap;
}

// ============ BOOT ============
async function boot() {
  for (const line of bootLines) {
    await new Promise(r => setTimeout(r, line.d));
    const div = document.createElement('div');
    div.className = 'boot-line output';
    div.innerHTML = line.t;
    bootEl.appendChild(div);
    scrollToBottom();
  }

  await new Promise(r => setTimeout(r, 200));

  historyEl.appendChild(buildIntro());
  bindMenu();
  promptRow.style.display = 'flex';
  cmdInput.focus({ preventScroll: true });
  scrollToBottom();
}

cmdInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    runCommand(cmdInput.value);
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (cmdHistory.length === 0) return;
    historyIdx = Math.min(historyIdx + 1, cmdHistory.length - 1);
    cmdInput.value = cmdHistory[historyIdx] || '';
  } else if (e.key === 'ArrowDown') {
    e.preventDefault();
    historyIdx = Math.max(historyIdx - 1, -1);
    cmdInput.value = historyIdx === -1 ? '' : cmdHistory[historyIdx];
  } else if (e.key === 'Tab') {
    e.preventDefault();
    // Simple autocomplete
    const v = cmdInput.value.toLowerCase();
    const all = [...Object.keys(COMMANDS), ...Object.keys(ALIASES)];
    const match = all.find(k => k.startsWith(v));
    if (match) cmdInput.value = match;
  } else if (e.ctrlKey && e.key === 'l') {
    e.preventDefault();
    runCommand('clear');
  }
});

// Keep input focused when clicking anywhere on terminal,
// except on links, buttons, or anything that triggers a command.
document.getElementById('terminal').addEventListener('click', (e) => {
  const t = e.target;
  if (t.tagName === 'A' || t.tagName === 'BUTTON') return;
  if (t.closest('[data-cmd]')) return;
  cmdInput.focus({ preventScroll: true });
});

// ============ MATRIX BG ============
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

// Falling digits 0-9. Simple and universally readable.
const matrixChars = '0123456789'.split('');

const fontSize = 16;
let columns;
let drops;       // current y-position (in rows) for each column's lead
let speeds;      // how fast each column advances
let trails;      // how long each column's trail is

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  columns = Math.floor(canvas.width / fontSize);
  drops = new Array(columns);
  speeds = new Array(columns);
  trails = new Array(columns);
  for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * -50;
    speeds[i] = 0.4 + Math.random() * 0.9;       // 0.4 to 1.3 rows per frame
    trails[i] = 8 + Math.floor(Math.random() * 18); // 8 to 25 chars long
  }
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function drawMatrix() {
  const styles = getComputedStyle(document.body);
  const fade = styles.getPropertyValue('--matrix-fade').trim() || 'rgba(5, 8, 5, 0.08)';
  const color = styles.getPropertyValue('--matrix-color').trim() || '#4ade80';
  const bright = styles.getPropertyValue('--matrix-color-bright').trim() || '#c6f6d5';

  // Fade the previous frame slightly. Lower alpha = longer trails.
  ctx.fillStyle = fade;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = fontSize + 'px monospace';
  ctx.textBaseline = 'top';

  for (let i = 0; i < columns; i++) {
    const x = i * fontSize;
    const headY = drops[i] * fontSize;

    // Trail: a few characters above the head, dimming with distance.
    // We only redraw the head and one above it each frame; the fade above handles the rest.
    if (headY >= 0 && headY < canvas.height) {
      // Bright lead character.
      ctx.fillStyle = bright;
      ctx.shadowColor = bright;
      ctx.shadowBlur = 8;
      const headChar = matrixChars[Math.floor(Math.random() * matrixChars.length)];
      ctx.fillText(headChar, x, headY);

      // Second-from-head, mid-bright.
      ctx.shadowBlur = 0;
      ctx.fillStyle = color;
      const trailChar = matrixChars[Math.floor(Math.random() * matrixChars.length)];
      ctx.fillText(trailChar, x, headY - fontSize);
    }

    // Advance the drop.
    drops[i] += speeds[i];

    // When a drop exits the bottom, reset it above the top with a random delay.
    // The trail length determines how far above the top it can start.
    if (headY > canvas.height + trails[i] * fontSize) {
      if (Math.random() > 0.96) {
        drops[i] = -Math.random() * 30;
        speeds[i] = 0.4 + Math.random() * 0.9;
        trails[i] = 8 + Math.floor(Math.random() * 18);
      }
    }
  }

  ctx.shadowBlur = 0; // reset for next frame
}

// Reset shadow blur on theme change so it doesn't bleed across re-renders.
let matrixTimer = setInterval(drawMatrix, 50);

function applyTheme(mode) {
  document.body.classList.remove('light', 'dark');
  document.body.classList.add(mode);
  // Clear pre-paint class on <html>; body class now drives styling.
  document.documentElement.classList.remove('light', 'dark');
  document.getElementById('theme-icon').textContent = mode === 'light' ? '☀' : '☾';
  // Wipe the matrix canvas so old-color glyphs don't linger as the new theme fades in.
  if (typeof ctx !== 'undefined' && ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  // Persist. Wrapped so private/sandboxed contexts fail silently.
  try { localStorage.setItem('adnan-portfolio-theme', mode); } catch (e) {}
}

function toggleTheme() {
  const isLight = document.body.classList.contains('light');
  applyTheme(isLight ? 'dark' : 'light');
}

function getInitialTheme() {
  // 1. Saved preference wins
  try {
    const saved = localStorage.getItem('adnan-portfolio-theme');
    if (saved === 'light' || saved === 'dark') return saved;
  } catch (e) {}
  // 2. OS preference for first-time visitors
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light';
  }
  // 3. Default
  return 'dark';
}

document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
applyTheme(getInitialTheme());

window.addEventListener('resize', () => {
  columns = Math.floor(canvas.width / fontSize);
  drops = Array(columns).fill(1);
});

// ============ SCROLL TO TOP ============
const scrollTopBtn = document.getElementById('scroll-top');
let scrollTicking = false;

function updateScrollBtn() {
  if (window.scrollY > 400) {
    scrollTopBtn.classList.add('visible');
  } else {
    scrollTopBtn.classList.remove('visible');
  }
  scrollTicking = false;
}

window.addEventListener('scroll', () => {
  if (!scrollTicking) {
    requestAnimationFrame(updateScrollBtn);
    scrollTicking = true;
  }
}, { passive: true });

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // Refocus prompt for keyboard users without yanking the scroll back down.
  setTimeout(() => cmdInput.focus({ preventScroll: true }), 400);
});

boot();
