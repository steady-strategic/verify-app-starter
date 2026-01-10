"use client";

import { useState, useRef, useEffect } from "react";
import { Navbar } from "../../../../components/layout/Navbar";
import { Footer } from "../../../../components/layout/Footer";

// Placeholder module data
const MODULES = [
    {
        id: 1,
        title: "Foundations of Mindfulness",
        shortDescription: "Build awareness and presence through foundational practices.",
        description: "Learn to identify and amplify the positive physiological sensations associated with breathing and mindful awareness.",
        category: "Foundations",
        accent: "bg-rose-100 text-rose-700",
        audioUrl: "/audio/foundations.mp3", // placeholder
        videoUrl: "/video/foundations.mp4", // placeholder
        literature: `# Foundations of Mindfulness

## Overview
Mindfulness is the foundational skill for MORE therapy. This module introduces you to the core practices of present-moment awareness and non-judgmental observation.

## Key Concepts
- **Present Moment Awareness**: Learning to anchor your attention in the here and now
- **Non-Judgmental Observation**: Observing thoughts and sensations without criticism
- **Breath as an Anchor**: Using the breath as a tool to ground yourself

## Practice Guidelines
1. Find a quiet, comfortable space
2. Set aside 10-15 minutes for practice
3. Begin with gentle breath awareness
4. Notice sensations without trying to change them
5. Return to the breath when the mind wanders

## Clinical Evidence
Research shows that regular mindfulness practice can:
- Reduce stress and anxiety
- Improve emotional regulation
- Enhance pain management
- Support addiction recovery

## Next Steps
After completing this foundational module, you'll be ready to explore more advanced practices in the Recovery and Pain Management modules.`
    },
    {
        id: 2,
        title: "The Urge Surfer",
        shortDescription: "Navigate cravings by observing them as temporary waves.",
        description: "A specialized technique to navigate intense cravings by observing them as temporary waves that rise and fall.",
        category: "Recovery",
        accent: "bg-blue-100 text-blue-700",
        audioUrl: "/audio/urge-surfer.mp3",
        videoUrl: "/video/urge-surfer.mp4",
        literature: `# The Urge Surfer Technique

## Understanding Cravings
Cravings are temporary neural events that, like ocean waves, build in intensity, peak, and then naturally subside. The Urge Surfer technique teaches you to ride these waves rather than being overwhelmed by them.

## The Wave Metaphor
Imagine standing in the ocean as waves approach. You can:
- Try to stop the wave (impossible)
- Let it crash over you (overwhelming)
- Surf the wave (skillful navigation)

## Practice Steps
1. **Notice the Urge**: Recognize when a craving begins
2. **Pause and Breathe**: Take three deep breaths
3. **Observe Sensations**: Where do you feel the urge in your body?
4. **Watch the Wave**: Notice how it builds, peaks, and falls
5. **Ride it Out**: Stay present until it passes

## Neuroscience Insight
Research shows that cravings typically peak within 3-5 minutes and then naturally decrease. By surfing the urge, you're retraining your brain's reward circuitry.

## Success Tips
- Practice daily, even when not experiencing strong cravings
- Keep a journal of your urge surfing experiences
- Celebrate each time you successfully ride out an urge`
    },
    {
        id: 3,
        title: "Compassionate Body Scan",
        shortDescription: "Direct loving-kindness toward areas of chronic pain.",
        description: "Direct loving-kindness toward areas of chronic pain to restructure the neural response to discomfort.",
        category: "Pain Management",
        accent: "bg-amber-100 text-amber-700",
        audioUrl: "/audio/body-scan.mp3",
        videoUrl: "/video/body-scan.mp4",
        literature: `# Compassionate Body Scan

## Purpose
This practice combines traditional body scan meditation with self-compassion, specifically designed for individuals experiencing chronic pain.

## The Compassion Component
Rather than trying to eliminate pain, this practice teaches you to:
- Acknowledge pain with kindness
- Reduce the suffering that comes from fighting pain
- Develop a new relationship with physical sensations

## Guided Practice
1. **Preparation**: Lie or sit in a comfortable position
2. **Grounding**: Begin with three mindful breaths
3. **Systematic Scanning**: Move attention through body regions
4. **Compassionate Awareness**: Send kindness to areas of pain
5. **Integration**: Notice your overall state

## Key Phrases
- "May I hold this pain with kindness"
- "This is a moment of suffering, and suffering is part of being human"
- "May I be gentle with myself"

## Research Findings
Studies show this practice can:
- Reduce pain intensity by 20-30%
- Decrease pain-related anxiety
- Improve quality of life
- Reduce reliance on pain medication

## Important Note
This is not about eliminating pain, but about changing your relationship to it. Be patient and compassionate with yourself throughout the process.`
    },
    {
        id: 4,
        title: "Natural Reward Reappraisal",
        shortDescription: "Rebuild your reward circuitry through natural beauty.",
        description: "Deepen your connection to natural beauty and social warmth to rebuild your reward circuitry.",
        category: "Joy Restoration",
        accent: "bg-emerald-100 text-emerald-700",
        audioUrl: "/audio/natural-reward.mp3",
        videoUrl: "/video/natural-reward.mp4",
        literature: `# Natural Reward Reappraisal

## Understanding Reward Circuitry
Addiction and chronic stress can dampen your brain's ability to experience pleasure from natural rewards like beautiful sunsets, warm embraces, or delicious food. This module helps restore that capacity.

## What is Reappraisal?
Reappraisal is the practice of:
- Savoring positive experiences
- Noticing subtle beauty
- Amplifying natural pleasure
- Rewiring neural reward pathways

## Practice Components

### Mindful Savoring
Learn to fully experience positive moments by:
- Slowing down
- Engaging all senses
- Noticing pleasant details
- Allowing joy to linger

### Gratitude Integration
Combine savoring with gratitude to:
- Deepen positive experiences
- Strengthen neural pathways
- Build psychological resilience

### Social Connection
Reconnect with the inherent reward of:
- Warm social interactions
- Acts of kindness
- Shared experiences
- Community belonging

## Neuroscience
This practice activates the brain's natural opioid system, which can:
- Reduce cravings for substances
- Improve mood naturally
- Restore dopamine balance
- Enhance overall well-being

## Daily Practice
Try to identify and savor at least three natural rewards each day. Common examples:
- Morning coffee or tea
- Sunlight on your skin
- A genuine smile
- Music that moves you
- The taste of fresh food`
    },
    {
        id: 5,
        title: "Savoring the Breath",
        shortDescription: "Discover pleasure in the simple act of breathing.",
        description: "Learn to identify and amplify the positive physiological sensations associated with breathing.",
        category: "Foundations",
        accent: "bg-rose-100 text-rose-700",
        audioUrl: "/audio/savoring-breath.mp3",
        videoUrl: "/video/savoring-breath.mp4",
        literature: `# Savoring the Breath

## Introduction
Breathing is both automatic and accessible—the perfect anchor for mindfulness practice. This module teaches you to not just observe the breath, but to savor it.

## Why Savor?
Savoring transforms breathing from a mechanical process into a source of:
- Calm and relaxation
- Present-moment awareness
- Natural pleasure
- Physiological regulation

## The Practice

### Finding the Sweet Spot
Discover where you feel the breath most clearly:
- Nostrils (cool air in, warm air out)
- Chest (gentle rise and fall)
- Belly (rhythmic expansion and release)

### Noticing Pleasant Sensations
As you breathe, notice:
- The refreshing quality of the inhale
- The releasing quality of the exhale
- The brief pause between breaths
- The subtle relaxation with each exhale

### Amplifying Positive Feelings
Once you notice pleasant sensations:
- Focus on them gently
- Allow them to expand
- Let them fill your awareness
- Savor them like a favorite taste

## Benefits
Regular breath savoring practice can:
- Activate the parasympathetic nervous system
- Reduce stress hormones
- Lower heart rate and blood pressure
- Improve emotional regulation
- Provide an always-available coping tool

## Integration
Practice this technique:
- As a formal meditation (10-20 minutes)
- As a brief reset during the day (3-5 breaths)
- Before challenging situations
- When cravings arise`
    }
];

