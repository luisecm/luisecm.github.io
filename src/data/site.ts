/**
 * ─────────────────────────────────────────────────────────────
 *  ALL SITE CONTENT LIVES HERE.
 *  Edit this file to change the site. Components read from it.
 *  Anything marked TODO is a placeholder for you to fill in.
 * ─────────────────────────────────────────────────────────────
 */

/**
 * BEFORE DEPLOYING WITH THIS DOMAIN, two things must already be true:
 *   1. luiscardena.com is registered and its DNS points at GitHub Pages.
 *   2. info@luiscardena.com receives mail (a forward to your Outlook
 *      address is enough).
 * Until then, set this back to "luisecm.github.io" — the email below
 * follows it, so nothing breaks.
 */
const domain = "luiscardena.com";

export const site = {
  name: "Luis Cardeña",
  role: "QA Engineer · SDET · Product Developer",
  url: `https://${domain}`,
  email: `info@${domain}`,
  location: "Mérida, Mexico",
  timezone: "UTC−6 · overlaps US & LATAM business hours",
  github: "https://github.com/luisecm",
  // TODO: create a free Cal.com link and paste it here. Until then this
  // falls back to the email CTA automatically.
  booking: "",
  // TODO: paste a Google Form / Tally / Typeform URL for project intake.
  // Falls back to the email CTA while empty.
  intakeForm: "",
  // TODO: drop a PDF at public/luis-cardena-sdet.pdf, then set this to
  // "/luis-cardena-sdet.pdf". While empty, the download links stay hidden
  // rather than shipping a 404.
  resume: "",
};

export const meta = {
  title: "Luis Cardeña — SDET & Test Automation Consultant",
  tagline: "I make shipping safe — then I help you ship.",
  description:
    "Freelance SDET with 14 years in quality engineering. I build test automation and CI/CD pipelines that teams actually trust — for web, mobile and Web3 — and ship product features alongside your engineers.",
};

/* ── Hero ─────────────────────────────────────────────────── */

/**
 * ─── Availability mode ──────────────────────────────────────────────
 * Flip this one word to change every "is he looking?" signal on the site.
 *
 *  "discreet" — makes no availability claim anywhere. The site still
 *      describes your services, shows your work and takes enquiries; it
 *      simply never announces that you're open to moving. Use this while
 *      you're in a role you'd rather not advertise leaving.
 *
 *  "open" — adds a live status badge and leads with booking a call.
 *      Use it once you can be public about taking work.
 * ────────────────────────────────────────────────────────────────────
 */
type Availability = "discreet" | "open";

// The `as Availability` matters: without it TypeScript narrows this const to
// the literal you wrote and treats the other branch below as dead code.
export const availability = "discreet" as Availability;

const tones = {
  discreet: {
    heroEyebrow: "QA Engineer · SDET · Product Developer",
    statusDot: false,
    heroCta: "Start a conversation",
    navCta: "Get in touch",
    contactRouteLabel: "Start a conversation",
    contactRouteLede:
      "A short call to talk through what you're building and where it's hurting. Useful even if it goes no further — you'll get a straight read on the problem.",
    closingLede:
      "If you can describe the problem in three sentences, I can usually tell you on a first call whether it's a two-week fix or a two-month one.",
    aboutClosing:
      "The best place to start is a conversation about what you're building and what's getting in the way.",
  },
  open: {
    heroEyebrow: "Available for contract & consulting work",
    statusDot: true,
    heroCta: "Book an intro call",
    navCta: "Book a call",
    contactRouteLabel: "Book an intro call",
    contactRouteLede:
      "Thirty minutes to work out whether I'm the right person for your problem. No pitch, and I'll tell you if the answer is no.",
    closingLede:
      "Tell me what's breaking. If I'm not the right person for it, I'll say so and point you at who is.",
    aboutClosing:
      "Contract and consulting work is my focus. Either way, start with a call.",
  },
} as const;

export const tone = tones[availability];

export const hero = {
  eyebrow: tone.heroEyebrow,
  heading: "I make shipping safe — then I help you ship.",
  subheading:
    "I'm the engineer teams bring in when releases have become scary. I find what's actually breaking, build automation your team trusts, and get the pipeline green again — then stay to help build the product.",
  primary: { label: tone.heroCta, href: "#book" },
  secondary: { label: "See how I work", href: "/services" },
};

