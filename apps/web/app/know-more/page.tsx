import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactHero } from "@/components/sections";

export default function KnowMorePage() {
    // Default HubSpot Portal ID found in project
    const portalId = "243662289";
    // Using Clinician Contact Form as placeholder/default. 
    // Ideally this should be replaced with a General Contact Form ID.
    const formId = "54e4bb6a-b0f0-4595-9506-cc483ba0b97a";

    return (
        <div className="min-h-screen bg-white">
            <Navbar variant="light" transparent={false} />

            <main className="pt-24">
                <ContactHero
                    portalId={portalId}
                    formId={formId}
                    variant="knowmore"
                />
            </main>

            <Footer />
        </div>
    );
}
