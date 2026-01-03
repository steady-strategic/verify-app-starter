import { LessonForm } from "@/components/admin/LessonForm";

export default function NewLessonPage() {
    return (
        <div className="p-8">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-4xl serif text-stone-900 mb-2">Create Lesson</h1>
                    <p className="text-stone-500">
                        Upload a new guided mindfulness lesson
                    </p>
                </div>

                <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-stone-100">
                    <LessonForm mode="create" />
                </div>
            </div>
        </div>
    );
}
