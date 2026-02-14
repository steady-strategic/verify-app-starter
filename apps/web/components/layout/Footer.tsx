import React from "react";
import Link from 'next/link';
import Image from "next/image";

export const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-stone-100 pt-24 pb-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-4 space-y-6">
                        <div className="flex items-center space-x-2">
                            <Image
                                src="/assets/logos/Logo_Primary 1.avif"
                                alt="MORE Logo"
                                width={140}
                                height={40}
                                className="h-10 w-auto"
                                unoptimized
                            />
                        </div>
                        <p className="text-stone-500 text-sm leading-relaxed max-w-xs">
                            Mindfulness-Oriented Recovery Enhancement
                            <br />
                            Breakthrough evidence-based therapy for
                            addiction, pain and emotional distress
                        </p>

                    </div>

                    {/* Clinicians */}
                    <div className="col-span-1 md:col-span-2">
                        <h4 className="font-bold text-stone-900 mb-6 uppercase text-xs tracking-widest">
                            Clinicians
                        </h4>
                        <ul className="space-y-4 text-sm text-stone-500">
                            <li>
                                <a href="/clinicians" className="hover:text-primary-1 transition-colors">
                                    Why MORE
                                </a>
                            </li>
                            <li>
                                <Link href="/training" className="text-gray-600 hover:text-primary-1 transition-colors">
                                    More Training
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Patients */}
                    <div className="col-span-1 md:col-span-2">
                        <h4 className="font-bold text-stone-900 mb-6 uppercase text-xs tracking-widest">
                            Patients
                        </h4>
                        <ul className="space-y-4 text-sm text-stone-500">
                            <li>
                                <a href="/patients" className="hover:text-primary-1 transition-colors">
                                    MORE for Patients
                                </a>
                            </li>
                            <li>
                                <a href="/directory" className="hover:text-primary-1 transition-colors">
                                    Find a Clinician
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="col-span-1 md:col-span-2">
                        <h4 className="font-bold text-stone-900 mb-6 uppercase text-xs tracking-widest">
                            Research
                        </h4>
                        <ul className="space-y-4 text-sm text-stone-500">
                            <li>
                                <a href="/research" className="hover:text-primary-1 transition-colors">
                                    The Science
                                </a>
                            </li>
                            <li>
                                <a href="/blog" className="hover:text-primary-1 transition-colors">
                                    Insights from Dr. Garland
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Fourth Column (No Title) */}
                    <div className="col-span-1 md:col-span-2">
                        <ul className="space-y-4 text-sm text-stone-500">
                            <li>
                                <a href="/how-it-works" className="hover:text-primary-1 transition-colors">
                                    How it Works
                                </a>
                            </li>
                            <li>
                                <a href="/about" className="hover:text-primary-1 transition-colors">
                                    About Us
                                </a>
                            </li>

                            <li>
                                <a href="/contact" className="hover:text-primary-1 transition-colors">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-stone-50 flex justify-center text-[10px] text-stone-400 font-medium uppercase tracking-widest">
                    <p>© 2026 MORE™ All rights reserved</p>
                </div>
            </div>
        </footer>
    );
};
