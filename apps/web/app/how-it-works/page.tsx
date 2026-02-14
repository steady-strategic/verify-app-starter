"use client";

import { PageBanner, Cards, Content, KnowMore, HowItWorks, VideoMod } from "@/components/sections";
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
                <VideoMod
                    title="See MORE in action"
                    description="Learn how MORE targets the brain's reward processes to restore responsiveness to natural pleasure and reduce opioid cravings."
                    backgroundImage={{
                        src: "/assets/images/VideoMod/VidMod-Background.png",
                        alt: "Background"
                    }}
                    videoThumbnail={{
                        src: "/assets/images/VideoMod/VideoMod-Vid-thumb.png",
                        alt: "Video Thumbnail"
                    }}
                    videoUrl="https://www.youtube.com/watch?v=O68Eu3faEsg"
                />
                <KnowMore {...howItWorksContent.knowMore} />
            </main>
            <Footer />
        </div>
    );
}