export default function ModulesPage() {
    const [selectedModule, setSelectedModule] = useState(MODULES[0]);
    const [isLiteratureExpanded, setIsLiteratureExpanded] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef<HTMLAudioElement>(null);

    // Handle audio playback
    const togglePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    const handleLoadedMetadata = () => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration);
        }
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTime = parseFloat(e.target.value);
        if (audioRef.current) {
            audioRef.current.currentTime = newTime;
            setCurrentTime(newTime);
        }
    };

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    // Reset playback when module changes
    useEffect(() => {
        setIsPlaying(false);
        setCurrentTime(0);
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    }, [selectedModule.id]);

    return (
        <div className="min-h-screen flex flex-col bg-stone-50">
            <Navbar scrolled={true} />

            <main className="flex-1 pt-20">

                {/* Main Content - Three Column Layout */}
                <div className="h-[calc(100vh-5rem)] px-6 py-6">
                    <div className="flex gap-6 h-full">
                        {/* Left Column - Module List (25%) */}
                        <div className="w-1/4 flex-shrink-0">
                            <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden h-full flex flex-col">
                                <div className="p-6 border-b border-stone-100 flex-shrink-0">
                                    <h2 className="text-sm font-bold uppercase tracking-widest text-stone-900">
                                        Modules
                                    </h2>
                                </div>
                                <div className="flex-1 overflow-y-auto">
                                    {MODULES.map((module) => (
                                        <button
                                            key={module.id}
                                            onClick={() => setSelectedModule(module)}
                                            className={`w-full text-left p-5 border-b border-stone-100 transition-all hover:bg-stone-50 ${selectedModule.id === module.id
                                                ? 'bg-amber-50 border-l-4 border-l-amber-500'
                                                : ''
                                                }`}
                                        >
                                            <span className={`inline-block px-2 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider mb-2 ${module.accent}`}>
                                                {module.category}
                                            </span>
                                            <h3 className={`text-sm font-bold leading-tight mb-2 ${selectedModule.id === module.id ? 'text-amber-700' : 'text-stone-900'
                                                }`}>
                                                {module.title}
                                            </h3>
                                            <p className="text-xs text-stone-500 leading-relaxed">
                                                {module.shortDescription}
                                            </p>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Middle Column - Media Player (50%) */}
                        <div
                            className={`transition-all duration-500 h-full ${isLiteratureExpanded ? 'w-0 opacity-0' : 'w-1/2 opacity-100'
                                }`}
                        >
                            {!isLiteratureExpanded && (
                                <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-8 h-full flex flex-col overflow-y-auto">
                                    {/* Module Header */}
                                    <div className="mb-8">
                                        <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4 ${selectedModule.accent}`}>
                                            {selectedModule.category}
                                        </span>
                                        <h2 className="text-3xl serif text-stone-900 mb-3">
                                            {selectedModule.title}
                                        </h2>
                                        <p className="text-stone-500 leading-relaxed">
                                            {selectedModule.shortDescription}
                                        </p>
                                    </div>

                                    {/* Video Player Placeholder */}
                                    <div className="aspect-video bg-stone-900 rounded-xl mb-6 flex items-center justify-center overflow-hidden relative group">
                                        <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-rose-600/20"></div>
                                        <button
                                            onClick={togglePlayPause}
                                            className="relative z-10 w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-all hover:scale-110 shadow-2xl"
                                        >
                                            {isPlaying ? (
                                                <svg className="w-8 h-8 text-stone-900" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                                                </svg>
                                            ) : (
                                                <svg className="w-8 h-8 text-stone-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            )}
                                        </button>
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <div className="text-white text-xs font-mono mb-2">
                                                {formatTime(currentTime)} / {formatTime(duration || 0)}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Audio Element (hidden) */}
                                    <audio
                                        ref={audioRef}
                                        onTimeUpdate={handleTimeUpdate}
                                        onLoadedMetadata={handleLoadedMetadata}
                                        onEnded={() => setIsPlaying(false)}
                                    >
                                        <source src={selectedModule.audioUrl} type="audio/mpeg" />
                                    </audio>

                                    {/* Description */}
                                    <div className="p-6 bg-stone-50 rounded-xl">
                                        <h3 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-3">
                                            About This Module
                                        </h3>
                                        <p className="text-stone-700 leading-relaxed">
                                            {selectedModule.description}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Right Column - Literature (25% / 75% when expanded) */}
                        <div
                            className={`transition-all duration-500 h-full ${isLiteratureExpanded ? 'w-3/4' : 'w-1/4'
                                }`}
                        >
                            <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden h-full flex flex-col">
                                <div className="p-6 border-b border-stone-100 flex items-center justify-between flex-shrink-0">
                                    <h2 className="text-sm font-bold uppercase tracking-widest text-stone-900">
                                        Literature
                                    </h2>
                                    <button
                                        onClick={() => setIsLiteratureExpanded(!isLiteratureExpanded)}
                                        className="p-2 hover:bg-stone-100 rounded-lg transition-colors"
                                        title={isLiteratureExpanded ? "Collapse" : "Expand"}
                                    >
                                        {isLiteratureExpanded ? (
                                            <svg className="w-5 h-5 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        ) : (
                                            <svg className="w-5 h-5 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                                <div className="flex-1 overflow-y-auto p-6 prose prose-stone max-w-none">
                                    {selectedModule.literature.split('\n').map((line, index) => {
                                        if (line.startsWith('# ')) {
                                            return <h1 key={index} className="text-2xl font-bold text-stone-900 mb-4 mt-6">{line.substring(2)}</h1>;
                                        } else if (line.startsWith('## ')) {
                                            return <h2 key={index} className="text-xl font-bold text-stone-800 mb-3 mt-5">{line.substring(3)}</h2>;
                                        } else if (line.startsWith('### ')) {
                                            return <h3 key={index} className="text-lg font-bold text-stone-700 mb-2 mt-4">{line.substring(4)}</h3>;
                                        } else if (line.startsWith('- ')) {
                                            return <li key={index} className="text-stone-600 ml-4">{line.substring(2)}</li>;
                                        } else if (line.trim() === '') {
                                            return <br key={index} />;
                                        } else if (line.match(/^\d+\./)) {
                                            return <li key={index} className="text-stone-600 ml-4">{line.substring(line.indexOf('.') + 2)}</li>;
                                        } else {
                                            return <p key={index} className="text-stone-600 mb-3 leading-relaxed">{line}</p>;
                                        }
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Fixed Audio Controls (visible when literature is expanded) */}
            {isLiteratureExpanded && (
                <div className="fixed bottom-0 left-0 right-0 bg-stone-900 text-white shadow-2xl border-t border-stone-700 z-50">
                    <div className="container mx-auto px-6 py-4">
                        <div className="flex items-center gap-6">
                            {/* Play/Pause Button */}
                            <button
                                onClick={togglePlayPause}
                                className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center hover:bg-amber-500 transition-all flex-shrink-0"
                            >
                                {isPlaying ? (
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                )}
                            </button>

                            {/* Module Info */}
                            <div className="flex-shrink-0">
                                <h3 className="font-bold text-sm">{selectedModule.title}</h3>
                                <p className="text-xs text-stone-400">{selectedModule.category}</p>
                            </div>

                            {/* Progress Bar */}
                            <div className="flex-1 flex items-center gap-4">
                                <span className="text-xs text-stone-400 font-mono">
                                    {formatTime(currentTime)}
                                </span>
                                <input
                                    type="range"
                                    min="0"
                                    max={duration || 0}
                                    value={currentTime}
                                    onChange={handleSeek}
                                    className="flex-1 h-2 bg-stone-700 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-amber-600 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer"
                                />
                                <span className="text-xs text-stone-400 font-mono">
                                    {formatTime(duration || 0)}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}
