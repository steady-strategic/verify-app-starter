import Link from "next/link";
import { prisma } from "../../../lib/db";

export default async function StoriesPage() {
    const stories = await prisma.story.findMany({
        include: {
            author: {
                select: {
                    firstName: true,
                    lastName: true,
                },
            },
        },
        orderBy: { createdAt: "desc" },
    });

    return (
        <div className="p-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-4xl serif text-stone-900 mb-2">Stories</h1>
                        <p className="text-stone-500">Manage blog posts and articles</p>
                    </div>
                    <Link
                        href="/admin/stories/new"
                        className="px-6 py-3 bg-stone-900 text-white rounded-full font-semibold text-sm hover:bg-stone-800 transition-all"
                    >
                        + New Story
                    </Link>
                </div>

                {/* Stories List */}
                {stories.length === 0 ? (
                    <div className="bg-white rounded-[2rem] p-12 text-center shadow-sm border border-stone-100">
                        <div className="text-6xl mb-4">📝</div>
                        <h3 className="text-xl font-bold text-stone-900 mb-2">No stories yet</h3>
                        <p className="text-stone-500 mb-6">Create your first story to get started</p>
                        <Link
                            href="/admin/stories/new"
                            className="inline-block px-6 py-3 bg-amber-600 text-white rounded-full font-semibold text-sm hover:bg-amber-700 transition-all"
                        >
                            Create Story
                        </Link>
                    </div>
                ) : (
                    <div className="bg-white rounded-[2rem] shadow-sm border border-stone-100 overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-stone-50 border-b border-stone-200">
                                <tr>
                                    <th className="text-left px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-stone-400">
                                        Title
                                    </th>
                                    <th className="text-left px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-stone-400">
                                        Author
                                    </th>
                                    <th className="text-left px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-stone-400">
                                        Status
                                    </th>
                                    <th className="text-left px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-stone-400">
                                        Created
                                    </th>
                                    <th className="text-right px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-stone-400">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {stories.map((story) => (
                                    <tr key={story.id} className="border-b border-stone-100 hover:bg-stone-50">
                                        <td className="px-6 py-4">
                                            <div>
                                                <p className="font-semibold text-stone-900">{story.title}</p>
                                                <p className="text-xs text-stone-500">/{story.slug}</p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-stone-600">
                                            {story.author.firstName} {story.author.lastName}
                                        </td>
                                        <td className="px-6 py-4">
                                            {story.published ? (
                                                <span className="inline-block px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold">
                                                    Published
                                                </span>
                                            ) : (
                                                <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-bold">
                                                    Draft
                                                </span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-stone-500">
                                            {new Date(story.createdAt).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <Link
                                                href={`/admin/stories/${story.id}/edit`}
                                                className="text-amber-600 hover:text-amber-700 font-medium text-sm"
                                            >
                                                Edit
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
