import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { ThemeInit } from "../.flowbite-react/init";
import "./globals.css";

export const metadata: Metadata = {
    title: "MORE Mindfulness",
    description: "Mindfulness-Oriented Recovery Enhancement",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <ThemeInit />
                <SessionProvider>{children}</SessionProvider>
            </body>
        </html>
    );
}
