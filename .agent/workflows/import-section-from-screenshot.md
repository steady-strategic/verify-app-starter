---
description: Create new section component from a screenshot design
---
// turbo-all

INPUTS: [screenshot-folder]

STEPS:
1. PARSE folder name for `[SectionName]`, `[PageName]`, and `[VariantName]`
   - Split `[screenshot-folder]` by `__`.
   - `[SectionName]` = part[0] (PascalCase)
   - `[PageName]` = part[1] (camelCase, optional usage)
   - `[VariantName]` = part[2] (camelCase, defaults to "default")

2. LOCATE screenshot
   - Search `[screenshot-folder]` for image files (.png, .jpg, .jpeg, .webp).
   - Use `view_file` on the screenshot to analyze the visual design.

3. ANALYZE visual design
   - Identify:
     - Layout structure (flex, grid, columns, responsiveness).
     - Typography hierarchy (H1-H6, body text, sizes).
     - Colors (map strictly to project palette: `primary-1`, `gray-900`, `gray-700`, `white`, etc.).
     - Interactive elements (buttons, links, inputs).
     - Spacing and margins (map to Tailwind spacing scale).

4. UPDATE `apps/web/components/sections/types.ts`
   - Append interface `[SectionName]SectionProps` extending `BaseSectionProps`.
   - Define content props based on the identified static vs dynamic content (e.g., `title`, `description`, `items[]`, `cta`).

5. CREATE `apps/web/components/sections/[SectionName].tsx`
   - Implement the component using React and Tailwind CSS.
   - Enforce project styling rules (e.g., `font-sans`, `section` containers with standard padding).
   - Use `next/image` for any distinct images found.
   - Use `BaseSectionProps` and the newly created interface.

6. EXPORT component
   - Update `apps/web/components/sections/index.ts` adding `export * from "./[SectionName]";`.

7. VERIFY
   - Run type check: `npx tsc --noEmit` locally to ensure no compilation errors.
