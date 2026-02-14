import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { VideoMod, TextAbout, ProfileAbout } from "@/components/sections";
import { aboutContent } from "@/content/pages/about";

export default function Page() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar variant="light" transparent={false} />
            <main className="pt-24">
                <VideoMod
                    variant="about"
                    title="About Us"
                    subtitle="Together, we are working towards a future where anyone experiencing addiction, pain or emotional distress can find relief."
                    description=""
                    backgroundImage={{
                        src: "/assets/images/VideoAbout/Vid-background-comp.png",
                        alt: "Background"
                    }}
                    videoThumbnail={{
                        src: "/assets/images/VideoAbout/Vid-preview-comp.png",
                        alt: "Video Preview"
                    }}
                    videoUrl="https://www.youtube.com/watch?v=O68Eu3faEsg"
                />
                <TextAbout {...aboutContent.textAbout} />
                <ProfileAbout {...aboutContent.profileAbout} />
            </main>
            <Footer />
        </div>
    );
}
