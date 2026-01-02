# IMPLEMENTATION PLAN
## Build & Import into Antigravity IDE

This document walks you from **zero → running app** using the files in this repo.
Follow in order.

---

## 1) Import the project into Antigravity

1. Download and unzip the project folder.
2. Open **Antigravity IDE**
3. Select **Open Folder**
4. Choose the root folder: `verify-app-starter/`
5. Open an integrated terminal at repo root.

---

## 2) Prerequisites

Ensure you have:

- Node.js **20+**
- pnpm **9+**
- A Postgres database (local or hosted)

---

## 3) Install dependencies

From repo root:

```bash
pnpm install
```

This installs dependencies for:
- apps/web
- apps/mobile
- packages/ui
- packages/validation
- packages/config

---

## 4) Configure environment variables (Web)

Copy the example env file:

```bash
cp apps/web/.env.example apps/web/.env
```

Edit `apps/web/.env` and set:

- `DATABASE_URL` — Postgres connection string
- `NEXTAUTH_SECRET` — random 32+ characters
- `NEXTAUTH_URL` — `http://localhost:3000`

---

## 5) Initialize the database (Prisma)

Prisma schema location:
```
apps/web/prisma/schema.prisma
```

Run:

```bash
pnpm --filter web prisma generate
pnpm --filter web prisma migrate dev --name init
```

This creates:

- `User` table
- `VerificationRequest` table
- Enums for user status & decisions

---

## 6) Run the web app

```bash
pnpm dev
```

Open in browser:

- `/signup` → signup form
- `/pending` → pending verification page
- `/verified` → gated page (requires verified status)

---

## 7) Test the verification flow (local)

1. Submit signup form at `/signup`
2. In Postgres, confirm:
   - `users.status = 'pending'`
   - verification payload stored in JSON
3. Manually update user:
   ```sql
   UPDATE "User" SET status = 'verified' WHERE email = 'test@example.com';
   ```
4. Refresh `/verified` → access granted

---

## 8) Where verification logic lives

- **Signup + validation**
  - `packages/ui/src/components/SignupForm.tsx`
  - `packages/validation/src/register.schema.ts`

- **API write path**
  - `apps/web/app/api/auth/register/route.ts`

- **Authorization gate**
  - `apps/web/app/verified/layout.tsx`

---

## 9) Add monday.com integration (next build step)

1. Create a monday board: **User Verifications**
2. Columns (text unless noted):
   - User ID
   - First Name
   - Last Name
   - Email
   - Business Name
   - License #
   - Type
   - State
   - Decision (Status: Pending / Approved / Rejected)

3. Use Make.com or n8n:
   - Trigger on signup → create board item
   - Trigger on Decision change → call your API

4. Add new API route:
   ```
   apps/web/app/api/webhooks/monday/route.ts
   ```

5. Update Postgres:
   - `users.status`
   - `verification_requests.decision`

---

## 10) Mobile app (later)

Mobile app lives in:
```
apps/mobile/
```

It already imports:
- `SignupForm` from `@acme/ui`

Next steps:
- Configure Tamagui for Expo
- Point signup endpoint to deployed web API
- Reuse exact same validation + UI

---

## Mental model

- **Auth answers “who are you?”**
- **Database answers “are you verified?”**
- **monday answers “should you be verified?”**

Keep this separation, and the system scales cleanly.
