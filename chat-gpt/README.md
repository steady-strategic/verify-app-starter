# Verify App Starter (Web + Mobile)

This repository is a **from-scratch starter monorepo** for a verified-user system that shares
the **same signup module** across **Web (Next.js)** and **Mobile (Expo)**.

## What this repo gives you

- ✅ Single **SignupForm** shared between web + mobile
- ✅ Strong validation with **Zod**
- ✅ Authentication via **Auth.js (NextAuth)**
- ✅ Manual verification workflow (monday.com–ready)
- ✅ Server-side gating of verified users
- ✅ Clean separation of concerns (UI / validation / config / apps)

---

## High-level structure

```
verify-app-starter/
├─ apps/
│  ├─ web/        # Next.js app + API + Auth + Prisma
│  └─ mobile/     # Expo app (scaffolded)
├─ packages/
│  ├─ ui/         # Shared SignupForm + FormSelect (Tamagui)
│  ├─ validation/ # Zod schemas + enums
│  └─ config/     # Dropdown label/value configs
├─ README.md
├─ IMPLEMENTATION_PLAN.md
└─ pnpm-workspace.yaml
```

---

## Key files to know

### Shared (used by both web + mobile)

- **Signup form UI**
  - `packages/ui/src/components/SignupForm.tsx`
- **Cross-platform select**
  - `packages/ui/src/components/FormSelect.tsx`
- **Validation schema**
  - `packages/validation/src/register.schema.ts`
- **Dropdown options**
  - `packages/config/src/dropdowns.ts`

### Web app (Next.js)

- **Register API**
  - `apps/web/app/api/auth/register/route.ts`
- **Auth.js config**
  - `apps/web/lib/auth.ts`
- **Verified gate (DB-based)**
  - `apps/web/app/verified/layout.tsx`
- **Prisma schema**
  - `apps/web/prisma/schema.prisma`

---

## How verification works (conceptually)

1. User submits signup form
2. API:
   - Creates `User` with `status = pending`
   - Creates `VerificationRequest` with payload snapshot
3. Admin reviews user in monday.com
4. Approval updates Postgres → `users.status = verified`
5. Verified users gain access to gated pages

---

## Next steps

Read **IMPLEMENTATION_PLAN.md** for the exact step-by-step instructions to:
- import into Antigravity
- install dependencies
- run the web app
- initialize the database
- extend with monday.com + Make/n8n

This README is orientation.
The implementation plan is execution.
