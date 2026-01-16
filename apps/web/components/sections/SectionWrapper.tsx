import React from "react";

interface SectionWrapperProps {
    children: React.ReactNode;
    className?: string;
    background?: "white" | "gray" | "transparent";
    id?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
    children,
    className = "",
    background = "transparent",
    id,
}) => {
    const bgClasses = {
        white: "bg-white",
        gray: "bg-gray-50",
        transparent: "bg-transparent",
    };

    return (
        <section
            id={id}
            className={`py-16 px-4 ${bgClasses[background]} ${className}`}
        >
            <div className="container mx-auto">
                {children}
            </div>
        </section>
    );
};
