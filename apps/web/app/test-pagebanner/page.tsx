import { PageBanner } from "@/components/sections";

export default function TestPageBannerPage() {
    return (
        <main className="min-h-screen bg-white">
            <PageBanner
                title="How it Works"
                description={[
                    "Mindfulness-Oriented Recovery Enhancement is a carefully curated and structured three step mind-body training.",
                    "Over the course of 8 weekly sessions, patients will experience guided meditations in a group or individual setting that guide them through mindfulness, reappraisal and savoring.",
                ]}
                backgroundImage={{
                    src: "/assets/images/brain-image.jpg",
                    alt: "Brain with neural connections",
                }}
                foregroundImage={{
                    src: "/assets/images/brain-image.jpg",
                    alt: "Brain with neural connections",
                }}
                variant="default"
            />
        </main>
    );
}
