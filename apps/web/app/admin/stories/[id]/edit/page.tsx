import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { StoryForm } from "@/components/admin/StoryForm";

export default async function EditStoryPage({
    params,
}: {
    params: { id: string };
}) {
    const story = await prisma.story.findUnique({
        where: { id: params.id },
    });

    if (!story) {
        notFound();
    }

    return (
        <div className="p-8">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-4xl serif text-stone-900 mb-2">Edit Story</h1>
                    <p className="text-stone-500">Update story content and settings</p>
                </div>

                <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-stone-100">
                    <StoryForm
                        mode="edit"
                        initialData={{
                            id: story.id,
                            title: story.title,
                            slug: story.slug,
                            excerpt: story.excerpt,
                            content: story.content,
                            imageUrl: story.imageUrl || "",
                            published: story.published,
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
