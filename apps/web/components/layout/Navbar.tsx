"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

interface NavbarProps {
    scrolled?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled = false }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const { data: session, status } = useSession();

    const isActive = (path: string) => pathname === path;
    const isLoggedIn = status === "authenticated";

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
                    <Link
                        href="/"
                        className={`hover:text-stone-900 transition-colors ${isActive("/") ? "text-stone-900 font-bold" : ""
                            }`}
                    >
                        Philosophy
                    </Link>
                    <a href="#evidence" className="hover:text-stone-900 transition-colors">
                        Evidence
                    </a>
                    <Link
                        href="/stories"
                        className={`hover:text-stone-900 transition-colors ${isActive("/stories")
                                ? "text-stone-900 font-bold border-b-2 border-amber-500"
                                : ""
                            }`}
                    >
                        Stories
                    </Link>
                    <Link
                        href="/program"
                        className={`hover:text-stone-900 transition-colors ${isActive("/program")
                                ? "text-stone-900 font-bold border-b-2 border-amber-500"
                                : ""
                            }`}
                    >
                        The App
                    </Link>

                    <div className="h-4 w-[1px] bg-stone-200"></div>

                    {isLoggedIn ? (
                        <Link
                            href="/dashboard"
                            className="px-5 py-2.5 bg-stone-900 text-white text-xs font-semibold rounded-full hover:bg-stone-800 transition-all active:scale-95"
                        >
                            Account
                        </Link>
                    ) : (
                        <>
                            <Link
                                href="/signin"
                                className="text-stone-600 hover:text-stone-900 transition-colors font-semibold"
                            >
                                Sign In
                            </Link>
                            <Link
                                href="/signup"
                                className="px-5 py-2.5 bg-stone-900 text-white text-xs font-semibold rounded-full hover:bg-stone-800 transition-all active:scale-95"
                            >
                                Get Started
                            </Link>
                        </>
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
                        <Link
                            href="/"
                            onClick={() => setMobileMenuOpen(false)}
                            className={`text-sm font-medium ${isActive("/") ? "text-stone-900 font-bold" : "text-stone-600"
                                }`}
                        >
                            Philosophy
                        </Link>
                        <Link
                            href="/stories"
                            onClick={() => setMobileMenuOpen(false)}
                            className={`text-sm font-medium ${isActive("/stories")
                                    ? "text-stone-900 font-bold"
                                    : "text-stone-600"
                                }`}
                        >
                            Stories
                        </Link>
                        <Link
                            href="/program"
                            onClick={() => setMobileMenuOpen(false)}
                            className={`text-sm font-medium ${isActive("/program")
                                    ? "text-stone-900 font-bold"
                                    : "text-stone-600"
                                }`}
                        >
                            The App
                        </Link>

                        {isLoggedIn ? (
                            <Link
                                href="/dashboard"
                                onClick={() => setMobileMenuOpen(false)}
                                className="px-5 py-2.5 bg-stone-900 text-white text-xs font-semibold rounded-full hover:bg-stone-800 transition-all text-center"
                            >
                                Account
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href="/signin"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-sm font-medium text-stone-600"
                                >
                                    Sign In
                                </Link>
                                <Link
                                    href="/signup"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="px-5 py-2.5 bg-stone-900 text-white text-xs font-semibold rounded-full hover:bg-stone-800 transition-all text-center"
                                >
                                    Get Started
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};
