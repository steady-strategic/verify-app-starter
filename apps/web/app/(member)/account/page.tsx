import { auth, signOut } from "../../../lib/auth";
import { Navbar } from "../../../components/layout/Navbar";
import { Footer } from "../../../components/layout/Footer";

export default async function AccountPage() {
    const session = await auth();
    const user = session?.user;

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar scrolled={true} />

            <main className="flex-1 bg-cream pt-32 pb-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-2xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-12">
                            <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold mb-6">
                                Member Account
                            </span>
                            <h1 className="text-4xl md:text-5xl serif text-stone-900 mb-4">
                                Welcome, {user?.name?.split(" ")[0]}
                            </h1>
                            <p className="text-lg text-stone-500 font-light">
                                Manage your account settings and preferences
                            </p>
                        </div>

                        {/* Account Info Card */}
                        <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-stone-100 mb-6">
                            <h2 className="text-xl font-bold text-stone-900 mb-6">
                                Account Information
                            </h2>

                            <div className="space-y-4">
                                <div>
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 block mb-2">
                                        Name
                                    </label>
                                    <p className="text-stone-900">{user?.name}</p>
                                </div>

                                <div>
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 block mb-2">
                                        Email
                                    </label>
                                    <p className="text-stone-900">{user?.email}</p>
                                </div>
                            </div>
                        </div>

                        {/* Actions Card */}
                        <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-stone-100">
                            <h2 className="text-xl font-bold text-stone-900 mb-6">
                                Account Actions
                            </h2>

                            <form
                                action={async () => {
                                    "use server";
                                    await signOut({ redirectTo: "/login" });
                                }}
                            >
                                <button
                                    type="submit"
                                    className="w-full py-4 bg-stone-100 text-stone-700 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-stone-200 transition-all"
                                >
                                    Sign Out
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
