import { Content } from "@/components/sections";

export default function TestContentPage() {
    return (
        <main className="min-h-screen bg-white">
            <Content
                title="For Patients"
                subtitle="Get relief from chronic pain, addiction, stress, depression and more."
                features={[
                    { text: "Learn to transform addictive habits, craving, and chronic pain" },
                    { text: "Reframe distressing thoughts and negative core beliefs" },
                    { text: "Amplify positive emotions and reconnect with natural rewards" },
                    { text: "Experience powerful and lasting change with just 5 weekly sessions" },
                ]}
                image={{
                    src: "/assets/images/patient-hero-image.jpg",
                    alt: "Patient experiencing relief",
                }}
                variant="default"
            />
        </main>
    );
}
