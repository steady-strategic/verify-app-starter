---
description: 
---

The following workflow is for Creating a new section component configuration file so the component can be easily be reused for other pages (with different content populated).

IMPORTANT RULES
1. Always work on the section-components-setup branch - switch to this branch before executing the workflow

2. Run this workflow sequentially, for each dataset provided by the user.
For example:
- First dataset: run the workflow all the way through to completion
- Second dataset: run the workflow again all the way to completion
- Repeat the process for all additional datasets


WORKFLOW INSTRUCTIONS
For each dataset, the user provides the following inputs:
[name]
[from-figma-files]
[reference-image]


1. Analyze Tailwind CSS code extracted from a figma component design, in order to inform the new section component's configuration, styling, layout, etc. The figma design code files are located here:[from-figma-files] 

1.2 Don't overwrite/rewrite the existing global tailwind CSS configuration files. Use existing Tailwind CSS styling for the base component configuration. If there is any extra Tailwind CSS data that's needed by the section component internally, then add that new data to Tailwind

2. Reference this screenshot image of the figma component UI:[reference-image]

3. Create a new component configuration file called [name], in the apps/web/components/sections folder, where the reusable section component configuration files are stored.

3.1 Component config files define the content schema for the base component, accept content props, and support a small set of variants. 

3.2 For variants: base component schemas should include a "variant" property where "variant = default". New variants will get added later.

4. Address any other file dependencies, page configurations, routings, etc., as you implment the new section component files.

4.5 Copy asset files referenced by the new component over to: public/assets/images. If the asset files already exist in: /public/assets/images, DON'T overwrite them, and use the existing asset files for the component instead.

5. Final Outcome: The new reusable section component can be called by name and added to any page. New component sections should load with the default configuration

Execute this workflow step by step. Incrementally test, verify, and debug throughout process. Your goal shoild be to build, test and verify this entire workflow in one run, and notify the user when the job is complete and ready for review.