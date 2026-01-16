---
description: How to add a new layout variant to an existing reusable section component
---

Adding a New Variant to a Reusable Section Component

This workflow outlines the steps to add a new visual layout (variant) to an existing section component (like `Cards.tsx`), ensuring type safety and consistency.

1. ANALYZE REQUIREMENTS:
- Variant Name: Choose a descriptive name (e.g., `Cards2x3`, `HeroCentered`).
- Layout Structure: Determine rows, columns, and dividers.
- Props: Does it need different data? (e.g., 6 cards instead of 4).

2. UPDATE TYPES:
- File: `apps/web/components/sections/types.ts`
- Update `variant` Definition: Add your new variant name to the specific component props interface.
- Update Prop Validation Comments: Document strictly required data for the variant (e.g., `// 6 cards for "NewVariantName"`).

3. UPDATE COMPONENT LOGIC
- File: `apps/web/components/sections/[Component].tsx`
- Add Validation:
   Ensure the component warns if incorrect props are passed for the variant.

4. IMPLEMENT LAYOUT:
- Refactor If needed, extract repeated rendering logic (e.g., `SingleCard`) to a helper function.
- Add Layout Logic: Create a new layout block for your variant.
    
    {variant === "NewVariantName" && (
        <div className="grid-layout-for-variant">
            {/* Implementation */}
        </div>
    )}
    

5. VERIFY IMPLEMENTATIONS
- Create Test Page:
    Create `apps/web/app/test-variant/page.tsx` to render the component with your new variant.
- Build Check:
    Run `pnpm build` in `apps/web` to verify type safety.
- Visual Check:
    Verify the layout matches design requirements on Desktop and Mobile.