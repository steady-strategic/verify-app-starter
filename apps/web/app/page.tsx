"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero, Brands, ResearchHome, AboutHome, ContentHome, Testimonials } from "@/components/sections";

export default function Page() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Navbar
                variant={scrolled ? "light" : "dark"}
                transparent={true}
                scrolled={scrolled}
            />
            <main>
                <Hero />
                <Brands />
                <ResearchHome />
                <AboutHome />
                <ContentHome />
                <Testimonials />
            </main>
            <Footer />
        </div>
    );
}
