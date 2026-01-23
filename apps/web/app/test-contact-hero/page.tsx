import { ContactHero } from "@/components/sections/ContactHero";

export default function TestContactHeroPage() {
    return (
        <main>
            <ContactHero
                id="contact-hero"
                title="Contact Us"
                description="We'd love to hear from you. Whether you're a clinician interested in MORE certification, a patient looking for support, or an organization exploring training opportunities, our team is here to help."
                backgroundImage={{
                    src: "/assets/images/contact-hero-bg.png",
                    alt: "Contact Hero Background"
                }}
            />
        </main>
    );
}
