# CLAUDE.md — Cybersecurity Portfolio

> Single source of truth for this project. Claude Code must read and follow this
> file before generating or editing anything. When a request conflicts with a
> rule here, follow the rule and flag the conflict.

---

## 0. How to use this file (read me first)

- This is a **personal cybersecurity portfolio** site. Target niche:
  **AI Security / Cloud Security / DevSecOps**.
- The **audience is recruiters and hiring managers**, not other engineers. Per
  the source videos: the portfolio may be read by (a) a non-technical recruiter,
  (b) an HR person, and (c) a technical hiring manager — it must work for all
  three. The single job of this site: **pass the recruiter's 30-second test and
  get the owner shortlisted.**
- All copy in Section 6 is **placeholder / example copy** written to be edited.
  Anything in `[SQUARE BRACKETS]` is a fill-in the owner will replace. Do **not**
  invent real personal facts (name, employers, dates, metrics) — keep
  placeholders until the owner supplies real values.
- **Section 7 is the authoritative content ruleset**, extracted from three
  videos by cybersecurity recruiter Luke Gough. Where any other guidance in this
  file conflicts with Section 7, **Section 7 wins.** The example copy in
  Section 6 has already been reconciled to it.

---

## 1. Tech stack (non-negotiable)

- **Build tool:** Vite.
- **Framework:** React (function components + hooks only — no class components).
- **Language:** Start in **JavaScript (JSX)**. If the owner asks for TypeScript
  later, migrate wholesale; don't mix.
- **Styling:** Plain **CSS with CSS custom properties (variables)** using the
  design tokens in Section 4. No Tailwind, no CSS-in-JS, no UI kit unless the
  owner explicitly asks. This keeps the future palette swap trivial.
- **Routing:** `react-router-dom` (owner decision). Home page holds all main
  sections (anchor-scrollable); **each project gets its own routed writeup page**
  at `/projects/[slug]`. Project cards on the home page link to these pages.
  Because the site deploys to GitHub Pages (see Section 1.1), use
  **`HashRouter`** (URLs like `/#/projects/slug`) OR `BrowserRouter` with the
  404-redirect workaround — HashRouter is the simpler, safer default; ask the
  owner only if they want clean URLs badly enough to take on the workaround.
- **Dependencies:** Minimal. Do not add a library to solve something ~30 lines
  of code can handle. Ask before adding any dependency.

### Project structure to scaffold

```
/
├─ index.html
├─ vite.config.js
├─ package.json
├─ CLAUDE.md                ← this file
├─ public/
│  └─ (favicon, resume PDF, project screenshots & diagrams)
└─ src/
   ├─ main.jsx
   ├─ App.jsx
   ├─ styles/
   │  ├─ tokens.css         ← design tokens from Section 4 (edit colors here)
   │  └─ global.css
   ├─ data/
   │  ├─ projects.js        ← project content lives here, not hardcoded in JSX
   │  ├─ skills.js
   │  ├─ learningPath.js    ← certs + courses + in-progress (Section 6.6)
   │  └─ site.js            ← name, target role, tagline, links, contact
   ├─ pages/
   │  ├─ Home.jsx           ← composes the main sections
   │  └─ ProjectPage.jsx    ← routed writeup page: /projects/[slug]; renders
   │                          the full case-study structure from projects.js
   └─ components/
      ├─ Nav.jsx
      ├─ Hero.jsx           ← must state target role (Rule V2-R1 / V3-R2)
      ├─ About.jsx          ← the professional summary (Rule V3-R3)
      ├─ Projects.jsx
      ├─ ProjectCard.jsx    ← summary card; links to the project's routed page
      ├─ Skills.jsx
      ├─ LearningPath.jsx   ← certs/courses timeline (Rule V3-R6)
      ├─ Writeups.jsx       ← EXISTS BUT UNRENDERED until the owner's first
      │                       real writeup (owner decision; Rule V3-R7)
      ├─ Contact.jsx
      └─ Footer.jsx
```

