# Manoj — Personal Software Engineering Portfolio

A polished, editorial personal software engineering portfolio built with **Next.js (App Router)**, **TypeScript**, and **Vanilla CSS tokens**.

Inspired by the level of craft, layout rigor, and environmental detail seen in top-tier engineering sites (such as Josh W. Comeau's website), but featuring an **original visual identity**: dark charcoal editorial surfaces, systems-map SVG illustrations, technical pipeline diagrams, and strictly verified facts.

---

## 🌟 Key Features

- **Evidence-Based Case Studies**: In-depth, honest technical breakdowns for 3 projects:
  - **TALQS**: Legal Question Answering & Summarization (RAG pipeline with PyMuPDF, sentence-transformers, FAISS vector index, and generative transformers).
  - **Welding Defect Detection**: Computer-vision inspection using PyTorch object detection (RetinaNet with ResNet-50-FPN backbone) and a Flask inference microservice.
  - **Movie Review System**: Full-stack application exploring React/Next.js frontend workflows, MongoDB document collections, and REST API validation.
- **Original Visual Environment**:
  - Custom SVG systems-map hero illustration with coordinate grids, telemetry nodes, and subtle ambient orbits.
  - Topographic wave transition in the footer echoing the hero's linework.
  - Interactive pipeline flowcharts detailing data transformations for each case study.
- **Strict Verification Guardrails**:
  - No fabricated statistics, fake user counts, or exaggerated "10x" claims.
  - Verified active LeetCode profile link (`https://leetcode.com/u/Manoj_chary/`).
  - Pending contact channels (email, GitHub, LinkedIn, resume) are clearly documented in `CONTENT_TO_VERIFY.md` and safely omitted from UI until configured.
- **Deliberate Dark & Light Themes**: Calibrated color tokens for both themes with zero hydration flash (via inline bootstrap script and CSS custom properties).
- **Accessible & Responsive**: Fully responsive from mobile (375px) to wide displays (1440px+), keyboard-accessible mobile drawer with `Escape` handler, semantic landmarks, skip link, and `prefers-reduced-motion` compliance.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router, Server Components by default)
- **Language**: TypeScript (strict mode)
- **Styling**: Vanilla CSS & CSS Modules with CSS Custom Properties
- **Icons**: `lucide-react`
- **Testing**: Node.js test runner (`tsx --test`)

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 18+ (tested on Node.js v26.0.0)
- npm 10+

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Run Unit Tests
```bash
npm test
```
Executes project data integrity tests (slug resolution, mandatory disclaimers, required sections).

### 5. Production Build
```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```text
app/
  layout.tsx              # Root layout, metadata, flash-free theme script, SkipLink, Header & Footer
  page.tsx                # Homepage combining Hero, Work, About, Toolkit, Principles & Contact
  globals.css             # Design tokens (dark/light themes), typography, container resets
  not-found.tsx           # Custom 404 page
  projects/
    [slug]/
      page.tsx            # Dynamic project case study route with static params & metadata
      ProjectDetail.module.css
components/
  layout/
    SiteHeader.tsx        # Sticky header with brand, desktop nav, LeetCode link, theme toggle
    SiteFooter.tsx        # Footer with links, verified socials, and back-to-top action
    MobileNav.tsx         # Accessible mobile drawer with keyboard & Escape management
    ThemeToggle.tsx       # Light/Dark theme toggle with localStorage persistence
    SkipLink.tsx          # Accessible skip-to-content link
  home/
    Hero.tsx              # Editorial hero statement, academic badge, CTAs, HeroScene
    SelectedWork.tsx      # Grid of featured project cards
    AboutSection.tsx      # Authentic background, interests, and working philosophy
    ToolkitSection.tsx    # Categorized technologies with real usage contexts
    ApproachSection.tsx   # 4 core engineering principles with practical examples
    ContactSection.tsx    # Verified channels and pending verification status
  projects/
    ProjectCard.tsx       # Project preview card with tags, disclaimers, and links
    PipelineDiagram.tsx   # Technical architecture & data pipeline flowcharts
  illustration/
    HeroScene.tsx         # Original systems-map SVG illustration with subtle motion
    FooterLandscape.tsx   # Topographic SVG wave footer transition
  ui/
    ButtonLink.tsx        # Primary, secondary, and subtle link/button component
    Tag.tsx               # Tech stack pill
    SectionHeading.tsx    # Editorial eyebrow, title, and description block
lib/
  site.ts                 # Central site configuration, profile data, skills, and principles
  projects.ts             # Central project case study data and helper functions
  types.ts                # TypeScript interfaces for site and project schemas
tests/
  projects.test.ts        # Unit test suite verifying project data integrity
CONTENT_TO_VERIFY.md      # Checklist of personal details to verify/update
```

---

## ✏️ Customization Guide

To update personal information or project details:

1. **Personal Information & Profiles**:
   - Open `lib/site.ts`.
   - Update your headline, academic graduation date, or add verified URLs for GitHub, LinkedIn, and Email under `verifiedSocials`.

2. **Project Case Studies**:
   - Open `lib/projects.ts`.
   - Update technical overviews, problem definitions, architectural notes, or repository links.

3. **Checklist for Deployment**:
   - Review `CONTENT_TO_VERIFY.md` to ensure all links and claims reflect your current verified status before public release.
