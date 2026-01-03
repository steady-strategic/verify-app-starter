import React from "react";

export const Hero: React.FC = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20">
            {/* Abstract Background Element */}
            <div className="absolute top-20 right-0 -z-10 w-1/2 h-full opacity-30 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-40 right-20 w-[400px] h-[400px] bg-amber-50 rounded-full blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold">
                            Evidence-Based Mindfulness
                        </span>
                        <h1 className="text-5xl md:text-7xl leading-[1.1] text-stone-900 font-normal">
                            Reclaim your <span className="italic font-light text-amber-600">focus</span>, recover your <span className="italic font-light text-amber-600">joy</span>.
                        </h1>
                        <p className="text-xl text-stone-500 max-w-lg leading-relaxed font-light">
                            MORE is a clinically proven mental training program designed to help you rewire your brain, manage pain, and overcome addiction through the power of savoring.
                        </p>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className="px-8 py-4 bg-stone-900 text-white rounded-full font-semibold text-sm shadow-xl shadow-stone-200 hover:bg-stone-800 hover:translate-y-[-2px] transition-all">
                            Discover the Program
                        </button>
                        <button className="px-8 py-4 bg-white text-stone-900 border border-stone-200 rounded-full font-semibold text-sm hover:bg-stone-50 transition-all">
                            Watch the Science
                        </button>
                    </div>

                    <div className="flex items-center space-x-3 pt-4">
                        <div className="flex -space-x-2">
                            <img src="https://picsum.photos/id/1011/32/32" className="w-8 h-8 rounded-full border-2 border-white shadow-sm" alt="User" />
                            <img src="https://picsum.photos/id/1012/32/32" className="w-8 h-8 rounded-full border-2 border-white shadow-sm" alt="User" />
                            <img src="https://picsum.photos/id/1013/32/32" className="w-8 h-8 rounded-full border-2 border-white shadow-sm" alt="User" />
                        </div>
                        <p className="text-xs text-stone-400 font-medium">
                            Trusted by 15,000+ individuals on the path to recovery.
                        </p>
                    </div>
                </div>

                <div className="relative hidden md:block">
                    <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-[12px] border-white">
                        <img
                            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800"
                            alt="Peaceful nature scene"
                            className="w-full h-[600px] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent"></div>
                        <div className="absolute bottom-10 left-10 text-white">
                            <p className="text-sm font-semibold tracking-wider uppercase opacity-80 mb-1 text-amber-100">Featured Lesson</p>
                            <p className="text-2xl italic font-light">Savoring the Natural World</p>
                        </div>
                    </div>
                    {/* Decorative floating card */}
                    <div className="absolute -bottom-10 -left-10 z-20 bg-white p-6 rounded-xl shadow-2xl border border-stone-100 max-w-[240px]">
                        <div className="flex items-center space-x-3 mb-3">
                            <div className="w-2 h-2 rounded-full bg-amber-500 animate-ping"></div>
                            <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Real-time Recovery</p>
                        </div>
                        <p className="text-stone-800 font-medium text-sm leading-snug">
                            Reduce cravings by up to 63% through reappraisal training.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
