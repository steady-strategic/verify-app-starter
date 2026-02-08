"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";

export const NavbarWrapper = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Navbar
            variant={scrolled ? "light" : "dark"}
            transparent={true}
            scrolled={scrolled}
        />
    );
};
