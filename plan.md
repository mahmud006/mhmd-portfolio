i was planing to make a portfolio. have some ref in docs.
lets iterate to make proper plan with reference like what you are building so i can confirm.

/caveman

---

## Design Read (revised after confirm)

Portfolio-as-journey for hiring managers/recruiters. Scrollytelling case-study format, not classic sections-portfolio. Vibe: Linear-grade typography discipline + Valorant-tactical sleekness (dark, sharp angular cuts, bold condensed type, one confident accent, snap-not-bounce motion). Ref for restraint/typography: Linear, Vercel, Stripe docs. Ref for edge/attitude: Valorant UI (game site, not literal clone). Monochrome dark base + 1 accent, no gradient/glass/blobs, no soft rounded-everything.

Dials: VARIANCE 7 (angular, off-center chapter compositions), MOTION 6 (snap-eased reveals, sub-200ms per original brief, sharper cubic-bezier not bouncy spring), DENSITY 3 (still breathes between chapters, sleek not cluttered).

Shape lock: sharp corners, radius 0 everywhere (fits tactical read, no mixed-radius).
Color: near-black base (off-black, not pure #000) + off-white text + single crimson/red accent (own hex, inspired-by not brand-matched to Valorant). One accent, locked whole page.
Type: bold condensed sans for display (tactical/HUD feel - candidates: Chakra Petch, Rajdhani, Barlow Condensed), Geist Mono for chapter numbers/dates/tech-stack inline text, body in a clean neutral sans. No Inter default, no serif (not editorial brief).

Stack (per brief): Next.js, Tailwind v4, Motion (`motion/react`) sparingly, MDX for writing, Vercel deploy.

Confirmed decisions:
1. No real screenshots available (internal/confidential work) -> chapters use generated abstract diagrams, code-preview snippets (real, small, from the actual project style), or text+stat artifacts only. No div-based fake screenshots, no stock illustrations.
2. Blocks Translation MCP chapter dropped from IA.
3. Content copy is TBD - user will supply/refine per chapter later. Priority now: build a strong, reusable chapter component/baseline so dropping in real copy later is trivial (no structural rework).
4. Contact block ships all three: email + GitHub + LinkedIn, resume download, and a command palette (Cmd+K) for jumping between chapters.

## STEP 1 — Information Architecture (no wireframe, no code yet)

Nav = chapter index, not classic sections. One-page, scroll-driven, each chapter ~full viewport.

```
Hero
  "Follow my engineering journey."
  1-line framing, no "Hi I'm Mahmudul 👋"

Ch.1 — Origin (2018-2022, IIUC, Chittagong)
  CSE degree. Competitive programming: Codeforces, LeetCode, ICPC Dhaka
  Regional 2020 (341/1324, team IIUC_whatever). Problem-solving roots.

Ch.2 — First Internship (03/2023-08/2023, SELISE)
  Problem: QA regression gaps.
  Built: E2E automation w/ WebdriverIO, mentored QA engineers,
  core UI on internal Next.js app.
  Lesson: automation as team-multiplier, not just personal speed.

Ch.3 — RAG Chat App (09/2023-11/2024, Associate SWE)
  Problem: users needed to query personal/official PDFs.
  Built: FastAPI + LangChain + Qdrant + Azure OpenAI + AWS Bedrock,
  WebSocket real-time w/ Angular frontend.
  Lesson: retrieval quality > model choice.

Ch.4 — Railway Inspection Solution (SELISE, SWE)
  Problem: inspectors needed fast, reliable form-heavy tooling.
  Built: React Hook Form + Redux + TanStack Query, CanvasJS charts,
  PDF report generation, full WebdriverIO E2E suite.
  Lesson: large forms are an architecture problem, not a UI problem.

Ch.5 — Recycling Management Platform (SELISE, SWE)
  Problem: multi-role workflows, different permissions per user type.
  Built: MUI + React Hook Form + TanStack Query + Zustand.
  Lesson: role-based state design early saves rework later.

Ch.6 — Healthcare Risk & Incident Mgmt (SELISE, SWE, 12/2024-present)
  Problem: legacy Angular frontend, hard to extend.
  Built: Angular -> React migration, reusable components, TS/RxJS/
  Angular Material bridge during transition.
  Lesson: incremental migration > rewrite, for live enterprise systems.

Today / What's Next
  Current role @ SELISE. Open threads (AI workflows, MCP tooling).
  Contact: email, GitHub (mahmudul006), LinkedIn.
```

Chapter shape (repeats per chapter, per chatgpt brief):
`Problem -> Challenge/Investigation -> What I built (stack as inline text, not badges) -> Artifact (diagram/terminal/screenshot) -> Lesson -> Continue`

No skills-badge wall. No generic "About Me" block. No stock illustrations.

Chapter component is the reusable unit - build it generic (title, dates, problem/challenge/built/artifact/lesson slots, artifact type = diagram|code|stat|none) so future content is a data-fill, not a rebuild.

## STEP 2 — ASCII Wireframe (nav + hero + chapter template)

Nav — fixed, 1 line, 64px, sharp bottom border (1px, not shadow):

```
┌──────────────────────────────────────────────────────────────────┐
│ ▚MH   ORIGIN·INTERN·RAG·RAILWAY·RECYCLING·HEALTHCARE·NOW  ⌘K  ↓CV │
└──────────────────────────────────────────────────────────────────┘
```
- `▚MH` = angular monogram mark (clipped square, not rounded), links top
- chapter dots/labels = mono, tiny, active one lit in accent, rest dim off-white
- `⌘K` = command palette hint, opens chapter-jump + contact actions
- `↓CV` = resume download, plain icon+label, no separate "About" link

Hero — full 100dvh, off-center (VARIANCE 7: content left ~60%, right 40% void with one angular accent shard, not a stock image):

```
┌──────────────────────────────────────────────────────────────────┐
│                                                              ◢     │
│  MAHMUDUL HASAN — SOFTWARE ENGINEER                        ◢◤     │
│                                                                    │
│  FOLLOW MY                                                        │
│  ENGINEERING JOURNEY.                                             │
│                                                                    │
│  Every chapter below is a real project: the problem, the          │
│  decisions, what I learned. Scroll to start.                      │
│                                                                    │
│  [ Start -> Origin, 2018 ]                                        │
│                                                                    │
│                                                     Ch.1 ORIGIN ▸  │
└──────────────────────────────────────────────────────────────────┘
```
- eyebrow (name/role) + headline + subtext + 1 CTA = 4 hero elements, at cap
- `◢◤` = sharp angular accent shard, crimson, only color pop on the page besides text
- bottom-right sliver of next chapter title = affordance instead of a banned "scroll" cue
- headline 2 lines, condensed bold, tracking tight

Chapter template — repeats for Ch.1-6, alternating left/right number-block (max 2 in a row before flip, avoids zigzag-cap violation since only 6 total, still alternate):

```
┌──────────────────────────────────────────────────────────────────┐
│  02        FIRST INTERNSHIP                    ┌────────────────┐│
│  MAR–AUG   SELISE · Dhaka                       │ artifact slot  ││
│  2023      (mono, low-opacity giant number)     │ (code snippet /││
│            ▏PROBLEM                             │  diagram /     ││
│            QA regression gaps, manual-only.      │  stat block,   ││
│            ▏CHALLENGE                            │  sharp-cut     ││
│            Coverage couldn't keep pace w/ ship.  │  border, no    ││
│            ▏BUILT                                │  shadow)       ││
│            WebdriverIO E2E suite, mentored QA,   │                ││
│            core UI on internal Next.js app.      │                ││
│            ▏LESSON                               │                ││
│            Automation is a team multiplier,      │                ││
│            not just personal speed.              └────────────────┘│
│                                          Ch.3 RAG CHAT APP ▸       │
└──────────────────────────────────────────────────────────────────┘
```
- `▏` = thin accent-colored tick before each label (PROBLEM/CHALLENGE/BUILT/LESSON), replaces eyebrow-per-block, mono uppercase, small
- giant chapter number = huge condensed mono, ~15% opacity, texture not content
- artifact slot: sharp 1px border box, no shadow, no card-fill; empty/placeholder state until real content arrives (dashed border + "artifact pending" mono label)
- "Ch.N NEXT-TITLE ▸" bottom-right = same affordance pattern as hero, doubles as implicit progress marker
- stack mentioned inline in BUILT prose (WebdriverIO, Next.js), not a badge row

Mobile (<768px): single column, number shrinks + moves above title (not 15%-opacity giant bg, becomes a normal small mono label), artifact slot goes full-width below text, right-edge "next chapter" sliver becomes a plain link at chapter bottom.

## STEP 3 — Type Scale

3 families, each with one clear job (not decorative mixing):
- **Display — Chakra Petch (Bold/SemiBold)**: hero headline, chapter titles. Squared-off geometric terminals, condensed, reads tactical/HUD, not soft.
- **Mono — Geist Mono**: nav chapter-dots, dates, `PROBLEM/CHALLENGE/BUILT/LESSON` tick-labels, ghost chapter numbers, CTA/button labels, artifact code snippets.
- **Body — Geist (Sans)**: paragraph prose (problem/challenge/lesson text). Neutral, readable, not Inter (default-avoid), pairs natively with Geist Mono.

| Token | Font | Size (mobile → desktop) | Tracking | Leading | Case |
|---|---|---|---|---|---|
| Hero H1 | Chakra Petch Bold | `text-4xl → text-8xl` | tight | `0.95` | UPPER |
| Chapter H2 | Chakra Petch SemiBold | `text-2xl → text-5xl` | tight | none | UPPER |
| Ghost number (bg) | Geist Mono Bold | `text-sm` mobile (inline label) `→ text-[14rem]` desktop (15% opacity bg) | normal | none | - |
| Tick-label (`▏PROBLEM` etc) | Geist Mono Medium | `text-[11px]` | `0.18em` | none | UPPER |
| Nav chapter-dots / CTA / ⌘K / CV | Geist Mono Medium | `text-xs → text-sm` | `0.1em` | none | UPPER |
| Body / lesson prose | Geist Regular | `text-base → text-lg` | normal | relaxed | sentence |
| Subtext (hero) | Geist Regular | `text-base → text-lg`, max `≤20 words` | normal | relaxed | sentence |

No italics planned (no descender-clearance issue). No serif anywhere (not an editorial brief - tactical/technical instead).

## STEP 4 — Color System

Dark-only by design (deliberate, not "forgot light mode" - matches the tactical/Valorant-site read, same call Linear/Vercel dark-portfolio sites make). No theme toggle unless later requested.

One accent (crimson), locked across the whole page - nav active dot, hero shard, tick-marks, CTA border/fill, focus ring, links. Nothing else gets color.

| Token | Hex | Use | Contrast check |
|---|---|---|---|
| `--bg` | `#0A0A0C` | page base (near-black, not pure `#000`) | - |
| `--bg-elevated` | `#141518` | artifact slot fill, nav-on-scroll | - |
| `--border` | `rgba(255,255,255,.08)` | default 1px hairlines (chapter dividers, artifact box) | - |
| `--border-strong` | `rgba(255,255,255,.16)` | active/hover borders | - |
| `--text` | `#F2F2F0` | headings, primary prose (off-white, not pure `#fff`) | ~18:1 on `--bg`, AAA |
| `--text-dim` | `#9C9CA1` | body/lesson prose, subtext | ~7.8:1 on `--bg`, AA+ |
| `--text-ghost` | `--text` @ 14% opacity | giant bg chapter numbers (texture, not content) | n/a, decorative |
| `--accent` | `#E23A4E` | active states, ticks, borders, links, hero shard | ~5.1:1 on `--bg`, AA for text use |
| `--accent-ink` | `#0A0A0C` | text color *on top of* solid `--accent` fill (button hover/active) | near-black on accent ~6:1+, safe |

CTA/button treatment (avoids solid-fill contrast risk, matches "prefer borders over shadows" from original brief, fits tactical outlined-button read):
- Default: transparent fill, `1px solid var(--accent)` border, `var(--text)` label.
- Hover/active: fills solid `var(--accent)`, label flips to `var(--accent-ink)`, `translate-y-[1px]` tactile press. No glow, no shadow.

Own crimson (`#E23A4E`), not Valorant's literal brand red - inspired-by, not brand-matched.

## STEP 5 — Implementation (done)

Next.js 16 (App Router, Turbopack) + Tailwind v4 + Motion + cmdk + Phosphor icons. Real build, dev-server-verified in browser at desktop (1440) and mobile (390) widths, zero console errors.

Deviation from wireframe, on purpose: not all 6 chapters use the split (text + artifact-slot) layout. Repeating that pattern 6x in a row would trip the design skill's own zigzag/layout-repetition cap, and would have meant six identical "artifact pending" placeholder boxes since there are no real screenshots yet. Instead chapters alternate two layout families:
- `full` (Origin, Railway): text-only "scene" with the giant ghost number as the visual, no artifact box.
- `split` (Internship, RAG, Recycling, Healthcare): text + dashed artifact-pending slot, alternating sides.

Structure:
- `src/lib/chapters.ts` - single data source (id, dates, org, title, problem/challenge/built/lesson, align, layout). Content copy is real (resume-derived), swap-in-place when better copy is ready - no component rework needed.
- `src/components/{Nav,Hero,Chapter,Closing,CommandPalette,AppChrome}.tsx`
- Nav uses short labels (Origin/Intern/RAG/Railway/Recycling/Healthcare/Now) to fit one line at desktop - full titles overflowed.
- Cmd+K palette: jump to any chapter, copy email, open GitHub/LinkedIn, download resume.
- `public/resume.pdf` wired to Nav's CV link and the palette.
- Color tokens, fonts, radius-0 lock, and the `clip-notch` cut-corner motif (reused across monogram, hero shard, buttons, artifact slot) all live in `globals.css` per Step 4.

Not done yet / open for next session:
- Real artifacts (diagrams, code snippets, terminal output) to replace "Artifact pending" slots.
- Copy pass once user has final wording per chapter (structure is ready, content is a data-file edit).
- Favicon still the Next.js default - swap for a real mark.
- No deploy yet (Vercel per brief, not requested this session).

## Next steps

- [x] Step 1: IA
- [x] Step 2: wireframe
- [x] Step 3: type scale
- [x] Step 4: color system
- [x] Step 5: implement (this doc)
