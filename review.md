# Portfolio Review — Mahmudul Hasan

**Scope:** Next.js 16 + Tailwind v4 + Motion portfolio at `src/app`. Reviewed against the stated goal: a scrollytelling, case-study portfolio for hiring managers/recruiters.

---

## TL;DR

The portfolio has a strong, opinionated design direction and a solid component architecture. The code is clean, the build passes, and the narrative structure (Problem → Challenge → Built → Lesson) is exactly what a technical portfolio needs. The main blockers before shipping are: a lint error in the theme toggle, placeholder "Artifact pending" boxes that are still visible, missing metadata/social tags, and a default README that undermines the project's polish.

---

## What Works Well

### 1. Clear design system
The tactical/dark aesthetic is consistent across every component. Sharp corners, one accent (`#FF4A5E`), disciplined typography (Chakra Petch + Geist), and CSS-variable tokens make the whole page feel intentional rather than template-driven.

### 2. Smart information architecture
Treating career history as "chapters" with a repeating shape (Problem / Challenge / Built / Lesson) is effective. It forces you to explain *why* the work mattered, not just list tech stacks.

### 3. Good engineering touches
- Command palette (`Cmd+K`) for chapter jumping and contact actions.
- `useReducedMotion` used correctly so motion doesn't run for users who prefer reduced motion.
- Theme toggle with `localStorage` persistence and a blocking inline script to avoid flash-of-wrong-theme.
- Static build succeeds; the page is prerendered as static content.
- TypeScript checks pass (`tsc --noEmit`).

### 4. Reusable `Chapter` component
`src/lib/chapters.ts` is a clean data source. Swapping copy or adding chapters won't require component rewrites.

### 5. Type/stack integration
Using `next/font` for Chakra Petch, Geist Sans, and Geist Mono keeps fonts self-hosted and performant.

---

## Bugs & Technical Issues

### 1. Theme toggle triggers a lint error (should fix before shipping)
**File:** `src/components/ThemeToggle.tsx:13`

```tsx
useEffect(() => {
  const current = document.documentElement.getAttribute("data-theme");
  setTheme(current === "light" ? "light" : "dark");
}, []);
```

ESLint reports: `react-hooks/set-state-in-effect` — calling `setState` synchronously in an effect causes cascading renders.

**Fix:** Read the initial theme outside the effect and pass it as the initial state:

```tsx
function getInitialTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  // ...
}
```

Or better, initialize from `localStorage` directly (with a SSR-safe fallback) and drop the effect entirely.

### 2. Global `border-radius: 0 !important` is too heavy
**File:** `src/app/globals.css:54`

```css
* {
  border-radius: 0 !important;
}
```

This will fight any third-party component that legitimately needs a radius. It happens to work with `cmdk` right now, but it's fragile. Prefer resetting radius on your own components via Tailwind/utilities, or scope the rule to known elements.

### 3. Resume download behavior differs between Nav and Command Palette
**File:** `src/components/Nav.tsx`, `src/components/CommandPalette.tsx`

- Nav uses `<a href="/resume.pdf" download>CV</a>` — this triggers a download.
- Command Palette uses `window.open("/resume.pdf", "_blank")` — this opens in a new tab and may just display the PDF, not download it.

**Fix:** Use the same `download` behavior in the palette, or provide a direct download link.

### 4. Unused file triggers a lint warning
**File:** `.remember/tmp/last-ndc.ts`

ESLint flags this file. It's outside `src`, but since `eslint.config.mjs` includes it, the warning shows on every lint run. Either ignore `.remember/**` or remove the file.

### 5. `next.config.ts` includes unnecessary Turbopack root

```ts
turbopack: {
  root: path.resolve(__dirname),
},
```

This is the default and can be removed. If you plan to deploy statically, you'll also want `output: "export"` here.

---

## Design & UX Notes

### 1. "Artifact pending" placeholders are too prominent
Three chapters (Internship, RAG, Recycling, Healthcare) show a dashed box labeled "Artifact pending." On a portfolio, placeholders read as unfinished work. Either:
- Replace them with real artifacts before sharing the link, or
- Hide the artifact slot entirely when no artifact exists, rather than displaying a placeholder.

Since the plan says no fake screenshots, good alternatives are:
- Short code snippets from the actual projects.
- Terminal/CLI output.
- Abstract system diagrams (SVG, not generated stock).
- Metrics/stat cards.

