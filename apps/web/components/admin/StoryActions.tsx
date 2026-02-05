"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Story {
    id: string;
    slug: string;
    published: boolean;
}

export function StoryActions({ story }: { story: Story }) {
    const router = useRouter();
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        if (!confirm("Are you sure you want to delete this story? This action cannot be undone.")) {
            return;
        }

        setIsDeleting(true);
        try {
            const res = await fetch(`/api/admin/stories/${story.id}`, {
                method: "DELETE",
            });

            if (!res.ok) {
                throw new Error("Failed to delete story");
            }

            router.refresh();
        } catch (error) {
            console.error(error);
            alert("Failed to delete story");
            setIsDeleting(false);
        }
    };

    return (
        <div className="flex justify-end items-center gap-4">
            {story.published && (
                <Link
                    href={`/blog/${story.slug}`}
                    className="text-stone-500 hover:text-stone-900 font-medium text-sm"
                >
                    View Post
                </Link>
            )}
            <Link
                href={`/admin/stories/${story.id}/edit`}
                className="text-amber-600 hover:text-amber-700 font-medium text-sm"
            >
                Edit
            </Link>
            <button
                onClick={handleDelete}
                disabled={isDeleting}
                className="text-rose-600 hover:text-rose-700 font-medium text-sm disabled:opacity-50"
            >
                {isDeleting ? "Deleting..." : "Delete"}
            </button>
        </div>
    );
}
