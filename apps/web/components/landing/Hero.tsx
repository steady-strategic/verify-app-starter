import React from "react";
import Image from "next/image";

export const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/assets/home/images/mindfulness_1.png"
                    alt="Mindfulness background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
            </div>

            {/* Hero Content */}
            <div className="container mx-auto px-6 py-32 text-center relative z-10">
                <div className="max-w-4xl mx-auto space-y-8">
                    {/* Main Headline */}
                    <h1
                        className="text-white leading-tight"
                        style={{
                            fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
                            fontWeight: 'var(--HERO-headers-font-weight)',
                            letterSpacing: 'var(--HERO-headers-letter-spacing)',
                            lineHeight: 'var(--HERO-headers-line-height)',
                        }}
                    >
                        Get{" "}
                        <span className="text-primary-1 font-extrabold">
                            MORE
                        </span>{" "}
                        out of therapy
                    </h1>

                    {/* Subheadline */}
                    <h2
                        className="text-white text-3xl md:text-4xl font-light"
                        style={{
                            letterSpacing: '-0.02em',
                        }}
                    >
                        More joy |
                    </h2>

                    {/* Certification Text */}
                    <p
                        className="text-white/90 text-base md:text-lg pt-8"
                        style={{
                            fontFamily: 'var(--paragraph-font-family)',
                            letterSpacing: '0.02em',
                        }}
                    >
                        MORE Clinician certification
                    </p>

                    {/* CTA Button */}
                    <div className="pt-6">
                        <button
                            className="bg-primary-1 hover:bg-primary-2 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                            style={{
                                fontSize: 'var(--text-base-font-normal-font-size)',
                            }}
                        >
                            Register Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
