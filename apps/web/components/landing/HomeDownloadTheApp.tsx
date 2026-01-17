import React from "react";
import { DownloadApp } from "@/components/sections";

export default function HomeDownloadTheApp() {
    return (
        <DownloadApp
            id="download-app"
            title="Experience MORE on Mobile"
            description="Download our mobile app to access all features, track your progress, and stay connected with your community anytime, anywhere."
            features={[
                "Real-time notifications and updates",
                "Offline access to your saved content",
                "Seamless synchronization across all devices"
            ]}
            downloadLabel="Download the app now"
            links={{
                appStore: "#",
                googlePlay: "#"
            }}
            images={{
                phoneMockup: {
                    src: "/assets/images/phone-mockup.svg",
                    alt: "Mobile App Mockup"
                },
                soundWave: {
                    src: "/assets/images/sound-wave-background.png",
                    alt: "Sound Wave Background"
                }
            }}
        />
    );
}
