# Project Plan

**Status**: Planning
**Created**: 2026-11-15
**Mode**: AUGMENT

---

## 1. Project Overview

**Goal**: Extend the existing TypeScript Next.js ICT portal into a bilingual (Hindi and English) learning and assessment experience for Classes 6–8, with source-verified chapter notes, question banks, quizzes, printable Unit Tests, and Word-compatible DOCX export. The project is designed so that every module is independently testable.

**App Type**: Full-stack SSR (Next.js frontend using static pre-rendering; no separate backend or API)

**API Login**: No

**Mode**: AUGMENT

**Deployment Plan**: No deployment plan found

The portal bundles reviewed content as static JSON and has no runtime persistence, user accounts, or external data service. Keep the build portable for Vercel and Cloudflare Pages by avoiding server-only features and validating static-export compatibility. Do not publish chapter names, notes, questions, or generated papers until their source material has been confirmed. The existing Class 6 JSON is unverified; the Class 6 PDF (`ictclass6.pdf`) needs confirmation, and authoritative Class 7 and 8 PDFs and their curriculum/edition metadata are still required. Use concise, independently worded explanations and assessments; do not reproduce textbook chapters.

---

## 2. Frontend - Web App

| Component | Technology |
|-----------|-----------|
| **Language** | TypeScript |
| **Framework** | Next.js (React, existing project) |
| **Package Manager** | npm |
| **Test Runner** | Vitest |
| **Mocking Library** | vi.mock |
| **Test Command** | npm test |

Use the existing Next.js conventions and dependencies where possible. Keep static class/chapter content in versioned JSON, keep all published facts traceable to a confirmed textbook or approved supplemental reference, and keep supplemental details clearly separated and cited. Provide side-by-side or clearly paired Hindi and English versions for learning content and generated papers. Use Tailwind CSS for styling and client-side printing/DOCX generation; no server endpoints are required. The paper builder accepts class, verified chapters, total marks, and duration, then creates an editable balanced draft with optional question-type/mark adjustments and a separate answer key.

---

## 3. Services Required

| Azure Service | Role in App | Environment Variable | Default Value (Local) | Classification |
|---------------|------------|---------------------|----------------------|----------------|
| - (none) | Static frontend only; deploy to either Vercel or Cloudflare Pages. No Azure runtime service or datastore is required. | - | - | N/A |

---

## 4. Prerequisites

### Run

| Tool | Service(s) | Installed | Version |
|------|------------|-----------|---------|
| Node.js | frontend | ✅ | v22.23.3 |
| npm | frontend | ✅ | 10.9.9 |

### Debug

| Tool | Service(s) | Installed | Version |
|------|------------|-----------|---------|
| Google Chrome | frontend | ✅ | 157.0.8103.52 |

No Azure dependency emulator or Azure-specific VS Code extension is needed. All required runtime and browser tools were positively detected. Use the existing project's lockfile as the final authority if its package manager differs from npm.

---

## 5. Design System & UI

**Component Library**: Fluent UI v9
**Style Direction**: A calm, trustworthy classroom learning portal with clear bilingual hierarchy, compact but welcoming study cards, and restrained teal highlights against a deep academic blue. Use rounded 8px controls, generous reading width, and high-contrast states suitable for students and teachers.
**Typography**: Inter, system-ui, -apple-system, "Segoe UI", "Noto Sans Devanagari", sans-serif

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#1E3A8A` | ICT portal identity, primary actions, selected class and active navigation |
| `accent` | `#0F766E` | Bilingual language cues, study actions, and verified-source highlights |
| `surface` | `#F5F7FB` | Quiet page canvas for reading and assessment setup |
| `text` | `#172033` | Main Hindi and English learning text |
| `muted` | `#5D6B82` | Chapter metadata, source notes, hints, and secondary labels |
| `border` | `#D9E1EC` | Separation between class cards, content panels, and form controls |

### Pages

| Page | Route | Purpose | Layout |
|------|-------|---------|--------|
| Learning Home | `/` | Choose a class, see source-review status, and reach the study and test tools. | `header, nav, hero, grid, card-list, footer` |
| Class Library | `/classes/[classId]` | Browse only verified chapters, notes, and assessments for one class. | `header, nav, hero, tabs, card-list, footer` |
| Chapter Study | `/classes/[classId]/chapters/[chapterId]` | Read paired Hindi/English notes, separately cited supplements, question bank, and quiz material. | `header, nav, sidebar, main, tabs, card-list, footer` |
| Unit Test Builder | `/unit-test` | Configure a balanced paper from verified chapters, adjust marks/types, then print or export DOCX with a separate answer key. | `header, nav, main, form, table, action-bar, footer` |

### Sample Content