export const quickFacts = [
  { label: "Experience", value: "14 years" },
  { label: "Platforms", value: "Web, iOS, Android, desktop" },
  { label: "Based in", value: "Mérida, Mexico" },
  { label: "Hours", value: "UTC−6 · US & LATAM overlap" },
];

/* ── Problems I get called in about ───────────────────────── */

export const painPoints = [
  "The E2E suite is red and nobody trusts it",
  "Release day keeps slipping on manual regression",
  "Flaky tests get re-run until they pass",
  "No mobile coverage before the App Store deadline",
  "CI takes 45 minutes and blocks every merge",
  "QA is a bottleneck instead of a safety net",
  "We find out about bugs from our users",
  "Coverage looks high but catches nothing",
  "Only one person knows how the tests work",
  "The staging environment never matches production",
];

/* ── Numbers worth leading with ────────────────────────────── */

export const stats = [
  { value: "14", label: "Years in quality engineering" },
  { value: "40%", label: "Manual test effort removed on a Web3 platform" },
  { value: "30%", label: "Faster CI build & test execution" },
  { value: "4", label: "Platforms covered: web, iOS, Android, desktop" },
];

/* ── Services ─────────────────────────────────────────────── */

export const services = [
  {
    id: "audit",
    name: "Quality Audit",
    shape: "Fixed scope · 1–2 weeks",
    // TODO: set your price, e.g. "From $2,500"
    price: "",
    summary:
      "A clear-eyed read on why your releases hurt, and the shortest path out.",
    description:
      "I go through your test suite, CI pipeline and release process the way a new senior hire would — except I report back in two weeks instead of two months. You get a written assessment, a ranked list of what's actually costing you time, and a roadmap you can hand to your own team even if we never work together again.",
    deliverables: [
      "Written audit of test coverage, suite health and CI configuration",
      "Flaky-test inventory, ranked by how often it blocks a release",
      "Pipeline timing breakdown with concrete speed-up targets",
      "Prioritised 90-day roadmap with effort estimates",
      "Live walkthrough with your engineering team",
    ],
    best: "Best when you suspect something is wrong but can't name it yet.",
    featured: false,
  },
  {
    id: "embedded",
    name: "Embedded SDET",
    shape: "Retainer · 10 or 20 hrs/week",
    // TODO: set your monthly rate, e.g. "From $4,000/mo"
    price: "",
    summary:
      "Senior quality engineering on your team, without opening a headcount.",
    description:
      "I join your standups, your repo and your Slack, and own the automation layer as if I were staff. That means writing and maintaining the suite, keeping CI green, triaging failures before they reach your developers, and documenting it all so the work outlives the engagement. Most clients start here after an audit.",
    deliverables: [
      "Test automation written and maintained in your stack",
      "CI/CD pipelines kept fast and green, with failure triage",
      "Release-readiness checks across your environments",
      "Code review on test code written by your developers",
      "Documentation and handover built in from day one",
    ],
    best: "Best when you have a team shipping but no dedicated quality owner.",
    featured: true,
  },
  {
    id: "build",
    name: "Automation Build",
    shape: "Project · 4–10 weeks",
    // TODO: set your price, e.g. "From $8,000"
    price: "",
    summary: "From zero to a trustworthy suite running in CI.",
    description:
      "A greenfield build for teams with no automation, or a rebuild for teams whose suite has stopped earning its keep. I design the architecture, write the first meaningful set of tests, wire it into CI with proper reporting, and train your team to extend it. You own everything at the end — no proprietary tooling, no lock-in to me.",
    deliverables: [
      "Framework architecture chosen for your stack and team's skills",
      "E2E coverage of your highest-risk user journeys",
      "Parallelised CI execution with reporting and alerting",
      "Mobile coverage for iOS and Android where relevant",
      "Team training sessions and a written contribution guide",
    ],
    best: "Best when you're scaling and manual regression no longer fits.",
    featured: false,
  },
  {
    id: "product",
    name: "Product Engineering",
    shape: "Retainer or project",
    price: "",
    summary: "Features, integrations and full builds — shipped and tested.",
    description:
      "I also build. Years of taking other people's software apart taught me exactly where it tends to break, and I write my own code accordingly. I take on feature work, API integrations and full product builds — increasingly with an AI assistant in the loop from prototype to release, which is how I keep small-team delivery fast without letting quality slide.",
    deliverables: [
      "Feature development in TypeScript, React, React Native and Node",
      "Third-party API and payment integrations",
      "Full builds from prototype to production release",
      "AI-assisted delivery, with tests written alongside the feature",
      "Mobile app builds and store submission support",
    ],
    best: "Best when you need delivery capacity that won't create cleanup later.",
    featured: false,
  },
];

