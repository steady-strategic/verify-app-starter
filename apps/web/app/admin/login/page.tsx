import Link from "next/link";
import { AdminLoginForm } from "../../../components/admin/AdminLoginForm";

export default function AdminLoginPage() {
    return (
        <div className="min-h-screen bg-cream flex items-center justify-center px-6">
            <div className="max-w-md w-full">
                {/* Header */}
                <div className="text-center mb-12">
                    <Link href="/" className="inline-flex items-center space-x-2 mb-6">
                        <div className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center">
                            <span className="text-white font-bold text-sm">M</span>
                        </div>
                        <span className="text-2xl font-bold tracking-tighter text-stone-900">
                            MORE
                        </span>
                    </Link>

                    <h1 className="text-3xl md:text-4xl serif text-stone-900 mb-4 mt-8">
                        Admin Panel
                    </h1>
                    <p className="text-stone-500 font-light">
                        Sign in to manage content and settings
                    </p>
                </div>

                {/* Form Card */}
                <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-stone-100">
                    <AdminLoginForm />
                </div>

                {/* Footer Link */}
                <div className="mt-8 text-center">
                    <Link
                        href="/"
                        className="text-sm text-stone-400 hover:text-stone-600 transition-colors"
                    >
                        ← Back to website
                    </Link>
                </div>
            </div>
        </div>
    );
}
