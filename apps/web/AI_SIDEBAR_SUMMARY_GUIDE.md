# AI Sidebar Summary System - Implementation Complete

## ✅ What Was Implemented

### 1. Database Schema
- Added `sidebarTitle` (max 28 chars) and `sidebarExcerpt` (max 75 chars) fields to the `Story` model
- Migrated existing summaries from JSON to database
- All 5 existing posts now have AI-generated summaries stored in the database

### 2. AI Generation API
**Endpoint:** `/api/generate-sidebar-summary`
- Uses OpenAI GPT-4o-mini for cost-effective generation
- Enforces all rules:
  - Title ≤ 28 characters
  - Excerpt ≤ 75 characters
  - Plain, accessible language (no overly technical terms)
  - Unique titles and excerpts (checks existing posts)
  - Professional, patient/clinician-friendly tone

### 3. ResearchSidebar Component
- Now fetches `sidebarTitle` and `sidebarExcerpt` from database
- Falls back to truncation if summaries don't exist
- Displays 4 random blog posts on `/research` page

### 4. Utility Functions
**File:** `apps/web/lib/sidebar-summary.ts`
- `generateSidebarSummary(slug)` - Manual generation
- `autoGenerateSummaryOnPublish(slug, wasPublished, isNowPublished)` - Auto-generation hook

---

## 🚀 How to Use

### Testing with a New Blog Post

1. **Add OpenAI API Key** (if not already set):
   ```bash
   # In apps/web/.env or .env.local
   OPENAI_API_KEY=sk-...
   ```

2. **Publish a new blog post** in the admin panel

3. **Manually trigger summary generation** (for now):
   ```typescript
   // In your admin publish handler, add:
   import { generateSidebarSummary } from '@/lib/sidebar-summary';
   
   // After publishing the post:
   const result = await generateSidebarSummary(post.slug);
   if (result.success) {
     console.log('Summary generated:', result.summary);
   }
   ```

4. **Check the `/research` page** to see the new post appear in the sidebar with AI-generated summaries

---

## 📋 Next Steps (Optional Enhancements)

### Option A: Add Manual Button in Admin
Add a "Generate Summary" button in the blog post edit page:
```typescript
<button onClick={async () => {
  const result = await generateSidebarSummary(post.slug);
  if (result.success) {
    alert('Summary generated!');
    // Refresh the page or update state
  }
}}>
  Generate Sidebar Summary
</button>
```

### Option B: Automatic Generation on Publish
Integrate `autoGenerateSummaryOnPublish` into your publish workflow:
```typescript
// In your admin publish handler:
import { autoGenerateSummaryOnPublish } from '@/lib/sidebar-summary';

// When updating a post:
const wasPublished = existingPost.published;
const isNowPublished = updatedData.published;

await prisma.story.update({ ... });

// Auto-generate summary if being published for first time
await autoGenerateSummaryOnPublish(post.slug, wasPublished, isNowPublished);
```

---

## 🎯 Current Summary Rules

1. **Title:** ≤ 28 characters, plain language, captures core theme
2. **Excerpt:** ≤ 75 characters, captures essence/value proposition
3. **Uniqueness:** No duplicate titles or excerpts across posts
4. **Tone:** Professional, accessible, patient/clinician-friendly

---

## 📁 Files Modified/Created

### Database
- `apps/web/prisma/schema.prisma` - Added sidebar fields
- `apps/web/scripts/migrate-summaries.js` - Migration script (one-time use)

### API
- `apps/web/app/api/generate-sidebar-summary/route.ts` - AI generation endpoint

### Components
- `apps/web/components/sections/ResearchSidebar.tsx` - Updated to use database
- `apps/web/app/research/page.tsx` - Fetches sidebar fields

### Utilities
- `apps/web/lib/sidebar-summary.ts` - Helper functions

### Data (Can be deleted)
- `apps/web/data/sidebar-summaries.json` - No longer needed (migrated to DB)

---

## 💰 Cost Estimate

**OpenAI GPT-4o-mini pricing:**
- ~$0.15 per 1M input tokens
- ~$0.60 per 1M output tokens

**Per blog post:**
- Input: ~500 tokens (prompt + existing summaries)
- Output: ~50 tokens (title + excerpt)
- **Cost per post: ~$0.0001 (less than 1 cent)**

**For 100 posts:** ~$0.01 (1 cent)

---

## ✅ Testing Checklist

- [x] Database schema updated
- [x] Existing posts migrated
- [x] ResearchSidebar displays summaries
- [x] Build succeeds
- [ ] Add OPENAI_API_KEY to environment
- [ ] Test API route with new post
- [ ] Integrate auto-generation into admin publish workflow

---

## 🔧 Troubleshooting

**If summaries don't appear:**
1. Check database: `npx prisma studio` → View Story table → Check sidebarTitle/sidebarExcerpt fields
2. Check API: Test `/api/generate-sidebar-summary` with a POST request
3. Check console: Look for errors in browser/server logs

**If API fails:**
1. Verify OPENAI_API_KEY is set
2. Check API key has credits
3. Review error logs in terminal

---

Ready to test! Publish a new blog post and let me know if you'd like help integrating the auto-generation workflow.
