"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

interface NavbarProps {
    scrolled?: boolean;
    variant?: "light" | "dark";
    transparent?: boolean;
}

interface DropdownItem {
    label: string;
    href: string;
}

const DropdownMenu: React.FC<{
    label: string;
    items: DropdownItem[];
    isActive: (path: string) => boolean;
    variant?: "light" | "dark";
}> = ({ label, items, isActive, variant = "light" }) => {
    const [isOpen, setIsOpen] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
    };

    useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    const hasActiveItem = items.some((item) => isActive(item.href));

    return (
        <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button
                className={`transition-colors flex items-center space-x-1 ${variant === "dark"
                    ? `text-white hover:text-primary-1 ${hasActiveItem ? "font-bold" : ""}`
                    : `hover:text-stone-900 ${hasActiveItem ? "text-stone-900 font-bold" : ""}`
                    }`}
            >
                <span>{label}</span>
                <svg
                    className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""} ${hasActiveItem ? "text-primary-1" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-stone-100 rounded-lg shadow-lg py-2 z-50">
                    {items.map((item) => (
                        item.href === "/training" ? (
                            <a
                                key={item.href}
                                href={item.href}
                                className={`block px-4 py-2 text-sm transition-colors hover:text-primary-1 ${isActive(item.href)
                                    ? "text-stone-900 font-bold"
                                    : "text-stone-600"
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </a>
                        ) : (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`block px-4 py-2 text-sm transition-colors hover:text-primary-1 ${isActive(item.href)
                                    ? "text-stone-900 font-bold"
                                    : "text-stone-600"
                                    }`}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </Link>
                        )
                    ))}
                </div>
            )}
        </div>
    );
};

export const Navbar: React.FC<NavbarProps> = ({ scrolled = false, variant = "light", transparent = true }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const { data: session, status } = useSession();

    const isActive = (path: string) => {
        if (path === "/blog") {
            return pathname === "/blog" || pathname.startsWith("/blog/");
        }
        return pathname === path;
    };
    const isLoggedIn = status === "authenticated";

    const cliniciansItems: DropdownItem[] = [
        { label: "Why MORE", href: "/clinicians" },
        { label: "MORE Training", href: "/training" },
    ];

    const patientsItems: DropdownItem[] = [
        { label: "MORE for Patients", href: "/patients" },
        { label: "Find a Clinician", href: "/directory" },
    ];

    const resourcesItems: DropdownItem[] = [
        { label: "The Science", href: "/research" },
        { label: "Insights from Dr. Garland", href: "/blog" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? variant === "dark"
                    ? "py-4 bg-black/40 backdrop-blur-md shadow-sm border-b border-white/10"
                    : "py-4 glass shadow-sm border-b border-stone-100"
                : transparent
                    ? "py-8 bg-transparent"
                    : "py-6 bg-white shadow-sm border-b border-stone-100"
                }`}
        >
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-3 items-center">
                    {/* Logo - Left */}
                    <Link href="/" className="flex items-center focus:outline-none justify-self-start">
                        <Image
                            src="/assets/logos/Logo_Primary_1.svg"
                            alt="MORE Logo"
                            width={140}
                            height={48}
                            className="h-[48px] w-auto"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation - Center */}
                    <div className={`hidden md:flex items-center justify-center space-x-20 text-sm font-medium whitespace-nowrap z-10 pointer-events-auto ${variant === "dark" ? "text-white" : "text-stone-600"
                        }`}>
                        <Link
                            href="/how-it-works"
                            className={`transition-colors ${variant === "dark"
                                ? `hover:text-primary-1 ${isActive("/how-it-works") ? "font-bold" : ""}`
                                : `hover:text-stone-900 ${isActive("/how-it-works") ? "text-stone-900 font-bold" : ""}`
                                }`}
                        >
                            How it Works
                        </Link>
                        <DropdownMenu
                            label="Clinicians"
                            items={cliniciansItems}
                            isActive={isActive}
                            variant={variant}
                        />
                        <DropdownMenu
                            label="Patients"
                            items={patientsItems}
                            isActive={isActive}
                            variant={variant}
                        />
                        <DropdownMenu
                            label="Resources"
                            items={resourcesItems}
                            isActive={isActive}
                            variant={variant}
                        />

                    </div>

                    {/* Auth Button - Right */}
                    <div className="hidden md:flex items-center justify-end space-x-4">
                        {/* DISABLED: User account system disabled - see disable-user-accounts branch */}
                    </div>

                    {/* Mobile Hamburger - Right (on mobile only) */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden justify-self-end text-stone-900 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden glass border-t border-stone-100 mt-4">
                    <div className="container mx-auto px-6 py-6 flex flex-col space-y-4">
                        {/* How it Works */}
                        <Link
                            href="/how-it-works"
                            onClick={() => setMobileMenuOpen(false)}
                            className={`text-sm font-medium ${isActive("/how-it-works")
                                ? "text-stone-900 font-bold"
                                : "text-stone-600"
                                }`}
                        >
                            How it Works
                        </Link>

                        {/* For Clinicians Section */}
                        <div className="space-y-2">
                            <p className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                                Clinicians
                            </p>
                            {cliniciansItems.map((item) => (
                                item.href === "/training" ? (
                                    <a
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`block text-sm font-medium pl-3 ${isActive(item.href)
                                            ? "text-stone-900 font-bold"
                                            : "text-stone-600"
                                            }`}
                                    >
                                        {item.label}
                                    </a>
                                ) : (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`block text-sm font-medium pl-3 ${isActive(item.href)
                                            ? "text-stone-900 font-bold"
                                            : "text-stone-600"
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                )
                            ))}
                        </div>

                        {/* For Patients Section */}
                        <div className="space-y-2">
                            <p className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                                Patients
                            </p>
                            {patientsItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block text-sm font-medium pl-3 ${isActive(item.href)
                                        ? "text-stone-900 font-bold"
                                        : "text-stone-600"
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        {/* Resources Section */}
                        <div className="space-y-2">
                            <p className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                                Resources
                            </p>
                            {resourcesItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block text-sm font-medium pl-3 ${isActive(item.href)
                                        ? "text-stone-900 font-bold"
                                        : "text-stone-600"
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>



                        <div className="h-[1px] bg-stone-200"></div>

                        {/* Login/Account */}
                        {/* DISABLED: User account system disabled - see disable-user-accounts branch */}
                    </div>
                </div>
            )}
        </nav>
    );
};
