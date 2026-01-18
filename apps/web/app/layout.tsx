import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import "./globals.css";

export const metadata: Metadata = {
    title: "MORE Mindfulness",
    description: "Mindfulness-Oriented Recovery Enhancement",
};

import { ThemeInit } from "../.flowbite-react/init";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <ThemeInit />
            </head>
            <body>
                <SessionProvider>{children}</SessionProvider>
            </body>
        </html>
    );
}
