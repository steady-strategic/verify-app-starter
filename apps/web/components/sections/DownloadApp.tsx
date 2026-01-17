import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DownloadAppSectionProps } from "./types";

export const DownloadApp: React.FC<DownloadAppSectionProps> = ({
    title,
    description,
    features,
    downloadLabel,
    links,
    variant = "default",
    className = "",
    id,
    images = {
        phoneMockup: {
            src: "/assets/images/phone-mockup.svg",
            alt: "Mobile App Mockup"
        },
        soundWave: {
            src: "/assets/images/sound-wave-background.png",
            alt: "Sound Wave Background"
        }
    }
}) => {
    return (
        <section
            id={id}
            className={`w-full bg-[#fafafa] relative flex flex-col md:flex-row items-center justify-between py-[60px] pb-[60px] pt-0 px-6 md:px-20 gap-16 md:gap-[60px] overflow-hidden ${className}`}
        >
            {/* Left Content */}
            <div className="flex flex-col gap-8 flex-1 w-full max-w-[640px] z-10 pt-[60px] md:pt-[120px]">
                {/* Heading Section */}
                <div className="flex flex-col gap-4">
                    <h2 className="font-['Inter'] text-[36px] font-light tracking-[-0.36px] leading-[1.2] text-[#111928]">
                        {title}
                    </h2>
                    <p className="font-['Inter'] text-[20px] font-normal leading-[30px] text-[#454a55]">
                        {description}
                    </p>
                </div>

                {/* Features Section */}
                <div className="flex flex-col gap-6">
                    <div className="w-full h-px bg-[#e5e7eb]" />
                    <div className="flex flex-col gap-4">
                        {features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-2.5">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="flex-shrink-0 w-5 h-5 text-[#31C48D] mt-0.5"
                                >
                                    <path
                                        d="M16.6666 5L7.49992 14.1667L3.33325 10"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <p className="font-['Inter'] text-[16px] font-bold leading-[1.5] text-[#454a55]">
                                    {feature}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="flex flex-col gap-4">
                    <span className="font-['Inter'] text-[20px] font-normal text-[#6b7280]">
                        {downloadLabel}
                    </span>
                    <div className="flex items-center gap-3 flex-wrap">
                        {/* App Store Button */}
                        <Link href={links.appStore} className="hover:opacity-90 transition-opacity">
                            <Image
                                src="/assets/images/app-store-button.svg"
                                alt="Download on the App Store"
                                width={120}
                                height={40}
                                className="h-10 w-auto" // Adjust size as needed based on SVG natural size, or rely on width/height
                            />
                        </Link>
                        {/* Google Play Button */}
                        <Link href={links.googlePlay} className="hover:opacity-90 transition-opacity">
                            <Image
                                src="/assets/images/google-play-icon.svg"
                                alt="Get it on Google Play"
                                width={135}
                                height={40}
                                className="h-10 w-auto"
                            />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Right Content */}
            <div className="relative flex-1 flex flex-col items-center min-h-[400px] w-full self-start mt-[20px]">
                {/* Sound Wave Background */}
                <div className="absolute top-[80%] -translate-y-1/2 w-full flex items-center justify-center right-[50px]">
                    <Image
                        src={images.soundWave?.src || "/assets/images/sound-wave-background.png"}
                        alt={images.soundWave?.alt || "Background"}
                        width={847}
                        height={306}
                        className="object-contain max-w-none w-[120%] md:w-[847px] opacity-100"
                    />
                </div>

                {/* Phone Mockup */}
                <div className="relative z-20 max-w-[322px] w-full">
                    <Image
                        src={images.phoneMockup?.src || "/assets/images/phone-mockup.svg"}
                        alt={images.phoneMockup?.alt || "Phone Mockup"}
                        width={322}
                        height={600}
                        className="w-full h-auto drop-shadow-2xl"
                        priority
                    />
                </div>
            </div>
        </section>
    );
};