/* ── Capability groups ────────────────────────────────────── */

export const capabilities = [
  {
    title: "Test automation",
    items: [
      "Playwright",
      "Cypress",
      "WebdriverIO",
      "Appium",
      "Selenium",
      "TypeScript",
      "JavaScript",
      "Python",
    ],
  },
  {
    title: "Pipelines & infrastructure",
    items: [
      "GitHub Actions",
      "GitLab CI",
      "Docker",
      "Google Cloud",
      "Parallel execution",
      "Allure & custom reporting",
    ],
  },
  {
    title: "APIs & data",
    items: [
      "REST & API testing",
      "Postman",
      "PostgreSQL",
      "MongoDB",
      "SQL & NoSQL",
      "ETL validation",
    ],
  },
  {
    title: "Product development",
    items: [
      "React",
      "React Native",
      "Node & Express",
      "Tailwind",
      "Solidity basics",
      "AI-assisted delivery",
    ],
  },
];

/* ── Case studies ─────────────────────────────────────────────
   Every employer and client is described by sector, never named.
   ────────────────────────────────────────────────────────────── */

type CaseStudy = {
  slug: string;
  /** Sort keys — `until: null` means ongoing. */
  since: number;
  until: number | null;
  /** Shown on the homepage. Pick the strongest, not simply the newest. */
  featured: boolean;
  client: string;
  sector: string;
  period: string;
  role: string;
  /** True for your own builds, so they are never mistaken for client work. */
  personal?: boolean;
  headline: string;
  problem: string;
  approach: string[];
  outcome: string[];
  stack: string[];
  /** Public code, where any exists. Everything client-side stays empty. */
  links: { label: string; href: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "early-stage-product",
    since: 2025,
    until: null,
    featured: true,
    client: "Early-stage startup",
    sector: "Product company · small engineering team",
    period: "2025 – present",
    role: "SDET & QA / Developer",
    headline: "Owning the quality layer at a startup shipping fast",
    problem:
      "A small engineering team shipping quickly with no dedicated quality function. Testing was manual and ad hoc, nothing ran automatically on a change, and the cost of that was starting to show up as rework rather than as obvious bugs.",
    approach: [
      "Built the first automated test coverage in a codebase that had none",
      "Set up CI so the suite runs on every change instead of before a release",
      "Introduced release verification the team can run without me",
      "Build product features alongside the quality work, as the team needs",
    ],
    outcome: ["Engagement ongoing — details confidential"],
    stack: ["Playwright", "TypeScript", "CI/CD", "React Native", "Node"],
    links: [],
  },
  {
    slug: "web3-messaging",
    since: 2022,
    until: 2023,
    featured: true,
    client: "Decentralised messaging platform",
    sector: "Web3 instant messaging",
    period: "2022 – 2023",
    role: "Software Development Engineer in Test",
    headline:
      "E2E coverage for a decentralised messenger across web, desktop and mobile",
    problem:
      "A small team was shipping a decentralised messaging platform simultaneously as a web app, a macOS and Windows desktop app, and a Flutter mobile app. Every release meant manually re-testing chat, friend requests, calls and screen sharing on all of them. Nothing was automated, and regression testing was eating the schedule.",
    approach: [
      "Designed and built test automation frameworks for all three platforms, rather than treating mobile and desktop as untestable",
      "Wrote a Playwright E2E suite for the web client covering video calls and screen share — the flows everyone assumed couldn't be automated",
      "Built the first Appium coverage for the Flutter mobile app after researching the strategy from scratch",
      "Set up and maintained CI/CD pipelines so the suites ran on every change instead of on request",
      "Reviewed test code from other engineers and wrote the documentation the team still works from",
    ],
    outcome: [
      "Manual testing effort down roughly 40%",
      "Build and test execution time down roughly 30%",
      "Regression cycle time down roughly 25%",
      "Automated coverage of video call and screen-share flows",
    ],
    stack: ["Playwright", "Cypress", "Appium", "WebdriverIO", "GitHub Actions", "PostgreSQL"],
    links: [],
  },
  {
    slug: "b2b-commerce",
    since: 2024,
    until: 2025,
    featured: true,
    client: "B2B wholesale commerce platform",
    sector: "Enterprise retail SaaS",
    period: "2024 – 2025",
    role: "Senior QA Engineer",
    headline:
      "Release readiness across multiple environments for an enterprise commerce platform",
    problem:
      "A wholesale commerce platform used by major retail brands ships on a continuous release cycle across several environments. Each cycle needed functional and non-functional verification without becoming the thing that delayed the release.",
    approach: [
      "Ran functional and non-functional testing across 3+ environments and successive release cycles",
      "Built and optimised automated frameworks covering web and mobile surfaces",
      "Identified the high-value regression scenarios worth automating first, instead of automating everything indiscriminately",
      "Reviewed automated test code from across the team to keep maintenance cost down",
    ],
    outcome: [
      "Release readiness verified every cycle with production issues kept low",
      "Regression suite execution time cut through targeted automation",
      "Test-code defect rate reduced through consistent review",
    ],
    stack: ["Playwright", "Appium", "WebdriverIO", "TypeScript", "Python", "MongoDB", "Google Cloud"],
    links: [],
  },
  {
    slug: "etl-claims",
    since: 2015,
    until: 2020,
    featured: false,
    client: "Disability claims management",
    sector: "Insurance · data engineering",
    period: "2015 – 2020",
    role: "QA Engineer, then QA Lead",
    headline: "Data quality for ETL pipelines where a wrong number means a wrong payment",
    problem:
      "One of the largest disability claims managers in its market ingested HR and payroll data from client companies to drive payment processing. If an ETL interface silently mangled a record, someone's payment was wrong — a class of bug that UI testing never catches.",
    approach: [
      "Created, maintained and executed test plans for the ETL interfaces",
      "Wrote SQL and OpenEdge Progress scripts to validate processed data against source",
      "Led a small distributed team of testers while continuing hands-on validation work",
      "Trained new team members on SQL scripting and test plan design",
    ],
    outcome: [
      "Client HR data verified as correctly loaded ahead of payment runs",
      "Existing ETL validation tooling improved and extended",
      "Onboarding time for new QA hires reduced through written process docs",
    ],
    stack: ["SQL", "OpenEdge Progress", "ETL", "Data validation"],
    links: [],
  },
  {
    slug: "proptech-tours",
    since: 2025,
    until: null,
    featured: false,
    client: "Property listings with 3D tours",
    sector: "Personal side project · in progress",
    period: "2025 – present",
    role: "Built independently, in my own time",
    personal: true,
    headline: "A property site with immersive 3D tours",
    problem:
      "I wanted to see whether a listing page could let someone walk a property remotely rather than scroll a gallery of photos, and what that does to the browsing flow.",
    approach: [
      "Built the listing platform with embedded interactive 3D property tours",
      "Designed the browsing and enquiry flow around mobile visitors first",
    ],
    outcome: ["Still in development — a personal build, not commissioned work"],
    stack: ["TypeScript", "React", "3D tours"],
    links: [],
  },
  {
    slug: "loyalty-wallet",
    since: 2025,
    until: null,
    featured: false,
    client: "Wallet-based loyalty cards",
    sector: "Personal side project · in progress",
    period: "2025 – present",
    role: "Built independently, in my own time",
    personal: true,
    headline: "Loyalty cards that live in Apple and Google Wallet",
    problem:
      "Plastic loyalty cards get left at home. I wanted to work out what issuing and updating native wallet passes actually involves end to end.",
    approach: [
      "Built the card issuing and update pipeline against native wallet passes",
      "Designed the merchant-side flow for enrolment and rewards",
    ],
    outcome: ["Still in development — a personal build, not commissioned work"],
    stack: ["TypeScript", "Wallet passes", "Node"],
    links: [],
  },
];

