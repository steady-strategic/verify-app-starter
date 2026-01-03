import Link from "next/link";
import { prisma } from "@/lib/db";

export default async function LessonsPage() {
    const lessons = await prisma.lesson.findMany({
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

    return (
        <div className="p-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-4xl serif text-stone-900 mb-2">Lessons</h1>
                        <p className="text-stone-500">Manage guided mindfulness lessons</p>
                    </div>
                    <Link
                        href="/admin/lessons/new"
                        className="px-6 py-3 bg-stone-900 text-white rounded-full font-semibold text-sm hover:bg-stone-800 transition-all"
                    >
                        + New Lesson
                    </Link>
                </div>

                {/* Lessons List */}
                {lessons.length === 0 ? (
                    <div className="bg-white rounded-[2rem] p-12 text-center shadow-sm border border-stone-100">
                        <div className="text-6xl mb-4">🎧</div>
                        <h3 className="text-xl font-bold text-stone-900 mb-2">
                            No lessons yet
                        </h3>
                        <p className="text-stone-500 mb-6">
                            Create your first lesson to get started
                        </p>
                        <Link
                            href="/admin/lessons/new"
                            className="inline-block px-6 py-3 bg-amber-600 text-white rounded-full font-semibold text-sm hover:bg-amber-700 transition-all"
                        >
                            Create Lesson
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
                                        Duration
                                    </th>
                                    <th className="text-left px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-stone-400">
                                        Size
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
                                {lessons.map((lesson) => (
                                    <tr
                                        key={lesson.id}
                                        className="border-b border-stone-100 hover:bg-stone-50"
                                    >
                                        <td className="px-6 py-4">
                                            <div>
                                                <p className="font-semibold text-stone-900">
                                                    {lesson.title}
                                                </p>
                                                <p className="text-xs text-stone-500 mt-1">
                                                    {lesson.description.substring(0, 60)}
                                                    {lesson.description.length > 60 ? "..." : ""}
                                                </p>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-stone-600">
                                            {lesson.author.firstName} {lesson.author.lastName}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-stone-600">
                                            {formatDuration(lesson.durationSecs)}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-stone-600">
                                            {formatFileSize(lesson.fileSizeBytes)}
                                        </td>
                                        <td className="px-6 py-4">
                                            {lesson.published ? (
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
                                            {new Date(lesson.createdAt).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <Link
                                                href={`/admin/lessons/${lesson.id}/edit`}
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
