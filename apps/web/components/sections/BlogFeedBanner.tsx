
import React from 'react';
import { BlogFeedBannerSectionProps } from './types';
import Image from 'next/image';

export const BlogFeedBanner: React.FC<BlogFeedBannerSectionProps> = ({
    title,
    description,
    backgroundImage,
    className,
}) => {
    return (
        <section className={`relative w-full h-[680px] flex items-center ${className}`}>
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={backgroundImage.src}
                    alt={backgroundImage.alt}
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay if needed for text readability, but design seems to use specific gradient image */}
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full px-6 md:pl-[80px]">
                <div className="max-w-2xl">
                    {/* Title */}
                    <h1 className="text-white text-4xl md:text-6xl font-bold font-sans mb-6 leading-tight">
                        {title}
                    </h1>

                    {/* Description */}
                    <div className="text-white text-lg md:text-xl font-light font-sans leading-relaxed opacity-90">
                        {description}
                    </div>

                    {/* CTA Button */}
                    <div className="mt-8">
                        <a
                            href="/know-more"
                            className="inline-block px-8 py-3 bg-primary-1 text-white text-lg font-semibold rounded-lg hover:bg-[#BA00B8] transition-all duration-300 shadow-md"
                        >
                            Sign Up for Insights
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
