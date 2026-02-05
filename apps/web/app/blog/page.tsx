
import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";
import { BlogFeedBanner } from "../../components/sections/BlogFeedBanner";
import { prisma } from "../../lib/db";
import Link from "next/link";
import Image from "next/image";

export default async function BlogPage() {
    const posts = await prisma.story.findMany({
        where: { published: true },
        orderBy: { createdAt: "desc" },
        include: {
            author: {
                select: {
                    firstName: true,
                    lastName: true,
                }
            }
        }
    });

    return (
        <div className="min-h-screen bg-stone-50">
            <Navbar scrolled={true} />

            <BlogFeedBanner
                title="Insights from Dr. Garland"
                description={
                    <>
                        This series offers research-driven perspectives on MORE Therapy and the science of healing from addiction, chronic pain, and emotional distress. Dr. Garland shares evidence-based insights on how this mind-body therapy can help retrain the brain, reduce suffering, and support lasting recovery.
                    </>
                }
                backgroundImage={{
                    src: "/assets/images/BlogFeedBanner/BlogFeedBackground.png",
                    alt: "Dr. Garland Insights Background"
                }}
            />

            <section className="py-24 px-6 md:px-12 lg:px-24 container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <Link
                            key={post.id}
                            href={`/blog/${post.slug}`}
                            className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100"
                        >
                            {/* Card Image */}
                            <div className="relative h-64 w-full overflow-hidden">
                                {post.imageUrl ? (
                                    <Image
                                        src={post.imageUrl}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-stone-200 flex items-center justify-center text-stone-400">
                                        <span className="text-4xl">📝</span>
                                    </div>
                                )}
                            </div>

                            {/* Card Content */}
                            <div className="p-8 flex flex-col flex-grow">
                                <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-600">
                                    <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                                </div>

                                {/* Title - Content Header 2 Style */}
                                <h2 className="mb-4 text-2xl font-serif font-bold text-stone-900 group-hover:text-amber-700 transition-colors line-clamp-2">
                                    {post.title}
                                </h2>

                                {/* Excerpt - Paragraph Style */}
                                <p className="text-stone-600 font-light leading-relaxed mb-6 line-clamp-3 flex-grow">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center text-amber-600 text-sm font-bold uppercase tracking-widest mt-auto">
                                    Read Article
                                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {posts.length === 0 && (
                    <div className="text-center py-12 text-stone-500">
                        No posts found. Check back soon for updates.
                    </div>
                )}
            </section>

            <Footer />
        </div>
    );
}
