import Link from "next/link";
import { Navbar } from "../../../components/layout/Navbar";
import { Footer } from "../../../components/layout/Footer";

export default function PendingPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar scrolled={true} />

            <main className="flex-1 bg-cream flex items-center justify-center px-6 py-24">
                <div className="max-w-2xl w-full text-center">
                    {/* Icon */}
                    <div className="mb-8 flex justify-center">
                        <div className="w-24 h-24 rounded-full bg-amber-100 flex items-center justify-center">
                            <svg
                                className="w-12 h-12 text-amber-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Content */}
                    <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold mb-6">
                        Verification Pending
                    </span>

                    <h1 className="text-4xl md:text-5xl serif text-stone-900 mb-6">
                        Your account is under review
                    </h1>

                    <p className="text-lg text-stone-500 font-light leading-relaxed mb-8 max-w-xl mx-auto">
                        Thank you for registering! Your account is currently pending verification.
                        You'll receive an email once your account has been reviewed and approved.
                    </p>

                    {/* Info Card */}
                    <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-stone-100 mb-8">
                        <h3 className="font-bold text-stone-900 mb-4">What happens next?</h3>
                        <ul className="space-y-3 text-left text-stone-600 text-sm">
                            <li className="flex items-start space-x-3">
                                <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Our team will review your license credentials</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Verification typically takes 1-2 business days</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>You'll receive an email notification when approved</span>
                            </li>
                        </ul>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/"
                            className="px-8 py-4 bg-stone-900 text-white rounded-full font-semibold text-sm hover:bg-stone-800 transition-all"
                        >
                            Return Home
                        </Link>
                        <a
                            href="mailto:support@more-mindfulness.com"
                            className="px-8 py-4 bg-white text-stone-900 border border-stone-200 rounded-full font-semibold text-sm hover:bg-stone-50 transition-all"
                        >
                            Contact Support
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
