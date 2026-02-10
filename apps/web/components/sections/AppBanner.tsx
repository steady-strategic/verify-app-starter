
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AppBannerSectionProps } from "./types";

export const AppBanner: React.FC<AppBannerSectionProps> = ({
    variant = "default",
    title,
    subtitle,
    description,
    features,
    ctaText,
    appStoreLink,
    playStoreLink,
    backgroundImage,
    phoneImage,
    className = "",
    id,
}) => {
    return (
        <section
            id={id}
            className={`relative w-full h-[921px] overflow-hidden ${className}`}
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0 bg-[#1e0b5d]"> {/* Fallback color */}
                <Image
                    src={backgroundImage.src}
                    alt={backgroundImage.alt}
                    fill
                    className="object-cover object-center scale-[1.01]"
                    priority
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-0 flex flex-col md:flex-row items-start gap-12 md:gap-[101px] h-full">

                {/* Text Content */}
                <div className="flex-1 flex flex-col gap-8 text-white max-w-[699px] md:pl-[111px] pt-[96px]">
                    <div>
                        <div className="flex flex-col gap-4">
                            <div className="font-sans text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                                {title}
                            </div>
                            {subtitle && (
                                <p className="font-sans text-xl md:text-[38px] font-extralight italic text-white/90">
                                    {subtitle}
                                </p>
                            )}
                        </div>

                        <p className="font-sans text-lg leading-relaxed text-white/90 mt-8">
                            {description}
                        </p>

                        <div className="w-full h-px bg-white/20 mt-4" />
                    </div>

                    {/* Features List */}
                    <ul className="flex flex-col gap-4">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#D80ADA] flex items-center justify-center">
                                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <span className="font-sans text-base md:text-[16px] font-medium text-white">
                                    {feature}
                                </span>
                            </li>
                        ))}
                    </ul>

                    {/* CTA & Store Buttons */}
                    <div className="flex flex-col gap-4 mt-4">
                        {ctaText && (
                            <p className="font-sans text-lg font-medium text-white">
                                {ctaText}
                            </p>
                        )}
                        <div className="flex flex-wrap gap-4">
                            {appStoreLink && (
                                <Link href={appStoreLink} className="transform hover:scale-105 transition-transform duration-300">
                                    {/* App Store Badge SVG */}
                                    <div className="bg-[#D80ADA] hover:bg-[#c009c2] text-white rounded-lg px-4 py-2 flex items-center gap-3 w-fit min-w-[160px] h-[50px] transition-colors">
                                        <svg width="24" height="29" viewBox="0 0 24 29" fill="white" xmlns="http://www.w3.org/2000/svg" className="w-6 h-auto">
                                            <path d="M17.8927 19.8252C16.8927 21.3252 15.7927 22.9252 14.1927 22.9252C12.6927 22.9252 12.1927 22.0252 10.4927 22.0252C8.69273 22.0252 8.29273 22.8252 6.79273 22.9252C5.09273 23.0252 3.89273 21.2252 2.79273 19.6252C0.59273 16.4252 -1.00727 10.4252 1.29273 6.3252C2.49273 4.3252 4.49273 3.0252 6.49273 3.0252C8.09273 3.0252 9.59273 4.1252 10.5927 4.1252C11.5927 4.1252 13.3927 2.8252 15.3927 2.9252C16.1927 2.9252 18.5927 3.2252 19.9927 5.2252C19.8927 5.3252 17.5927 6.6252 17.5927 9.5252C17.5927 12.9252 20.4927 14.1252 20.5927 14.1252C20.4927 14.5252 20.0927 16.0252 19.4927 17.0252C18.9927 17.9252 18.3927 18.9252 17.8927 19.8252ZM10.5927 2.0252C11.3927 1.0252 11.7927 -0.174805 11.6927 -1.2748C10.7927 -1.2748 9.59273 -0.674805 8.99273 0.0251953C8.49273 0.625195 7.99273 1.8252 8.19273 2.9252C9.19273 3.0252 10.0927 2.6252 10.5927 2.0252Z" />
                                        </svg>
                                        <div className="flex flex-col leading-none">
                                            <span className="text-[10px] font-medium opacity-90 block mb-0.5">Download on the</span>
                                            <span className="text-[16px] font-bold block">AppStore</span>
                                        </div>
                                    </div>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>

                {/* Phone Mockup */}
                <div className="flex-1 w-full max-w-sm md:max-w-md relative flex justify-center self-center md:self-auto pt-[96px]">
                    <div className="relative w-full h-[640px]">
                        <Image
                            src={phoneImage.src}
                            alt={phoneImage.alt}
                            fill
                            className="object-contain drop-shadow-2xl"
                            priority
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};
