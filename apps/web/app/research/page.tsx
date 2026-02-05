
import React from 'react';
import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";
import {
    ResearchHero,
    Brands,
    ResearchContent,
    ResearchStats,
    ResearchTextList,
    ResearchSidebar,
    ResearchJumbotron
} from "../../components/sections";

export default function ResearchPage() {
    return (
        <main className="w-full min-h-screen bg-white">
            <div className="absolute top-0 w-full z-10">
                <Navbar variant="dark" transparent />
            </div>

            <ResearchHero />
            <Brands variant="research" />

            {/* Quote Section */}
            <div className="w-full bg-white flex justify-center py-12 px-4">
                <div className="max-w-4xl text-center">
                    <p className="font-bold text-[28px] leading-[1.25] text-gray-900 tracking-[-0.56px]">
                        Backed by the <span className="text-primary-1">strongest evidence</span> of any psychological treatment for co-occurring addiction, chronic pain, and emotional distress.
                    </p>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="max-w-[1440px] mx-auto px-4 lg:px-20 py-16">
                <div className="flex flex-col lg:flex-row gap-8 relative">

                    {/* Left Column: Research Findings & Stats */}
                    <div className="flex-1 max-w-[800px] flex flex-col gap-24">
                        <ResearchContent />

                        {/* Stats Section embedded in main column flow */}
                        <ResearchStats />

                        {/* Additional Text List Findings */}
                        <ResearchTextList />
                    </div>

                    {/* Right Column: Sidebar */}
                    <div className="lg:w-[340px] shrink-0 relative lg:ml-auto">
                        <ResearchSidebar />
                    </div>
                </div>
            </div>

            <ResearchJumbotron />
            <Footer />
        </main>
    );
}
