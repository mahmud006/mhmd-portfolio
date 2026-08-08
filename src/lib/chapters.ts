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
  context: string;
  engineered: string;
  insight?: string;
  align: "left" | "right";
  artifact: ChapterArtifact | ChapterArtifact[];
};

export const chapters: Chapter[] = [
  {
    id: "origin",
    index: "00",
    dateRange: "2018 - 2022",
    org: "IIUC — B.Sc. in Computer Science & Engineering",
    title: "Origin",
    context:
      "Building core computer science fundamentals and algorithmic problem-solving discipline from scratch during university.",
    engineered:
      "700+ algorithmic problems solved in C and C++, complemented by hands-on projects in object-oriented design, database fundamentals, and web development basics.",
    align: "left",
    artifact: {
      type: "terminal",
      title: "solution.cpp",
      lines: [
        { kind: "prompt", text: "g++ -O2 solution.cpp -o sol" },
        { kind: "prompt", text: "./sol < input.txt" },
        { kind: "success", text: "Accepted" },
        { kind: "out", text: "" },
        { kind: "prompt", text: "judges --career" },
        { kind: "out", text: "codeforces    438 solved" },
        { kind: "out", text: "leetcode      170 solved" },
        { kind: "out", text: "+ codechef, atcoder, hackerrank, uva, beecrowd" },
        { kind: "out", text: "" },
        { kind: "success", text: "total         700+ solved" },
      ],
    },
  },
  {
    id: "internship",
    index: "01",
    dateRange: "Mar 2023 - Aug 2023",
    org: "SELISE, Dhaka - Software Engineer Intern",
    title: "First Internship",
    context:
      "Learning Angular from scratch in an enterprise environment, mastering component architecture, RxJS state management, and team coding standards.",
    engineered:
      "Built UI feature modules for production Angular apps, automated a React application with WebdriverIO E2E testing, and mentored the QA team on WebdriverIO automation practices.",
    insight:
      "Fast-tracking Angular learning through real feature work and test automation turned initial onboarding into early engineering contribution.",
    align: "right",
    artifact: [
      {
        type: "terminal",
        title: "ng-serve.log",
        lines: [
          { kind: "prompt", text: "ng serve --port 4200" },
          { kind: "out", text: "✔ Angular Live Development Server listening on localhost:4200" },
          { kind: "success", text: "✔ Compiled successfully" },
        ],
      },
      {
        type: "terminal",
        title: "wdio.conf.js",
        lines: [
          { kind: "prompt", text: "wdio run wdio.conf.js" },
          { kind: "out", text: "Spec: internal-app.e2e.ts" },
          { kind: "success", text: "PASS" },
        ],
      },
    ],
  },
  {
    id: "rag",
    index: "02",
    dateRange: "Sep 2023 - Nov 2024",
    org: "SELISE, Dhaka - Associate Software Engineer",
    title: "RAG Chat Application",
    context:
      "Users needed precise answers buried inside complex PDF documentation, but traditional keyword search was too slow and inaccurate for real-time conversational workflows.",
    engineered:
      "Architected a document Q&A service on FastAPI, LangChain, Qdrant vector database, Azure OpenAI, and AWS Bedrock, streaming responses over WebSockets to an Angular frontend.",
    insight:
      "In production AI systems, retrieval quality and chunking strategy determine the accuracy ceiling—model choice alone barely moves the needle.",
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
    context:
      "Field inspectors needed reliable, offline-resilient, form-heavy tooling to record complex checkpoint data, generate dynamic charts, and issue accurate PDF reports under strict field conditions.",
    engineered:
      "Built a high-performance form UI using React Hook Form, Redux, and TanStack Query, integrated CanvasJS for live visual charts, authored client-side PDF export routines, and backed it with full WebdriverIO E2E coverage.",
    insight:
      "Form-heavy UI is an architectural problem first—managing complex reactive state, dynamic validation rules, and caching boundaries matters far more than visual styling.",
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
    context:
      "Administrators, collectors, and auditors required distinct operational interfaces with complex permission matrices within a single shared web application.",
    engineered:
      "Designed a multi-role frontend using Material UI, React Hook Form, TanStack Query, and Zustand to enforce fine-grained role-based view visibility and state boundaries cleanly across the application.",
    insight:
      "Structuring role-based authorization state cleanly at the root architecture layer prevents exponential complexity and tech debt as permission requirements evolve.",
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
    title: "Healthcare Quality & Risk Platform",
    context:
      "An enterprise platform combining day-to-day clinical operations with quality and risk management—requiring active feature development in Angular while migrating core modules to React.",
    engineered:
      "Shipped production features across both Angular and React modules, bridging hybrid application state and shared UI components with TypeScript and RxJS.",
    insight:
      "Deep expertise in both Angular and React allowed seamless feature delivery in a hybrid codebase without breaking live clinical workflows.",
    align: "right",
    artifact: [
      {
        type: "code",
        title: "quality-risk.component.ts",
        lines: [
          { kind: "code", text: "@Component({" },
          { kind: "code", text: "  selector: 'app-quality-risk'," },
          { kind: "code", text: "  templateUrl: './quality-risk.component.html'," },
          { kind: "code", text: "})" },
          { kind: "code", text: "export class QualityRiskComponent implements OnInit {}" },
        ],
      },
      {
        type: "code",
        title: "quality-risk.tsx",
        lines: [
          { kind: "rm", text: '<div *ngIf="incident.isCriticalRisk">' },
          { kind: "rm", text: "  {{ incident.summary }}" },
          { kind: "rm", text: "</div>" },
          { kind: "add", text: "{incident.isCriticalRisk && (" },
          { kind: "add", text: "  <div>{incident.summary}</div>" },
          { kind: "add", text: ")}" },
        ],
      },
    ],
  },
];
