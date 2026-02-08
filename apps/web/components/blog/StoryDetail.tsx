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

                    <div className="mt-20 pt-12 border-t border-stone-100 flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                            <img src="https://picsum.photos/id/64/48/48" alt="Author" className="w-12 h-12 rounded-full" />
                            <div>
                                <p className="font-bold text-stone-900 text-sm">{story.author}</p>
                                <p className="text-stone-400 text-xs font-medium">Editor & Contributor</p>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <button className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:text-amber-600 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                            </button>
                            <button className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 hover:text-amber-600 transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                            </button>
                        </div>
                    </div>

                    <div className="mt-24 text-center pb-24">
                        <Link
                            href="/resources/blog"
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