Each entry in `projects.js` carries a `slug` plus every field of the case-study
structure (summary, goal, tools, steps, findings, recommendation, learned,
demonstrates, links). `ProjectCard` shows the skim layer; `ProjectPage` shows
the whole story. Add a "Back to projects" link and prev/next project links on
each writeup page so a recruiter never dead-ends.

### 1.1 Deploy target: GitHub Pages (owner decision)

- Custom domain: **cdjohn.com**. `base: '/'` in `vite.config.js` (custom
  domains serve at the site root regardless of repo name) and
  `public/CNAME` contains `cdjohn.com` so the built `dist/CNAME` tells
  GitHub Pages which domain to serve.
- Deploy via GitHub Actions workflow (build + publish `dist/` to Pages). Ask
  before creating the workflow file.
- Routing caveat: GitHub Pages serves static files only, so deep links to
  `BrowserRouter` routes 404 on refresh. Default to `HashRouter` (see Routing
  above) unless the owner opts into the 404.html redirect workaround.
- Bonus: an active GitHub profile is itself part of the portfolio — commits to
  this repo feed the consistency signal (Rule V1-R10).

**Rule:** All editable content lives in `src/data/*.js`. Components render from
data; the owner should be able to change copy without touching JSX.

---

## 2. Quality floor (always, no announcing it)

- **Responsive** down to a 360px-wide phone.
- **Accessible:** semantic HTML (`<header> <nav> <main> <section> <footer>`),
  one `<h1>`, logical heading order, visible keyboard focus, alt text on every
  image, strong contrast (trivially satisfied by the monochrome palette).
- **Respect `prefers-reduced-motion`:** disable non-essential animation.
- **Performance:** compress images, lazy-load below-the-fold, no unused deps.
- **No dead links.** Every link either works or is a clearly-marked `#`
  placeholder the owner will fill.
- **No typos, no sloppy formatting.** The videos flag these as instant red
  flags — recruiters assume careless portfolio = careless work. Proofread any
  copy you generate or edit.

---

## 3. Working rules for Claude Code

- **Ask before:** adding dependencies, changing the tech stack, deleting the
  owner's edited copy, or restructuring sections.
- **Never overwrite** copy the owner has edited (text no longer in `[BRACKETS]`)
  without confirming.
- Keep components small and single-purpose.
- When you change a design token, change it **only** in `tokens.css`.
- If unsure what the owner wants, leave the placeholder and add a
  `// TODO(owner):` comment rather than inventing facts.
