"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useState, useEffect } from "react";

export default function FAQPage() {
    const [scrolled, setScrolled] = useState(false);
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const faqs = [
        {
            question: "What is MORE therapy?",
            answer: "Mindfulness-Oriented Recovery Enhancement (MORE) is an evidence-based intervention that integrates mindfulness training, reappraisal, and savoring techniques to address addiction, chronic pain, and emotional distress."
        },
        {
            question: "How long does MORE treatment typically last?",
            answer: "MORE is typically delivered in an 8-week format, with weekly group sessions lasting 2 hours each. Individual therapy formats may vary in duration based on clinical needs."
        },
        {
            question: "Is MORE covered by insurance?",
            answer: "Coverage varies by insurance provider and plan. Many insurance companies cover MORE therapy when delivered by licensed mental health professionals. We recommend contacting your insurance provider directly to verify coverage."
        },
        {
            question: "What conditions does MORE treat?",
            answer: "MORE has been proven effective for treating opioid use disorder, alcohol dependence, prescription medication misuse, chronic pain conditions, and co-occurring emotional distress. Research supports its use across diverse populations."
        },
        {
            question: "Do I need previous meditation experience?",
            answer: "No previous meditation or mindfulness experience is required. MORE therapists guide participants through all techniques step-by-step, making it accessible for beginners."
        },
        {
            question: "How is MORE different from other mindfulness programs?",
            answer: "MORE uniquely combines mindfulness with cognitive reappraisal and savoring techniques, specifically targeting the mechanisms underlying addiction and chronic pain. It's backed by extensive scientific research and NIH funding."
        },
        {
            question: "Can MORE be combined with other treatments?",
            answer: "Yes, MORE can be integrated with other evidence-based treatments including medication-assisted treatment (MAT), cognitive behavioral therapy (CBT), and medical pain management approaches."
        },
        {
            question: "How do I become a certified MORE practitioner?",
            answer: "Mental health professionals can pursue MORE certification through our comprehensive training program. Visit our Become MORE Certified page to learn about training requirements and upcoming programs."
        }
    ];

    return (
        <div className="min-h-screen text-stone-700 overflow-x-hidden selection:bg-amber-100 selection:text-amber-900">
            <Navbar scrolled={scrolled} />

            <main className="pt-32 pb-24">
                <div className="container mx-auto px-6 max-w-4xl">
                    <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-[10px] uppercase tracking-widest font-bold mb-6">
                        Resources
                    </span>

                    <h1 className="text-5xl md:text-6xl font-bold text-stone-900 mb-6">
                        Frequently Asked Questions
                    </h1>

                    <p className="text-xl text-stone-600 leading-relaxed mb-12">
                        Find answers to common questions about MORE therapy, treatment, and certification.
                    </p>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border border-stone-100 rounded-lg overflow-hidden bg-white"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-stone-50 transition-colors"
                                >
                                    <span className="font-bold text-stone-900 pr-4">
                                        {faq.question}
                                    </span>
                                    <svg
                                        className={`w-5 h-5 text-stone-600 flex-shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""
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
                                {openIndex === index && (
                                    <div className="px-6 pb-5 text-stone-600 leading-relaxed">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 p-8 bg-amber-50 rounded-lg border border-amber-100">
                        <h3 className="text-2xl font-bold text-stone-900 mb-4">
                            Still Have Questions?
                        </h3>
                        <p className="text-stone-600 mb-6">
                            Can't find the answer you're looking for? Contact us directly and we'll be happy to help.
                        </p>
                        <button className="inline-block px-6 py-3 bg-stone-900 text-white font-semibold rounded-full hover:bg-stone-800 transition-all active:scale-95">
                            Contact Us
                        </button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
