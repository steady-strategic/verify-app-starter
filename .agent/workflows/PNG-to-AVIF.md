---
description: convert PNG files to AVIF format for high-efficiency compression
---

# PNG-to-AVIF Workflow

This workflow converts provided PNG files or all PNGs in a specific folder to AVIF format using `avifenc`, while preserving the original PNG files.

## Inputs
- `TARGET`: A path to a single `.png` file or a directory path.

## Workflow Steps

1. **Verify libavif Installation**
   - Ensure `avifenc` is installed (`brew install libavif`).

2. **Handle User Input**
   - **If TARGET is a file:**
     - Verify it is a `.png`.
     - Run: `avifenc -a cq-level=15 --speed 6 "TARGET" "TARGET_DIR/filename.avif"`
   - **If TARGET is a directory:**
     - Find all `.png` files within that directory (recursive).
     - For each file, check if a `.avif` version already exists.
     - If not, run: `avifenc -a cq-level=15 --speed 6 "IMAGE.png" "IMAGE.avif"`

3. **Report Status**
   - Provide summary of converted files and size savings.

## Usage Example
`/PNG-to-AVIF TARGET="path/to/my-images"`
