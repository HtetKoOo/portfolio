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
    challenge: string;
    approach: string;
    highlights: { title: string; description: string }[];
    technicalDecisions: { title: string; description: string }[];
  };
}

export const projects: PortfolioProject[] = [
  {
    slug: "day-flow", kind: "featured", title: "DayFlow",
    description: "A daily planner for organizing tasks, routines, and a visual schedule across day and week views.",
    contribution: "Built authenticated planning workflows, drag-and-drop scheduling, recurring routines, and real-time task updates.",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
    repository: "https://github.com/HtetKoOo/day-flow", liveUrl: "https://dayflow.htetkooo.dev/demo",
    caseStudy: {
      role: "Product design, frontend and full-stack implementation",
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
    },
  },
  {
    slug: "smart-attendance", kind: "featured", title: "KBU Smart Attendance System",
    description: "A role-based university attendance platform with browser-based face recognition and academic management workflows.",
    contribution: "Implemented schedule-scoped access controls, local face-template matching, and duplicate-safe attendance recording.",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    repository: "https://github.com/HtetKoOo/Smart-Attendance-system", liveUrl: "https://kbu-smart-attendance.vercel.app",
  },
  {
    slug: "our-sweet-universe", kind: "featured", title: "Our Sweet Universe",
    description: "A privacy-focused two-person web app for shared memories, settings, and personal space.",
    contribution: "Designed authenticated, couple-scoped data access with database migrations, input validation, and private media handling.",
    stack: ["Next.js", "Better Auth", "Drizzle", "Neon PostgreSQL"],
    repository: "https://github.com/HtetKoOo/our-sweet-universe",
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
