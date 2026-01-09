import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";
import { SetPasswordForm } from "../../components/member/SetPasswordForm";
import { redirect } from "next/navigation";

export default function SetPasswordPage({
    searchParams,
}: {
    searchParams: { token?: string };
}) {
    const token = searchParams.token;

    // If no token provided, redirect to login
    if (!token) {
        redirect("/login");
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar scrolled={true} />

            <main className="flex-1 bg-cream pt-32 pb-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-md mx-auto">
                        {/* Header */}
                        <div className="text-center mb-12">
                            <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold mb-6">
                                Welcome
                            </span>
                            <h1 className="text-4xl md:text-5xl serif text-stone-900 mb-4">
                                Set Your Password
                            </h1>
                            <p className="text-lg text-stone-500 font-light">
                                Create a secure password to activate your account
                            </p>
                        </div>

                        {/* Form Card */}
                        <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-stone-100">
                            <SetPasswordForm token={token} />
                        </div>

                        {/* Additional Info */}
                        <div className="mt-8 text-center">
                            <p className="text-sm text-stone-400">
                                This link expires in 24 hours
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