/**
 * Newest first: ongoing engagements, then by end year, then by start year.
 * Array.sort is stable, so entries that tie keep their order above.
 * Sorting here rather than by hand means a new case study lands in the right
 * place on its own — just give it `since` and `until`.
 */
export const caseStudiesByRecency = [...caseStudies].sort((a, b) => {
  const endA = a.until ?? Infinity;
  const endB = b.until ?? Infinity;
  return endB - endA || b.since - a.since;
});

/** The three strongest for the homepage — not simply the three most recent. */
export const featuredCaseStudies = caseStudiesByRecency.filter((c) => c.featured);

/* ── Experience timeline (sector only, no employer names) ─── */

export const experience = [
  {
    period: "2025 — Present",
    title: "SDET & QA / Developer",
    org: "Early-stage startup · confidential",
    note: "Own the quality layer end to end — test automation, CI and release verification — and build product features alongside the team.",
  },
  {
    period: "2024 — 2025",
    title: "Senior QA Engineer",
    org: "B2B wholesale commerce platform · enterprise retail SaaS",
    note: "Release readiness across multiple environments; automation for web and mobile.",
  },
  {
    period: "2022 — 2023",
    title: "Software Development Engineer in Test",
    org: "Decentralised messaging platform · Web3",
    note: "Test architecture and automation for web, desktop and mobile clients.",
  },
  {
    period: "2021 — 2022",
    title: "QA Engineer",
    org: "Global software consultancy",
    note: "Cypress framework strategy, API automation, SQL and NoSQL validation.",
  },
  {
    period: "2018 — 2020",
    title: "QA Lead",
    org: "Digital transformation consultancy",
    note: "Led a distributed test team while owning ETL validation tooling.",
  },
  {
    period: "2015 — 2018",
    title: "QA Engineer",
    org: "Insurance data programme · via consultancy",
    note: "ETL interface testing and SQL-based data validation at scale.",
  },
  {
    period: "2014 — 2015",
    title: "QA Lead",
    org: "Beverage distribution startup",
    note: "Built the QA process from nothing; led testers for a major beverage brand.",
  },
  {
    period: "2012 — 2014",
    title: "QA Analyst",
    org: "Nearshore software services",
    note: "Desktop and IVR application testing; SQL query development.",
  },
];

