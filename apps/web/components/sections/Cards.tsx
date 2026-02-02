import Image from "next/image";
import { CardsSectionProps } from "./types";

export const Cards = ({
    title = (
        <>
            <span className="text-primary-1">MORE</span>
            <span className="text-gray-700">
                {" "}
                is a structured, rigorously-tested therapeutic protocol. Patients engage
                in mind-body training, delivered individually or in a group setting, to
                learn unique mindfulness, reappraisal, and savoring skills to strengthen
                recovery and generate well-being.
            </span>
        </>
    ),
    items = [
        {
            icon: {
                src: "/assets/images/Cards/item-0.svg",
                alt: "Mindfulness",
            },
            title: (
                <>
                    <span className="text-primary-1">MORE</span>
                    <span className="text-gray-900"> Mindfulness</span>
                </>
            ),
            description:
                "A form of mental training focused on strengthening self-awareness and self-regulation to help people observe their thoughts, emotions, and sensations without being swept away by them. Through practice, patients learn to transform addictive habits, craving, and chronic pain by exercising neural networks involved in attention, emotion regulation, and pain processing.",
        },
        {
            icon: {
                src: "/assets/images/Cards/item-1.svg",
                alt: "Reappraisal",
            },
            title: (
                <>
                    <span className="text-primary-1">MORE</span>
                    <span className="text-gray-900"> Reappraisal</span>
                </>
            ),
            description:
                "A cognitive strategy integrating mindfulness used to reframe distressing thoughts, negative core beliefs, or unhelpful interpretations of challenging life situations. Instead of suppressing or ignoring difficult emotions, patients learn to efficiently engage prefrontal brain resources to shift their perspective in ways that reduce suffering and create healthier patterns of behavior.",
        },
        {
            icon: {
                src: "/assets/images/Cards/icon-shapes.svg",
                alt: "Savoring",
            },
            title: (
                <>
                    <span className="text-primary-1">MORE</span>
                    <span className="text-gray-900"> Savoring</span>
                </>
            ),
            description:
                "A deliberate mindfulness practice of amplifying positive emotions, reconnecting with natural rewards, and restoring the capacity to feel healthy pleasure, meaning, and joy. Because addiction, pain, depression, and trauma can disrupt the brain’s reward system, savoring helps heal this dysfunction by directing attention toward positive experiences and retraining the mind to appreciate life.",
        },
    ],
    className = "",
}: CardsSectionProps) => {
    return (
        <div
            className={`w-full bg-white overflow-hidden flex flex-col items-center py-20 px-4 md:px-0 box-border ${className}`}
        >
            <section className="w-full max-w-screen-xl flex flex-col items-center gap-12 lg:gap-[92px] text-center text-3xl font-sans">
                <div className="self-stretch flex flex-col items-center justify-center">
                    <h3 className="m-0 max-w-4xl relative text-inherit tracking-tight leading-[1.25] font-serif font-bold inline-block">
                        {title}
                    </h3>
                </div>
                <section className="self-stretch flex flex-col md:flex-row items-start gap-12 text-left text-xl">
                    {items.map((item, index) => (
                        <div key={index} className="flex-1 flex flex-col items-start gap-4">
                            <Image
                                className="w-12 h-12 rounded-full"
                                width={48}
                                height={48}
                                alt={item.icon.alt}
                                src={item.icon.src}
                            />
                            <div className="self-stretch flex flex-col items-start gap-2">
                                <h3 className="m-0 self-stretch relative text-inherit leading-[1.25] font-serif font-bold">
                                    {item.title}
                                </h3>
                                <div className="self-stretch relative text-lg leading-[1.5] text-gray-900">
                                    {item.description}
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </section>
        </div>
    );
};


