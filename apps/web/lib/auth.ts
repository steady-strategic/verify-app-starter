import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "./db";
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        // Member Authentication (V2)
        Credentials({
            id: "member-credentials",
            name: "Member Login",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null;

                const member = await prisma.member.findUnique({
                    where: { email: credentials.email as string },
                });

                if (!member) return null;

                // Member must have set password and be active
                if (!member.passwordHash || member.status !== "ACTIVE") {
                    return null;
                }

                const isValidPassword = await bcrypt.compare(
                    credentials.password as string,
                    member.passwordHash
                );

                if (!isValidPassword) return null;

                // Update last login timestamp
                await prisma.member.update({
                    where: { id: member.id },
                    data: { lastLoginAt: new Date() },
                });

                return {
                    id: member.id,
                    email: member.email,
                    name: `${member.firstName} ${member.lastName}`,
                    userType: "MEMBER",
                };
            },
        }),

        // Admin Authentication
        Credentials({
            id: "admin-credentials",
            name: "Admin Login",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null;

                const admin = await prisma.adminUser.findUnique({
                    where: { email: credentials.email as string },
                });

                if (!admin) return null;

                const isValidPassword = await bcrypt.compare(
                    credentials.password as string,
                    admin.passwordHash
                );

                if (!isValidPassword) return null;

                return {
                    id: admin.id,
                    email: admin.email,
                    name: `${admin.firstName} ${admin.lastName}`,
                    role: admin.role,
                    userType: "ADMIN",
                };
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.userType = (user as any).userType;

                // Member-specific fields
                if ((user as any).userType === "MEMBER") {
                    // No additional fields needed for members currently
                }

                // Admin-specific fields
                if ((user as any).userType === "ADMIN") {
                    token.role = (user as any).role;
                }
            }
            return token;
        },
        async session({ session, token }) {
            if (session.user) {
                (session.user as any).id = token.id;
                (session.user as any).userType = token.userType;

                // Member-specific fields
                if (token.userType === "MEMBER") {
                    // No additional fields needed for members currently
                }

                // Admin-specific fields
                if (token.userType === "ADMIN") {
                    (session.user as any).role = token.role;
                }
            }
            return session;
        },
    },
    pages: {
        signIn: "/login",
        error: "/login",
    },
    session: {
        strategy: "jwt",
    },
    trustHost: true,
});
