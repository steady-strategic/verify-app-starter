"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageBanner } from "@/components/sections/PageBanner";
import { Cards3x1 } from "@/components/sections/Cards3x1";


export default function HowItWorksPage() {
    return (
        <div className="min-h-screen text-stone-700 overflow-x-hidden selection:bg-amber-100 selection:text-amber-900 pt-24">
            <Navbar scrolled={true} />

            <PageBanner
                title="How it Works"
                subtitle="Mindfulness-Oriented Recovery Enhancement"
                description={[
                    "An evidence‑based, neuroscience‑informed therapy—backed by more than 16 clinical trials and over $90 million in federal research—that unites innovative mindfulness, reappraisal, and savoring techniques into a powerful, sequenced mind‑body approach.",
                    "Hailed as one of the biggest breakthroughs in psychotherapy in the past 30 years, MORE has the strongest evidence base of any therapy for co-occurring addiction, chronic pain, and emotional distress."
                ]}
                backgroundImage={{
                    src: "/assets/images/page-banner/bg-how-it-works.png",
                    alt: "Background pattern"
                }}
                foregroundImage={{
                    src: "/assets/images/page-banner/right-how-it-works.png",
                    alt: "How It Works Process Illustration"
                }}
                variant="how-it-works"
                id="how-it-works-banner"
            />

            <Cards3x1
                features={[
                    {
                        iconSrc: "/assets/images/cards-3x1/mindfulness.svg",
                        body: "A form of mental training focused on strengthening self-awareness and self-regulation to help people observe their thoughts, emotions, and sensations without being swept away by them. Through practice, patients learn to transform addictive habits, craving, and chronic pain by exercising neural networks involved in attention, emotion regulation, and pain processing."
                    },
                    {
                        iconSrc: "/assets/images/cards-3x1/reappraisal.svg",
                        body: "A cognitive strategy integrating mindfulness used to reframe distressing thoughts, negative core beliefs, or unhelpful interpretations of challenging life situations. Instead of suppressing or ignoring difficult emotions, patients learn to efficiently engage prefrontal brain resources to shift their perspective in ways that reduce suffering and create healthier patterns of behavior."
                    },
                    {
                        iconSrc: "/assets/images/cards-3x1/savoring.svg",
                        body: "A deliberate midfulness practice of amplifying positive emotions, reconnecting with natural rewards, and restoring the capacity to feel healthy pleasure, meaning, and joy. Because addiction, pain, depression, and trauma can disrupt the brain’s reward system, savoring helps heal this dysfunction by directing attention toward positive experiences and retraining the mind to appreciate life."
                    }
                ]}
                id="how-it-works-cards"
            />

            <Footer />
        </div>
    );
}
