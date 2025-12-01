export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "NestFlow - Utility Management System",
    des: "A full-featured utility management dashboard that helps property managers oversee water, electricity, and billing services. It includes user management, tenant management, room management, real-time consumption tracking, automated invoicing, customer service and role-based access for admins and residents.",
    img: "/opom-ums.jpeg",
    tech_stack: "React + Tailwind CSS + HeroUI",
    github_link:
      "https://github.com/one-project-one-month/React-Utility-Management-System-Dashboard",
    live_link: "#",
  },
  {
    id: 2,
    title: "Movie House - Movie and TV Show Streaming Platform",
    des: "A modern streaming platform where users can discover, watch, and save favorite movies and TV shows. Popular artists can be found about their biologies. Features include dynamic search, genre filtering, trailer preview, responsive UI, and integration with movie APIs for real-time data. I use TMDB API to fetch movie data and Next.js for server-side rendering and performance optimization.",
    img: "/movie-house.png",
    tech_stack: "Next.js + Tailwind CSS + Shadcn UI",
    github_link: "https://github.com/HtetKoOo/movie-house",
    live_link: "https://movie-house-phi.vercel.app/",
  },
  {
    id: 3,
    title: "Lara Shop - E-commerce Platform",
    des: "A scalable e-commerce system offering AI product recommendations (coming soon), payment integration, shopping cart, coupon system, and admin dashboards. Designed to support real businesses with subscription-based services.",
    img: "/lara-shop.png",
    tech_stack: "Next.js + Tailwind CSS",
    github_link: "https://github.com/HtetKoOo/E-commerce",
    live_link: "https://mimcookthiee-shop.vercel.app",
  },
  {
    id: 4,
    title: "Symphony Blog & Music - Blogging and Music Streaming Platform",
    des: "A dynamic platform combining blogging and music streaming. Users can read articles and blogs, listen to songs, and explore playlists. Users also can like, comment and save articles and blogs to their profile. Admin can upload, update, and delete content and music files from admin dashboard. This web app includes user authentication, and clean UI with smooth interactions. I use cloudinary to store the image and mp3 files.",
    img: "/sym-blog-and-music.png",
    tech_stack: "vite + Laravel",
    github_link: "https://github.com/HtetKoOo/blog-app",
    live_link: "https://blogify.laravel.cloud",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Self-Learning",
    desc: "Dedicated to self-learning modern web technologies. Built multiple responsive web interfaces to improve UI/UX skills and deepen understanding of reusable components. Currently, I am learning about Python (Django), Vue.js and Java (Spring Boot).",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Hobby Mobile App Development",
    desc: "Designed and developed personal mobile applications using Flutter and React Native as hobby projects. Focused on authentication, API integration, and multi-platform UI consistency to improve hands-on development skills.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Academic Projects",
    desc: "Worked on school and university assignments involving full-stack development. Built RESTful APIs using PHP/Laravel and connected them with React.js and Flutter for real-world functional projects.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Collaborative Group Project Contributor",
    desc: "Collaborated with friends and group members to develop team-based applications, focusing on UI development, project structure, Git workflows, and task coordination to improve teamwork and problem-solving skills.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];


export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
