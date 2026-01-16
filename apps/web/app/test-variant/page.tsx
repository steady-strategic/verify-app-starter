"use client";

import { Cards } from "@/components/sections";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function TestVariantPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar scrolled={true} variant="dark" />

            <main className="pt-32 pb-24">
                <Cards
                    variant="Cards2x3"
                    headline={{
                        text: "Testing Cards2x3 Variant Layout",
                        highlight: "Cards2x3",
                    }}
                    cards={[
                        { title: "Card 1", stats: ["Row 1, Col 1", "Detailed stat line"] },
                        { title: "Card 2", stats: ["Row 1, Col 2", "Detailed stat line"] },
                        { title: "Card 3", stats: ["Row 2, Col 1", "Detailed stat line"] },
                        { title: "Card 4", stats: ["Row 2, Col 2", "Detailed stat line"] },
                        { title: "Card 5", stats: ["Row 3, Col 1", "Detailed stat line"] },
                        { title: "Card 6", stats: ["Row 3, Col 2", "Detailed stat line"] },
                    ]}
                    cta={{
                        label: "Test Action",
                        href: "#",
                    }}
                />
            </main>

            <Footer />
        </div>
    );
}
