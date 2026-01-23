"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactHero } from "@/components/sections/ContactHero";

export default function ContactPage() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="min-h-screen">
            <Navbar scrolled={scrolled} />

            <main className="pt-32">
                <ContactHero
                    id="contact-hero"
                    title="Contact Us"
                    description="We'd love to hear from you. Whether you're a clinician interested in MORE certification, a patient looking for support, or an organization exploring training opportunities, our team is here to help."
                    backgroundImage={{
                        src: "/assets/images/contact-hero-bg.png",
                        alt: "Contact Hero Background"
                    }}
                />
            </main>

            <Footer />
        </div>
    );
}
