
import React from "react";
import { NavbarWrapper } from "@/components/layout/NavbarWrapper";
import { Footer } from "@/components/layout/Footer";
import { Hero, Brands, ResearchHome, AboutHome, ContentHome, Testimonials, AppBanner, BlogHome, HowItWorks, KnowMore } from "@/components/sections";
import { homeContent } from "@/content/pages/home";
import { prisma } from "@/lib/db";

// Force dynamic rendering to ensure latest blog posts are shown
export const dynamic = "force-dynamic";

export default async function Page() {
    // Fetch latest 3 blog posts
    const posts = await prisma.story.findMany({
        take: 3,
        where: { published: true },
        orderBy: { createdAt: "desc" },
        select: {
            title: true,
            slug: true,
            excerpt: true,
            imageUrl: true,
            createdAt: true,
        }
    });

    // Map posts to BlogHome items format
    const dynamicBlogItems = posts.map(post => ({
        image: {
            src: post.imageUrl || "/assets/images/VideoClinicians/Thumbnail.png",
            alt: post.title
        },
        category: "Blog Post", // Default category or could be improved later
        title: post.title,
        description: post.excerpt,
        href: `/blog/${post.slug}`
    }));

    // Use dynamic items if available, otherwise fallback to static content
    const blogHomeProps = {
        ...homeContent.blogHome,
        items: dynamicBlogItems.length > 0 ? dynamicBlogItems : homeContent.blogHome.items
    };

    return (
        <div className="min-h-screen bg-white">
            <NavbarWrapper />
            <main>
                <Hero />
                <Brands />
                <ResearchHome />
                <AboutHome />
                <HowItWorks variant="home" />
                <ContentHome />
                <AppBanner
                    title={
                        <span>
                            <span className="text-[#FA45E6]">MORE</span> Support, Anywhere
                        </span>
                    }
                    subtitle="Coming Soon!"
                    description="Take your mindfulness practices on the go. Now you can access MORE meditations anytime, anywhere."
                    features={[
                        "Pleasant meditations designed to help ease cravings, pain, and stress",
                        "Learn skills that support healing and a renewed sense of joy in daily life",
                        "Use alongside MORE therapy sessions for the fullest impact"
                    ]}
                    ctaText="Download the App"
                    appStoreLink="#"
                    backgroundImage={{
                        src: "/assets/images/AppBanner/AppBanner-BG.png",
                        alt: "App Banner Background"
                    }}
                    phoneImage={{
                        src: "/assets/images/AppBanner/PhoneMockup.png",
                        alt: "App Preview"
                    }}
                />
                <Testimonials />
                <BlogHome {...blogHomeProps} />
                <KnowMore {...homeContent.knowMore} />
            </main>
            <Footer />
        </div>
    );
}
