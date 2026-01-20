"use client";

import React from "react";
import Link from "next/link";

interface Story {
    id: number;
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
        <div className="bg-cream pt-32 pb-24 min-h-screen">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto">
                    <Link
                        href="/resources/blog"
                        className="text-amber-800 text-xs font-bold uppercase tracking-widest hover:text-amber-600 transition-colors flex items-center mb-12"
                    >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        View All Stories
                    </Link>

                    <div className="mb-12">
                        <div className="flex items-center space-x-2 mb-6">
                            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest px-3 py-1 bg-amber-50 rounded-full">{story.category}</span>
                            <span className="text-stone-400 font-medium text-xs">{story.date}</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl serif text-stone-900 mb-8 leading-[1.1]">
                            {story.title}
                        </h1>
                        <p className="text-xl text-stone-500 italic font-light leading-relaxed border-l-4 border-amber-200 pl-6 py-2">
                            {story.excerpt}
                        </p>
                    </div>

                    <div className="rounded-[3rem] overflow-hidden shadow-2xl mb-16 aspect-video">
                        <img
                            src={story.image || "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200"}
                            alt={story.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="prose prose-stone prose-lg max-w-none text-stone-700 font-light leading-loose space-y-8 mb-16">
                        {story.body.split('\n\n').map((paragraph, idx) => (
                            <p key={idx}>{paragraph}</p>
                        ))}
                    </div>

                    {/* External Media Link Preview Section */}
                    {story.mediaLink && (
                        <div className="mb-16">
                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-4">Supplementary Content</h4>
                            <a
                                href={story.mediaLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block bg-white border border-stone-200 rounded-[2rem] p-6 hover:border-amber-300 hover:shadow-lg transition-all"
                            >
                                <div className="flex items-center space-x-6">
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors ${isVideoLink(story.mediaLink) ? 'bg-rose-50 text-rose-600 group-hover:bg-rose-600 group-hover:text-white' : 'bg-stone-50 text-stone-600 group-hover:bg-stone-900 group-hover:text-white'}`}>
                                        {isVideoLink(story.mediaLink) ? (
                                            <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                                        ) : (
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                                        )}
                                    </div>
                                    <div className="flex-1 overflow-hidden">
                                        <p className="text-sm font-bold text-stone-900 mb-1">
                                            {isVideoLink(story.mediaLink) ? 'Watch Video Resource' : 'View External Resource'}
                                        </p>
                                        <p className="text-xs text-stone-500 truncate font-mono italic">
                                            {story.mediaLink}
                                        </p>
                                    </div>
                                    <div className="text-stone-300 group-hover:text-amber-500 transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                    </div>
                                </div>
                            </a>
                        </div>
                    )}

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

                    <div className="mt-24 text-center">
                        <Link
                            href="/resources/blog"
                            className="px-8 py-4 bg-stone-900 text-white rounded-full font-bold text-sm hover:bg-stone-800 transition-all uppercase tracking-widest inline-block"
                        >
                            Discover More Stories
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
