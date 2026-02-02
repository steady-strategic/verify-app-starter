---
description: Batch import multiple Figma-Locofy sections in one run
---
// turbo-all

INPUT: JSON array
Examples:
[
  { "folder": "PageBanner__home__default" },
  { "folder": "PageBanner__research__blue" },
  { "folder": "Cards__home__threeColumns" }
]

STEPS:
1. VALIDATE folders exist in `Locofy-exports/`
   - If a folder is missing, SKIP it and log error

2. PARSE folder names to extract: `[Section]`, `[Page]`, `[Variant]`
   - Split by `__`
   - Section = part[0] (PascalCase)
   - Page = part[1] (camelCase)
   - Variant = part[2] (camelCase)

3. DETERMINE task type:
   - Check if `apps/web/components/sections/[Section].tsx` exists
   - IF component DOES NOT exist → TASK: **NEW SECTION**
   - IF component EXISTS AND `[Variant]` != "default" → TASK: **VARIANT**
   - IF component EXISTS AND `[Variant]` == "default" → TASK: **CONTENT ONLY** (or update default if needed, but treat as content extraction primarily)

4. EXECUTE sub-workflows sequentially based on determined type
   - **NEW SECTION** → Run workflow: `.agent/workflows/import-new-section.md`
     - Inputs: `locofy-folder=[folder]`
   - **VARIANT** → Run workflow: `.agent/workflows/import-variant.md`
     - Inputs: `locofy-folder=[folder]`
   - **CONTENT ONLY** → Run workflow: `.agent/workflows/import-content-only.md`
     - Inputs: `locofy-folder=[folder]`

5. REPORT summary
   - List successful imports
   - List failed imports
