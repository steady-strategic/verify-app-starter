import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { VideoAbout, TextAbout, ProfileAbout } from "@/components/sections";
import { aboutContent } from "@/content/pages/about";

export default function Page() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar variant="light" transparent={false} />
            <main className="pt-24">
                <VideoAbout {...aboutContent.videoAbout} />
                <TextAbout {...aboutContent.textAbout} />
                <ProfileAbout {...aboutContent.profileAbout} />
            </main>
            <Footer />
        </div>
    );
}
