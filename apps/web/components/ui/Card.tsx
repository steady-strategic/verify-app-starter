import React from "react";
import { Card as FlowbiteCard } from "flowbite-react";

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
    return (
        <FlowbiteCard className={className}>
            {children}
        </FlowbiteCard>
    );
}
