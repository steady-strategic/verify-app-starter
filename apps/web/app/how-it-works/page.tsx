"use client";

import { PageBanner, Cards, Content, KnowMore, HowItWorks, Video } from "@/components/sections";
import { howItWorksContent } from "@/content/pages/how-it-works";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function HowItWorksPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar variant="light" transparent={false} />
            <main className="pt-24">
                <PageBanner {...howItWorksContent.pageBanner} />
                <HowItWorks />
                <Cards {...howItWorksContent.cards} />
                <Content {...howItWorksContent.content} />
                <Video />
                <KnowMore {...howItWorksContent.knowMore} />
            </main>
            <Footer />
        </div>
    );
}
