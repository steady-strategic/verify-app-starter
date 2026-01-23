import React from "react";

export const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-stone-100 pt-24 pb-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-4 space-y-6">
                        <div className="flex items-center space-x-2">
                            <img src="/assets/images/LOGO_Magenta_1.svg" alt="MORE Logo" className="h-10" />
                        </div>
                        <p className="text-stone-500 text-sm font-light leading-relaxed max-w-xs">
                            Mindfulness-Oriented Recovery Enhancement
                            <br />
                            Breakthrough evidence-based therapy for pain,
                            addiction and emotional distress
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-stone-400 hover:text-stone-900 transition-colors"
                            >
                                <span className="sr-only">Twitter</span>
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-stone-400 hover:text-stone-900 transition-colors"
                            >
                                <span className="sr-only">Facebook</span>
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* For Clinicians */}
                    <div className="col-span-1 md:col-span-2">
                        <h4 className="font-bold text-stone-900 mb-6 uppercase text-xs tracking-widest">
                            For Clinicians
                        </h4>
                        <ul className="space-y-4 text-sm text-stone-500 font-light">
                            <li>
                                <a href="#" className="hover:text-stone-900 transition-colors">
                                    MORE™ for Clinicians
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-stone-900 transition-colors">
                                    MORE™ Institute
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* For Patients */}
                    <div className="col-span-1 md:col-span-2">
                        <h4 className="font-bold text-stone-900 mb-6 uppercase text-xs tracking-widest">
                            For Patients
                        </h4>
                        <ul className="space-y-4 text-sm text-stone-500 font-light">
                            <li>
                                <a href="#" className="hover:text-stone-900 transition-colors">
                                    MORE™ for Patients
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-stone-900 transition-colors">
                                    Find a Clinician
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="col-span-1 md:col-span-2">
                        <h4 className="font-bold text-stone-900 mb-6 uppercase text-xs tracking-widest">
                            Resources
                        </h4>
                        <ul className="space-y-4 text-sm text-stone-500 font-light">
                            <li>
                                <a href="#" className="hover:text-stone-900 transition-colors">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-stone-900 transition-colors">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-stone-900 transition-colors">
                                    Research
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-stone-900 transition-colors">
                                    FAQ's
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Misc Links (No Header) */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="hidden md:block h-10 mb-6"></div> {/* Spacer for desktop alignment */}
                        <ul className="space-y-4 text-sm text-stone-500 font-light">
                            <li>
                                <a href="#" className="hover:text-stone-900 transition-colors">
                                    How it Works
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-stone-900 transition-colors">
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
