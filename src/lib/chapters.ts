export type Chapter = {
  id: string;
  index: string;
  dateRange: string;
  org: string;
  title: string;
  problem: string;
  challenge: string;
  built: string;
  lesson: string;
  align: "left" | "right";
  layout: "full" | "split";
};

export const chapters: Chapter[] = [
  {
    id: "origin",
    index: "01",
    dateRange: "2018 - 2022",
    org: "IIUC, Chittagong",
    title: "Origin",
    problem: "No formal head start. Just curiosity about how programs actually work.",
    challenge:
      "Competitive programming means solving under pressure, with no partial credit for almost-right answers.",
    built:
      "Years of C and C++ practice on Codeforces and LeetCode. Reached ICPC Dhaka Regional 2020, placing 341st of 1324 teams.",
    lesson: "Problem-solving is a trainable skill, not a talent you either have or don't.",
    align: "left",
    layout: "full",
  },
  {
    id: "internship",
    index: "02",
    dateRange: "Mar 2023 - Aug 2023",
    org: "SELISE, Dhaka - Software Engineer Intern",
    title: "First Internship",
    problem: "QA coverage was manual-only. Regressions slipped through before every release.",
    challenge: "Test coverage couldn't keep pace with how fast the product shipped.",
    built:
      "An end-to-end automation suite with WebdriverIO, mentored QA engineers on the practice, and shipped core UI for an internal Next.js app.",
    lesson: "Automation is a team multiplier. It buys everyone's time back, not just your own.",
    align: "right",
    layout: "split",
  },
  {
    id: "rag",
    index: "03",
    dateRange: "Sep 2023 - Nov 2024",
    org: "SELISE, Dhaka - Associate Software Engineer",
    title: "RAG Chat Application",
    problem: "People needed answers buried inside their own PDFs, not another search box.",
    challenge: "Retrieval had to stay accurate and fast enough to feel like a real conversation.",
    built:
      "A document Q&A service on FastAPI, LangChain, Qdrant, Azure OpenAI, and AWS Bedrock, streamed to an Angular frontend over WebSockets.",
    lesson: "Retrieval quality decides the ceiling. Model choice barely moves it.",
    align: "left",
    layout: "split",
  },
  {
    id: "railway",
    index: "04",
    dateRange: "2024 - Present",
    org: "SELISE, Dhaka - Software Engineer",
    title: "Railway Inspection Solution",
    problem: "Field inspectors needed reliable, form-heavy tooling that held up under real conditions.",
    challenge: "Every inspection meant long forms, live charts, and a PDF report that had to be right.",
    built:
      "Form-intensive UI with React Hook Form, Redux, and TanStack Query, CanvasJS for charts, PDF generation, and a full WebdriverIO end-to-end suite.",
    lesson: "Large forms are an architecture problem first. The UI layer is the easy part.",
    align: "right",
    layout: "full",
  },
  {
    id: "recycling",
    index: "05",
    dateRange: "2024 - Present",
    org: "SELISE, Dhaka - Software Engineer",
    title: "Recycling Management Platform",
    problem: "Different roles needed different views of the same system, with different permissions.",
    challenge: "One codebase had to serve every role without turning into a maze of conditionals.",
    built:
      "A multi-role frontend with MUI, React Hook Form, TanStack Query, and Zustand for state that respects who's logged in.",
    lesson: "Designing role-based state early saves a full rewrite later.",
    align: "left",
    layout: "split",
  },
  {
    id: "healthcare",
    index: "06",
    dateRange: "Dec 2024 - Present",
    org: "SELISE, Dhaka - Software Engineer",
    title: "Healthcare Risk & Incident Management",
    problem:
      "A live enterprise Angular app needed to modernize without breaking what clinicians already depended on.",
    challenge: "Angular and React had to coexist correctly while the migration was still in progress.",
    built:
      "Reusable React components migrating enterprise modules off Angular, bridged by TypeScript, RxJS, and Angular Material where the two still meet.",
    lesson: "Incremental migration beats a rewrite when the system has to stay live.",
    align: "right",
    layout: "split",
  },
];
