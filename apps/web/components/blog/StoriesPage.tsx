"use client";

import React from "react";
import Link from "next/link";

interface Story {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    image: string;
}

interface StoriesPageProps {
    stories: Story[];
}

export const StoriesPage: React.FC<StoriesPageProps> = ({ stories }) => {
    return (
        <div className="bg-cream pt-32 pb-24 min-h-screen">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto mb-20 text-center">
                    <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold mb-6">
                        The MORE Journal
                    </span>
                    <h1 className="text-5xl md:text-6xl serif text-stone-900 mb-8 leading-tight">
                        Stories of <span className="italic">transformation</span> and the <span className="italic">science</span> behind it.
                    </h1>
                    <p className="text-xl text-stone-500 font-light leading-relaxed max-w-2xl mx-auto">
                        Deep dives into the clinical research and personal experiences that define the path of Mindfulness-Oriented Recovery Enhancement.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="grid gap-16">
                        {stories.map((story) => (
                            <Link
                                key={story.id}
                                href={`/stories/${story.id}`}
                                className="group cursor-pointer grid md:grid-cols-12 gap-8 items-center"
                            >
                                <div className="md:col-span-5 rounded-[2rem] overflow-hidden aspect-[4/3] shadow-lg">
                                    <img
                                        src={story.image || "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200"}
                                        alt={story.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="md:col-span-7 flex flex-col justify-center">
                                    <div className="flex items-center space-x-2 mb-4">
                                        <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">{story.category}</span>
                                        <span className="text-stone-300">•</span>
                                        <span className="text-[10px] text-stone-400 font-medium">{story.date}</span>
                                    </div>
                                    <h2 className="text-3xl serif text-stone-900 mb-4 group-hover:text-amber-700 transition-colors leading-tight">
                                        {story.title}
                                    </h2>
                                    <p className="text-stone-500 text-base font-light leading-relaxed mb-6">
                                        {story.excerpt}
                                    </p>
                                    <div className="flex items-center space-x-3 text-stone-900 font-bold text-xs uppercase tracking-widest hover:text-amber-600 transition-colors">
                                        <span>Read Full Story</span>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="mt-24 text-center">
                    <Link
                        href="/"
                        className="text-stone-400 text-xs font-bold uppercase tracking-widest hover:text-stone-900 transition-colors flex items-center justify-center mx-auto"
                    >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};
