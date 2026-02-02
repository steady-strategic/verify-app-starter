---
description: Remove all existing design components and assets for clean-slate overhaul
---

PROTECTION LIST (DO NOT DELETE):
- apps/web/components/admin/
- apps/web/components/directory/
- apps/web/components/layout/
- apps/web/components/ui/
- apps/web/app/admin*/
- apps/web/app/directory/

STEPS:
1. DELETE section components (and their folders) in `apps/web/components/sections/`
   - DELETE all component files (e.g. `PageBanner.tsx`, `Hero.tsx`)
   - DELETE all subfolders within `sections/`
   - KEEP `types.ts` and `index.ts` files (but clear their content in next steps)

2. DELETE test-* pages in `apps/web/app/`
   - DELETE any folder starting with `test-` (e.g. `test-download-app/`)

3. DELETE public/assets/images/*
   - DELETE all files in `apps/web/public/assets/images/`
   - KEEP the `images/` folder itself

4. RESET `apps/web/components/sections/types.ts`
   - Replace content with:
     ```typescript
     import React from "react";
     // Base section props that all sections will extend
     export interface BaseSectionProps {
         variant?: string;
         className?: string;
         id?: string;
     }
     ```

5. RESET `apps/web/components/sections/index.ts`
   - Replace content with empty string or comment:
     ```typescript
     // Section components export
     ```

6. STUB affected `page.tsx` files
   - Search for imports from `@/components/sections`
   - Comment out the import line
   - Comment out the usage of the component in the JSX
   - OR replace the page content with a temporary "Under Construction" stub if easier