export const education = [
  {
    period: "2013 — 2014",
    title: "Executive Master, Information Technology Management",
    org: "Universidad Tecmilenio",
  },
  {
    period: "2005 — 2009",
    title: "Bachelor, Information Technology Management",
    org: "Universidad Autónoma de Yucatán",
  },
];

/* ── Own projects (shown on /projects) ────────────────────── */

type Project = {
  name: string;
  repo: string;
  description: string;
  language: string;
  tags: string[];
  featured: boolean;
  /** True while the repo is private — the card renders without a dead link. */
  private?: boolean;
};

export const projects: Project[] = [
  {
    name: "materapp",
    // Repo is private for now — set `private: false` once you make it public
    // and the card will start linking to GitHub automatically.
    repo: "luisecm/materapp",
    private: true,
    description:
      "A school ecosystem app bringing homework, progress tracking and announcements together for students, parents and teachers. The largest thing I've built end to end on my own.",
    language: "TypeScript",
    tags: ["React Native", "Product"],
    featured: true,
  },
  {
    name: "pequeguia",
    repo: "luisecm/pequeguia",
    description:
      "A community app for finding kid-friendly things to do nearby. I built it as a father tired of hunting across a dozen sites every weekend, and it covers listings, search by location and community submissions.",
    language: "TypeScript",
    tags: ["React", "Community"],
    featured: true,
  },
  {
    name: "lastfmdiscogsscrobbler",
    repo: "luisecm/lastfmdiscogsscrobbler",
    description:
      "Scrobbles plays from your Discogs vinyl collection into Last.fm. A full-stack build — Node, Express, React and Tailwind — handling OAuth against two third-party APIs and reconciling their catalogues.",
    language: "JavaScript",
    tags: ["Full-stack", "Node", "APIs"],
    featured: true,
  },
  {
    name: "spoti2qobuz",
    repo: "luisecm/spoti2qobuz",
    description:
      "Syncs a Spotify playlist into Qobuz, matching tracks across two catalogues that disagree about metadata more often than you'd expect. Built because nobody maintains an up-to-date New Music Friday over there.",
    language: "Python",
    tags: ["Python", "APIs"],
    featured: true,
  },
];

