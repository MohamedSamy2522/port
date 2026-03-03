export const PROFILE_DATA = {
  name: "Mohammed Samy",
  brandName: "Samy",
  headline: "Full-Stack Developer ",
  availabilityBadge: "Available for Opportunities",
  bio: "Need a simple system to manage inventory, invoices, and customers? I build full-stack .NET apps that organize your data, reduce mistakes, and speed up daily work—database to API to UI. I'm currently a DEPI Full Stack .NET trainee and I deliver clean, maintainable code with a focus on usability and clear reporting.",
  location: "Alexandria, Egypt",
  email: "mohamedsamy97200@email.com",
  phone: "+20 1019525524",
  cvUrl: "/cv.pdf",
  socials: [
    { label: "GitHub", url: "https://github.com/MohamedSamy2522" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/mohamed-samy-0bb6672a8/" },
    { label: "Instagram", url: "https://www.instagram.com/mohammed_samy_ll?igsh=aTNuenJyaDg5MmNm&utm_source=qr" },
  ],

  about: {
    tagline: "Turning ideas into digital experiences",
    objective:
      "Aspiring full-stack developer with a passion for creating intuitive, high-performance web applications. I combine technical expertise with creative design thinking to deliver solutions that make an impact.",
    personalInfo: [
      { label: "Location", value: "Alexandria, Egypt" },
      { label: "University", value: "Arab Open University (AOU)" },
      { label: "Graduation", value: "2026" },
    ],
    education: [
      {
        title: "B.Sc. Computer Science",
        place: "Arab Open University",
        period: "2022 - 2026",
        details: "",
      },
    ],
    // affiliations: [
    //   {
    //     title: "React Native Student",
    //     place: "Udemy Online Course",
    //     details: "Currently progressing through a comprehensive mobile app development track, building cross-platform apps, and strengthening knowledge of the modern React ecosystem.",
    //   },
    //   {
    //     title: "Open-Source & Self-Learning Enthusiast",
    //     place: "",
    //     details: "Continuously improving through online resources, documentation, and building side projects to sharpen problem-solving and development skills.",
    //   },
    // ],
    experience: [
      {
        title: "Digital Egypt Pioneers Initiative (DEPI) — .NET Full Stack Developer (Trainee)",
        place: "",
        period: "11/2025 - Present",
        details:
          "- Intensive training in C#, .NET Core, ASP.NET, and SQL Server\n\n-Building backend APIs and database-driven applications\n\n-Applying modern development practices with a focus on clean code and scalability",
      },
      {
        title: "FinixCo — Desktop Application Developer Intern (C#)",
        place: "",
        period: "07/2024 – 11/2024",
        details:
          "-Developed desktop applications using C# and .NET (WinForms)\n\n-Implemented application logic and worked with data handling and UI components\n\n-Gained hands-on experience with debugging and software workflows",
      },
    ],
    certifications: [
      { title: "React - The Complete Guide", issuer: "Udemy", year: "In Progress" },
      { title: "SQL Server Fundamentals", issuer: "Coursera", year: "2024" },
      { title: "DEPI .NET Full Stack", issuer: "", year: "In Progress" },
    ],
  },

  skills: [
    {
      title: "Frontend Development",
      icon: "Code2",
      items: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Backend & Data",
      icon: "Database",
      items: [".NET", "C#", "SQL", "REST APIs", "LINQ"],
    },
    {
      title: "Design & Tools",
      icon: "Laptop",
      items: ["Figma",  "VS Code", "Git & GitHub", "Postman"],
    },
    {
      title: "Currently Learning",
      icon: "Sparkles",
      items: ["Docker", "Microservices", "Clean Architecture"],
    },
  ],

  projects: [
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with React and TypeScript. Features smooth animations and dark mode.",
      technologies: ["CSS", "HTML", "JS", "Tailwind CSS", "Framer Motion"],
      liveUrl:"https://github.com/MohamedSamy2522/Landig_Page" ,
      githubUrl: "https://github.com/MohamedSamy2522/Potrfolio2",
      image: "project-2",
    },
    {
      title: "Dashboard Dsign",
      description:
        "Full-featured admin dashboard for managing products,and orders.",
      technologies: ["HTML", "JS", "CSS"],
      liveUrl: "https://mohamedsamy2522.github.io/Dashboard/",
      githubUrl: "https://github.com/MohamedSamy2522/Dashboard",
      image: "project3",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task manager with drag-and-drop, real-time updates, and team workspaces.",
      technologies: [ "Tailwind CSS", "CSS", "HTML", "JS"],
      liveUrl: "https://mohamedsamy2522.github.io/Landig_Page/",
      githubUrl: "https://github.com/MohamedSamy2522/Landig_Page",
      image: "project-1",
    },
    // {
    //   title: "Weather Forecast App",
    //   description:
    //     "Beautiful weather app with 7-day forecasts, location detection, and animated weather icons.",
    //   technologies: ["React", "OpenWeather API", "CSS Animations"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   image: "",
    // },
  ],

  testimonials: [
    {
      name: "Ahmed Hassan",
      role: "CEO, StartupX",
      content:
        "Mohammed delivered an outstanding website that exceeded our expectations. His attention to detail and creative approach made all the difference.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "Product Manager, TechCorp",
      content:
        "Working with Samy was a great experience. He's responsive, skilled, and delivers quality work on time.",
      rating: 5,
    },
    {
      name: "Omar Ali",
      role: "Founder, DesignStudio",
      content:
        "Exceptional design skills combined with solid development capabilities. Highly recommend!",
      rating: 5,
    },
  ],
};
