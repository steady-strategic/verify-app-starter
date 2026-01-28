import React from "react";
import Image from "next/image";

export default function HomeBrands() {
    const logos = [
        {
            src: "/assets/images/brands/brand1.svg",
            alt: "Partner Brand 1",
        },
        {
            src: "/assets/images/brands/brand2.svg",
            alt: "Partner Brand 2",
        },
        {
            src: "/assets/images/brands/brand3.svg",
            alt: "Partner Brand 3",
        },
        {
            src: "/assets/images/brands/brand4.svg",
            alt: "Partner Brand 4",
        },
        {
            src: "/assets/images/brands/brand5.svg",
            alt: "Partner Brand 5",
        },
    ];

    return (
        <section className="py-12 bg-colors-gray-200">
            <div className="w-full max-w-[1280px] mx-auto px-4 md:px-8">
                {/* Static Logo Grid */}
                <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12 w-full">
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            className="relative h-12 w-32 md:w-48 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
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
        </section>
    );
}
