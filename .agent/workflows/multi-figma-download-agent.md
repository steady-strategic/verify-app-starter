---
description: 
---

IMPORTANT RULES
1. Before starting this workflow, switch to the section-components-setup branch

2. Run this workflow sequentially, for each link provided by the user.
For example:
- First link: run the workflow all the way through to completion
- Second link: run the workflow again all the way to completion
- Repeat the process for all additional links


WORKFLOW INSTRUCTIONS
For each link, the user provides the following data:
[name]
[figma-design-url]

AGENT PROMPT
1. Get the tailwind.css, tailwind.config.js, and asset files from [figma-design-URL]

2. Create a new folder called [name], in the directory /from-figma
- If a folder called [name] already exists in that directory, append the new folder name with a number

3. Download the Tailwind CSS, config files and assets to: /from-figma/[name]