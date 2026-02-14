import type { Metadata } from "next";
import Script from "next/script";
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
                <Script id="hs-script-loader" strategy="afterInteractive" src="//js-na2.hs-scripts.com/243662289.js" />
                <Script src="https://js-na2.hsforms.net/forms/embed/243662289.js" strategy="afterInteractive" />
            </body>
        </html>
    );
}
