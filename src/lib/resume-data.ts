// Single source of truth for the resume. Edit this file and /resume.pdf
// regenerates on the next download — no manual PDF export.
//
// Tailoring policy: keywords for the target role appear naturally inside
// real accomplishments (never copied phrases from a JD), and every claim
// stays accurate. Bullets follow Action + Tech + Impact + Scope.

export type ResumeRole = {
  title: string;
  org: string;
  location: string;
  dateRange: string;
  bullets: string[];
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export const resume = {
  name: "Mahmudul Hasan",
  headline: "Software Engineer",
  contact: {
    location: "Dhaka, Bangladesh",
    phone: "+880 1305 905848",
    email: "mh.mahmud006@gmail.com",
    github: "github.com/mahmudul006",
    linkedin: "linkedin.com/in/mahmudul-hasan-ba6654164",
    portfolio: "hasanmahmudul.vercel.app",
  },

  skills: [
    {
      label: "Languages",
      items: ["TypeScript", "JavaScript", "Python", "C", "C++", "SQL"],
    },
    {
      label: "Frontend",
      items: [
        "React",
        "Next.js",
        "Angular",
        "RxJS",
        "Redux",
        "Zustand",
        "TanStack Query",
        "React Hook Form",
        "Material UI",
        "Tailwind CSS",
      ],
    },
    {
      label: "Backend & APIs",
      items: ["FastAPI", "Node.js", "REST APIs", "WebSockets"],
    },
    {
      label: "AI & LLM",
      items: ["LangChain", "RAG pipelines", "Qdrant"],
    },
    {
      label: "Databases",
      items: ["MongoDB", "MySQL", "Firebase"],
    },
    {
      label: "Testing & Tooling",
      items: ["WebdriverIO", "Test automation", "Git", "GitHub"],
    },
  ] satisfies SkillGroup[],

  experience: [
    {
      title: "Software Engineer",
      org: "SELISE Digital Platforms",
      location: "Dhaka, Bangladesh",
      dateRange: "Dec 2024 – Present",
      bullets: [
        "Build enterprise healthcare risk and incident management features across a hybrid Angular and React codebase for live clinical workflows.",
        "Drive incremental migration of legacy Angular modules to React while preserving existing business logic and platform stability.",
        "Engineered frontend for a recycling platform using React, Material UI, Zustand, TanStack Query, and React Hook Form with role-based access control (RBAC).",
        "Delivered form-heavy railway inspection interfaces with React Hook Form, Redux, CanvasJS charts, client-side PDF export, and WebdriverIO E2E tests.",
      ],
    },
    {
      title: "Associate Software Engineer",
      org: "SELISE Digital Platforms",
      location: "Dhaka, Bangladesh",
      dateRange: "Sep 2023 – Nov 2024",
      bullets: [
        "Built a production RAG chat application to query enterprise PDF documents using Python, FastAPI, LangChain, and Qdrant.",
        "Integrated Azure OpenAI and AWS Bedrock APIs, enabling low-latency, real-time response streaming to an Angular UI via WebSockets.",
        "Improved retrieval precision and answer accuracy by optimizing document chunking strategies and semantic search workflows.",
      ],
    },
    {
      title: "Software Engineer Intern",
      org: "SELISE Digital Platforms",
      location: "Dhaka, Bangladesh",
      dateRange: "Mar 2023 – Aug 2023",
      bullets: [
        "Introduced WebdriverIO test automation, establishing full end-to-end regression test coverage for a production application.",
        "Mentored 8 QA engineers on automated test design, maintainable selector patterns, and CI/CD integration.",
        "Built modular, strongly typed UI components for an internal Next.js enterprise tool.",
      ],
    },
  ] satisfies ResumeRole[],

  education: {
    degree: "B.Sc. in Computer Science & Engineering",
    org: "International Islamic University Chittagong (IIUC), Chittagong, Bangladesh",
    dateRange: "2018 – 2022",
    detail:
      "700+ algorithmic problems solved in C/C++ on Codeforces, LeetCode, HackerRank, and AtCoder.",
  },

  achievements: [
    "ICPC Dhaka Regional 2020 Online Preliminary: ranked 341st among 1,324 teams.",
    "6th and 7th place finishes in IIUC intra-university programming contests (2019).",
  ],
};

export type Resume = typeof resume;
