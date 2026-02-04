import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FaqAccordion } from "@/components/sections";
import { faqContent } from "@/content/pages/faq";

export default function Page() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar variant="light" transparent={false} />
            <main className="pt-24 min-h-[60vh]">
                <FaqAccordion {...faqContent.faqAccordion} />
            </main>
            <Footer />
        </div>
    );
}
