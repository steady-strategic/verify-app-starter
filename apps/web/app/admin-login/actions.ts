"use server";

import { signIn } from "../../lib/auth";
import { AuthError } from "next-auth";

export async function adminLogin(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
        await signIn("admin-credentials", {
            email,
            password,
            redirectTo: "/admin",
        });
    } catch (error) {
        // NextAuth throws NEXT_REDIRECT for successful logins
        // We need to re-throw it so the redirect happens
        if (error instanceof Error && error.message === "NEXT_REDIRECT") {
            throw error;
        }

        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "Invalid email or password" };
                default:
                    return { error: "An error occurred during sign in" };
            }
        }
        throw error;
    }
}
