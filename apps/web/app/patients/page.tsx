import { PageBanner, AppBanner, VideoMod, PatientsText, KnowMoreTall, PatientsForm } from "@/components/sections";
import { patientsContent } from "@/content/pages/patients";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function PatientsPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar variant="light" transparent={false} />
            <main className="pt-24">
                <PageBanner {...patientsContent.pageBanner} />
                <VideoMod
                    variant="patients"
                    title="Dan Kruger’s story"
                    description="As an international champion motorcycle racer, Dan endured decades of high-impact crashes and countless surgeries. As a result, Dan relied on opioids for over 30 years."
                    backgroundImage={{
                        src: "/assets/images/VideoMod/VidMod-Background.png",
                        alt: "Background"
                    }}
                    videoThumbnail={{
                        src: "/assets/images/VideoMod/DanKruger.png",
                        alt: "Dan Kruger Video"
                    }}
                    videoUrl="https://www.youtube.com/watch?v=Dr5Y5m1lZyQ"
                />
                <PatientsText {...patientsContent.patientsText} />
                <KnowMoreTall {...patientsContent.knowMore} />
                <AppBanner
                    variant="patients"
                    title={
                        <span>
                            <span className="text-[#FA45E6]">MORE</span> Support, Anywhere
                        </span>
                    }
                    subtitle="Coming Soon!"
                    description="The MORE Therapy app is designed to support your well-being whether you’re working with a therapist or exploring these tools on your own."
                    secondaryDescription="Unique, neuroscience-informed mind-body practices will help to reduce craving, emotional distress, and pain, while strengthening your ability to find peace and joy. Use it to deepen your therapy experience or as a standalone resource you can return to anytime, anywhere."
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
                <PatientsForm />
            </main>
            <Footer />
        </div>
    );
}
