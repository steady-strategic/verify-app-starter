import { PageBanner, App, Video, PatientsText, KnowMoreTall } from "@/components/sections";
import { patientsContent } from "@/content/pages/patients";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function PatientsPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar variant="light" transparent={false} />
            <main className="pt-24">
                <PageBanner {...patientsContent.pageBanner} />
                <Video {...patientsContent.video} />
                <PatientsText {...patientsContent.patientsText} />
                <KnowMoreTall {...patientsContent.knowMore} />
                <App variant="patients" />
            </main>
            <Footer />
        </div>
    );
}
