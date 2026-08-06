export type ArtifactLine =
  | { kind: "prompt"; text: string }
  | { kind: "out"; text: string }
  | { kind: "success"; text: string }
  | { kind: "code"; text: string }
  | { kind: "rm"; text: string }
  | { kind: "add"; text: string };

export type ChapterArtifact = {
  type: "terminal" | "code";
  title: string;
  lines: ArtifactLine[];
};

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
  artifact: ChapterArtifact;
};

export const chapters: Chapter[] = [
  {
    id: "origin",
    index: "00",
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
    artifact: {
      type: "terminal",
      title: "solution.cpp",
      lines: [
        { kind: "prompt", text: "g++ -O2 solution.cpp -o sol" },
        { kind: "prompt", text: "./sol < input.txt" },
        { kind: "success", text: "Accepted" },
        { kind: "out", text: "" },
        {
          kind: "out",
          text: "judges: codeforces, leetcode, atcoder, hackerrank, uva, beecrowd",
        },
      ],
    },
  },
  {
    id: "internship",
    index: "01",
    dateRange: "Mar 2023 - Aug 2023",
    org: "SELISE, Dhaka - Software Engineer Intern",
    title: "First Internship",
    problem: "QA coverage was manual-only. Regressions slipped through before every release.",
    challenge: "Test coverage couldn't keep pace with how fast the product shipped.",
    built:
      "An end-to-end automation suite with WebdriverIO, mentored QA engineers on the practice, and shipped core UI for an internal Next.js app.",
    lesson: "Automation is a team multiplier. It buys everyone's time back, not just your own.",
    align: "right",
    artifact: {
      type: "terminal",
      title: "wdio.conf.js",
      lines: [
        { kind: "prompt", text: "wdio run wdio.conf.js" },
        { kind: "out", text: "Spec: internal-app.e2e.ts" },
        { kind: "success", text: "PASS" },
      ],
    },
  },
  {
    id: "rag",
    index: "02",
    dateRange: "Sep 2023 - Nov 2024",
    org: "SELISE, Dhaka - Associate Software Engineer",
    title: "RAG Chat Application",
    problem: "People needed answers buried inside their own PDFs, not another search box.",
    challenge: "Retrieval had to stay accurate and fast enough to feel like a real conversation.",
    built:
      "A document Q&A service on FastAPI, LangChain, Qdrant, Azure OpenAI, and AWS Bedrock, streamed to an Angular frontend over WebSockets.",
    lesson: "Retrieval quality decides the ceiling. Model choice barely moves it.",
    align: "left",
    artifact: {
      type: "terminal",
      title: "main.py",
      lines: [
        { kind: "prompt", text: "uvicorn main:app" },
        { kind: "out", text: "Application startup complete" },
        { kind: "out", text: "ws: client connected" },
        { kind: "out", text: '> query: "what\'s in section 3?"' },
        { kind: "out", text: "< 4 chunks retrieved" },
      ],
    },
  },
  {
    id: "railway",
    index: "03",
    dateRange: "2024 - Present",
    org: "SELISE, Dhaka - Software Engineer",
    title: "Railway Inspection Solution",
    problem: "Field inspectors needed reliable, form-heavy tooling that held up under real conditions.",
    challenge: "Every inspection meant long forms, live charts, and a PDF report that had to be right.",
    built:
      "Form-intensive UI with React Hook Form, Redux, and TanStack Query, CanvasJS for charts, PDF generation, and a full WebdriverIO end-to-end suite.",
    lesson: "Large forms are an architecture problem first. The UI layer is the easy part.",
    align: "right",
    artifact: {
      type: "code",
      title: "inspection-form.tsx",
      lines: [
        { kind: "code", text: "const { fields, append } = useFieldArray({" },
        { kind: "code", text: '  control,' },
        { kind: "code", text: '  name: "checkpoints",' },
        { kind: "code", text: "});" },
      ],
    },
  },
  {
    id: "recycling",
    index: "04",
    dateRange: "2024 - Present",
    org: "SELISE, Dhaka - Software Engineer",
    title: "Recycling Management Platform",
    problem: "Different roles needed different views of the same system, with different permissions.",
    challenge: "One codebase had to serve every role without turning into a maze of conditionals.",
    built:
      "A multi-role frontend with MUI, React Hook Form, TanStack Query, and Zustand for state that respects who's logged in.",
    lesson: "Designing role-based state early saves a full rewrite later.",
    align: "left",
    artifact: {
      type: "code",
      title: "store.ts",
      lines: [
        { kind: "code", text: 'type Role = "admin" | "collector" | "auditor";' },
        { kind: "code", text: "" },
        { kind: "code", text: "const useRoleStore = create<RoleState>((set) => ({" },
        { kind: "code", text: '  role: "collector",' },
        { kind: "code", text: "  setRole: (role) => set({ role })," },
        { kind: "code", text: "}));" },
      ],
    },
  },
  {
    id: "healthcare",
    index: "05",
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
    artifact: {
      type: "code",
      title: "incident-summary.tsx",
      lines: [
        { kind: "rm", text: '<div *ngIf="incident.isCritical">' },
        { kind: "rm", text: "  {{ incident.summary }}" },
        { kind: "rm", text: "</div>" },
        { kind: "add", text: "{incident.isCritical && (" },
        { kind: "add", text: "  <div>{incident.summary}</div>" },
        { kind: "add", text: ")}" },
      ],
    },
  },
];
