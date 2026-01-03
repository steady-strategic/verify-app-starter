"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

interface LessonFormProps {
    initialData?: {
        id?: string;
        title: string;
        description: string;
        audioFileName: string;
        audioUrl: string;
        durationSecs: number;
        fileSizeBytes: number;
        allowOffline: boolean;
        published: boolean;
    };
    mode: "create" | "edit";
}

export function LessonForm({ initialData, mode }: LessonFormProps) {
    const router = useRouter();
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isUploadingAudio, setIsUploadingAudio] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [audioDuration, setAudioDuration] = useState(
        initialData?.durationSecs || 0
    );
    const [formData, setFormData] = useState({
        title: initialData?.title || "",
        description: initialData?.description || "",
        audioFileName: initialData?.audioFileName || "",
        audioUrl: initialData?.audioUrl || "",
        durationSecs: initialData?.durationSecs || 0,
        fileSizeBytes: initialData?.fileSizeBytes || 0,
        allowOffline: initialData?.allowOffline ?? true,
        published: initialData?.published || false,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleAudioUpload = async (file: File) => {
        if (!file.type.startsWith("audio/")) {
            setError("Please upload an audio file");
            return;
        }

        if (file.size > 50 * 1024 * 1024) {
            setError("Audio file size must be less than 50MB");
            return;
        }

        setIsUploadingAudio(true);
        setError(null);

        try {
            const formDataUpload = new FormData();
            formDataUpload.append("file", file);

            const response = await fetch("/api/admin/upload-audio", {
                method: "POST",
                body: formDataUpload,
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to upload audio");
            }

            // Create temporary audio element to get duration
            const audio = new Audio(data.audioUrl);
            audio.addEventListener("loadedmetadata", () => {
                const duration = Math.floor(audio.duration);
                setAudioDuration(duration);
                setFormData((prev) => ({
                    ...prev,
                    audioUrl: data.audioUrl,
                    audioFileName: data.fileName,
                    fileSizeBytes: data.fileSize,
                    durationSecs: duration,
                }));
            });
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsUploadingAudio(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);

        const file = e.dataTransfer.files[0];
        if (file) {
            handleAudioUpload(file);
        }
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const formatDuration = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, "0")}`;
    };

    const formatFileSize = (bytes: number) => {
        if (bytes < 1024) return `${bytes} B`;
        if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
        return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const url =
                mode === "create"
                    ? "/api/admin/lessons"
                    : `/api/admin/lessons/${initialData?.id}`;
            const method = mode === "create" ? "POST" : "PUT";

            const response = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to save lesson");
            }

            router.push("/admin/lessons");
            router.refresh();
        } catch (err: any) {
            setError(err.message);
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            {error && (
                <div className="bg-rose-50 border border-rose-200 text-rose-700 px-6 py-4 rounded-2xl text-sm">
                    {error}
                </div>
            )}

            {/* Title */}
            <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                    Title
                </label>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className="w-full bg-stone-50 border-none rounded-2xl py-3 px-4 focus:ring-2 focus:ring-amber-200 outline-none text-stone-900"
                    placeholder="Introduction to Mindful Breathing"
                />
            </div>

            {/* Description */}
            <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                    Description
                </label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-stone-50 border-none rounded-2xl py-3 px-4 focus:ring-2 focus:ring-amber-200 outline-none text-stone-900 resize-none"
                    placeholder="A guided meditation to help you connect with your breath..."
                />
            </div>

            {/* Audio Upload */}
            <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                    Audio File
                </label>
                <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    className={`relative border-2 border-dashed rounded-2xl p-8 transition-all ${isDragging
                            ? "border-amber-500 bg-amber-50"
                            : "border-stone-200 bg-stone-50"
                        }`}
                >
                    {formData.audioUrl ? (
                        <div className="space-y-4">
                            {/* Audio Info */}
                            <div className="flex items-start justify-between">
                                <div className="flex items-center space-x-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                        <svg
                                            className="w-8 h-8 text-amber-600"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-stone-900">
                                            {formData.audioFileName}
                                        </p>
                                        <p className="text-sm text-stone-500">
                                            {formatDuration(audioDuration)} •{" "}
                                            {formatFileSize(formData.fileSizeBytes)}
                                        </p>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    onClick={() =>
                                        setFormData((prev) => ({
                                            ...prev,
                                            audioUrl: "",
                                            audioFileName: "",
                                            durationSecs: 0,
                                            fileSizeBytes: 0,
                                        }))
                                    }
                                    className="px-4 py-2 text-sm bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors"
                                >
                                    Remove
                                </button>
                            </div>

                            {/* Audio Player */}
                            <audio
                                ref={audioRef}
                                src={formData.audioUrl}
                                controls
                                className="w-full h-12 rounded-xl"
                            />
                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center text-center">
                            {isUploadingAudio ? (
                                <>
                                    <svg
                                        className="animate-spin h-12 w-12 text-amber-600 mb-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        ></path>
                                    </svg>
                                    <p className="text-sm text-stone-500">Uploading...</p>
                                </>
                            ) : (
                                <>
                                    <svg
                                        className="w-16 h-16 text-stone-300 mb-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                                        />
                                    </svg>
                                    <p className="text-sm font-medium text-stone-600 mb-1">
                                        Drag & drop an audio file
                                    </p>
                                    <p className="text-xs text-stone-400 mb-3">or</p>
                                    <label className="px-6 py-3 bg-stone-200 text-stone-700 rounded-lg text-sm font-medium hover:bg-stone-300 transition-colors cursor-pointer">
                                        Browse Files
                                        <input
                                            type="file"
                                            accept="audio/*"
                                            onChange={(e) => {
                                                const file = e.target.files?.[0];
                                                if (file) handleAudioUpload(file);
                                            }}
                                            className="hidden"
                                        />
                                    </label>
                                    <p className="text-xs text-stone-400 mt-4">
                                        Max 50MB • MP3, WAV, M4A
                                    </p>
                                </>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Options */}
            <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-3">
                    <input
                        type="checkbox"
                        name="allowOffline"
                        id="allowOffline"
                        checked={formData.allowOffline}
                        onChange={handleChange}
                        className="w-5 h-5 rounded border-stone-300 text-amber-600 focus:ring-2 focus:ring-amber-200"
                    />
                    <label htmlFor="allowOffline" className="text-sm font-medium text-stone-700">
                        Allow offline download
                    </label>
                </div>

                <div className="flex items-center space-x-3">
                    <input
                        type="checkbox"
                        name="published"
                        id="published"
                        checked={formData.published}
                        onChange={handleChange}
                        className="w-5 h-5 rounded border-stone-300 text-amber-600 focus:ring-2 focus:ring-amber-200"
                    />
                    <label htmlFor="published" className="text-sm font-medium text-stone-700">
                        Publish immediately
                    </label>
                </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4 pt-4 border-t border-stone-100">
                <button
                    type="submit"
                    disabled={isSubmitting || !formData.audioUrl}
                    className="px-8 py-3 bg-stone-900 text-white rounded-full font-semibold text-sm hover:bg-stone-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting
                        ? "Saving..."
                        : mode === "create"
                            ? "Create Lesson"
                            : "Update Lesson"}
                </button>
                <button
                    type="button"
                    onClick={() => router.back()}
                    className="px-8 py-3 bg-stone-100 text-stone-700 rounded-full font-semibold text-sm hover:bg-stone-200 transition-all"
                >
                    Cancel
                </button>
            </div>
        </form>
    );
}
