"use client";

import React, { useState, useEffect } from "react";
import { BlobAnimation } from "./BlobAnimation";

export const MobileAppMockup: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(35);

    useEffect(() => {
        let interval: any;
        if (isPlaying) {
            interval = setInterval(() => {
                setProgress(p => (p >= 100 ? 0 : p + 0.1));
            }, 100);
        }
        return () => clearInterval(interval);
    }, [isPlaying]);

    return (
        <div className="relative w-[320px] h-[640px] bg-stone-900 rounded-[3rem] p-3 shadow-2xl border-[8px] border-stone-200 flex-shrink-0">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-stone-200 rounded-b-2xl z-40"></div>

            {/* Screen Container */}
            <div className={`relative w-full h-full rounded-[2.5rem] overflow-hidden flex flex-col p-6 pt-10 transition-colors duration-1000 ${isPlaying ? 'bg-transparent' : 'bg-stone-50'}`}>

                {/* Dynamic Morphing Background Layer */}
                <div className={`absolute inset-0 z-0 transition-opacity duration-1000 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="absolute inset-0 morphing-gradient animate-morph"></div>
                    <div className="absolute inset-0 bg-stone-900/10 backdrop-blur-[2px]"></div>
                </div>

                {/* Content */}
                <div className="relative z-20 flex justify-between items-center mb-8">
                    <button className={`${isPlaying ? 'text-white' : 'text-stone-400'} hover:scale-110 transition-all`}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <span className={`text-[10px] font-bold uppercase tracking-[0.3em] ${isPlaying ? 'text-white/90 drop-shadow-sm' : 'text-stone-400'}`}>Lesson 04</span>
                    <button className={`${isPlaying ? 'text-white' : 'text-stone-400'} hover:scale-110 transition-all`}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                        </svg>
                    </button>
                </div>

                {/* Reactive Blob Section */}
                <div className="flex-1 flex flex-col items-center justify-center relative">
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 scale-110">
                        <BlobAnimation active={isPlaying} />
                    </div>

                    <div className="relative z-30 text-center space-y-2 mt-auto pb-12">
                        <h4 className={`text-2xl serif font-normal transition-colors duration-500 ${isPlaying ? 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]' : 'text-stone-900'}`}>
                            Mindful Breath Recovery
                        </h4>
                        <p className={`text-sm italic transition-colors duration-500 ${isPlaying ? 'text-white/80 font-medium' : 'text-stone-500'}`}>
                            Part of the 'Resilience' Series
                        </p>
                    </div>
                </div>

                {/* Audio Controls */}
                <div className="relative z-30 space-y-8 pb-4">
                    <div className="space-y-2">
                        <div className={`relative w-full h-1 rounded-full overflow-hidden ${isPlaying ? 'bg-white/30' : 'bg-stone-200'}`}>
                            <div
                                className={`absolute top-0 left-0 h-full transition-all duration-300 ${isPlaying ? 'bg-white shadow-[0_0_8px_rgba(255,255,255,0.6)]' : 'bg-rose-300'}`}
                                style={{ width: `${progress}%` }}
                            ></div>
                        </div>
                        <div className={`flex justify-between text-[10px] font-bold uppercase tracking-wider ${isPlaying ? 'text-white/60' : 'text-stone-400'}`}>
                            <span>04:12</span>
                            <span>12:00</span>
                        </div>
                    </div>

                    <div className="flex justify-between items-center px-4">
                        <button className={`${isPlaying ? 'text-white/60' : 'text-stone-300'} hover:text-white transition-colors`}>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M16 18V6H14V18H16ZM11 12L5 8V16L11 12Z" /></svg>
                        </button>
                        <button
                            onClick={() => setIsPlaying(!isPlaying)}
                            className={`w-16 h-16 rounded-full flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all ${isPlaying ? 'bg-white text-stone-900' : 'bg-stone-900 text-white'}`}
                        >
                            {isPlaying ? (
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
                            ) : (
                                <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                            )}
                        </button>
                        <button className={`${isPlaying ? 'text-white/60' : 'text-stone-300'} hover:text-white transition-colors`}>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8 6V18H10V6H8ZM13 12L19 16V8L13 12Z" /></svg>
                        </button>
                    </div>
                </div>

                {/* Home Indicator */}
                <div className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 rounded-full z-40 ${isPlaying ? 'bg-white/30' : 'bg-stone-300'}`}></div>
            </div>
        </div>
    );
};
