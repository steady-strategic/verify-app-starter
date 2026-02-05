
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
        <section className={`relative w-full h-[560px] flex items-center ${className}`}>
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
            <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24">
                <div className="max-w-2xl">
                    {/* Title */}
                    <h1 className="text-white text-5xl md:text-6xl font-bold font-serif mb-6 leading-tight">
                        {title}
                    </h1>

                    {/* Description */}
                    <div className="text-white text-lg md:text-xl font-light leading-relaxed opacity-90">
                        {description}
                    </div>
                </div>
            </div>
        </section>
    );
};
