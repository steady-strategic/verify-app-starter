// If you later want middleware gating based on JWT claims, you can export next-auth middleware.
// For now, DB-check gating is handled in app/verified/layout.tsx.
export { default } from "next-auth/middleware";
