# Contact Form Integration

This feature allows patients to contact clinicians through the directory page. Submissions are stored in the database and automatically synced to HubSpot.

## Features

- ✅ Contact form on directory page
- ✅ Automatic capture of clinician email
- ✅ Database storage of all submissions
- ✅ Automatic sync to HubSpot Contacts
- ✅ Retry mechanism for failed syncs
- ✅ Admin page for manual sync

## Setup

### 1. HubSpot Configuration

1. **Create a Private App in HubSpot:**
   - Go to Settings → Integrations → Private Apps
   - Click "Create a private app"
   - Name it "Contact Form Integration"
   - Under Scopes, enable: `crm.objects.contacts.write`
   - Copy the API key

2. **Create Custom Property:**
   - Go to Settings → Properties → Contact Properties
   - Click "Create property"
   - Name: `clinician_email`
   - Type: Single-line text
   - Description: "Email of the clinician being contacted"

### 2. Environment Variables

Add to `.env.local`:

```bash
HUBSPOT_API_KEY=your-api-key-here
```

### 3. Database

The `ContactSubmission` table is already created via Prisma migration.

## Usage

### For Users

1. Navigate to `/directory`
2. Click "Contact" button on any clinician card
3. Fill out the contact form
4. Submit

The form will:
- Save to database immediately
- Attempt to sync to HubSpot automatically
- Show success message
- Close after 2 seconds

### For Admins

**Manual Sync:**
- Visit `/admin/hubspot-sync`
- Click "Sync to HubSpot" to retry any failed submissions

**View Submissions:**
```sql
SELECT * FROM "ContactSubmission" 
ORDER BY "createdAt" DESC;
```

**Check Sync Status:**
```sql
SELECT 
  "syncedToHubspot",
  COUNT(*) as count
FROM "ContactSubmission"
GROUP BY "syncedToHubspot";
```

## How It Works

### Flow

```
User submits form
    ↓
Save to database (ContactSubmission table)
    ↓
Trigger background HubSpot sync
    ↓
Create/update contact in HubSpot
    ↓
Update syncedToHubspot = true
```

### API Routes

**`/api/contact-clinician` (POST)**
- Receives form submission
- Validates data
- Saves to database
- Triggers HubSpot sync
- Returns success/error

**`/api/sync-hubspot` (POST)**
- Finds all unsynced submissions
- Syncs each to HubSpot Contacts API
- Updates sync status
- Returns results

### Database Schema

```prisma
model ContactSubmission {
  id                 String   @id @default(cuid())
  clinicianEmail     String
  firstName          String
  lastName           String
  email              String
  phone              String?
  message            String   @db.Text
  hubspotContactId   String?
  syncedToHubspot    Boolean  @default(false)
  createdAt          DateTime @default(now())
}
```

## Troubleshooting

### Submissions not syncing to HubSpot

1. **Check API key:**
   ```bash
   echo $HUBSPOT_API_KEY
   ```

2. **Check HubSpot permissions:**
   - Ensure private app has `crm.objects.contacts.write` scope

3. **Check custom property:**
   - Verify `clinician_email` property exists in HubSpot

4. **Manual retry:**
   - Visit `/admin/hubspot-sync`
   - Click "Sync to HubSpot"
   - Check error messages

5. **Check logs:**
   ```bash
   # In development
   npm run dev
   # Watch for "Background HubSpot sync failed" errors
   ```

### Database issues

**Reset sync status (to retry all):**
```sql
UPDATE "ContactSubmission" 
SET "syncedToHubspot" = false, "hubspotContactId" = NULL;
```

**Delete test submissions:**
```sql
DELETE FROM "ContactSubmission" 
WHERE "email" LIKE '%test%';
```

## Testing

### Test Form Submission

1. Go to `http://localhost:3000/directory`
2. Click "Contact" on any clinician
3. Fill out form with test data:
   - First Name: Test
   - Last Name: User
   - Email: test@example.com
   - Phone: 555-1234
   - Message: This is a test message

4. Submit and verify:
   - Success message appears
   - Modal closes after 2 seconds

### Verify Database

```sql
SELECT * FROM "ContactSubmission" 
WHERE "email" = 'test@example.com'
ORDER BY "createdAt" DESC
LIMIT 1;
```

### Verify HubSpot

1. Go to HubSpot → Contacts
2. Search for "test@example.com"
3. Check contact properties:
   - First name: Test
   - Last name: User
   - Email: test@example.com
   - Phone: 555-1234
   - Message: This is a test message
   - Clinician Email: (should show clinician's email)

## Future Enhancements

- [ ] Email notifications to clinicians
- [ ] Admin dashboard for viewing submissions
- [ ] Automatic retry with exponential backoff
- [ ] Webhook from HubSpot for two-way sync
- [ ] Analytics on contact form usage
