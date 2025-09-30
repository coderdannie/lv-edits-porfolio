import { FaGithub } from "react-icons/fa6";
import { AiFillLinkedin } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";

export const navItems = [
  {
    name: "Home",
    href: "#home", // or just "#" for home
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export const techStacks = [
  {
    name: "html",
    img: "/assets/1.png",
  },
  {
    name: "css",
    img: "/assets/2.webp",
  },
  {
    name: "javascript",
    img: "/assets/3.png",
  },
  {
    name: "react",
    img: "/assets/4.png",
  },
  {
    name: "next js",
    img: "/assets/5.png",
  },
  {
    name: "typescript",
    img: "/assets/6.png",
  },
  {
    name: "redux",
    img: "/assets/7.png",
  },
  {
    name: "react query",
    img: "/assets/10.png",
  },
  {
    name: "tailwind css",
    img: "/assets/9.webp",
  },
  {
    name: "chakra ui",
    img: "/assets/8.png",
  },
];

export const socialIcons = [
  {
    icon: <AiFillLinkedin />,
    href: "https://www.linkedin.com/in/coderdannie",
    name: "Linkedln",
  },
  {
    icon: <FaGithub />,
    href: "https://github.com/coderdannie",
    name: "github",
  },
  {
    icon: <FaSquareXTwitter />,
    href: "https://x.com/coderdannie",
    name: "twitter",
  },
];

// Team Projects
export const teamProjects = [
  {
    id: 1,
    title: "BizFlex",
    category: "Team Project",
    role: "Frontend Developer",
    description:
      "Contributed to the development of BizFlex, a fintech app designed to provide seamless financial services. Focused on integrating secure, user-friendly features, including a third-party widget for face capture during verification processes.",
    image: "/assets/projects/bizflex.png",
    technologies: [
      "React.js",
      "Redux",
      "Chakra UI",
      "Third-party Widgets (Face Capture)",
    ],
    highlights: [
      "Designed and implemented responsive user interfaces for optimal usability across devices",
      "Integrated third-party widget for secure face capture verification",
      "Optimized app performance for real-time financial data updates",
    ],
    websiteUrl: "https://www.bizflex.africa/",
    githubUrl: "",
  },
  {
    id: 2,
    title: "UX Thrive",
    category: "Team Project",
    role: "Frontend Developer",
    description:
      "Designed and implemented responsive user interfaces to enhance user engagement and user experience. Integrated dynamic content and optimized performance for seamless functionality across devices.",
    image: "/assets/projects/uxthrive.png",
    technologies: ["ReactJs", "TailwindCSS", "Zustand", "TypeScript"],
    highlights: [
      "Improved UI responsiveness across multiple device breakpoints",
      "Reduced page loading time by optimizing asset delivery",
      "Received positive feedback from users and stakeholders",
    ],
    websiteUrl: "https://uxthrive.org",
    githubUrl: "",
  },

  {
    id: 4,
    title: "Paycita",
    category: "Team Project",
    role: "Frontend Developer",
    description:
      "Developed Paycita, a multi-tenant SaaS platform streamlining business operations including attendance, payroll, tax remittances, procurement, and loan management.",
    image: "/assets/projects/paycita.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Redux",
      "React Query",
      "TailwindCSS",
    ],
    highlights: [
      "Built role-based dashboards with dynamic financial data visualization",
      "Collaborated with backend teams on efficient API contract design",
      "Integrated secure authentication with role-based access control (RBAC)",
    ],
    websiteUrl: "https://paycita.com",
    githubUrl: "",
  },
  {
    id: 3,
    title: "Edupall",
    category: "Team Project",
    role: "Frontend Developer",
    description:
      "Contributed to the development of Edupall, a fintech app designed to provide seamless financial services for school.",
    image: "/assets/projects/edupali.png",
    technologies: ["React.js", "Redux", "Chakra UI", "React Query"],
    highlights: [
      "Designed responsive interfaces for seamless school financial management",
      "Implemented real-time data synchronization for transaction updates",
      "Enhanced user experience with intuitive navigation patterns",
    ],
    websiteUrl: "https://edupali.com",
    githubUrl: "",
  },
];

// Personal Projects
export const personalProjects = [
  {
    id: 1,
    title: "Job Tracking Application",
    category: "Personal Project",
    role: "Frontend Developer",
    description:
      "A job tracking application that helps users manage their job applications, track progress, and organize job search activities with an intuitive interface.",
    image: "/assets/projects/jobster.png",
    technologies: ["HTML", "CSS", "React Js", "Styled Components"],
    highlights: [
      "Built interactive UI for tracking job application status and progress",
      "Implemented local state management for seamless user experience",
      "Designed responsive layouts optimized for mobile and desktop use",
    ],
    websiteUrl: "https://redux-toolkit-jobster.netlify.app/",
    githubUrl: "https://github.com/coderdannie/job-tracker-web-app",
  },
  {
    id: 4,
    title: "E-Commerce Product Page",
    category: "Personal Project",
    role: "Frontend Developer",
    description:
      "A modern e-commerce platform featuring product browsing, shopping cart functionality, and a clean user interface for seamless online shopping experience.",
    image: "/assets/projects/comfy.png",
    technologies: ["HTML", "CSS", "React Js", "Context API"],
    highlights: [
      "Built shopping cart system with add, remove, and quantity management",
      "Implemented responsive navigation with dark mode toggle",
      "Designed product showcase with clean typography and spacing",
    ],
    websiteUrl: "https://react-vite-comfy-store-v2.netlify.app/",
    githubUrl: "https://github.com/coderdannie/ecommerce-store",
  },
  {
    id: 2,
    title: "Space Tour Website",
    category: "Personal Project",
    role: "Frontend Developer",
    description:
      "An immersive space tourism website featuring interactive elements and stunning visuals to showcase space travel destinations and experiences.",
    image: "/assets/projects/space.png",
    technologies: ["HTML", "CSS", "React Js", "API", "Styled Components"],
    highlights: [
      "Created engaging animations and transitions for interactive space exploration",
      "Integrated external APIs to fetch real-time space data and information",
      "Optimized performance for smooth rendering of high-quality space imagery",
    ],
    websiteUrl: "https://space-tourism-website-ten-virid.vercel.app/",
    githubUrl: "https://github.com/coderdannie/space-tourism-website",
  },
  {
    id: 3,
    title: "Movies Web Application",
    category: "Personal Project",
    role: "Frontend Developer",
    description:
      "A movie discovery platform that allows users to browse, search, and explore detailed information about movies with an engaging user interface.",
    image: "/assets/projects/moviebox.png",
    technologies: ["HTML", "CSS", "React Js", "API"],
    highlights: [
      "Integrated movie database API for real-time content and ratings",
      "Built dynamic search and filtering system for movie discovery",
      "Designed card-based layout with smooth hover effects and transitions",
    ],
    websiteUrl: "https://movies-box-web-app.vercel.app/",
    githubUrl: "https://github.com/coderdannie/movies-box-web-app",
  },
];
