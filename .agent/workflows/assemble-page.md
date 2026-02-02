---
description: Add multiple sections to a page in one click
---
// turbo-all

INPUT: JSON object
Example:
{
  "page": "how-it-works",
  "route": "/how-it-works",
  "sections": [
    "PageBanner__howItWorks__default",
    "HowItWorks__howItWorks__default",
    "Content__howItWorks__swap",
    "TextHowItWorks__howItWorks__r1"
  ]
}

STEPS:
1. FOR EACH folder string in `sections`:
   a. Parse `[Section]`, `[Page]`, `[Variant]` from folder name (split by `__`)
   b. Check if `apps/web/components/sections/[Section].tsx` exists
   c. IF MISSING → Run `.agent/workflows/import-new-section.md` with `locofy-folder=[folder]`
   d. IF EXISTS but VARIANT missing (check types? or just blindly run variant import) → Run `.agent/workflows/import-variant.md` with `locofy-folder=[folder]`
      - Optimization: If variant is "default", skip variant import (it's implied by new section).
   e. RUN `.agent/workflows/import-content-only.md` with `locofy-folder=[folder]` to extract content

2. CREATE/UPDATE content file
   - File: `apps/web/content/pages/[page].ts` (create if missing)
   - Ensure imports: `import type { [Section]SectionProps } ...`
   - export const [page]Content = { ... }

3. BUILD `apps/web/app/[route]/page.tsx`
   - Import sections: `import { [Section] } from "@/components/sections";`
   - Import content: `import { [page]Content } from "@/content/pages/[page]";`
   - Render:
     ```tsx
     export default function Page() {
       return (
         <main>
           <Section {...[page]Content.sectionKey} />
           ...
         </main>
       );
     }
     ```

4. VERIFY build
   - Run `pnpm build --filter=web`
