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
        published: boolean;
    };
    mode: "create" | "edit";
}

export function StoryForm({ initialData, mode }: StoryFormProps) {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isGeneratingImage, setIsGeneratingImage] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        title: initialData?.title || "",
        slug: initialData?.slug || "",
        excerpt: initialData?.excerpt || "",
        content: initialData?.content || "",
        imageUrl: initialData?.imageUrl || "",
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

            {/* Image URL */}
            <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                    Image URL
                </label>
                <div className="flex items-center space-x-2">
                    <input
                        type="url"
                        name="imageUrl"
                        value={formData.imageUrl}
                        onChange={handleChange}
                        className="flex-1 bg-stone-50 border-none rounded-2xl py-3 px-4 focus:ring-2 focus:ring-amber-200 outline-none text-stone-900"
                        placeholder="https://images.unsplash.com/..."
                    />
                    <button
                        type="button"
                        onClick={handleGenerateImage}
                        disabled={isGeneratingImage || (!formData.title && !formData.excerpt)}
                        className="px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl font-semibold text-sm hover:from-violet-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap flex items-center space-x-2"
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
                <p className="text-xs text-stone-400">
                    Paste a URL or click "Generate with AI" to create an image based on the story title
                </p>
                {formData.imageUrl && (
                    <div className="mt-4 rounded-2xl overflow-hidden border border-stone-200">
                        <img
                            src={formData.imageUrl}
                            alt="Preview"
                            className="w-full h-48 object-cover"
                        />
                    </div>
                )}
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
