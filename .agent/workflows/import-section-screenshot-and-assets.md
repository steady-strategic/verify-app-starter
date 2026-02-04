---
description: Create new section component from a screenshot design and optional assets
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
   - Search `[screenshot-folder]/screenshot` for image files (.png, .jpg, .jpeg, .webp).
   - Use `view_file` on the found screenshot to analyze the visual design.

3. HANDLE assets (Optional)
   - Check if `[screenshot-folder]/assets` exists and contains files.
   - If assets exist:
     - Create destination directory `apps/web/public/assets/images/[SectionName]`.
     - Copy all files from `[screenshot-folder]/assets` to this new directory.
     - Note the paths: `/assets/images/[SectionName]/[filename]` for use in the component.

4. ANALYZE visual design
   - Identify:
     - Layout structure (flex, grid, columns, responsiveness).
     - Typography hierarchy (H1-H6, body text, sizes).
     - Colors (map strictly to project palette: `primary-1`, `gray-900`, `gray-700`, `white`, etc.).
     - Interactive elements (buttons, links, inputs).
     - Spacing and margins (map to Tailwind spacing scale).
   - Correlate any copied assets with images seen in the screenshot.

5. UPDATE `apps/web/components/sections/types.ts`
   - Append interface `[SectionName]SectionProps` extending `BaseSectionProps`.
   - Define content props based on the identified static vs dynamic content (e.g., `title`, `description`, `items[]`, `cta`, `image`, `backgroundImage`).

6. CREATE `apps/web/components/sections/[SectionName].tsx`
   - Implement the component using React and Tailwind CSS.
   - Enforce project styling rules (e.g., `font-sans`, `section` containers with standard padding).
   - Use `next/image` for images.
   - Use the copied asset paths (`/assets/images/[SectionName]/...`) where appropriate.
   - Use `BaseSectionProps` and the newly created interface.

7. EXPORT component
   - Update `apps/web/components/sections/index.ts` adding `export * from "./[SectionName]";`.

8. VERIFY
   - Run type check: `npx tsc --noEmit` locally to ensure no compilation errors.
