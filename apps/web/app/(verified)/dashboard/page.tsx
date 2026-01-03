import Link from "next/link";
import { auth } from "../../../lib/auth";
import { Navbar } from "../../../components/layout/Navbar";
import { Footer } from "../../../components/layout/Footer";

export default async function DashboardPage() {
    const session = await auth();
    const userName = session?.user?.name || "User";

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar scrolled={true} />

            <main className="flex-1 bg-cream pt-32 pb-24">
                <div className="container mx-auto px-6">
                    {/* Header */}
                    <div className="max-w-5xl mx-auto mb-12">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold mb-4">
                                    ✓ Verified Account
                                </span>
                                <h1 className="text-4xl md:text-5xl serif text-stone-900">
                                    Welcome back, <span className="italic text-amber-600">{userName}</span>
                                </h1>
                            </div>
                        </div>
                        <p className="text-lg text-stone-500 font-light">
                            Your account has been verified. Explore your personalized dashboard and access exclusive resources.
                        </p>
                    </div>

                    {/* Dashboard Grid */}
                    <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
                        {/* Quick Access Cards */}
                        <Link
                            href="/program"
                            className="group bg-white p-8 rounded-[2rem] border border-stone-100 shadow-sm hover:shadow-xl transition-all"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center mb-6 group-hover:bg-amber-200 transition-colors">
                                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl serif text-stone-900 mb-2 group-hover:text-amber-700 transition-colors">
                                Lesson Library
                            </h3>
                            <p className="text-stone-500 text-sm font-light">
                                Access 100+ guided mindfulness sessions
                            </p>
                        </Link>

                        <Link
                            href="/stories"
                            className="group bg-white p-8 rounded-[2rem] border border-stone-100 shadow-sm hover:shadow-xl transition-all"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3 className="text-xl serif text-stone-900 mb-2 group-hover:text-blue-700 transition-colors">
                                Stories & Research
                            </h3>
                            <p className="text-stone-500 text-sm font-light">
                                Read success stories and clinical insights
                            </p>
                        </Link>

                        <div className="group bg-white p-8 rounded-[2rem] border border-stone-100 shadow-sm hover:shadow-xl transition-all cursor-pointer">
                            <div className="w-12 h-12 rounded-2xl bg-rose-100 flex items-center justify-center mb-6 group-hover:bg-rose-200 transition-colors">
                                <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl serif text-stone-900 mb-2 group-hover:text-rose-700 transition-colors">
                                Progress Tracking
                            </h3>
                            <p className="text-stone-500 text-sm font-light">
                                View your mindfulness journey metrics
                            </p>
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="max-w-5xl mx-auto mt-12">
                        <h2 className="text-2xl serif text-stone-900 mb-6">Recent Activity</h2>
                        <div className="bg-white rounded-[2rem] p-8 border border-stone-100 shadow-sm">
                            <div className="text-center py-12">
                                <div className="w-16 h-16 rounded-full bg-stone-50 flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                    </svg>
                                </div>
                                <p className="text-stone-400 text-sm">No recent activity yet. Start exploring!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
