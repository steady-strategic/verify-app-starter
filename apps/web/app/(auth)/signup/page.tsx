import { Navbar } from "../../../components/layout/Navbar";
import { Footer } from "../../../components/layout/Footer";
import { SignupForm } from "../../../components/SignupForm";

export default function SignupPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar scrolled={true} />

            <main className="flex-1 bg-cream pt-32 pb-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-2xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-12">
                            <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold mb-6">
                                Get Started
                            </span>
                            <h1 className="text-4xl md:text-5xl serif text-stone-900 mb-4">
                                Create Your Account
                            </h1>
                            <p className="text-lg text-stone-500 font-light">
                                Enter your details to submit for verification and begin your journey.
                            </p>
                        </div>

                        {/* Form Card */}
                        <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-stone-100">
                            <SignupForm />
                        </div>

                        {/* Additional Info */}
                        <div className="mt-8 text-center">
                            <p className="text-sm text-stone-400">
                                Already have an account?{" "}
                                <a href="/pending" className="text-amber-600 hover:text-amber-700 font-medium">
                                    Check verification status
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
