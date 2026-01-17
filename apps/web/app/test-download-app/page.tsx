import { DownloadApp } from "@/components/sections";

export default function TestDownloadAppPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
            <DownloadApp
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
                        alt: "Phone Preview"
                    },
                    soundWave: {
                        src: "/assets/images/sound-wave-background.png", // Ensure this path is correct relative to public
                        alt: "Wave"
                    }
                }}
            />
        </div>
    );
}