/* ── FAQ — objection handling ─────────────────────────────── */

export const faqs = [
  {
    q: "Do you only write tests, or do you write production code too?",
    a: "Both. Quality engineering is my specialism and the reason most people hire me, but I take on feature work, API integrations and full product builds as well. Years of taking other people's software apart is useful training for building software that holds up.",
  },
  {
    q: "What does 'flaky test' work actually involve?",
    a: "Finding out why a test is non-deterministic, which is usually a race condition, a shared fixture, or an assertion written against something the app never promised. I fix the cause rather than adding a retry. Retries hide the failure and teach your team to ignore red builds.",
  },
  {
    q: "Can you work with our existing test suite, or do you want to rewrite it?",
    a: "I work with what you have by default. A rewrite is expensive and usually unnecessary — most suites need their architecture fixed and their worst 10% deleted, not replacing. If a rebuild genuinely is the cheaper option, I'll show you the arithmetic before you commit to it.",
  },
  {
    q: "Which frameworks do you work in?",
    a: "Playwright, Cypress, WebdriverIO and Appium, mostly in TypeScript, plus Selenium and Python where that's what the team already runs. I'll recommend based on your stack and your team's existing skills, not on what I most enjoy using.",
  },
  {
    q: "Do you test mobile apps?",
    a: "Yes — iOS and Android, including Flutter and React Native apps. Mobile automation is where a lot of teams give up and go manual, so it's often where the fastest wins are.",
  },
  {
    q: "Do you touch production environments?",
    a: "Carefully, and only with explicit agreement on what I'm allowed to run. I'd rather build a realistic staging environment than test against production, but I've worked in plenty of places where some verification has to happen on the real thing.",
  },
  {
    q: "How do engagements usually start?",
    a: "A short call to find out whether I'm actually the right person for your problem. If we both think so, most clients start with a fixed-scope audit — it's a small commitment and you get something useful out of it whether or not we continue.",
  },
  {
    q: "Do you offer fixed prices?",
    a: "For audits and defined build projects, yes. Ongoing embedded work is a weekly retainer, because the point of it is being available for whatever this week's problem turns out to be.",
  },
  {
    q: "Will your work survive after you leave?",
    a: "That's the main thing I'm being paid for. Documentation and handover are part of every engagement, not an afterthought, and I'd rather train your engineers to extend the suite than make you dependent on me for it.",
  },
  {
    q: "Where are you based, and which hours do you work?",
    a: "Mérida, Mexico, on UTC−6. That overlaps a full working day with both US and Latin American teams, and gives a few hours with Europe in my mornings. I've worked remotely with distributed teams for years.",
  },
  // In "open" mode this becomes an explicit statement that you'd take a
  // full-time role. In "discreet" mode it answers the practical question
  // without declaring anything about your current situation.
  availability === "open"
    ? {
        q: "Are you available for full-time roles?",
        a: "I'll consider the right remote one. Contract and consulting work is my focus, but if you're hiring for a role where quality engineering genuinely matters, it's worth a conversation.",
      }
    : {
        q: "What does your availability look like?",
        a: "It varies, and I deliberately take on a small number of engagements at a time so the ones I'm in get proper attention. The honest answer depends on when you ask — so it's worth asking.",
      },
  {
    q: "Can you share code from your client work?",
    a: "Not for client work — that's all confidential. My own projects are on GitHub and are a fair sample of how I build; beyond that, I'm happy to walk through architecture and approach on a call.",
  },
];

/* ── Navigation ───────────────────────────────────────────── */

// Ordered for a recruiter's reading order: proof, then background, then
// the consulting offer.
export const nav = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];
