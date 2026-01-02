# Verify App Starter

A monorepo for a verified-user system with Next.js, Supabase Postgres, Auth.js, and Monday.com integration.

## Quick Start

```bash
# Install dependencies
pnpm install

# Copy environment file and configure
cp .env.example apps/web/.env
# Edit apps/web/.env with your Supabase credentials

# Generate Prisma client
pnpm db:generate

# Push schema to database
pnpm db:push

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
verify-app-starter/
├── apps/
│   └── web/                 # Next.js 14 App Router
│       ├── app/
│       │   ├── (auth)/      # Signup, Pending pages
│       │   ├── (verified)/  # Protected dashboard
│       │   └── api/         # Register, Webhooks
│       ├── components/      # SignupForm
│       ├── lib/             # Auth, DB clients
│       └── prisma/          # Database schema
├── packages/
│   ├── validation/          # Zod schemas
│   └── config/              # Dropdown options
└── pnpm-workspace.yaml
```

## Verification Flow

1. User submits signup form → `/api/register`
2. User + VerificationRequest created with `status = PENDING`
3. Make.com creates Monday.com board item
4. Admin reviews & updates Decision column
5. Monday triggers Make.com → `/api/webhooks/monday`
6. User status updated to `VERIFIED` or `REJECTED`
7. Verified users access `/dashboard`

## Environment Variables

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | Supabase pooler connection string |
| `DIRECT_URL` | Supabase direct connection (migrations) |
| `NEXTAUTH_SECRET` | Random 32+ character secret |
| `NEXTAUTH_URL` | `http://localhost:3000` (dev) |
| `MONDAY_WEBHOOK_SECRET` | Optional webhook verification |

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start Next.js dev server |
| `pnpm build` | Production build |
| `pnpm db:generate` | Generate Prisma client |
| `pnpm db:push` | Push schema to database |
| `pnpm db:studio` | Open Prisma Studio |
