import React from "react";
import Image from "next/image";
import { TypingAnimation } from "../ui/TypingAnimation";

export const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/assets/images/mindfulness_1.png"
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
                        className="text-white text-center font-HERO-headers text-[85px] font-extrabold leading-[1.1] tracking-[-0.92px]"
                    >
                        Get{" "}
                        <span className="text-primary-1 font-black">
                            MORE
                        </span>{" "}
                        out of therapy
                    </h1>

                    {/* Subheadline */}
                    <TypingAnimation
                        WrapperTag="h2"
                        phrases={["More Peace", "More Joy", "More Mindful"]}
                        className="text-white text-center font-content-header-1 text-[85px] font-light leading-[1.1] tracking-[-1.9px]"
                    />

                    {/* Certification Text */}
                    <p
                        className="text-white/90 font-paragraph text-lg pt-8 tracking-[0.02em]"
                    >
                        MORE Clinician certification
                    </p>

                    {/* CTA Button */}
                    <div className="pt-6">
                        <button
                            className="bg-primary-1 hover:brightness-110 text-white font-text-base-font-normal font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            Register Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
