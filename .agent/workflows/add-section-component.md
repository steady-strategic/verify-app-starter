---
description: 
---

The following workflow is for Creating a new section component configuration file so the component can be easily be reused for other pages (with different content populated).


1. Analyze Tailwind CSS code extracted from a figma component design, in order to inform the new section component's configuration, styling, layout, etc. The figma design code files are located here:[@from-figma-files] 

1.2 Don't overwrite/rewrite the existing global tailwind CSS configuration files. Use existing Tailwind CSS styling for the base component configuration. If there is any extra Tailwind CSS data that's needed by the section component internally, then add that new data to Tailwind

2. Reference this screenshot image of the figma component UI:[@reference-image.png]

3. Create a new component configuration file called "[new-component-name.tsx]", in the apps/web/components/sections folder, where the reusable section component configuration files are stored.

3.1 Component config files define the content schema for the base component, accept content props, and support a small set of variants. 

3.2 For variants: base component schemas should include a "variant" property where "variant = default". New variants will get added later.

4. Address any other file dependencies, page configurations, routings, etc., as you implment the new section component files.

5. Final Outcome: Create new reusable section component can be called by name and added to any page. New component sections should load with the default configuration

Execute this workflow step by step. Incrementally test, verify, and debug throughout process. Your goal shoild be to build, test and verify this entire workflow in one run, and notify the user when the job is complete and ready to be viewed.

IMPORTANT RULES:
1. Always work on the Section-components-setup branch - switch to this branch before executing the workflow
2. before starting this workflow, always ask the user for the the following file locations:
- from-figma-files
- reference-image.png
- new-component-name.tsx