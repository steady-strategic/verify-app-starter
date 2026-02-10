#!/bin/bash

# Configuration
# Default paths (can be overridden)
SOURCE_DIR="./apps/web/public/assets"
TARGET_FORMAT="avif"
QUALITY=75

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check for required tools
if ! command -v avifenc &> /dev/null; then
    echo "Error: avifenc is not installed. Please run 'brew install libavif'"
    exit 1
fi

echo -e "${BLUE}=== Image Optimization Tool ===${NC}"
echo -e "${BLUE}Source Directory:${NC} $SOURCE_DIR"
echo -e "${BLUE}Target Format:${NC} $TARGET_FORMAT"
echo ""

# Function to convert a single file
convert_file() {
    local file="$1"
    local dir=$(dirname "$file")
    local filename=$(basename "$file")
    local name="${filename%.*}"
    local target="$dir/$name.$TARGET_FORMAT"
    
    # Skip if target already exists
    if [ -f "$target" ]; then
        echo -e "${YELLOW}Skipping (exists):${NC} $filename"
        return
    fi
    
    echo -e "Converting: $filename -> $name.$TARGET_FORMAT"
    
    avifenc -a cq-level=$((63 * (100 - QUALITY) / 100)) --speed 6 "$file" "$target"
    
    if [ $? -eq 0 ]; then
        local original_size=$(du -h "$file" | cut -f1)
        local new_size=$(du -h "$target" | cut -f1)
        echo -e "${GREEN}✓ Success:${NC} $original_size -> $new_size"
    else
        echo -e "${YELLOW}✗ Failed:${NC} $filename"
    fi
}

# Parse arguments
if [ "$1" == "--sample" ]; then
    echo -e "${YELLOW}Running in SAMPLE mode (first 3 files only)${NC}"
    find "$SOURCE_DIR" -name "*.png" | head -n 3 | while read file; do
        convert_file "$file"
    done
elif [ "$1" == "--batch" ]; then
    echo -e "${YELLOW}Running in BATCH mode (all files)${NC}"
    find "$SOURCE_DIR" -name "*.png" | while read file; do
        convert_file "$file"
    done
else
    echo "Usage: ./optimize-images.sh [--sample | --batch]"
    echo "  --sample: Converts 3 random files for testing"
    echo "  --batch:  Converts all .png files to .avif"
fi
