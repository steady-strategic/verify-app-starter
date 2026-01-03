import React from "react";
import Link from "next/link";
import { MobileAppMockup } from "./MobileAppMockup";

export const AppFeature: React.FC = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-20 items-center">
                    <div className="order-2 md:order-1 flex justify-center">
                        <MobileAppMockup />
                    </div>

                    <div className="order-1 md:order-2 space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl text-stone-900 leading-tight">
                                Peace of mind, <br />
                                <span className="italic text-amber-600">wherever</span> you are.
                            </h2>
                            <p className="text-lg text-stone-500 font-light leading-relaxed">
                                The MORE mobile app brings Dr. Eric Garland's clinically-tested Mindfulness-Oriented Recovery Enhancement program directly to your pocket. Guided lessons, real-time craving management, and physiological tracking.
                            </p>
                        </div>

                        <ul className="space-y-6">
                            <li className="flex items-start space-x-4">
                                <div className="mt-1 w-6 h-6 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0">
                                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-stone-900">Adaptive Audio Lessons</h3>
                                    <p className="text-stone-500 text-sm font-light">Guided sessions that evolve with your progress and specific needs.</p>
                                </div>
                            </li>
                            <li className="flex items-start space-x-4">
                                <div className="mt-1 w-6 h-6 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0">
                                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-stone-900">The Savoring Practice</h3>
                                    <p className="text-stone-500 text-sm font-light">Unique techniques to amplify natural pleasure and joy in everyday life.</p>
                                </div>
                            </li>
                            <li className="flex items-start space-x-4">
                                <div className="mt-1 w-6 h-6 rounded-full bg-amber-50 flex items-center justify-center flex-shrink-0">
                                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-stone-900">Progress Journaling</h3>
                                    <p className="text-stone-500 text-sm font-light">Visualize your journey to recovery with data-backed insights.</p>
                                </div>
                            </li>
                        </ul>

                        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                            <Link
                                href="/program"
                                className="w-full sm:w-auto px-8 py-4 bg-amber-600 text-white rounded-full font-semibold text-sm shadow-lg shadow-amber-100 hover:bg-amber-700 hover:shadow-xl transition-all text-center"
                            >
                                Learn More About The App
                            </Link>
                            <div className="flex items-center space-x-2">
                                <div className="flex text-amber-400">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-stone-400 text-xs font-bold uppercase tracking-widest">4.9 App Store Rating</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
