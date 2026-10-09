# Content & Profile Details to Verify by Manoj

This file documents personal, project, and external details that are intentionally left unconfigured or marked for review to avoid inventing facts.

---

## 1. External Profiles & Contact Channels

| Item | Current Status in Portfolio | Action Required from Manoj |
| :--- | :--- | :--- |
| **LeetCode** | ✅ Configured (`https://leetcode.com/u/Manoj_chary/`) | Verified active profile link. |
| **GitHub** | ⚠️ Omitted from live links (pending URL) | Add personal GitHub URL in `lib/site.ts` (`verifiedSocials`). |
| **LinkedIn** | ⚠️ Omitted from live links (pending URL) | Add personal LinkedIn URL in `lib/site.ts` (`verifiedSocials`). |
| **Email** | ⚠️ No mailto link rendered | Add preferred contact email in `lib/site.ts`. |
| **Resume Link** | ⚠️ Omitted from live links | Add public resume PDF path or URL in `lib/site.ts` if desired. |

> **Implementation Note:** The UI automatically renders external links **only** when they are configured with valid URLs in `lib/site.ts`. No broken `#` links or placeholder domains (`example.com`) are displayed.

---

## 2. Project Details & Benchmarks

### Project A: TALQS (Legal Question Answering & Summarization)
- **Status:** Documented accurately as an exploratory RAG prototype using PyMuPDF, sentence-transformers, FAISS vector indexing, and sequence-to-sequence summarization models.
- **Guardrails:** A prominent disclaimer is included stating this is an educational research project and not legal advice.
- **Verification needed:** Once a public GitHub repository or live demonstration is ready, populate `links.github` and `links.demo` in `lib/projects.ts`.

### Project B: Welding Defect Detection System
- **Status:** Documented as an experimental computer-vision object-detection pipeline using PyTorch, torchvision (RetinaNet with ResNet-50-FPN backbone), and a Flask inference microservice.
- **Guardrails:** No unverified precision, recall, mAP (mean Average Precision), or dataset size numbers are published in the text.
- **Verification needed:** When rigorous test-split evaluation numbers (e.g., mAP@0.5 on a documented test set) are confirmed from training checkpoints, they can be added to the metrics section in `lib/projects.ts`.

### Project C: Movie Review System
- **Status:** Documented as a full-stack web exploration with React/Next.js frontend, MongoDB document storage, and REST API boundaries.
- **Guardrails:** No unsupported claims regarding heavy production scale or unbuilt auth layers are included.
- **Verification needed:** Add repository or deployment URLs once available in `lib/projects.ts`.

---

## 3. Academic & Biography Details
- **Graduation date:** Set to `Expected 2027` (B.Tech in Computer Science & Engineering). Confirm whether this matches the current academic calendar.
- **Status badge:** Set to neutral exploratory phrasing ("Exploring full-stack systems and applied computer vision & NLP"). No unsupported "open for work" or agency slogans.

---

## How to Update

All profile data and project case studies are centralized in:
- `lib/site.ts` (Site profile, social URLs, skills categories, engineering principles)
- `lib/projects.ts` (Project case studies, technical sections, and links)