### 2. Mobile navigation is missing
The desktop nav links are hidden on mobile (`hidden md:flex`). Mobile users can still use `Cmd+K`, but that's keyboard-centric and not discoverable on a phone. Consider a simple mobile sheet/menu or exposing the chapter list.

### 3. Hero shard is a good accent, but easy to miss
The angular shard in the hero reinforces the tactical vibe. On very large screens it can feel disconnected from the text because it's tucked in the upper-right corner. That's fine at variance 7, but watch that it doesn't become visual noise.

### 4. Shape language is consistent
The `clip-notch` utility is reused across the monogram, buttons, hero shard, and artifact slots. This is the kind of restraint that makes a design feel considered.

### 5. Theme toggle icon state is correct
Sun in dark mode, Moon in light mode — the right mental model.

---

## Content & Narrative

### Strengths
- Each chapter follows the same arc, which makes scanning easy.
- Lessons are specific and memorable:
  - "Retrieval quality decides the ceiling. Model choice barely moves it."
  - "Incremental migration beats a rewrite when the system has to stay live."

### Weaknesses

**Quantified impact is scarce.** Beyond the ICPC ranking, the copy doesn't include concrete outcomes: test coverage percentage, time saved, users supported, latency improvements, etc. Even rough numbers make a stronger case to recruiters.

**Overlap in date ranges is unexplained.** Railway, Recycling, and Healthcare all say "2024–Present" or "Dec 2024–Present." It's normal to work on multiple projects in a product company, but a recruiter may wonder which was primary. A one-line clarification (e.g., "parallel engagement" or "primary focus") would help.

**The "RAG Chat Application" title is slightly jargon-heavy.** RAG is accurate, but some hiring managers may not know the acronym. Consider "Document Q&A with Retrieval" or keep RAG but make the problem sentence clearer.

**Closing section is good but passive.** "Always glad to talk shop" is friendly, but the CTA could be stronger: "Open to senior/Staff software engineer roles in AI tooling, frontend infrastructure, or enterprise product teams."

---

## Accessibility & Performance

### Accessibility
- Focus styles are visible (`outline: 1px solid var(--accent)`).
- `aria-hidden` is used correctly on decorative elements (ghost numbers, hero shard).
- Reduced motion is respected.
- The Command Palette uses `cmdk`, which provides reasonable keyboard navigation.

### Concerns
- The ghost chapter numbers are decorative, which is good, but on some displays the `text-[11rem]` number may overlap nearby content at extreme zoom levels. Test at 200% zoom.
- The mobile nav gap means keyboard-only mobile users have fewer options.

### Performance
- Static export means fast first paint.
- `next/font` self-hosts fonts.
- Motion animations are short (≤500ms) and use transform/opacity only.
- No obvious render-blocking resources.

### SEO / Social
Missing standard metadata:
- Open Graph image, title, description.
- Twitter card tags.
- Canonical URL.
- Favicon is still the Next.js default.

These matter when the link is shared on LinkedIn or Slack.

---

## Recommended Next Steps

### Before sharing the URL
1. Fix the `ThemeToggle` lint error.
2. Replace or hide "Artifact pending" placeholders.
3. Add Open Graph / Twitter metadata and a custom favicon.
4. Replace the default `README.md` with project-specific info (stack, deploy instructions, license).
5. Decide on mobile nav: either a hamburger sheet or expose chapter links.

### Before a job search push
6. Add quantified outcomes to each chapter where possible.
7. Clarify overlapping project dates with one-line context.
8. Strengthen the closing CTA with the kinds of roles you're targeting.
9. Add `output: "export"` to `next.config.ts` and deploy to Vercel.
10. Run `npm run lint` and fix the `.remember/tmp/last-ndc.ts` warning.

### Nice-to-haves
11. Add a simple `robots.txt` and `sitemap.xml`.
12. Consider a subtle scroll-progress indicator in the nav, since the page is long.
13. Abstract the repeated `EASE` constant and `reveal` motion config into a shared hook to reduce duplication.

---

## Verdict

This is a portfolio with a real point of view. The design is disciplined, the code is maintainable, and the narrative structure is stronger than most engineering portfolios. Treat the placeholder artifacts and the theme-toggle lint error as blockers, and it will be ready to ship. The content pass (numbers, role clarity, CTA) is what will take it from "looks good" to "gets interviews."
