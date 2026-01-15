import React from "react";
import Image from "next/image";

export default function HomeBrands() {
    const logos = [
        {
            src: "/assets/home/logos/Johns-Hopkins-University-Logo_1.png",
            alt: "Johns Hopkins University",
        },
        {
            src: "/assets/home/logos/hms-logo-final-rgb_1.png",
            alt: "Harvard Medical School",
        },
        {
            src: "/assets/home/logos/University_of_California,_San_Diego_logo.svg_2.png",
            alt: "UC San Diego",
        },
        {
            src: "/assets/home/logos/pngegg_1.png",
            alt: "Partner Institution",
        },
        {
            src: "/assets/home/logos/kaiser-permanente-eastmoreland-dental-office-kaiser-westside-medical-center-health-insurance-health-care-others-d924d53548165cd067655983122df683_1.png",
            alt: "Kaiser Permanente",
        },
    ];

    return (
        <section className="py-12 bg-colors-gray-200 overflow-hidden">
            <div className="relative">
                {/* Marquee Container */}
                <div
                    className="flex animate-marquee"
                    style={{
                        '--duration': '30s',
                        '--gap': '4rem',
                    } as React.CSSProperties}
                >
                    {/* First set of logos */}
                    <div className="flex items-center gap-16 shrink-0">
                        {logos.map((logo, index) => (
                            <div
                                key={`logo-1-${index}`}
                                className="relative h-12 w-48 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                            >
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Duplicate set for seamless loop */}
                    <div className="flex items-center gap-16 shrink-0">
                        {logos.map((logo, index) => (
                            <div
                                key={`logo-2-${index}`}
                                className="relative h-12 w-48 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                            >
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
