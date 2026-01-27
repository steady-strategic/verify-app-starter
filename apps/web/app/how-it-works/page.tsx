"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageBanner } from "@/components/sections/PageBanner";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Content } from "@/components/sections/Content";

export default function HowItWorksPage() {
    return (
        <div className="min-h-screen text-stone-700 overflow-x-hidden selection:bg-amber-100 selection:text-amber-900 pt-24">
            <Navbar scrolled={true} />

            <PageBanner
                title="How It Works"
                description={[
                    "Understanding the science and practice behind Mindfulness-Oriented Recovery Enhancement.",
                    "Discover how MORE integrates mindfulness, reappraisal, and savoring to address addiction, chronic pain, and emotional distress."
                ]}
                backgroundImage={{
                    src: "/assets/images/photo-1710166755608-58b3d62db3a81.svg",
                    alt: "Background pattern"
                }}
                foregroundImage={{
                    src: "/assets/images/brain-image.jpg",
                    alt: "How It Works Process Illustration"
                }}
                variant="default"
                id="how-it-works-banner"
            />

            <HowItWorks
                title={
                    <>
                        Over eight weekly sessions, <span style={{ color: "#D80ADA" }}>MORE</span> supports lasting change through a carefully designed, research‑validated three‑step process.
                    </>
                }
                subtitle="Mindfulness"
                steps={["Step 1", "Step 2", "Step 3"]}
                cards={[
                    {
                        title: "Guided Meditation",
                        iconSrc: "/assets/images/meditate3.svg",
                        iconColor: "#F4F4F4",
                    },
                    {
                        title: "Reappraisal",
                        iconSrc: "/assets/images/reappraise3.svg",
                        iconColor: "#F4F4F4",
                    },
                    {
                        title: "Savoring",
                        iconSrc: "/assets/images/heart3.svg",
                        iconColor: "#F4F4F4",
                    },
                ]}
                research="As your prefrontal cortex grows - your cravings decrease and your capacity for joy increases"
                variant="default"
                id="how-it-works-section"
            />

            {/* Content-HowItWorks Section */}
            <div className="mb-24">
                <Content
                    variant="Content-HowItWorks"
                    title="MORE isn't just about reducing symptoms"
                    subtitle="it's about helping people flourish. Most mindfulness programs stop at awareness. MORE goes further, guiding patients to:"
                    features={[
                        { text: "Transform negative emotions into positive growth" },
                        { text: "Reclaim a sense of meaning and purpose in life" },
                        { text: "Experience deep, restorative states of well-being" }
                    ]}
                    image={{
                        src: "/assets/images/content-how-it-works.png",
                        alt: "Mindfulness hero"
                    }}
                />
            </div>

            <main className="pb-24">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold text-stone-900 mb-4">
                        The MORE Approach
                    </h2>
                    <p className="text-stone-600 leading-relaxed mb-8">
                        MORE integrates three core therapeutic mechanisms to address addiction, chronic pain, and emotional distress.
                    </p>

                    {/* Three Pillars */}
                    <div className="space-y-6 mb-12">
                        <div className="p-6 bg-stone-50 rounded-lg border border-stone-100">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                                    <span className="text-2xl font-bold text-amber-700">1</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-stone-900 mb-2">
                                        Mindfulness
                                    </h3>
                                    <p className="text-stone-600">
                                        Learn to observe thoughts, sensations, and emotions without judgment, creating space between stimulus and response.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-stone-50 rounded-lg border border-stone-100">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                                    <span className="text-2xl font-bold text-amber-700">2</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-stone-900 mb-2">
                                        Reappraisal
                                    </h3>
                                    <p className="text-stone-600">
                                        Develop new perspectives on challenging experiences, transforming how you relate to pain and cravings.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-stone-50 rounded-lg border border-stone-100">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                                    <span className="text-2xl font-bold text-amber-700">3</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-stone-900 mb-2">
                                        Savoring
                                    </h3>
                                    <p className="text-stone-600">
                                        Rediscover natural sources of pleasure and meaning, enhancing positive emotions and life satisfaction.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>



                    <h2 className="text-3xl font-bold text-stone-900 mb-4 mt-12">
                        The Treatment Process
                    </h2>
                    <p className="text-stone-600 leading-relaxed mb-6">
                        MORE is typically delivered in 8-week group sessions or individual therapy format, with each session building on core skills.
                    </p>

                    <div className="mt-12 p-8 bg-amber-50 rounded-lg border border-amber-100">
                        <h3 className="text-2xl font-bold text-stone-900 mb-4">
                            Learn More
                        </h3>
                        <p className="text-stone-600 mb-6">
                            Explore our research library to dive deeper into the evidence supporting MORE therapy.
                        </p>
                        <a
                            href="/resources/research"
                            className="inline-block px-6 py-3 bg-stone-900 text-white font-semibold rounded-full hover:bg-stone-800 transition-all active:scale-95"
                        >
                            View Research
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
