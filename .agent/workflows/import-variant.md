---
description: Add variant to existing section
---
// turbo-all

INPUTS: [locofy-folder]

STEPS:
1. PARSE folder name for `[SectionName]`, `[VariantName]`
   - Split `[locofy-folder]` by `__`

2. READ from `Locofy-exports/[locofy-folder]/`
   - Identify layout/style differences

3. UPDATE `apps/web/components/sections/types.ts`
   - Find `[SectionName]SectionProps`
   - Update variant union: `variant?: "default" | ... | "[VariantName]"`

4. UPDATE `apps/web/components/sections/[SectionName].tsx`
   - Add conditional rendering:
     ```tsx
     if (variant === "[VariantName]") {
       return ( ... new layout ... );
     }
     ```
   - Extract shared logic if possible

5. COPY variant assets
   - To: `apps/web/public/assets/images/[SectionName]/`

6. VERIFY build
