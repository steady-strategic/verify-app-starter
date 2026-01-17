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
    const isDark = variant === "dark";

    // Default images
    const defaultImages = {
        phoneMockup: { src: "/assets/images/phone-mockup.svg", alt: "Phone Mockup" },
        soundWave: { src: "/assets/images/sound-wave-background.png", alt: "Sound Wave" }
    };

    // Dark variant images
    const darkImages = {
        phoneMockup: { src: "/assets/images/phone-mockup-dark.svg", alt: "Phone Mockup" },
        soundWave: { src: "/assets/images/Sound-wave-icon-on-transparent-background-PNG.svg", alt: "Sound Wave" }
    };

    const baseImages = isDark ? darkImages : defaultImages;
    const currentImages = {
        phoneMockup: images?.phoneMockup || baseImages.phoneMockup,
        soundWave: images?.soundWave || baseImages.soundWave
    };


    return (
        <section
            id={id}
            className={`w-full relative flex flex-col items-center justify-between overflow-normal ${isDark
                ? "bg-white pb-[155px]"
                : "bg-[#fafafa] py-[60px] pb-[60px] px-6 md:px-20"
                } ${className}`}
        >
            {/* Dark Variant Background Layer */}
            {isDark && (
                <div className="absolute top-0 left-0 right-0 bottom-[155px] z-0">
                    <Image
                        src="/assets/images/download-app-dark-bg.svg"
                        alt="Background"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            )}

            {/* Content Container */}
            <div className={`relative z-30 w-full flex flex-col md:flex-row items-center justify-between gap-16 md:gap-[60px] ${isDark ? "px-6 md:px-20" : ""
                }`}>
                {/* Left Content */}
                <div className={`flex flex-col gap-8 flex-1 w-full max-w-[640px] ${isDark ? "pt-[60px] md:pt-[20px]" : "pt-[60px] md:pt-[120px]"}`}>
                    {/* Heading Section */}
                    <div className="flex flex-col gap-4">
                        <h2 className={`font-['Inter'] font-light tracking-[-0.36px] leading-[1.2] ${isDark ? "text-[64px] tracking-[-3.2px] text-white" : "text-[36px] text-[#111928]"
                            }`}>
                            {isDark ? (
                                title.includes("MORE") ? (
                                    <>
                                        {title.split("MORE").map((part, i, arr) => (
                                            <React.Fragment key={i}>
                                                {part}
                                                {i < arr.length - 1 && <span className="font-black text-[#e704e7]">MORE</span>}
                                            </React.Fragment>
                                        ))}
                                    </>
                                ) : title
                            ) : (
                                title
                            )}
                        </h2>
                        <p className={`font-['Inter'] text-[20px] font-normal leading-[30px] ${isDark ? "text-white" : "text-[#454a55]"
                            }`}>
                            {description}
                        </p>
                    </div>

                    {/* Features Section */}
                    <div className="flex flex-col gap-6">
                        <div className={`w-full h-px ${isDark ? "bg-[#a859f2]" : "bg-[#e5e7eb]"}`} />
                        <div className="flex flex-col gap-4">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-2.5">
                                    {isDark ? (
                                        <div className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-[#e704e7] flex items-center justify-center">
                                            <svg
                                                width="12"
                                                height="12"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="text-white"
                                            >
                                                <path
                                                    d="M16.6666 5L7.49992 14.1667L3.33325 10"
                                                    stroke="currentColor"
                                                    strokeWidth="3"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                    ) : (
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
                                    )}
                                    <p className={`font-['Inter'] text-[16px] font-bold leading-[1.5] ${isDark ? "text-white" : "text-[#454a55]"
                                        }`}>
                                        {feature}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="flex flex-col gap-4">
                        <span className={`font-['Inter'] text-[20px] font-normal ${isDark ? "text-[#6b7280]" : "text-[#6b7280]"
                            }`}>
                            {downloadLabel}
                        </span>
                        <div className="flex items-center gap-3 flex-wrap">
                            {isDark ? (
                                <>
                                    {/* Dark App Store Button */}
                                    <Link href={links.appStore} className="flex items-center gap-2 px-4 py-3 bg-[#e704e7] rounded-lg hover:bg-[#d603d3] transition-colors decoration-0">
                                        <Image src="/assets/images/app-store-icon-white.svg" width={20} height={20} alt="App Store" />
                                        <div className="flex flex-col text-white">
                                            <span className="text-[10px] leading-none font-normal">Download on the</span>
                                            <span className="text-[14px] leading-tight font-bold">App Store</span>
                                        </div>
                                    </Link>
                                    {/* Dark Google Play Button */}
                                    <Link href={links.googlePlay} className="flex items-center gap-2 px-4 py-3 bg-[#e704e7] rounded-lg hover:bg-[#d603d3] transition-colors decoration-0">
                                        <Image src="/assets/images/google-play-icon-white.svg" width={20} height={20} alt="Google Play" />
                                        <div className="flex flex-col text-white">
                                            <span className="text-[10px] leading-none font-normal">GET IT ON</span>
                                            <span className="text-[14px] leading-tight font-bold">Google Play</span>
                                        </div>
                                    </Link>
                                </>
                            ) : (
                                <>
                                    {/* App Store Button */}
                                    <Link href={links.appStore} className="hover:opacity-90 transition-opacity">
                                        <Image
                                            src="/assets/images/app-store-button.svg"
                                            alt="Download on the App Store"
                                            width={120}
                                            height={40}
                                            className="h-10 w-auto"
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
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {/* Right Content */}
                <div className={`relative flex-1 flex flex-col items-center w-full self-start ${isDark ? "pt-[60px] md:pt-[120px]" : "mt-[20px] min-h-[400px]"
                    }`}>
                    {/* Phone Mockup */}
                    <div className={`relative z-20 w-full ${isDark ? "max-w-[352px]" : "max-w-[322px]"}`}>
                        <Image
                            src={currentImages.phoneMockup.src}
                            alt={currentImages.phoneMockup.alt}
                            width={isDark ? 352 : 322}
                            height={isDark ? 656 : 600}
                            className="w-full h-auto drop-shadow-2xl"
                            priority
                        />
                    </div>

                    {!isDark && (
                        /* Light Variant Sound Wave Background */
                        <div className="absolute top-[80%] -translate-y-1/2 w-full flex items-center justify-center right-[50px]">
                            <Image
                                src={currentImages.soundWave.src}
                                alt={currentImages.soundWave.alt}
                                width={847}
                                height={306}
                                className="object-contain max-w-none w-[120%] md:w-[847px] opacity-100"
                            />
                        </div>
                    )}
                </div>
            </div>

            {/* Dark Variant Sound Wave (Overlaying Section Bottom) */}
            {isDark && (
                <div className="absolute bottom-[155px] left-0 right-0 w-full translate-y-1/2 z-20 pointer-events-none flex justify-center">
                    <Image
                        src="/assets/images/Sound-wave-icon-on-transparent-background-PNG.svg"
                        alt="Sound Wave"
                        width={1920}
                        height={300}
                        className="w-full max-w-none object-cover"
                    />
                </div>
            )}
        </section>
    );
};
