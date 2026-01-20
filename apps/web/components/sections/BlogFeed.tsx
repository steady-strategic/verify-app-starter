import React from "react";
import { SectionWrapper } from "./SectionWrapper";
import { BlogFeedSectionProps } from "./types";
import Link from "next/link";

export const BlogFeed: React.FC<BlogFeedSectionProps> = ({
    variant = "default",
    posts,
    className = "",
    id,
}) => {
    return (
        <SectionWrapper id={id} className={` ${className}`} background="white">
            <div className="max-w-[1260px] mx-auto flex flex-col gap-16">
                {posts.map((post, index) => (
                    <div key={post.id} className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-center">
                        {/* Mockup Box */}
                        <div className="w-full lg:w-[540px] h-[407px] bg-stone-900 rounded-lg shadow-card flex-shrink-0">
                            {/* Optional image placeholder if needed in future */}
                        </div>

                        {/* Content Column */}
                        <div className="flex flex-col gap-6 max-w-[640px]">
                            {/* Title */}
                            <h2 className="font-serif text-[28px] font-bold tracking-[-0.56px] leading-[35px] text-stone-900">
                                {post.title}
                            </h2>

                            {/* Body Text */}
                            <p className="font-sans text-[18px] font-normal leading-[27px] text-stone-500">
                                {post.description}
                            </p>

                            {/* Button Container */}
                            <div className="w-fit">
                                <Link
                                    href={post.cta.href}
                                    className="group flex items-center gap-2 px-0 py-2 text-stone-900 font-sans text-[14px] font-medium border-b border-stone-200 hover:border-stone-900 transition-colors"
                                >
                                    <span>{post.cta.label}</span>
                                    <div className="w-6 h-6 flex items-center justify-center bg-stone-800 rounded-full group-hover:bg-stone-900 transition-colors">
                                        <img
                                            src={post.cta.iconSrc}
                                            alt="Arrow"
                                            className="w-3 h-3 invert" // Icons are likely black, invert makes them white.
                                        />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};
