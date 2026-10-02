export type ProjectKind = "featured" | "more";

export interface PortfolioProject {
  slug: string;
  kind: ProjectKind;
  title: string;
  description: string;
  contribution: string;
  stack: string[];
  repository: string;
  liveUrl?: string;
  image?: { src: string; alt: string };
  caseStudy?: {
    role: string;
    contextHeading: string;
    challenge: string;
    approach: string;
    highlights: { title: string; description: string }[];
    technicalDecisions: { title: string; description: string }[];
    designApproach?: string;
    futureDirection?: string;
    screenshots?: { src: string; alt: string }[];
    previewNote?: string;
  };
}

export const projects: PortfolioProject[] = [
  {
    slug: "day-flow", kind: "featured", title: "DayFlow",
    description: "A daily planner for organizing tasks, routines, and a visual schedule across day and week views.",
    contribution: "Built authenticated planning workflows, drag-and-drop scheduling, recurring routines, and real-time task updates.",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
    repository: "https://github.com/HtetKoOo/day-flow", liveUrl: "https://dayflow.htetkooo.dev/demo",
    image: { src: "/projects/day-flow/day-view.png", alt: "DayFlow planner day view with tasks and routines" },
    caseStudy: {
      role: "Product design, frontend and full-stack implementation",
      contextHeading: "From a task list to a plan you can follow.",
      challenge: "Create a planner where people can quickly capture tasks, schedule them visually, and keep recurring routines visible without losing context.",
      approach: "I designed DayFlow around an Inbox and timetable: capture first, then place tasks into a day, two-day, or week view when the plan is ready.",
      highlights: [
        {
          title: "Flexible planning views",
          description: "Built Day, 2 days, and Week views, so a plan can move from a quick daily checklist to a clearer weekly schedule.",
        },
        {
          title: "Drag-and-drop scheduling",
          description: "Tasks can move between the Inbox and timetable, then be rescheduled directly in the planner instead of through separate forms.",
        },
        {
          title: "Recurring routines",
          description: "Added weekday-based routines with dates, times, duration, and notes for habits that should appear in the schedule repeatedly.",
        },
        {
          title: "Safe account workflows",
          description: "Implemented email/password and Google sign-in, confirmation, password reset, and account settings for a personal planning product.",
        },
      ],
      technicalDecisions: [
        {
          title: "Supabase with Row Level Security",
          description: "Authentication, PostgreSQL data, realtime updates, and row-level policies keep each planner account scoped to its own tasks and routines.",
        },
        {
          title: "Optimistic interactions with confirmation",
          description: "The planner updates immediately for a responsive feel, then confirms changes in the background while supporting Undo and browser-tab sync.",
        },
        {
          title: "Responsive, installable web app",
          description: "The interface supports desktop and mobile planning, system-aware appearance, and PWA installation for a more app-like experience.",
        },
      ],
      screenshots: [
        { src: "/projects/day-flow/day-view.png", alt: "DayFlow daily planner showing inbox tasks and a visual timeline" },
        { src: "/projects/day-flow/week-view.png", alt: "DayFlow week view showing scheduled routines" },
      ],
    },
  },
  {
    slug: "smart-attendance", kind: "featured", title: "KBU Smart Attendance System",
    description: "A role-based university attendance platform with browser-based face recognition and academic management workflows.",
    contribution: "Implemented schedule-scoped access controls, local face-template matching, and duplicate-safe attendance recording.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    repository: "https://github.com/HtetKoOo/Smart-Attendance-system", liveUrl: "https://kbu-smart-attendance.vercel.app",
    image: { src: "/projects/smart-attendance/record-attendance.png", alt: "KBU Smart Attendance record attendance workflow" },
    caseStudy: {
      role: "Full-stack implementation and academic product design",
      contextHeading: "Attendance needs both clear workflows and careful boundaries.",
      challenge: "Design an attendance workflow for a university setting that supports multiple roles while keeping face-recognition processing privacy-conscious and tightly scoped to each class.",
      approach: "I built an academic prototype around role-based schedules: authorized staff choose a class, the browser checks a live face against enrolled templates locally, and the server verifies every attendance record before saving it.",
      highlights: [
        {
          title: "Role-based academic workflows",
          description: "Admin, Lecturer, and Student experiences expose only the profiles, schedules, rosters, and attendance history appropriate to each role.",
        },
        {
          title: "Browser-based face recognition",
          description: "The guided enrollment flow creates numeric face templates, while camera frames and live matching remain in browser memory instead of being uploaded as images or video.",
        },
        {
          title: "Schedule-scoped attendance",
          description: "Only Admins and the Lecturer assigned to a selected schedule can record attendance, and the server checks enrollment and ownership before accepting it.",
        },
        {
          title: "History and reporting",
          description: "Attendance history can be filtered by date, class schedule, and status, with role-scoped views and CSV-ready exports for academic review.",
        },
      ],
      technicalDecisions: [
        {
          title: "Local template matching",
          description: "The browser compares numeric face descriptors with protected student templates using Euclidean distance. The workflow pauses for unknown, multiple, or ambiguous matches to reduce false records.",
        },
        {
          title: "Server-side authorization checks",
          description: "Better Auth sessions and Next.js Route Handlers enforce role, schedule, lecturer ownership, and course-enrollment rules independently from the interface.",
        },
        {
          title: "Duplicate-safe data model",
          description: "PostgreSQL on Neon and Prisma enforce one attendance record per student, class schedule, and date, so repeat requests cannot silently create duplicate entries.",
        },
      ],
      screenshots: [
        { src: "/projects/smart-attendance/landing.png", alt: "KBU Smart Attendance public landing page" },
        { src: "/projects/smart-attendance/record-attendance.png", alt: "KBU Smart Attendance schedule-scoped recording screen" },
      ],
    },
  },
  {
    slug: "our-sweet-universe", kind: "featured", title: "Our Sweet Universe",
    description: "A mobile-first private shared-space web app for couples to keep memories, answer daily prompts, exchange letters, and revisit small moments together.",
    contribution: "Built private couple-scoped workflows for invitations, shared memories and media, mutual-answer reveals, letters, Little Jar notes, presence, and scheduled email reminders.",
    stack: ["Next.js", "TypeScript", "Better Auth", "Drizzle", "Neon PostgreSQL", "Cloudinary", "Resend"],
    repository: "https://github.com/HtetKoOo/our-sweet-universe", liveUrl: "https://ours.htetkooo.dev/demo",
    image: { src: "/projects/our-sweet-universe/demo-preview.png", alt: "Our Sweet Universe fictional shared-space demo" },
    caseStudy: {
      role: "Product design, full-stack implementation, and privacy-focused architecture",
      contextHeading: "Private by default, designed for a shared space of two.",
      challenge: "Build a personal shared-space app where every feature respects a two-person privacy boundary, while keeping the experience calm and comfortable on a phone.",
      approach: "I separated a fictional public preview from authenticated private routes, then scoped private reads and writes through the signed-in member’s couple membership.",
      highlights: [
        {
          title: "Private memories and media",
          description: "Members can create, edit, and confirm deletion of memories, attach authenticated image or video assets, and revisit milestone stories, galleries, and an anniversary countdown.",
        },
        {
          title: "One private partner invitation",
          description: "The owner creates an email-bound link that expires after seven days. Its token is stored only as a hash, and acceptance atomically provisions or joins the invited partner.",
        },
        {
          title: "Little Question mutual reveal",
          description: "Each person writes privately. Both answers appear only after both have responded; a rest request requires the other person’s decision, and completed prompts remain in history.",
        },
        {
          title: "Letters and Little Jar",
          description: "Love letters have individual read receipts. Little Jar notes can be tucked away for the other person to discover later, then answered with a small reaction.",
        },
        {
          title: "Quiet partner presence",
          description: "An approximate last-active status refreshes only while someone uses the private app, avoiding exact tracking while still giving a gentle sense of presence.",
        },
        {
          title: "Gentle scheduled moments",
          description: "A scheduled worker triggers privacy-safe unanswered-question reminders and celebration emails, with database records that make retries safe.",
        },
      ],
      technicalDecisions: [
        {
          title: "Couple-scoped authorization and invitations",
          description: "Better Auth sessions resolve into a couple membership before private actions run. The invitation flow validates the recipient and uses one transaction to prevent an expired, reused, or concurrent invite from adding an unintended member.",
        },
        {
          title: "Answers stay private until the rule allows reveal",
          description: "Question answers are stored per member and the other answer is deliberately not serialized before both responses exist. The round state handles answering, rest requests, reveal, and rest outcomes.",
        },
        {
          title: "Protected media and a safe public preview",
          description: "Private media is delivered through authenticated app routes after membership checks. The /demo routes use fictional content only and do not read or save private couple data.",
        },
        {
          title: "Reliable scheduled emails",
          description: "A Cloudflare Worker invokes protected app jobs for reminders and celebrations. Per-member, per-event database keys prevent duplicate delivery if the scheduler retries.",
        },
      ],
      designApproach: "The interface is mobile-first because the primary experience is two people using their phones. Tablet and desktop layouts create more room for shared memories and navigation without changing that priority.",
      futureDirection: "Progressive Web App support and a dedicated mobile app are planned as future iterations. They are product direction, not current functionality.",
      screenshots: [
        { src: "/projects/our-sweet-universe/demo-preview.png", alt: "Our Sweet Universe fictional demo home screen" },
      ],
      previewNote: "This preview uses fictional sample content only. No private couple data is shown.",
    },
  },
  {
    slug: "cinemingala", kind: "more", title: "CineMingala",
    description: "A movie and TV discovery app with search, trailers, regional provider lookup, and a local watchlist.",
    contribution: "Integrated server-side TMDB data services and built responsive search and discovery flows.",
    stack: ["Next.js", "TypeScript", "TMDB API"], repository: "https://github.com/HtetKoOo/cinemingala",
  },
  {
    slug: "writing-test-app", kind: "more", title: "Writing Test App",
    description: "An IELTS writing practice application with student, teacher, and administrator workflows.",
    contribution: "Developed role-specific dashboard and writing-practice interfaces.",
    stack: ["Next.js", "React", "TypeScript"], repository: "https://github.com/HtetKoOo/writing_test_app",
  },
  {
    slug: "social-media-app", kind: "more", title: "Social Media App",
    description: "A social application for posts, comments, likes, profiles, stories, and saved posts.",
    contribution: "Built social interaction interfaces and supporting API-driven workflows.",
    stack: ["Next.js", "Prisma", "NextAuth"], repository: "https://github.com/HtetKoOo/Social-media-app",
  },
];

export const featuredProjects = projects.filter((project) => project.kind === "featured");
export const moreProjects = projects.filter((project) => project.kind === "more");
