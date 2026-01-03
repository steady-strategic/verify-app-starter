"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface StoryFormProps {
    initialData?: {
        id?: string;
        title: string;
        slug: string;
        excerpt: string;
        content: string;
        imageUrl: string;
        mediaUrl: string;
        published: boolean;
    };
    mode: "create" | "edit";
}

export function StoryForm({ initialData, mode }: StoryFormProps) {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isGeneratingImage, setIsGeneratingImage] = useState(false);
    const [isUploadingImage, setIsUploadingImage] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        title: initialData?.title || "",
        slug: initialData?.slug || "",
        excerpt: initialData?.excerpt || "",
        content: initialData?.content || "",
        imageUrl: initialData?.imageUrl || "",
        mediaUrl: initialData?.mediaUrl || "",
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

        // Auto-generate slug from title
        if (name === "title" && mode === "create") {
            const slug = value
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/(^-|-$)/g, "");
            setFormData((prev) => ({ ...prev, slug }));
        }
    };

    const handleFileUpload = async (file: File) => {
        if (!file.type.startsWith("image/")) {
            setError("Please upload an image file");
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            setError("Image size must be less than 5MB");
            return;
        }

        setIsUploadingImage(true);
        setError(null);

        try {
            const formData = new FormData();
            formData.append("file", file);

            const response = await fetch("/api/admin/upload-image", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to upload image");
            }

            setFormData((prev) => ({ ...prev, imageUrl: data.imageUrl }));
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsUploadingImage(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);

        const file = e.dataTransfer.files[0];
        if (file) {
            handleFileUpload(file);
        }
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleGenerateImage = async () => {
        if (!formData.title && !formData.excerpt) {
            setError("Please add a title or excerpt first");
            return;
        }

        setIsGeneratingImage(true);
        setError(null);

        try {
            const prompt = formData.title || formData.excerpt;
            const response = await fetch("/api/admin/generate-image", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ prompt }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to generate image");
            }

            setFormData((prev) => ({ ...prev, imageUrl: data.imageUrl }));
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsGeneratingImage(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const url =
                mode === "create"
                    ? "/api/admin/stories"
                    : `/api/admin/stories/${initialData?.id}`;
            const method = mode === "create" ? "POST" : "PUT";

            const response = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to save story");
            }

            router.push("/admin/stories");
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
                    placeholder="The Neurobiology of Savoring"
                />
            </div>

            {/* Slug */}
            <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                    URL Slug
                </label>
                <div className="flex items-center space-x-2">
                    <span className="text-stone-400 text-sm">/stories/</span>
                    <input
                        type="text"
                        name="slug"
                        value={formData.slug}
                        onChange={handleChange}
                        required
                        className="flex-1 bg-stone-50 border-none rounded-2xl py-3 px-4 focus:ring-2 focus:ring-amber-200 outline-none text-stone-900"
                        placeholder="the-neurobiology-of-savoring"
                    />
                </div>
            </div>

            {/* Excerpt */}
            <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                    Excerpt
                </label>
                <textarea
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full bg-stone-50 border-none rounded-2xl py-3 px-4 focus:ring-2 focus:ring-amber-200 outline-none text-stone-900 resize-none"
                    placeholder="A brief summary of the story..."
                />
            </div>

            {/* Upload Image & Generate AI - Side by Side */}
            <div className="grid md:grid-cols-2 gap-4">
                {/* Drag & Drop Upload */}
                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                        Upload Image
                    </label>
                    <div
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        className={`relative border-2 border-dashed rounded-2xl p-6 transition-all ${isDragging
                                ? "border-amber-500 bg-amber-50"
                                : "border-stone-200 bg-stone-50"
                            } ${formData.imageUrl ? "aspect-video" : "h-48"}`}
                    >
                        {formData.imageUrl ? (
                            <div className="relative w-full h-full group">
                                <img
                                    src={formData.imageUrl}
                                    alt="Preview"
                                    className="w-full h-full object-cover rounded-xl"
                                />
                                <button
                                    type="button"
                                    onClick={() => setFormData((prev) => ({ ...prev, imageUrl: "" }))}
                                    className="absolute top-2 right-2 w-8 h-8 bg-rose-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center hover:bg-rose-600"
                                >
                                    ✕
                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center h-full text-center">
                                {isUploadingImage ? (
                                    <>
                                        <svg className="animate-spin h-8 w-8 text-amber-600 mb-2" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        <p className="text-sm text-stone-500">Uploading...</p>
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-12 h-12 text-stone-300 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                        </svg>
                                        <p className="text-sm font-medium text-stone-600 mb-1">
                                            Drag & drop an image
                                        </p>
                                        <p className="text-xs text-stone-400 mb-3">or</p>
                                        <label className="px-4 py-2 bg-stone-200 text-stone-700 rounded-lg text-sm font-medium hover:bg-stone-300 transition-colors cursor-pointer">
                                            Browse Files
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={(e) => {
                                                    const file = e.target.files?.[0];
                                                    if (file) handleFileUpload(file);
                                                }}
                                                className="hidden"
                                            />
                                        </label>
                                        <p className="text-xs text-stone-400 mt-3">Max 5MB</p>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {/* Generate with AI */}
                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                        Or Generate with AI
                    </label>
                    <div className="border-2 border-stone-200 rounded-2xl p-6 bg-gradient-to-br from-violet-50 to-purple-50 h-48 flex flex-col items-center justify-center text-center">
                        <svg className="w-16 h-16 text-violet-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                        <p className="text-sm text-stone-600 mb-4">
                            Use AI to generate an image based on your story title
                        </p>
                        <button
                            type="button"
                            onClick={handleGenerateImage}
                            disabled={isGeneratingImage || (!formData.title && !formData.excerpt)}
                            className="px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold text-sm hover:from-violet-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                        >
                            {isGeneratingImage ? (
                                <>
                                    <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span>Generating...</span>
                                </>
                            ) : (
                                <>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                    <span>Generate with AI</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                    Content
                </label>
                <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    required
                    rows={15}
                    className="w-full bg-stone-50 border-none rounded-2xl py-3 px-4 focus:ring-2 focus:ring-amber-200 outline-none text-stone-900 resize-none font-mono text-sm"
                    placeholder="Write your story content here... (Supports plain text and line breaks)"
                />
                <p className="text-xs text-stone-400">
                    Content will be displayed with preserved line breaks
                </p>
            </div>

            {/* Media URL */}
            <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                    Media URL (Optional)
                </label>
                <input
                    type="url"
                    name="mediaUrl"
                    value={formData.mediaUrl}
                    onChange={handleChange}
                    className="w-full bg-stone-50 border-none rounded-2xl py-3 px-4 focus:ring-2 focus:ring-amber-200 outline-none text-stone-900"
                    placeholder="https://youtube.com/watch?v=... or https://vimeo.com/..."
                />
                <p className="text-xs text-stone-400">
                    Add a YouTube, Vimeo, or external media link to display below the story content
                </p>
            </div>

            {/* Published */}
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

            {/* Actions */}
            <div className="flex items-center space-x-4 pt-4 border-t border-stone-100">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 bg-stone-900 text-white rounded-full font-semibold text-sm hover:bg-stone-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting
                        ? "Saving..."
                        : mode === "create"
                            ? "Create Story"
                            : "Update Story"}
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
