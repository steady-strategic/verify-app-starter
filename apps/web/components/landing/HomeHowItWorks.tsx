import React from "react";
import { PageBanner } from "../sections/PageBanner";

export default function HomeHowItWorks() {
    return (
        <PageBanner
            title="How It Works"
            description={[
                "Discover the simple and efficient process that powers our platform.",
                "We've designed every step to be intuitive and seamless, ensuring you get the most value with minimal effort."
            ]}
            backgroundImage={{
                src: "/images/background.png",
                alt: "Background pattern"
            }}
            foregroundImage={{
                src: "/images/brain-image.png",
                alt: "How It Works Process Illustration"
            }}
            variant="default"
            id="how-it-works"
        />
    );
}
