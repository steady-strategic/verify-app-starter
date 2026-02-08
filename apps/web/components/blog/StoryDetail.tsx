"use client";

import React from "react";
import Link from "next/link";

interface Story {
    id: string | number;
    title: string;
    excerpt: string;
    body: string;
    author: string;
    category: string;
    date: string;
    image: string;
    mediaLink?: string;
}

interface StoryDetailProps {
    story: Story;
}

export const StoryDetail: React.FC<StoryDetailProps> = ({ story }) => {
    const isVideoLink = (url?: string) => {
        if (!url) return false;
        return url.includes('youtube.com') || url.includes('youtu.be') || url.includes('vimeo.com');
    };

    return (
        <article className="bg-white min-h-screen pt-[65px]">
            <div className="w-full h-[600px] relative">
                <img
                    src={story.image || "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200"}
                    alt={story.title}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto">
                    <h1 className="py-16 text-4xl md:text-6xl serif text-stone-900 leading-[1.1] font-extrabold tracking-tight">
                        {story.title.split(/(MORE)/g).map((part, i) => (
                            part === "MORE" ? <span key={i} className="text-primary-1">{part}</span> : part
                        ))}
                    </h1>

                    <div
                        className="story-content max-w-none text-stone-700 font-light leading-loose space-y-8 mb-16"
                        dangerouslySetInnerHTML={{ __html: story.body }}
                    />
                    <style jsx global>{`
                        .story-content h1 {
                            font-family: sans-serif;
                            font-size: 24px;
                            font-weight: 600;
                            line-height: 1.5;
                            color: #111928;
                            margin-top: 1.25em;
                            margin-bottom: 0.25em;
                        }
                        .story-content h2 {
                            font-family: sans-serif;
                            font-size: 28px;
                            font-weight: 600;
                            line-height: 1.25;
                            letter-spacing: -0.56px;
                            color: #111928;
                            margin-top: 1.75em;
                            margin-bottom: 0.75em;
                        }
                        .story-content p {
                            font-family: sans-serif;
                            font-size: 18px;
                            font-weight: 400;
                            line-height: 1.5;
                            letter-spacing: 0px;
                            color: #111928;
                            margin-bottom: 1.25em;
                        }
                        .story-content ul {
                            list-style-type: disc;
                            padding-left: 1.5em;
                            margin-bottom: 1.25em;
                        }
                        .story-content ol {
                            list-style-type: decimal;
                            padding-left: 1.5em;
                            margin-bottom: 1.25em;
                        }
                        .story-content a {
                            color: #2563eb;
                            text-decoration: underline;
                        }
                        .story-content strong {
                            font-weight: 700;
                        }
                        .story-content em {
                            font-style: italic;
                        }
                    `}</style>



                    <div className="mt-24 text-center pb-24">
                        <Link
                            href="/blog"
                            className="px-8 py-4 bg-stone-900 text-white rounded-full font-bold text-sm hover:bg-stone-800 transition-all uppercase tracking-widest inline-block"
                        >
                            Discover More Stories
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
};
