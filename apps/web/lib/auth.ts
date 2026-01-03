import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "./db";
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        // Regular User Authentication
        Credentials({
            id: "user-credentials",
            name: "User Login",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null;

                const user = await prisma.user.findUnique({
                    where: { email: credentials.email as string },
                });

                if (!user) return null;

                const isValidPassword = await bcrypt.compare(
                    credentials.password as string,
                    user.passwordHash
                );

                if (!isValidPassword) return null;

                return {
                    id: user.id,
                    email: user.email,
                    name: `${user.firstName} ${user.lastName}`,
                    status: user.status,
                    userType: "USER",
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

                // User-specific fields
                if ((user as any).userType === "USER") {
                    token.status = (user as any).status;
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

                // User-specific fields
                if (token.userType === "USER") {
                    (session.user as any).status = token.status;
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
        signIn: "/signin",
        error: "/signin",
    },
    session: {
        strategy: "jwt",
    },
    trustHost: true,
});
