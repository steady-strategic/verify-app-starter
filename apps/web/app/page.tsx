"use client";

import { useState, useEffect } from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/landing/Hero";
import HomeBrands from "../components/landing/HomeBrands";
import HomeResearch from "../components/landing/HomeResearch";
import HomeAbout from "../components/landing/HomeAbout";
import HomeHowItWorks from "../components/landing/HomeHowItWorks";
import HomeFeatures from "../components/landing/HomeFeatures";
import HomeDownloadTheApp from "../components/landing/HomeDownloadTheApp";
import HomeDownloadTheAppDark from "../components/landing/HomeDownloadTheAppDark";
import HomeTestimonials from "../components/landing/HomeTestimonials";

export default function HomePage() {
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
            <Navbar scrolled={scrolled} variant="dark" />

            <main>
                <Hero />
                <HomeBrands />
                <HomeResearch />
                <HomeAbout />
                <HomeHowItWorks />
                <HomeFeatures />
                <HomeDownloadTheApp />
                <HomeDownloadTheAppDark />
                <HomeTestimonials />
            </main>

            <Footer />
        </div>
    );
}
