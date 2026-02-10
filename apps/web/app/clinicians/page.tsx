import { PageBanner, Content, Cards2x3, TextClinicians, ProviderList, KnowMoreTall, VideoModTall } from "@/components/sections";
import { cliniciansContent } from "@/content/pages/clinicians";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Page() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar variant="light" transparent={false} />
            <main className="pt-24">
                <PageBanner {...cliniciansContent.pageBanner} />
                <Cards2x3 {...cliniciansContent.cards2x3} />
                <Content {...cliniciansContent.content} />
                <VideoModTall {...cliniciansContent.videoModTall} />
                <TextClinicians {...cliniciansContent.textClinicians} />
                <ProviderList {...cliniciansContent.providerList} />
                <KnowMoreTall {...cliniciansContent.knowMoreTall} />
            </main>
            <Footer />
        </div>
    );
}
