"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

interface NavbarProps {
    scrolled?: boolean;
}

interface DropdownItem {
    label: string;
    href: string;
}

const DropdownMenu: React.FC<{
    label: string;
    items: DropdownItem[];
    isActive: (path: string) => boolean;
}> = ({ label, items, isActive }) => {
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
                className={`hover:text-stone-900 transition-colors flex items-center space-x-1 ${hasActiveItem ? "text-stone-900 font-bold" : ""
                    }`}
            >
                <span>{label}</span>
                <svg
                    className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""
                        }`}
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
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`block px-4 py-2 text-sm hover:bg-amber-50 transition-colors ${isActive(item.href)
                                ? "text-stone-900 font-bold bg-amber-50/50"
                                : "text-stone-600"
                                }`}
                            onClick={() => setIsOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export const Navbar: React.FC<NavbarProps> = ({ scrolled = false }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const { data: session, status } = useSession();

    const isActive = (path: string) => pathname === path;
    const isLoggedIn = status === "authenticated";

    const cliniciansItems: DropdownItem[] = [
        { label: "MORE for Clinicians", href: "/clinicians" },
        { label: "Become MORE Certified", href: "/clinicians/certified" },
    ];

    const patientsItems: DropdownItem[] = [
        { label: "MORE for Patients", href: "/patients" },
        { label: "Find a MORE Clinician", href: "/directory" },
    ];

    const resourcesItems: DropdownItem[] = [
        { label: "How It Works", href: "/resources/how-it-works" },
        { label: "Research", href: "/resources/research" },
        { label: "Stories", href: "/stories" },
        { label: "FAQ", href: "/resources/faq" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "py-4 glass shadow-sm border-b border-stone-100"
                : "py-8 bg-transparent"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2 focus:outline-none">
                    <div className="w-8 h-8 rounded-full bg-stone-900 flex items-center justify-center">
                        <span className="text-white font-bold text-xs">M</span>
                    </div>
                    <span className="text-xl font-bold tracking-tighter text-stone-900">
                        MORE
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-stone-600">
                    <DropdownMenu
                        label="Clinicians"
                        items={cliniciansItems}
                        isActive={isActive}
                    />
                    <DropdownMenu
                        label="Patients"
                        items={patientsItems}
                        isActive={isActive}
                    />
                    <DropdownMenu
                        label="Resources"
                        items={resourcesItems}
                        isActive={isActive}
                    />
                    <Link
                        href="/about"
                        className={`hover:text-stone-900 transition-colors ${isActive("/about") ? "text-stone-900 font-bold" : ""
                            }`}
                    >
                        About Us
                    </Link>

                    <div className="h-4 w-[1px] bg-stone-200"></div>

                    {isLoggedIn ? (
                        <Link
                            href={
                                pathname === "/account/modules"
                                    ? "/account"
                                    : pathname === "/account"
                                        ? "/account/modules"
                                        : "/account/modules"
                            }
                            className="px-5 py-2.5 bg-stone-900 text-white text-xs font-semibold rounded-full hover:bg-stone-800 transition-all active:scale-95"
                        >
                            {pathname === "/account/modules"
                                ? "Account Settings"
                                : pathname === "/account"
                                    ? "MORE Modules"
                                    : "Account"}
                        </Link>
                    ) : (
                        <Link
                            href="/login"
                            className="text-stone-600 hover:text-stone-900 transition-colors font-semibold"
                        >
                            Login
                        </Link>
                    )}
                </div>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden text-stone-900 focus:outline-none"
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

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden glass border-t border-stone-100 mt-4">
                    <div className="container mx-auto px-6 py-6 flex flex-col space-y-4">
                        {/* Clinicians Section */}
                        <div className="space-y-2">
                            <p className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                                Clinicians
                            </p>
                            {cliniciansItems.map((item) => (
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

                        {/* Patients Section */}
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

                        {/* About Us */}
                        <Link
                            href="/about"
                            onClick={() => setMobileMenuOpen(false)}
                            className={`text-sm font-medium ${isActive("/about")
                                ? "text-stone-900 font-bold"
                                : "text-stone-600"
                                }`}
                        >
                            About Us
                        </Link>

                        <div className="h-[1px] bg-stone-200"></div>

                        {/* Login/Account */}
                        {isLoggedIn ? (
                            <Link
                                href={
                                    pathname === "/account/modules"
                                        ? "/account"
                                        : pathname === "/account"
                                            ? "/account/modules"
                                            : "/account/modules"
                                }
                                onClick={() => setMobileMenuOpen(false)}
                                className="px-5 py-2.5 bg-stone-900 text-white text-xs font-semibold rounded-full hover:bg-stone-800 transition-all text-center"
                            >
                                {pathname === "/account/modules"
                                    ? "Account Settings"
                                    : pathname === "/account"
                                        ? "MORE Modules"
                                        : "Account"}
                            </Link>
                        ) : (
                            <Link
                                href="/login"
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-sm font-medium text-stone-600"
                            >
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};
