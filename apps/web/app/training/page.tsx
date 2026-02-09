"use client";

import { PageBanner, ContentTraining, Cards3x2, KnowMoreTall } from "@/components/sections";
import { cliniciansCertifiedContent } from "@/content/pages/training";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function TrainingPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar variant="light" transparent={false} />
            <main className="pt-24">
                <PageBanner {...cliniciansCertifiedContent.pageBanner} />
                <ContentTraining {...cliniciansCertifiedContent.contentTraining} />
                <Cards3x2 {...cliniciansCertifiedContent.cards3x2} />
                <KnowMoreTall {...cliniciansCertifiedContent.knowMoreTall} />
            </main>
            <Footer />
        </div>
    );
}
