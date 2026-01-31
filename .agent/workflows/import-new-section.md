---
description: 
---

import-new-section.md

---

description: Create new section component from Locofy export

---

// turbo-all

INPUTS: [section-name], [locofy-folder]

STEPS:
1. Read design-tokens.json (parse name key)
2. Map colors to fixed palette
3. Create components/sections/[section-name].tsx
4. Update types.ts (add interface)
5. Export in index.ts
6. Copy assets to public/assets/images/[section-name]/
7. Verify: pnpm build --filter=web