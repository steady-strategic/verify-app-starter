import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProfileAboutSectionProps } from "./types";

export const ProfileAbout: React.FC<ProfileAboutSectionProps> = ({
    className = "",
    image,
    title,
    body,
    cta
}) => {
    return (
        <div className={`w-full bg-white flex justify-center py-20 px-6 md:px-20 box-border ${className}`}>
            <section className="w-full max-w-[1280px] grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">

                {/* Image Column */}
                <div className="relative w-full max-w-[626px] h-auto aspect-[626/840] md:h-[840px] rounded-2xl overflow-hidden shadow-lg mx-auto md:mx-0">
                    <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Content Column */}
                <div className="flex flex-col items-start gap-8 font-sans">
                    <h2 className="text-3xl md:text-[40px] font-bold text-gray-900 leading-[120%]">
                        {title}
                    </h2>

                    <div className="text-lg text-gray-700 leading-relaxed flex flex-col gap-6">
                        {body}
                    </div>

                    {cta && (
                        <Link
                            href={cta.href}
                            className="inline-flex items-center gap-2 py-3 px-6 border border-gray-300 rounded-md text-gray-900 font-medium hover:bg-gray-50 transition-colors mt-4"
                        >
                            <span>{cta.text}</span>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 1L11 6M11 6L6 11M11 6H0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                    )}
                </div>

            </section>
        </div>
    );
};
