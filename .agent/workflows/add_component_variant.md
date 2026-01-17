---
description: Adding a New Variant to an Existing Reusable Section Component
---

This workflow outlines the steps to add a new visual layout (variant) to an existing section component, ensuring type safety and consistency.

IMPORTANT RULES
Always work on the section-components-setup branch - switch to this branch before executing the workflow

WORKFLOW INSTRUCTIONS
The user will provide the following dataset:
[new-variant-name]
[component-name]
[file-download-folder]
[screenshot-reference]

1. ANALYZE REQUIREMENTS from: [file-download-folder]
- Variant Name: [new-variant-name]
- Layout Structure: Determine rows, columns, and dividers
- Props: Does it need different data? (e.g., 6 cards instead of 4)
- Reference: Reference the [screenshot-reference] image to know what the new variant should look like

Assets: Does the variant use different assets?
- If so, copy those different asset files to: /public/assets/images
- If the asset files already exist in: /public/assets/images, DON'T overwrite them, and use existing asset files for the variant instead.
DON'T overwrite them

2. UPDATE TYPES
- File: `apps/web/components/sections/types.ts`
- Update `variant` Definition: Add your new variant name to the specific component props interface
- Update Prop Validation Comments: Document strictly required data for the variant 

3. UPDATE COMPONENT LOGIC
- File: `apps/web/components/sections/[component-name].tsx`
- Add Validation: Ensure the component warns if incorrect props are passed for the variant

4. IMPLEMENT LAYOUT
- Refactor: If needed, extract repeated rendering logic (e.g., `SingleCard`) to a helper function
- Add Layout Logic: Create a new layout block for your variant, for example:

    {variant === "NewVariantName" && (
        <div className="grid-layout-for-variant">
            {/* Implementation */}
        </div>
    )}
    

5. VERIFY IMPLEMENTATION
- Create Test Page: `apps/web/app/test-variant/page.tsx` to render the component with your new variant
- Build Check: Run `pnpm build` in `apps/web` to verify type safety
- Visual Check: Verify the layout matches design requirements on Desktop and Mobile