---
description: How to add a new layout variant to an existing reusable section component
---

# Adding a New Variant to a Reusable Section Component

This workflow outlines the steps to add a new visual layout (variant) to an existing section component (like `Cards.tsx`), ensuring type safety and consistency.

## 1. Analyze Requirements
- **Variant Name**: Choose a descriptive name (e.g., `Cards2x3`, `HeroCentered`).
- **Layout Structure**: Determine rows, columns, and dividers.
- **Props**: Does it need different data? (e.g., 6 cards instead of 4).

## 2. Update Types
**File:** `apps/web/components/sections/types.ts`

1.  **Update `variant` Definition**:
    Add your new variant name to the specific component props interface.
    ```typescript
    export interface CardsSectionProps extends BaseSectionProps {
        variant?: "default" | "NewVariantName"; 
        // ...
    }
    ```
2.  **Update Prop Validation Comments**:
    Document strictly required data for the variant (e.g., `// 6 cards for "NewVariantName"`).

## 3. Update Component Logic
**File:** `apps/web/components/sections/[Component].tsx`

1.  **Add Validation**:
    Ensure the component warns if incorrect props are passed for the variant.
    ```typescript
    if (variant === "NewVariantName" && cards.length !== 6) {
        console.warn(`[Component] (${variant}) expects 6 cards, received ${cards.length}`);
    }
    ```

2.  **Implement Layout**:
    - **Refactor**: If needed, extract repeated rendering logic (e.g., `SingleCard`) to a helper function.
    - **Add Layout Logic**: Create a new layout block for your variant.
    ```typescript
    {variant === "NewVariantName" && (
        <div className="grid-layout-for-variant">
            {/* Implementation */}
        </div>
    )}
    ```

## 4. Verify Implementation
1.  **Create Test Page**:
    Create `apps/web/app/test-variant/page.tsx` to render the component with your new variant.
2.  **Build Check**:
    Run `pnpm build` in `apps/web` to verify type safety.
3.  **Visual Check**:
    Verify the layout matches design requirements on Desktop and Mobile.
