---
description: convert PNG files to AVIF format for high-efficiency compression
---

# Convert PNG to AVIF

This workflow converts provided PNG files or all PNGs in a folder to AVIF format for high-efficiency compression.

## Inputs
- `TARGET`: File path (to a single .png) or Directory path (to a folder containing .pngs)

## Workflow Steps

1.  **Validate Input**
    - Check if `TARGET` exists.
    - Determine if it is a file or directory.

2.  **Execute Conversion**
    - **If File:**
        - Check if file ends in `.png`.
        - Create output filename: `filename.avif`.
        - Run: `avifenc -a cq-level=$((63 * (100 - 75) / 100)) --speed 6 "INPUT_FILE" "OUTPUT_FILE"`
        - Log success/failure and size comparison.

    - **If Directory:**
        - Find all `.png` files in the directory (recursive by default).
        - For each file:
            - Create output filename: `filename.avif`.
            - Check if `filename.avif` already exists (skip if so).
            - Run: `avifenc -a cq-level=$((63 * (100 - 75) / 100)) --speed 6 "INPUT_FILE" "OUTPUT_FILE"`
            - Log success/failure.

3.  **Completion**
    - Report total files converted.

## Usage Example
`@workflow /convert-png-to-avif --target="apps/web/public/assets"`