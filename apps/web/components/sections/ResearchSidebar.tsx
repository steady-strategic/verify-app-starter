
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    imageUrl: string | null;
    sidebarTitle: string | null;
    sidebarExcerpt: string | null;
}

interface ResearchSidebarProps {
    blogPosts?: BlogPost[];
}

export const ResearchSidebar: React.FC<ResearchSidebarProps> = ({ blogPosts = [] }) => {
    // Helper function to condense text (fallback)
    const condenseText = (text: string, maxLength: number) => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength).trim() + '...';
    };

    // Get AI-generated summary from database or fallback to truncation
    const getSummary = (post: BlogPost) => {
        // Use database values if available
        if (post.sidebarTitle && post.sidebarExcerpt) {
            return {
                title: post.sidebarTitle,
                excerpt: post.sidebarExcerpt
            };
        }

        // Fallback to truncation
        return {
            title: condenseText(post.title, 28),
            excerpt: condenseText(post.excerpt, 75)
        };
    };

    return (
        <div className="flex flex-col gap-12 sticky top-24">

            {/* Subscribe / Certified */}
            <div className="flex flex-col gap-4 p-5 bg-gray-50 rounded-lg">
                <h4 className="font-bold text-[14px] uppercase text-gray-900 tracking-wider">
                    Get <span className="text-primary-1">More</span> certified
                </h4>
                <p className="text-[14px] leading-relaxed text-gray-500">
                    Learn how to bring this research-backed therapy to your own patients.
                </p>
                <Link href="/clinicians/certified" className="bg-primary-1 text-white text-center font-bold py-2 px-4 rounded-md hover:bg-opacity-90 transition-all">
                    Pre-Register Now
                </Link>
            </div>

            {/* Latest News */}
            {blogPosts.length > 0 && (
                <div className="flex flex-col gap-6">
                    <h4 className="font-bold text-[14px] uppercase text-gray-900 tracking-wider">
                        Insights from Dr. Garland
                    </h4>

                    <div className="flex flex-col gap-6">
                        {blogPosts.map((post) => {
                            const { title, excerpt } = getSummary(post);

                            return (
                                <Link
                                    key={post.slug}
                                    href={`/blog/${post.slug}`}
                                    className="group flex gap-3 items-start cursor-pointer"
                                >
                                    {/* Image */}
                                    <div className="w-24 h-24 bg-gray-200 rounded-lg shrink-0 overflow-hidden relative">
                                        {post.imageUrl ? (
                                            <Image
                                                src={post.imageUrl}
                                                alt={post.title}
                                                fill
                                                className="object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-300">
                                                <span className="text-2xl">📷</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <h5 className="font-bold text-[16px] leading-[1.25] text-gray-900 group-hover:text-primary-1 transition-colors">
                                            {title}
                                        </h5>
                                        <p className="text-[14px] leading-[1.4] text-gray-500 line-clamp-2">
                                            {excerpt}
                                        </p>
                                        <span className="text-[14px] font-medium text-primary-1 underline">Learn MORE</span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};
