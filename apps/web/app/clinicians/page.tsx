import { PageBanner, Content, Cards2x3, TextClinicians, ProviderList, KnowMoreTall, VideoModTall } from "@/components/sections";
import { cliniciansContent } from "@/content/pages/clinicians";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function CliniciansPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar variant="light" transparent={false} />
            <main className="pt-24">
                <PageBanner {...cliniciansContent.pageBanner} />
                <Cards2x3 {...cliniciansContent.cards2x3} />
                <Content {...cliniciansContent.content} />
                <VideoModTall
                    title="MORE is more than therapy. It’s transforming lives."
                    subtitle="Hear from Dan Kruger—international motorcycle racing champion. After decades of high-impact crashes and countless surgeries, Dan relied on opioids for more than 30 years. Strength and willpower weren’t enough. The cycle felt inescapable."
                    highlight={
                        <span>
                            Then Dan found <span className="text-primary-1">MORE.</span>
                        </span>
                    }
                    description="Through MORE, Dan retrained his brain’s response to pain and craving, tapered completely off opioids, and rebuilt emotional regulation while connecting with meaning, joy, and a life beyond pain."
                    backgroundImage={{
                        src: "/assets/images/VideoModTall/VideoModTall-bg.avif",
                        alt: "Video Background"
                    }}
                    videoThumbnail={{
                        src: "/assets/images/VideoModTall/DanKruger.avif",
                        alt: "Dan Kruger"
                    }}
                    videoUrl="https://www.youtube.com/watch?v=ya_I9TgDWng&feature=youtu.be"
                />
                <TextClinicians {...cliniciansContent.textClinicians} />
                <ProviderList {...cliniciansContent.providerList} />
                <KnowMoreTall {...cliniciansContent.knowMoreTall} />
            </main>
            <Footer />
        </div>
    );
}
