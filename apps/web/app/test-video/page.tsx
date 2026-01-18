import { Video } from "@/components/sections";

export default function TestVideoPage() {
    return (
        <main className="min-h-screen bg-white">
            <Video
                title="See MORE in action"
                description="Sed at mi neque. Odio eius quis ante tristique lorem et, semper augue. In eros lorem et est congue dapibus. Nunc id tincidunt felis, vel pulvinar dui. Praesent fringilla nisl gravida."
                videoThumbnail={{
                    src: "/assets/images/video-background.png",
                    alt: "Video demonstration of MORE in action",
                }}
                videoUrl="https://www.youtube.com/watch?v=example"
                variant="default"
            />
        </main>
    );
}