Learning Home - class source status:
| Class | Source material currently identified | Publication status |
|-------|--------------------------------------|--------------------|
| Class 6 | `ictclass6.pdf` is present in the workspace | Confirm PDF authority, board/curriculum, edition, and year |
| Class 7 | No authoritative PDF identified | Source PDF and metadata required |
| Class 8 | No authoritative PDF identified | Source PDF and metadata required |

Class Library - class content availability:
| Class | Available item | Status |
|-------|----------------|--------|
| Class 6 | Existing Class 6 JSON files | Unverified; exclude from published content until checked against the confirmed PDF |
| Class 7 | Chapter list and learning content | Not available until an authoritative PDF is supplied and reviewed |
| Class 8 | Chapter list and learning content | Not available until an authoritative PDF is supplied and reviewed |

Chapter Study - verified-content gate:
| Class | Chapter names | Hindi/English notes and questions | Status |
|-------|---------------|-----------------------------------|--------|
| Class 6 | Not yet approved for display | Not yet approved for display | Await PDF confirmation and source review |
| Class 7 | Not supplied | Not supplied | Await authoritative PDF and source review |
| Class 8 | Not supplied | Not supplied | Await authoritative PDF and source review |

Unit Test Builder - configuration records:
| Class | Chapter selection | Total marks / duration | Generator state |
|-------|-------------------|------------------------|-----------------|
| Class 6 | Disabled until verified chapters exist | Not set | Do not generate from unverified JSON |
| Class 7 | Disabled until verified chapters exist | Not set | Waiting for authoritative source |
| Class 8 | Disabled until verified chapters exist | Not set | Waiting for authoritative source |

Use the home page to show the three class source states as real records. The library should present a clear source-review error/notice for unavailable content rather than fabricated chapters. The chapter page should show an honest empty state until a verified chapter is selected. The Unit Test Builder may show a loading skeleton for its verified-chapter list, but must keep generation disabled when no reviewed chapters are available. Across the previews, depict data, loading, empty, and error states without suggesting that any textbook content has already been approved.

---

## 6. Project Structure

Preserve the existing workspace paths and conventions (including whether the current Next.js app uses `app/` or `src/app/`); the tree below shows planned responsibilities, not a request to replace the existing scaffold.

```text
project-root/
├── .azure/
│   ├── project-plan.md
│   └── .preview-temp/
├── app/                                      # or existing src/app/
│   ├── page.tsx                              # Learning Home
│   ├── classes/[classId]/page.tsx            # Class Library
│   ├── classes/[classId]/chapters/[chapterId]/page.tsx
│   └── unit-test/page.tsx                    # Unit Test Builder
├── components/
│   ├── class-source-card.tsx
│   ├── bilingual-content.tsx
│   ├── source-citation.tsx
│   └── unit-test/
│       ├── test-configuration-form.tsx
│       ├── paper-preview.tsx
│       └── answer-key.tsx
├── content/
│   ├── reviewed/                             # Published static JSON only
│   │   ├── class-6/
│   │   ├── class-7/
│   │   └── class-8/
│   └── source-manifest.json                  # Source, edition, review, and citation metadata
├── lib/
│   ├── content-loader.ts
│   ├── assessment-generator.ts
│   └── document-export.ts
└── tests/
    ├── content-loader.test.ts
    ├── assessment-generator.test.ts
    └── document-export.test.ts
```

Keep unverified existing JSON out of the `content/reviewed` runtime path until each record is checked against its confirmed source. Generate only paths represented by reviewed content so the site can be statically pre-rendered. DOCX and print output are generated in the browser; no user data is persisted.

---

## 7. Route Definitions

| # | Method | Path | Description | Request Body | Response Body | Status Codes |
|---|--------|------|-------------|-------------|--------------|-------------|
| 1 | GET | `/` | Learning Home with Class 6–8 source-review status | - | Static HTML with class cards and links to study tools | 200 |
| 2 | GET | `/classes/[classId]` | Class Library for a supported class | - | Static HTML and bundled reviewed class JSON; unavailable content is an explicit empty/source state | 200, 404 |
| 3 | GET | `/classes/[classId]/chapters/[chapterId]` | Chapter Study view with bilingual notes, cited supplements, questions, and quiz material | - | Static HTML and bundled reviewed chapter JSON | 200, 404 |
| 4 | GET | `/unit-test` | Unit Test Builder and printable paper preview | - | Static HTML; paper and answer key are generated client-side from reviewed question data | 200 |

These are frontend page routes, not API endpoints. Validate class/chapter identifiers against the reviewed static content manifest; do not expose routes for unreviewed content.

---

## 8. Next Steps

1. Run **azure-project-scaffold** to execute this plan
2. Run **azure-project-integrate** to wire the frontend to live data, smoke-test the backend, and create the migrations
3. Run **azure-debug-plan** → **azure-debug-generate** for Docker emulators and VS Code debugging
4. Run the **azure-deploy** agent when ready; it uses **azure-app-onboard** for architecture, cost estimation, IaC generation, provisioning, and health verification