- **Enforce Section 7 on content edits.** If the owner adds a project missing
  its plain-English summary, findings/recommendation, or "skill demonstrated"
  line, point it out (don't silently accept it). If the owner adds off-target
  content (e.g., random web-dev projects), flag the relevance rule.

---

## 4. Design system

> White / grey / black only for now — colors come later. All colors are tokens
> so a future accent is a two-line change in `tokens.css`. The design must serve
> Section 7's clarity rules: clean, uncluttered, skimmable in 30 seconds.

### 4.1 Color tokens (`src/styles/tokens.css`)

```css
:root {
  /* Monochrome scale — edit here when adding color later */
  --color-bg:             #ffffff; /* page background (white) */
  --color-surface:        #f5f5f5; /* cards, subtle panels (light grey) */
  --color-border:         #e2e2e2; /* hairline dividers */
  --color-text:           #17181a; /* body text (near-black) */
  --color-text-muted:     #6b6f76; /* secondary text, captions (mid grey) */
  --color-text-inverse:   #ffffff; /* text on dark blocks */
  --color-ink:            #0a0a0a; /* strongest black — headings, footer bg */

  /* Accent is intentionally monochrome for now.
     To add color later, change ONLY these two lines. */
  --color-accent:          #0a0a0a;
  --color-accent-contrast: #ffffff;
}
```

### 4.2 Typography

The monospace face is the signature: it labels the security/CLI world without
needing color.

- **Display / headings:** `"Space Grotesk"` (fallback: system grotesque sans).
- **Body:** `"Inter"` (fallback: system UI sans).
- **Utility / labels / metrics / code:** `"JetBrains Mono"` (fallback:
  `ui-monospace, monospace`) — eyebrow labels, tags, stats, tool names.

Type scale:

```css
--text-xs:   0.75rem;   /* mono labels, captions */
--text-sm:   0.875rem;
--text-base: 1rem;      /* body */
--text-lg:   1.25rem;
--text-xl:   1.75rem;
--text-2xl:  2.5rem;
--text-3xl:  3.75rem;   /* hero headline (clamp on mobile) */
```

- Headings: Space Grotesk, weight 600–700, line-height ~1.1.
- Body: Inter, 400, line-height ~1.6, max line length ~68ch.
- Eyebrows: mono, uppercase, letter-spacing ~0.08em, `--text-xs`, muted grey.

### 4.3 Layout & spacing

- Content max-width ~1080px, centered, generous gutters.
- Spacing scale: `--space-1: 4px; --space-2: 8px; --space-3: 16px;
  --space-4: 24px; --space-5: 40px; --space-6: 64px; --space-7: 96px;`
- `--space-7` between major sections on desktop, `--space-6` on mobile.
- Cards: `--color-surface` bg, 1px `--color-border`, 6px radius, no drop
  shadows in the monochrome phase (borders do the separating).

### 4.4 Signature & restraint

- One memorable idea only: mono eyebrow labels styled like terminal paths —
  `~/projects`, `~/about`, `~/learning`. Everything else stays quiet.
- No `01 / 02 / 03` section numbering (portfolio sections aren't a sequence).
  Exception: the **Learning Path** section may use a dated timeline, because
  chronology there carries real information (Rule V3-R6 wants progression).
- Motion: at most a subtle fade-in on section headers, disabled under
  `prefers-reduced-motion`. No parallax, no carousels, nothing that slows a
  recruiter down.

---

## 5. Content & copy rules (operating summary of Section 7)

> Quick-reference distillation. Full sourced rules are in Section 7, which wins
> on any conflict.

- **Pass the 30-second test.** A recruiter must be able to tell, fast: target
  role, what each project proved, tools used, what the owner personally did,
  and what they learned/recommend.
- **The portfolio is evidence, not a folder of projects.** Every claim links to
  proof: repo, writeup, diagram, screenshot.
- **Plain English first, technical detail second.** Every project opens with an
  executive summary a non-technical recruiter can read; commands, logs, and
  screenshots live below it.
- **3 strong projects beat 10 weak ones.** Depth over breadth.
- **Every project follows the same structure:** Summary → Goal → Tools used →
  Steps taken → Findings → Recommendation → What I learned — and ends with a
  "this project demonstrates [job skill]" line that maps to job descriptions.
- **Pick a lane.** This portfolio looks like an AI/Cloud/DevSecOps portfolio,
  top to bottom. Nothing off-target.
- **Certs support, they don't headline.** They sit in the Learning Path, ideally
  tied to an applied project.
- **Show consistency.** The portfolio is a living document — visible recent
  activity, roughly one solid addition a month.
- **Cite sources.** Any lab or project inspired by someone else's work credits
  it. Tutorial-following must be extended with the owner's own thinking.
- **Voice:** specific over generic. Never "passionate cybersecurity enthusiast."
  Active voice, sentence case, short paragraphs.

---

## 6. Example copy (edit freely — placeholders in `[BRACKETS]`)

> Starter copy showing the shape; swap in real details. Lives in
> `src/data/*.js`. Already structured to satisfy Section 7.

### 6.1 Site meta (`src/data/site.js`)

- **Name:** `[Your Name]`
- **Target role (displayed verbatim in hero):**
  `[Junior Cloud Security / DevSecOps Engineer]`
- **Location:** `[City, Country]` (or "Open to remote")
- **Links:** GitHub `[url]` · LinkedIn `[url]` · Resume `[/resume.pdf]` ·
  Email `[you@email.com]`

### 6.2 Hero — the online handshake (`~/`)

> Rule V2-R1: the homepage must state the target role and what the portfolio
> proves, in seconds. Not a life story.

- Eyebrow (mono): `~/`
- **Headline:** `[Your Name]`
- **Role line (prominent):** `Targeting [junior cloud security / DevSecOps]
  roles.`
- **Proof line:** `This portfolio shows hands-on work in cloud hardening with
  Terraform, CI/CD security automation, and LLM threat modeling — each project
  documented end to end.`
- **CTAs:** `View projects` · `Get in touch` · text link `Resume (PDF)`.

### 6.3 About — professional summary (`~/about`)

> Rule V3-R3: 2–3 specific sentences — who you are, your focus area, what you
> bring. Modeled on Luke's example format.

`I'm a [career changer from IT support / recent grad in X] with a focus on
cloud security and DevSecOps across AWS and Azure. I hold [Security+] and
[cert/course], and I work hands-on in [free-tier AWS and Azure environments]
where I practice [infrastructure hardening, CI/CD security scanning, and LLM
threat modeling]. Every project below is documented so you can see exactly
what I did and why.`

### 6.4 Projects — the centerpiece (`~/projects`, `src/data/projects.js`)

> Rules V2-R7/R8/R10/R11 and V3-R4/R5: exactly **3 strong projects**, each with
> a plain-English executive summary on the card, the full case-study structure
> in its writeup, screenshots as support (not the story), and a closing "skill
> demonstrated" line. Extra ideas go in the backlog at the end of this section,
> not on the site.

**Card layout (ProjectCard.jsx):** title → one-line executive summary → mono
tool tags → "Demonstrates: [skills]" line → links (repo / writeup / diagram).
Full structure lives in the linked README/writeup.

**Project 1 — Secure-by-default cloud deployment**
- **Summary (plain English, first):** `I deployed a sample application to
  [AWS] and hardened it against the most common cloud misconfigurations —
  locked-down permissions, private networking, encryption, and full audit
  logging — then documented every decision.`
- **Goal:** Prove I can take an insecure-by-default deployment to a hardened,
  auditable state using infrastructure-as-code.
- **Tools used:** `Terraform` · `AWS IAM` · `CloudTrail` · `Checkov` — and why
  each: `[one line per tool]`.
- **Steps taken:** `[Provisioned baseline → scanned → prioritized findings →
  remediated least-privilege IAM, network exposure, encryption, logging →
  re-scanned]`.
- **Findings:** `Started at [N] Checkov findings; the ones that mattered were
  [public bucket / wildcard IAM / no logging] because [impact]. I deprioritized
  [X] because [reason].`
- **Recommendation:** `[e.g., enforce these controls as pipeline policy so
  drift is caught before deploy — see Project 2.]`
- **What I learned:** `[1–2 honest sentences.]`
- **Demonstrates:** infrastructure-as-code, cloud hardening, risk
  prioritization, written documentation.
- **Links:** `[repo]` · `[writeup]` · `[architecture diagram]`.

**Project 2 — CI/CD pipeline with security gates**
- **Summary:** `I built a GitHub Actions pipeline that automatically blocks
  vulnerable code, dependencies, and misconfigured infrastructure before it can
  merge — then wrote up how I tuned it to avoid noise.`
- **Goal:** Show I can automate security checks developers will actually keep.
- **Tools used:** `GitHub Actions` · `Semgrep` (SAST) · `Trivy` (dependencies)
  · `Checkov` (IaC) — `[why each]`.
- **Steps taken:** `[Built pipeline → seeded known-vulnerable code → verified
  gates fail the build → tuned rules → documented triage workflow]`.
- **Findings:** `The pipeline caught [example vuln]; the noisiest rule was [X],
  which I [suppressed/tuned] because [reason].`
- **Recommendation:** `[e.g., start with blocking on critical/high only and
  ratchet up, so teams don't bypass the gate.]`
- **What I learned:** `[...]`
- **Demonstrates:** DevSecOps automation, SAST/SCA/IaC scanning, judgment about
  signal vs. noise, clear technical writing.
- **Links:** `[repo]` · `[sample failed run]` · `[writeup]`.

**Project 3 — LLM application threat model & guardrails**
- **Summary:** `I threat-modeled a small LLM-powered app against the OWASP LLM
  Top 10, tested it with real prompt-injection payloads, and added input/output
  guardrails — documenting what they blocked and what risk remains.`
- **Goal:** Show I can apply structured security thinking to AI systems, not
  just traditional infrastructure.
- **Tools used:** `Python` · `OWASP LLM Top 10` · `STRIDE` — `[why each]`.
- **Steps taken:** `[Built/chose target app → mapped threats → wrote injection
  test cases → implemented filtering → re-tested → documented residual risk]`.
- **Findings:** `Blocked [X of Y] injection attempts; the ones that got through
  worked because [reason], which matters because [impact].`
- **Recommendation:** `[e.g., guardrails are a layer, not a fix — pair with
  least-privilege tool access and output monitoring.]`
- **What I learned:** `[...]`
- **Demonstrates:** AI/LLM security, threat modeling, adversarial testing,
  risk communication.
- **Links:** `[repo]` · `[threat model doc]` · `[test results]`.

**Cloud coverage note (owner uses AWS *and* Azure):** keep the top three
projects as-is (Project 1 = AWS) and bring Azure in through the backlog rather
than diluting the current projects — one strong project per cloud over time
beats a shallow multi-cloud mashup (depth over breadth, V3-R4).

**Project backlog (not rendered on site — future monthly additions, per the
consistency rule):** Azure counterpart to Project 1 (harden an Azure deployment
with Bicep/Terraform + Entra ID least-privilege + Defender for Cloud findings);
cloud misconfiguration audit with Prowler/ScoutSuite and a prioritized
remediation report; detection rules for cloud audit logs (CloudTrail / Azure
Activity Log); secrets-scanning rollout writeup; container image hardening.

### 6.5 Skills (`~/skills`, `src/data/skills.js`)

> Supporting evidence only — every listed item should be visible in a project.
> Do not let this become a "tool dump" (Rule V2-R4): tools appear here because
> the projects above show them in use.

- **Cloud security (AWS & Azure):** `[AWS IAM]` `[Azure Entra ID / RBAC]`
  `[VPC & VNet network security]` `[encryption & logging]` `[Checkov]`
  `[Prowler]` `[Microsoft Defender for Cloud]`
- **DevSecOps:** `[GitHub Actions]` `[Semgrep]` `[Trivy]` `[secrets scanning]`
- **AI / LLM security:** `[OWASP LLM Top 10]` `[prompt-injection testing]`
  `[guardrails]` `[STRIDE]`
- **Foundations:** `[Linux]` `[Python]` `[Docker]` `[Terraform]` `[networking]`

### 6.6 Learning path (`~/learning`, `src/data/learningPath.js`)

> Rule V3-R6: a simple dated list showing intentional progression — completed,
> current, and next. Certs live here (supporting cast), each tied to applied
> work where possible (Rule V1-R14).

- `[Month Year]` — `[CompTIA Security+]` — completed → applied in
  `[Project 1]`.
- `[Month Year]` — `[Course / cert]` — completed.
- **Now:** `[AWS Security Specialty — in progress, target Month Year]`.
- **Next:** `[planned course / project]`.

### 6.7 Writeups / blog (optional but a big differentiator — `~/writeups`)

> OWNER DECISION: build `Writeups.jsx` but keep it **unrendered** (component
> exists, not mounted, no nav link) until the owner publishes their first
> writeup — then flip it on. Rule V3-R7: optional but a strong communication
> signal. Breakdowns of security news, tutorials, or case studies all qualify
> (Rule V1-R13). Credit any lab or tutorial that inspired a piece (V1-R11).

- `[Title]` — one line on what it covers and who it's for. `[link]`

### 6.8 Contact (`~/contact`)

- **Heading:** `Let's talk.`
- **Body:** `I'm targeting [junior cloud security / DevSecOps] roles. Fastest
  way to reach me is email — happy to walk through any project on a call.`
- **Actions:** `Email` · `LinkedIn` · `GitHub` · `Download resume (PDF)`.

### 6.9 Footer

- `© [Year] [Your Name]` · `Last updated [Month Year]` · `[GitHub] [LinkedIn]`
- The **"Last updated"** stamp is deliberate (living-document rule, V3-M5).
  Keep it current; a stale date signals coasting.

---

## 7. RULES FROM THE VIDEOS (AUTHORITATIVE)

> Extracted from transcripts of three videos by cybersecurity recruiter Luke
> Gough (14–15+ years in recruitment). Paraphrased faithfully, not quoted.
> **These rules override anything else in this file.** Claude Code must check
> content changes against this section.

### Video 1 — "Get Hired In Cybersecurity FAST With These Portfolio Tips!"

- **V1-R1.** A resume is claims; a portfolio is proof. Show evidence of the
  actual work (finding vulnerabilities, responding to incidents, scripting,
  analyzing logs) — this alone separates you from ~90% of applicants.
- **V1-R2.** Make it instantly easy to access and navigate. Recruiters skim
  (≈6 seconds on a CV); if navigation is messy or endless, they leave.
- **V1-R3.** Have a single central hub (personal website, well-organized
  GitHub, or Notion page).
- **V1-R4.** Professional look: clean layout, simple formatting, no clutter.
- **V1-R5.** Short intro at the top — who you are, what you specialize in,
  your career goal. The "online handshake."
- **V1-R6.** Projects must be **relevant to the target role**. No off-target
  filler (e.g., random web-dev projects on a security portfolio).
- **V1-R7.** Scan the actual job specs you're targeting; if they ask for a
  skill you have, show it clearly and prominently.
- **V1-R8.** Each project tells a mini story: the problem, what you did, the
  result.
- **V1-R9.** Documentation is where most people fail. Never dump raw code or
  screenshots. Every project gets a clear README, screenshots/diagrams where
  visual, and a short explanation: the challenge, the tools, what you learned.
  The reader may be non-technical — write for clarity.
- **V1-R10.** Show consistency and ongoing activity (GitHub activity over
  months, regular posts). One solid project or writeup per month builds a
  track record. One-time efforts read as unserious.
- **V1-R11.** Polish is a proxy for how you'll work. Typos and sloppy
  formatting are red flags. **Plagiarism is an instant deal-breaker** — always
  credit labs or work that inspired yours.
- **V1-R12.** Tailor, tailor, tailor to the role.
- **V1-R13.** Extras that impress: a blog or LinkedIn articles breaking down
  security news or tutorials (shows communication + industry awareness).
- **V1-R14.** Link certifications to projects — after earning a cert, build
  something applying it.
- **V1-R15.** Document community involvement: CTFs, open-source contributions.
- **V1-recap.** Clear presentation · relevant projects · strong documentation ·
  consistency · professional polish · impressive extras.

### Video 2 — "I Reviewed Beginner Cybersecurity Portfolios: What Gets Interviews"

- **V2-R1 (the 30-second recruiter test).** Within 30 seconds a recruiter must
  be able to answer five questions: (1) what role is this person targeting?
  (2) what problem did this project solve? (3) what tools/methods were used?
  (4) what did they do *themselves*? (5) what did they learn or recommend?
  If the portfolio makes the recruiter work harder than that, it gets skipped.
- **V2-R2.** The portfolio is **evidence**, not a folder of projects: evidence
  you understand a target role, can investigate, document, explain, and
  improve things, and can communicate clearly enough to be trusted.
- **V2-R3 (anti-pattern: tool dump).** Listing tools proves nothing about how
  you think. For any tool shown, answer: why this target, what the results
  showed, which findings mattered, what you'd recommend next, what you'd
  ignore and why. That's the difference between *using a tool* and *doing
  security work*.
- **V2-R4 (fix for tool dumps).** Turn one project into a proper case study:
  context → goal → tools (and why) → findings that mattered → recommendation →
  reflection. One strong writeup beats ten tool screenshots.
- **V2-R5 (anti-pattern: badge list).** A badge/lab completion proves you
  finished something, not that you understood it. Use badges as *supporting*
  evidence, never the main evidence.
- **V2-R6 (fix for badge lists).** Turn one lab into a real investigation
  writeup: the alert, what you checked first, what you reviewed, how you
  compared against normal, why you concluded it was suspicious, and your
  concrete recommendations.
- **V2-R7 (anti-pattern: over-technical).** Technical depth with no plain-
  English summary loses the recruiter and HR reader. **Every project needs an
  executive summary at the top** stating what you investigated, what you did,
  and what you concluded — technical detail (commands, logs, screenshots)
  goes below it. Serve all three readers: recruiter, HR, hiring manager.
- **V2-R8 (anti-pattern: generic portfolio).** A bit of everything creates
  confusion about what you actually want. The portfolio must look like a
  portfolio for **one specific target role**, top to bottom. Multiple
  interests are fine, but the top must match the role being applied for.
- **V2-R9 (recommended structure).** (a) Short homepage — who you are, target
  role, what the portfolio proves; not a life story. (b) **Three strong
  projects, not ten weak ones.** (c) Every project follows the same structure:
  **summary, goal, tools used, steps taken, findings, recommendation, what I
  learned.** (d) Screenshots support the story but are not the story.
  (e) End every project with the job skill it demonstrates, so the reader can
  map it to a job description.
- **V2-R10 (the scorecard — self-check, 1 point each).** (1) Homepage states
  the target role. (2) Each project has a plain-English summary. (3) Each
  project explains the problem, not just the tool. (4) Each project shows what
  you did yourself. (5) Each project ends with findings or recommendations.
  (6) The portfolio matches the job being applied for. (7) A recruiter could
  understand the value in under 30 seconds — *the one to nail.* Below 5/7:
  not ready to send. 6–7: ahead of most beginners.
- **V2-R11 (big takeaway).** The portfolio must prove you can **think,
  investigate, document, communicate, and make useful recommendations** — not
  just that you're interested in cyber.

### Video 3 — "How to Build a Cybersecurity Portfolio That Gets You Interviews (A Recruiter's Perspective)"

- **V3-R1.** Certifications alone are table stakes — they pass filters but
  don't differentiate. Proof of applied work is what gets the phone call.
- **V3-R2 (the five must-haves).** Every effective portfolio has: (1) a clear
  professional summary, (2) hands-on projects with proper writeups, (3) a
  learning-path section, (4) a blog/writeup section (optional but a massive
  differentiator), (5) easy navigation.
- **V3-R3 (professional summary).** 2–3 specific sentences: who you are, your
  focus area, what you bring. Never generic ("passionate cybersecurity
  professional seeking opportunities" says nothing). Specific example shape:
  background → focus area → certs held → hands-on environment and what you
  practice in it.
- **V3-R4 (projects).** The most important section. No repos without context.
  Each project: what you did, why, tools used, what you learned. **Depth over
  breadth** — a few well-documented projects beat ten half-finished ones; one
  project showing how you think beats a dozen shallow ones.
- **V3-R5 (project examples that impress).** SIEM home lab with ingested logs
  and custom detection rules (document architecture, dashboards, detection
  logic); vulnerability assessment of a deliberately vulnerable machine with
  methodology and remediation; GRC mapping of a small-business scenario to
  NIST/ISO 27001. *(Adapt equivalents to the AI/Cloud/DevSecOps lane.)*
- **V3-R6 (learning path).** Most people skip it; it's powerful. A simple
  dated list/timeline of completed certs and courses plus what's currently in
  progress — shows intentional development.
- **V3-R7 (blog/writeups).** Optional but strongly recommended: writing
  clearly about technical topics signals communication skill, one of the
  biggest gaps recruiters see in cyber candidates.
- **V3-R8 (navigation).** Clean, organized, findable. Simple site with clear
  sections; platform matters less than clarity.
- **V3-M1 (mistake).** Certifications as the entire portfolio — that's a CV,
  not a portfolio.
- **V3-M2 (mistake).** Incomplete projects with no documentation. A repo of
  scripts with no README is **worse than nothing** — it reads as unfinished or
  can't-be-bothered.
- **V3-M3 (mistake).** Copying tutorials without adding your own thinking.
  Learning from tutorials is fine; the portfolio must show independent
  understanding and application.
- **V3-M4 (mistake).** Covering every area of cybersecurity. **Pick a lane**
  and go deep — focused reads as "knows what they want"; scattered reads as
  "not sure yet."
- **V3-M5 (mistake).** Not updating. The portfolio is a **living document**;
  a six-month-stale portfolio is a problem. Keep adding projects and updating
  the learning path.
- **V3-R9 (getting started this week).** Day 1: set up structure with sections
  About / Projects / Learning path / (optional) Blog. Days 2–3: write the
  professional summary — specific, not generic. Day 4+: start one project
  aligned to the target lane and **document as you go**, not after.
  **Done is better than perfect** — the people who get hired are the ones who
  start, not the ones who plan the perfect portfolio for six months.

### How these rules bind this project

- The hero/homepage **must** display the target role and what the portfolio
  proves (V2-R1, V2-R10, V3-R2).
- `ProjectCard.jsx` + each project writeup **must** implement: plain-English
  executive summary first → goal → tools (with why) → steps → findings →
  recommendation → what I learned → "Demonstrates: [skills]" line (V2-R7,
  V2-R9, V3-R4).
- Render **exactly three projects** until the owner has more finished,
  documented work; extras go to the backlog (V2-R9, V3-R4).
- Site sections: About (professional summary), Projects, Skills, Learning
  path, optional Writeups, Contact (V3-R2, V3-R9).
- Keep the whole site skimmable against the 7-point scorecard (V2-R10); when
  reviewing content changes, score them mentally and flag anything below 7.
- Everything on the page points at the AI/Cloud/DevSecOps lane (V2-R8, V3-M4).
- Footer shows a "Last updated" date (V3-M5).

---

## 8. Decisions log (owner-confirmed — do not re-ask)

- **Deploy:** GitHub Pages (see Section 1.1 for base path + routing caveats).
- **Clouds:** AWS **and** Azure. Top three projects stay AWS-anchored; Azure
  arrives via the backlog (see cloud coverage note in Section 6.4).
- **Writeups:** `Writeups.jsx` exists but stays unrendered (no mount, no nav
  link) until the owner's first real writeup.
- **Routing:** routed page per project writeup via `react-router-dom`
  (HashRouter — confirmed, not just the default).
- **Repo name:** `portfolio` (`https://github.com/JohnMcyber/portfolio`).
- **Custom domain:** `cdjohn.com`. `vite.config.js` sets `base: '/'` and
  `public/CNAME` contains `cdjohn.com` (see Section 1.1).
- **GitHub Actions:** `.github/workflows/deploy.yml` exists — builds and
  publishes `dist/` to Pages on push to `main` (adjust the branch name in
  the workflow if the repo's default branch differs).

Still open (ask when relevant, not before):
- (none currently — scaffold is built; ask before restructuring per
  Section 3)
