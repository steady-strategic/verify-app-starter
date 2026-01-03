import { StoryForm } from "../../../components/admin/StoryForm";

export default function NewStoryPage() {
    return (
        <div className="p-8">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-4xl serif text-stone-900 mb-2">Create Story</h1>
                    <p className="text-stone-500">Write and publish a new blog post</p>
                </div>

                <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-stone-100">
                    <StoryForm mode="create" />
                </div>
            </div>
        </div>
    );
}
