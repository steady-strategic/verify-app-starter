
import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";
import { BlogFeedBanner } from "../../components/sections/BlogFeedBanner";
import { prisma } from "../../lib/db";
import Link from "next/link";
import Image from "next/image";

export const dynamic = "force-dynamic";

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

            <section className="py-24 px-6 md:px-12 lg:px-24 container mx-auto max-w-7xl">
                <div className="flex flex-col gap-24">
                    {posts.map((post) => (
                        <div key={post.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            {/* Card Image - Spans 5 columns */}
                            <div className="lg:col-span-5 relative h-[340px] w-full rounded-[2.5rem] overflow-hidden shadow-sm">
                                {post.imageUrl ? (
                                    <Image
                                        src={post.imageUrl}
                                        alt={post.title}
                                        fill
                                        className="object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-stone-100 flex items-center justify-center text-stone-300">
                                        <span className="text-4xl">📷</span>
                                    </div>
                                )}
                            </div>

                            {/* Card Content - Spans 7 columns */}
                            <div className="lg:col-span-7 flex flex-col justify-center pl-0 lg:pl-4">
                                <h2 className="text-3xl md:text-[2rem] font-bold text-stone-900 mb-6 leading-tight">
                                    {post.title}
                                </h2>

                                <p className="text-stone-600 text-lg leading-relaxed mb-8 font-light">
                                    {post.excerpt}
                                </p>

                                <div>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="inline-flex items-center px-6 py-3 border border-stone-200 rounded-full text-stone-900 text-sm font-bold hover:bg-stone-50 hover:border-amber-200 transition-all group"
                                    >
                                        Read more
                                        <svg className="w-4 h-4 ml-2 text-stone-400 group-hover:text-amber-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
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
