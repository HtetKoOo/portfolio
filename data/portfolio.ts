export interface Project {
  title: string;
  description: string;
  stack: string[];
  source: string;
  role: string;
}
export const selectedProjects: Project[] = [
  {
    title: "Writing Test App",
    description:
      "An IELTS writing practice application with student, teacher, and admin sections.",
    stack: ["Next.js", "React", "TypeScript"],
    source: "https://github.com/HtetKoOo/writing_test_app",
    role: "Project - contribution details being prepared",
  },
  {
    title: "Social Media App",
    description:
      "A social application exploring posts, comments, likes, and user profiles.",
    stack: ["Next.js", "React", "Prisma"],
    source: "https://github.com/HtetKoOo/Social-media-app",
    role: "Project - contribution details being prepared",
  },
  {
    title: "Smart Attendance System",
    description:
      "A web application integrating face recognition with attendance management.",
    stack: ["Next.js", "Prisma", "Face recognition"],
    source: "https://github.com/HtetKoOo/Smart-Attendance-system",
    role: "Project - contribution details being prepared",
  },
  {
    title: "One Project One Month",
    description:
      "Frontend contributions to a utility management dashboard and the program’s project portfolio page.",
    stack: ["React", "Tailwind CSS"],
    source: "https://github.com/one-project-one-month",
    role: "Team contribution",
  },
];
