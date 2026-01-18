import React, { useState, useEffect } from 'react';

interface TypingAnimationProps {
    phrases: string[];
    typingSpeed?: number;
    pauseTime?: number;
    className?: string;
    cursorClassName?: string;
    WrapperTag?: React.ElementType;
}

export const TypingAnimation: React.FC<TypingAnimationProps> = ({
    phrases,
    typingSpeed = 120,
    pauseTime = 2000,
    className = "",
    cursorClassName = "",
    WrapperTag = "span",
}) => {
    const [text, setText] = useState('');
    const [loopNum, setLoopNum] = useState(0);

    useEffect(() => {
        const i = loopNum % phrases.length;
        const fullText = phrases[i];
        let timer: ReturnType<typeof setTimeout>;

        if (text === fullText) {
            // Phrase complete: Pause, then clear and move to next phrase
            timer = setTimeout(() => {
                setText('');
                setLoopNum((prev) => prev + 1);
            }, pauseTime);
        } else {
            // Typing: Add next character
            timer = setTimeout(() => {
                setText(fullText.substring(0, text.length + 1));
            }, typingSpeed);
        }

        return () => clearTimeout(timer);
    }, [text, loopNum, phrases, typingSpeed, pauseTime]);

    return (
        <WrapperTag className={className}>
            <span>{text}</span>
            <span className={`border-r-[2px] md:border-r-[4px] animate-blink ml-1 ${cursorClassName}`}>
                &nbsp;
            </span>
        </WrapperTag>
    );
};
