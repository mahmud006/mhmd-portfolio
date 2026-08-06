 want ot make my portfolio. with ai obviously. but how can i make it anti slop, minimal, sleek with claude code or othr tool

The biggest mistake people make with AI-generated portfolios is asking it to "build me a portfolio." That produces the same gradient backgrounds, floating blobs, glassmorphism, and generic copy that everyone else has.

Instead, use AI as a senior engineer, not as a designer.

What makes a portfolio feel "AI slop"
Huge hero section with "Hi, I'm John 👋"
Animated gradient background
Glass cards everywhere
15 technologies listed as badges
Generic copy ("Passionate Software Engineer...")
Stock illustrations
Endless scrolling timeline
20 unnecessary animations

The opposite feels intentional.

Design references worth copying

Don't ask AI to invent a design. Give it references.

Look at:

Linear
Vercel
Raycast
Stripe (older documentation pages)
Notion

They all share:

lots of whitespace
excellent typography
subtle borders
almost no colors
tiny animations
clean grids

Steal principles, not layouts.

Give Claude Code constraints

Instead of

Build me a portfolio.

Give it something like

You are a senior product designer from Linear.

Design principles:

- Minimal
- Almost monochrome
- Typography first
- No gradients
- No glassmorphism
- No floating blobs
- No stock illustrations
- Only one accent color
- Every animation under 200ms
- Prefer borders over shadows
- Content density similar to Linear docs
- Mobile first
- Accessibility AA
- Maximum page width 1100px

That alone changes the output dramatically.

Treat Claude like a designer

Example workflow:

Step 1
Generate only the information architecture.

Don't write code.

Then

Step 2
Design only the homepage wireframe.

ASCII only.

Then

Step 3
Generate typography scale.

No code.

Then

Step 4
Generate color system.

Only after everything looks good

Step 5
Implement.

This avoids AI making random design decisions.

Content > Design

Your projects are much more interesting than another React portfolio.

I'd feature things like:

Blocks Translation MCP
Healthcare Risk & Incident Management System (without confidential details)
React migration work
RAG application (LangChain + Qdrant + Azure OpenAI)
Railway Inspection project
Translation automation
Performance optimizations

Instead of

"I know React, Node, JavaScript..."

Show the problems you solved.

Example:

Prevented duplicate translation uploads by building an MCP server that checks existing tenant translations before syncing new keys.

That is memorable.

Tech stack

I'd keep it simple:

Next.js
Tailwind CSS
Motion (very little)
MDX for writing
Vercel deployment

Nothing more.

Nice interactions

Instead of flashy animations:

subtle fade on page load
hover border
smooth scrolling
keyboard shortcuts
command palette
dark/light mode
copy email button

Small touches feel more premium.

My favorite AI workflow
Claude Code
architecture
component implementation
refactoring
ChatGPT
writing
copy
polishing
UX critique
Cursor/Windsurf (optional)
quick edits
autocomplete
One-page structure
Mahmudul Hasan

Frontend Engineer
Building internal tools, AI workflows, and scalable React applications.

Selected Work
    Blocks Translation MCP
    Healthcare Platform
    RAG Search
    Recycling Management

Writing
    Notes
    Experiments

Experience

Stack

Contact

Notice there's no giant "About Me."

Make it feel handcrafted

Add details only you would include:

Short engineering notes about tradeoffs you encountered.
Before/after screenshots of internal tooling (if permitted).
Small architecture diagrams you created yourself.
GitHub contribution heatmap or selected repositories.
Blog posts explaining problems you solved.
Links to demos, slides, or talks (your MCP presentation would fit well).

Those elements are difficult for AI to fabricate convincingly and make the site feel authentic.

If I were building your portfolio today, I'd aim for Linear's typography + Vercel's spacing + Apple's restraint, resulting in a mostly black-and-white site with one accent color, minimal motion, and a strong focus on engineering work rather than visual effects.

i want to make it like a journey like i will walk thorugh them from my proejct ot project what i did ther etc. 

I actually think that's a stronger idea than a traditional portfolio.

Most portfolios answer "Who am I?"
A journey answers "How do I think and grow?"

For someone hiring an engineer, that's often more compelling.

Think of it as a game level or museum

Instead of scrolling through sections, visitors progress through your career.

Start

↓

2022
Learning C++
Problem Solving

↓

University
Projects

↓

SELISE
First React project

↓

Railway Inspection
Forms
PDFs
Charts

↓

Healthcare Platform
Large-scale React
Architecture
Performance

↓

Blocks Translation MCP
The problem
The investigation
The solution
Demo

↓

RAG Experiment

↓

What's Next?

Each stop is a "chapter."

Don't just show the project

Tell the story.

Instead of

Healthcare Risk Management

tell

Problem

Doctors needed to report incidents quickly.

↓

Challenge

The forms were huge.
Performance suffered.

↓

What I built

Reusable form architecture
React Hook Form
MUI
State management

↓

What I learned

Large forms are more about architecture
than UI components.

Now the visitor understands how you think.

Every project becomes a case study

For your MCP, for example:

Blocks Translation MCP

↓

The problem

Developers kept creating duplicate
translation keys.

↓

My observation

The same English text already existed
under different keys.

↓

Idea

Check existing translations before upload.

↓

Built

MCP Server
Claude Code
Translation API

↓

Result

Duplicate uploads stopped.

↓

Lessons

Automation should prevent mistakes,
not just speed things up.

That is far more memorable than a screenshot and a tech stack.

Make the scrolling feel like walking

Imagine the page like this:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You start here

↓

I learned C++

↓

I discovered frontend

↓

First internship

↓

Big React application

↓

Healthcare

↓

AI

↓

Automation

↓

Today

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Each chapter takes up nearly a full screen.

The scroll itself is the timeline.

Add artifacts

Each chapter can have evidence instead of paragraphs.

Healthcare

[Architecture Diagram]

[Git Commit]

[Screenshot]

[A lesson]

[A difficult bug]

or

Translation MCP

Terminal

$ sync-translations

✓ 32 new keys

✓ 4 duplicates detected

✓ Upload complete

Real outputs feel authentic.

Show evolution, not perfection

For every project, include:

What was the problem?
What did I initially think?
What went wrong?
How did I fix it?
What would I do differently today?

That last point is especially valuable. It shows reflection and growth.

A visual style that fits

Avoid a dense timeline with tiny cards.

Instead, think of each chapter as a full-page "scene":

────────────────────────

2025

Healthcare Platform

Large React application

↓

A large image

↓

A short story

↓

One lesson

↓

Continue

↓

────────────────────────

Visitors naturally keep scrolling to discover the next chapter.

One idea I'd definitely include

At the very beginning:

Follow my engineering journey.

Every chapter represents a real project I worked on, the problems I faced, the decisions I made, and what I learned along the way.

That immediately tells visitors this isn't just another portfolio—it's a guided walkthrough of your evolution as an engineer.

If you build this well, it will feel less like reading a résumé and more like exploring an interactive documentary where each scroll reveals the next milestone in your career. That's the kind of experience people tend to remember.

Improve depth for stronger writing
Upgrade to Plus and use increased reasoning to write compelling drafts.
Get Plus