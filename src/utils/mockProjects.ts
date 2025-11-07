import { readMyId } from "src/utils/users";
import { createProject } from "src/utils/projects";
import { Project } from "src/types/youtrackApi";

export const createMockProjects = async () => {
  const myId = await readMyId();
  if (!myId) {
    return;
  }

  for (const { name, shortName, description } of mockProjects) {
    await createProject({ name, shortName, description }, myId);
  }
};

const mockProjects: Project[] = [
  {
    name: "Analytics Dashboard",
    shortName: "ANL",
    description:
      "**Overview:** Track dashboards, widgets, and reporting improvements with `_KPI snapshots_`.",
  },
  {
    name: "Mobile Revamp",
    shortName: "MREV",
    description:
      "**Goals:** Refresh mobile screens, tighten navigation, and improve _offline_ support.",
  },
  {
    name: "Automation Toolkit",
    shortName: "AUTO",
    description:
      "**Includes:** automation scripts, workflow blueprints, and `CLI` integration prototypes.",
  },
  {
    name: "Customer Spotlight",
    shortName: "CSP",
    description:
      "**Focus:** Highlight marquee customer stories with _case study_ examples and metrics.",
  },
  {
    name: "Developer Experience",
    shortName: "DX",
    description:
      "**Theme:** Improve developer productivity, onboarding flows, and `DX` tooling.",
  },
  {
    name: "AI Research",
    shortName: "AIRS",
    description:
      "**Tracks:** exploratory research items for prototyping _AI-assisted_ workflows.",
  },
  {
    name: "Security Hardening",
    shortName: "SEC",
    description:
      "**Checklist:** authentication, secrets rotation, and _threat modeling_ exercises.",
  },
  {
    name: "Localization Updates",
    shortName: "LOC",
    description:
      "**Tracks:** glossary maintenance, `i18n` fixes, and _regional_ QA efforts.",
  },
  {
    name: "Performance Boost",
    shortName: "PERF",
    description:
      "**Includes:** profiling reports, optimization tasks, and _load testing_ results.",
  },
  {
    name: "Onboarding Flow",
    shortName: "ONB",
    description:
      "**Goals:** streamline user onboarding, improve tutorials, and enhance _first-time_ experiences.",
  },
  {
    name: "Collaboration Hub",
    shortName: "COLH",
    description:
      "**Focus:** real-time editing, commenting features, and _team workspace_ enhancements.",
  },
  {
    name: "Cloud Migration",
    shortName: "CLM",
    description:
      "**Tracks:** infrastructure setup, data transfer, and _cloud security_ protocols.",
  },
  {
    name: "Feedback Loop",
    shortName: "FDBK",
    description:
      "**Includes:** user surveys, feature requests, and _feedback analysis_ reports.",
  },
  {
    name: "UI Redesign",
    shortName: "UIR",
    description:
      "**Goals:** modernize interface elements, improve accessibility, and enhance _visual consistency_.",
  },
  {
    name: "Testing Framework",
    shortName: "TEST",
    description:
      "**Focus:** unit tests, integration suites, and _automation coverage_ improvements.",
  },
  {
    name: "Documentation Revamp",
    shortName: "DOC",
    description:
      "**Includes:** API references, user guides, and _tutorial_ updates for clarity.",
  },
  {
    name: "Release Planning",
    shortName: "REL",
    description:
      "**Tracks:** milestone definitions, sprint schedules, and _release notes_ preparation.",
  },
  {
    name: "User Feedback",
    shortName: "UFB",
    description:
      "**Includes:** user interviews, usability testing, and _feedback synthesis_ sessions.",
  },
  {
    name: "Integration Suite",
    shortName: "INTG",
    description:
      "**Focus:** third-party integrations, API connectors, and _data sync_ features.",
  },
  {
    name: "Bug Bash",
    shortName: "BUGB",
    description:
      "**Goals:** identify critical bugs, prioritize fixes, and enhance _stability_ across platforms.",
  },
  {
    name: "Feature Freeze",
    shortName: "FFZ",
    description:
      "**Includes:** final testing, documentation updates, and _deployment_ preparations for the upcoming release.",
  },
  {
    name: "Sprint Alpha",
    shortName: "SPAL",
    description:
      "**Focus:** initial feature set development, prototype testing, and _stakeholder_ feedback collection.",
  },
  {
    name: "Beta Launch",
    shortName: "BTL",
    description:
      "**Goals:** user onboarding, performance monitoring, and _bug fixing_ based on beta user feedback.",
  },
  {
    name: "Final Release",
    shortName: "FRL",
    description:
      "**Includes:** deployment, marketing campaigns, and _post-launch_ support strategies.",
  },
  {
    name: "Post-Launch Review",
    shortName: "PLR",
    description:
      "**Focus:** performance analysis, user feedback integration, and _future roadmap_ planning.",
  },
  {
    name: "Maintenance Mode",
    shortName: "MMO",
    description:
      "**Goals:** regular updates, bug fixes, and _system optimizations_ to ensure long-term stability.",
  },
  {
    name: "Innovation Sprint",
    shortName: "INS",
    description:
      "**Includes:** experimental features, creative brainstorming, and _prototype_ development for new ideas.",
  },
  {
    name: "Team Building",
    shortName: "TB",
    description:
      "**Focus:** team activities, skill development, and _collaborative_ projects to enhance team cohesion.",
  },
  {
    name: "Tech Debt Reduction",
    shortName: "TDR",
    description:
      "**Goals:** refactoring, code cleanup, and _performance improvements_ to reduce technical debt.",
  },
  {
    name: "Market Research",
    shortName: "MR",
    description:
      "**Includes:** competitor analysis, user surveys, and _trend identification_ to inform product strategy.",
  },
  {
    name: "Customer Support",
    shortName: "CS",
    description:
      "**Focus:** support ticket management, knowledge base updates, and _customer satisfaction_ initiatives.",
  },
  {
    name: "Sales Enablement",
    shortName: "SE",
    description:
      "**Goals:** sales training, collateral development, and _lead generation_ strategies to boost sales efforts.",
  },
  {
    name: "Marketing Campaign",
    shortName: "MC",
    description:
      "**Includes:** advertising strategies, content creation, and _social media_ outreach to promote the product.",
  },
  {
    name: "Partnership Development",
    shortName: "PD",
    description:
      "**Focus:** strategic alliances, joint ventures, and _collaborative opportunities_ to expand market reach.",
  },
  {
    name: "Corporate Social Responsibility",
    shortName: "CSR",
    description:
      "**Goals:** community engagement, sustainability initiatives, and _ethical practices_ to enhance corporate responsibility.",
  },
  {
    name: "Employee Wellness",
    shortName: "EW",
    description:
      "**Includes:** health programs, work-life balance initiatives, and _wellness resources_ to support employee well-being.",
  },
  {
    name: "Diversity and Inclusion",
    shortName: "DNI",
    description:
      "**Focus:** inclusive hiring practices, diversity training, and _cultural awareness_ programs to foster an inclusive workplace.",
  },
  {
    name: "Leadership Development",
    shortName: "LD",
    description:
      "**Goals:** leadership training, mentorship programs, and _skill-building_ workshops to cultivate future leaders.",
  },
  {
    name: "Incident Command",
    shortName: "ICM",
    description:
      "**Focus:** streamline postmortems, unify _escalation trees_, and codify runbooks.",
  },
  {
    name: "Workflow Library",
    shortName: "WFL",
    description:
      "**Includes:** reusable automation blueprints, sample transitions, and _approval chains_.",
  },
  {
    name: "Data Governance",
    shortName: "DGOV",
    description:
      "**Goals:** catalog sources, track lineage, and tighten _retention_ defaults.",
  },
  {
    name: "Compliance Tracker",
    shortName: "COMP",
    description:
      "**Tracks:** audit evidence, policy ownership, and _regression_ reminders.",
  },
  {
    name: "AI Playbooks",
    shortName: "AIP",
    description:
      "**Focus:** document prompt styles, guardrails, and _evaluation_ steps.",
  },
  {
    name: "Release Automation",
    shortName: "RAUTO",
    description:
      "**Includes:** pipeline templates, rollback scripts, and _canary_ monitors.",
  },
  {
    name: "Customer Journey",
    shortName: "CJO",
    description:
      "**Theme:** map onboarding touchpoints, identify drop-offs, and iterate on _delight_ moments.",
  },
  {
    name: "Service Desk",
    shortName: "SRV",
    description:
      "**Focus:** unify intake forms, canned responses, and _SLA_ dashboards.",
  },
  {
    name: "Talent Portal",
    shortName: "TAL",
    description:
      "**Includes:** interview scorecards, mentorship rosters, and _career pathing_.",
  },
  {
    name: "Finance Ops",
    shortName: "FINO",
    description:
      "**Tracks:** budgeting workflows, spend guardrails, and _forecast_ models.",
  },
  {
    name: "Partner Ecosystem",
    shortName: "PARN",
    description:
      "**Goals:** certify integrations, co-market launches, and streamline _rev-share_ reporting.",
  },
  {
    name: "Knowledge Graph",
    shortName: "KG",
    description:
      "**Focus:** connect FAQs, incidents, and _engineering specs_ in one index.",
  },
  {
    name: "Observability Suite",
    shortName: "OBS",
    description:
      "**Includes:** golden signals library, alert hygiene, and _SLO_ scoring.",
  },
  {
    name: "Design Tokens",
    shortName: "DST",
    description:
      "**Theme:** align color, spacing, and _motion_ primitives across surfaces.",
  },
  {
    name: "Edge Delivery",
    shortName: "EDGE",
    description:
      "**Tracks:** CDN tuning, regional failovers, and _latency_ benchmarks.",
  },
  {
    name: "Feature Flags",
    shortName: "FLAG",
    description:
      "**Focus:** lifecycle policies, kill-switch UX, and _experimentation_ guardrails.",
  },
  {
    name: "Device Lab",
    shortName: "DLAB",
    description:
      "**Includes:** hardware inventory, automated smoke tests, and _subscription_ scheduling.",
  },
  {
    name: "Remote Collaboration",
    shortName: "RCO",
    description:
      "**Theme:** async rituals, meeting trims, and _timezone_ playbooks.",
  },
  {
    name: "GreenOps",
    shortName: "GREEN",
    description:
      "**Focus:** carbon dashboards, energy alerts, and _sustainable_ defaults.",
  },
  {
    name: "Localization QA",
    shortName: "LQA",
    description:
      "**Includes:** glossary governance, pseudo-localization, and _regional_ feedback.",
  },
  {
    name: "Security Champions",
    shortName: "SECC",
    description:
      "**Goals:** guild sessions, threat modeling kits, and _capture-the-flag_ drills.",
  },
  {
    name: "Support Insights",
    shortName: "SUPI",
    description:
      "**Tracks:** ticket clustering, backlog burndowns, and _CSAT_ nudges.",
  },
  {
    name: "Billing Revamp",
    shortName: "BILL",
    description:
      "**Focus:** usage metering, invoice templates, and _dunning_ automation.",
  },
  {
    name: "Incident Analytics",
    shortName: "INCA",
    description:
      "**Includes:** MTTR trends, hot components, and _resilience_ experiments.",
  },
  {
    name: "Ops Handbook",
    shortName: "OPHB",
    description:
      "**Theme:** shift-handoff scripts, escalation cheat-sheets, and _toolbox_ checklists.",
  },
  {
    name: "Accessibility First",
    shortName: "A11Y",
    description:
      "**Focus:** semantic linting, keyboard tours, and _assistive tech_ clinics.",
  },
  {
    name: "Voice Interface",
    shortName: "VOICE",
    description:
      "**Includes:** command grammars, TTS personas, and _hands-free_ QA.",
  },
  {
    name: "API Monetization",
    shortName: "APIM",
    description:
      "**Goals:** tiering rules, quota visualizations, and _developer_ onboarding.",
  },
  {
    name: "Workflow Marketplace",
    shortName: "WFMP",
    description:
      "**Focus:** submission vetting, rating signals, and _royalty_ tooling.",
  },
  {
    name: "Team Health",
    shortName: "THL",
    description:
      "**Includes:** pulse surveys, recognition loops, and _capacity_ planning aides.",
  },
  {
    name: "Hardware Lab",
    shortName: "HWL",
    description:
      "**Theme:** procurement trackers, warranty alerts, and _decommission_ flows.",
  },
  {
    name: "Future Bets",
    shortName: "FUTR",
    description:
      "**Focus:** venture pipeline, prototype pitches, and _success criteria_ reviews.",
  },
];
