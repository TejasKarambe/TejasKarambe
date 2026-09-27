export const profile = {
  name: "Tejas Karambe",
  title: "Full-Stack Developer",
  tagline: "React on the front, Java & Spring Boot underneath.",
  location: "Pimpri, Pune",
  email: "tejaskarambe.tk@gmail.com",
  linkedin: "https://www.linkedin.com/in/tejas-karambe-304027391",
  github: "https://github.com/TejasKarambe",
};

export const about = `I build enterprise ERP systems end to end — from requirement conversations
with university staff, through frontend implementation, to the backend APIs
that power them. On the frontend I care about clean component architecture
and performance; on the backend, about data integrity and clear API contracts.`;

export const skills = [
  {
    group: "Frontend",
    items: ["React.js", "JavaScript (ES6+)", "Next.js", "Material UI", "TailwindCSS", "React Hook Form", "TanStack Query"],
  },
  {
    group: "Backend",
    items: ["Java", "Spring Boot", "Spring Data JPA", "Hibernate", "REST APIs", "Node.js (working knowledge)"],
  },
  {
    group: "Data",
    items: ["MySQL", "SQL Server", "MongoDB"],
  },
  {
    group: "Tools & Practice",
    items: ["Git", "Azure DevOps", "Postman", "Swagger/OpenAPI", "Agile/Scrum"],
  },
];

export const experience = [
  {
    role: "Software Developer",
    org: "SDC, Dr. D. Y. Patil Unitech Society",
    period: "Jun 2025 — Present",
    points: [
      "Own frontend delivery for Examination, Library, Student/Staff, and Recruitment ERP modules used by thousands of university users daily.",
      "Independently build 70–80% of UI features end-to-end, from requirements to deployment.",
      "Design component architecture and API contracts before writing code, cutting UI rework.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    org: "SDC, Dr. D. Y. Patil Unitech Society",
    period: "Jan 2025 — May 2025",
    points: [
      "Shipped core ERP UI features with client-side validation and REST API integration.",
      "Collaborated on frontend data models and component structure with the backend team.",
    ],
  },
];

export const projects = [
  {
    name: "Finance API Service",
    description:
      "A personal finance management REST API built from scratch — layered architecture, transactional balance logic for income/expense/transfer, and centralized exception handling.",
    stack: ["Java 21", "Spring Boot", "Spring Data JPA", "MySQL", "Swagger/OpenAPI"],
    link: "https://github.com/TejasKarambe/finance",
  },
  {
    name: "University & College ERP Systems",
    description:
      "Production frontend for a multi-department ERP covering academics, attendance, examinations, and fee management, with role-based rendering for Admin, Teacher, and Staff.",
    stack: ["React", "MUI", "TanStack Query", "REST APIs", "JWT/RBAC"],
    link: null,
  },
];

export const education = [
  { degree: "Master of Computer Applications (MCA)", school: "Savitribai Phule Pune University", period: "2023 — 2025", detail: "CGPA: 7.65 / 10" },
  { degree: "Bachelor of Computer Applications (BCA)", school: "Gondwana University", period: "2020 — 2023", detail: "CGPA: 9.14 / 10" },
];
