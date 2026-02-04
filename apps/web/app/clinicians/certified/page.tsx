"use client";

import { PageBanner } from "@/components/sections";
import { cliniciansCertifiedContent } from "@/content/pages/clinicians-certified";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function CertifiedPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar variant="light" transparent={false} />
            <main className="pt-24">
                <PageBanner {...cliniciansCertifiedContent.pageBanner} />
            </main>
            <Footer />
        </div>
    );
}
