import React from "react";
import { DownloadApp } from "@/components/sections";

export default function HomeDownloadTheAppDark() {
    return (
        <DownloadApp
            id="download-app-dark"
            variant="dark"
            title="Download the MORE App"
            description="Experience our powerful mobile application with dark mode support. Track your progress, access content offline, and stay connected with your community in style."
            features={[
                "Premium dark mode interface",
                "Enhanced visual notifications",
                "Seamless synchronization across all devices"
            ]}
            downloadLabel="Download the App"
            links={{
                appStore: "#",
                googlePlay: "#"
            }}
            images={{
                phoneMockup: {
                    src: "/assets/images/phone-mockup-dark.svg",
                    alt: "Mobile App Mockup Dark"
                },
                soundWave: {
                    src: "/assets/images/sound-wave-dark.png",
                    alt: "Sound Wave Background Dark"
                }
            }}
        />
    );
}
