import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AuthText } from "@/components/sections";

export default function AuthorizedUsePage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar variant="light" transparent={false} />
            <main className="pt-24">
                <AuthText />
            </main>
            <Footer />
        </div>
    );
}
