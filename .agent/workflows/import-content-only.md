---
description: Extract content without code changes
---
// turbo-all

INPUTS: [locofy-folder]

STEPS:
1. PARSE folder name for `[SectionName]`, `[PageName]`
   - Split `[locofy-folder]` by `__`

2. READ from `Locofy-exports/[locofy-folder]/`
   - Extract text content (Headings, Paragraphs, Lists)
   - Extract image alts/src (filename)

3. CREATE/UPDATE `apps/web/content/pages/[PageName].ts`
   - If user passed `home` -> `home.ts`
   - Import types
   - Export content object:
     ```typescript
     export const [PageName]Content = {
       [SectionName.camelCase]: {
         variant: "[VariantName]",
         title: "...",
         // ...
       } satisfies [SectionName]SectionProps,
     };
     ```

4. TYPE CHECK
   - Ensure props match `types.ts` definition
