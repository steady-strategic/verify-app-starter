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
                <div className="max-w-6xl mx-auto space-y-8">
                    {/* Main Headline */}
                    <h1
                        className="text-white text-center"
                        style={{
                            fontFamily: 'Inter',
                            fontSize: 'clamp(2.5rem, 10vw, 84px)',
                            fontWeight: 200,
                            lineHeight: '60px',
                            letterSpacing: '-4.2px',
                        }}
                    >
                        Get{" "}
                        <span
                            style={{
                                color: 'var(--primary-1, #C60EC8)',
                                fontWeight: 900,
                            }}
                        >
                            MORE
                        </span>{" "}
                        out of therapy
                    </h1>

                    {/* Subheadline */}
                    <h2
                        className="text-white text-center"
                        style={{
                            fontFamily: 'Inter',
                            fontSize: 'clamp(2rem, 8vw, 84px)',
                            fontWeight: 200,
                            lineHeight: '60px',
                            letterSpacing: '-4.2px',
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
