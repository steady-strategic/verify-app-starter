import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { LessonForm } from "@/components/admin/LessonForm";

export default async function EditLessonPage({
    params,
}: {
    params: { id: string };
}) {
    const lesson = await prisma.lesson.findUnique({
        where: { id: params.id },
    });

    if (!lesson) {
        notFound();
    }

    return (
        <div className="p-8">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-4xl serif text-stone-900 mb-2">Edit Lesson</h1>
                    <p className="text-stone-500">Update lesson content and settings</p>
                </div>

                <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-stone-100">
                    <LessonForm
                        mode="edit"
                        initialData={{
                            id: lesson.id,
                            title: lesson.title,
                            description: lesson.description,
                            audioFileName: lesson.audioFileName,
                            audioUrl: lesson.audioUrl || "",
                            durationSecs: lesson.durationSecs,
                            fileSizeBytes: lesson.fileSizeBytes,
                            allowOffline: lesson.allowOffline,
                            published: lesson.published,
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
