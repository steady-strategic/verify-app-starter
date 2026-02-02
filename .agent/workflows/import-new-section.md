---
description: Create new section component from Locofy export
---
// turbo-all

INPUTS: [locofy-folder]

STEPS:
1. PARSE folder name for `[SectionName]`
   - Split `[locofy-folder]` by `__`, take first part.

2. READ from `Locofy-exports/[locofy-folder]/`
   - Check `src/components/[SectionName].tsx` or similar (Locofy naming varies, find the main component file)
   - Check `tailwind.config.js` or `app/global.css` (though we use fixed palette, we might need to map classes)

3. CREATE `apps/web/components/sections/[SectionName].tsx`
   - Use Flowbite React primitives (Button, Card, Badge) where applicable
   - Use Tailwind classes from our FIXED palette (primary-1, gray-900, etc.)
   - If Locofy uses arbitrary values (`w-[123px]`), keep them if necessary, or map to closest spacing.

4. UPDATE `apps/web/components/sections/types.ts`
   - Append interface `[SectionName]SectionProps` extending `BaseSectionProps`
   - Define content props based on what's in the component (text, images, lists)
   - Add `variant?: "default" | ...`

5. UPDATE `apps/web/components/sections/index.ts`
   - Add `export * from "./[SectionName]";`

6. COPY assets
   - From: `Locofy-exports/[locofy-folder]/public/` (or wherever images are)
   - To: `apps/web/public/assets/images/[SectionName]/`
   - Update component code to reference new paths: `/assets/images/[SectionName]/filename.png`

7. VERIFY
   - Run `pnpm build --filter=web` (type check)