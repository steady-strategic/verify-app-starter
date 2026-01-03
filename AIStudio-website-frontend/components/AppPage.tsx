
import React from 'react';

interface AppPageProps {
  setView: (view: 'landing' | 'app') => void;
}

const FEATURED_LESSONS = [
  {
    id: 1,
    title: "Savoring the Breath",
    category: "Foundations",
    duration: "12 min",
    description: "Learn to identify and amplify the positive physiological sensations associated with breathing.",
    accent: "bg-rose-100 text-rose-700"
  },
  {
    id: 2,
    title: "The Urge Surfer",
    category: "Recovery",
    duration: "8 min",
    description: "A specialized technique to navigate intense cravings by observing them as temporary waves.",
    accent: "bg-blue-100 text-blue-700"
  },
  {
    id: 3,
    title: "Compassionate Body Scan",
    category: "Pain Management",
    duration: "15 min",
    description: "Direct loving-kindness toward areas of chronic pain to restructure the neural response to discomfort.",
    accent: "bg-amber-100 text-amber-700"
  },
  {
    id: 4,
    title: "Natural Reward Reappraisal",
    category: "Joy Restoration",
    duration: "20 min",
    description: "Deepening your connection to natural beauty and social warmth to rebuild your reward circuitry.",
    accent: "bg-emerald-100 text-emerald-700"
  }
];

export const AppPage: React.FC<AppPageProps> = ({ setView }) => {
  return (
    <div className="bg-[#fefaf6] pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold mb-6">
            The MORE App Experience
          </span>
          <h1 className="text-5xl md:text-6xl serif text-stone-900 mb-8 leading-tight">
            A personal <span className="italic">companion</span> for <br /> mindfulness-based recovery.
          </h1>
          <p className="text-xl text-stone-500 font-light leading-relaxed max-w-2xl mx-auto">
            Experience over 100+ clinical-grade guided lessons designed by Dr. Eric Garland. Each session is a step toward neuro-restoration.
          </p>
        </div>

        {/* Featured Lessons Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl serif text-stone-800 italic">Featured Guided Lessons</h2>
            <div className="h-[1px] flex-grow mx-8 bg-stone-200"></div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Library 1.0</span>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {FEATURED_LESSONS.map((lesson) => (
              <div key={lesson.id} className="group bg-white p-8 rounded-[2rem] border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${lesson.accent}`}>
                      {lesson.category}
                    </span>
                    <span className="text-xs text-stone-400 font-medium">{lesson.duration}</span>
                  </div>
                  <h3 className="text-2xl serif text-stone-900 mb-4 group-hover:text-amber-700 transition-colors">
                    {lesson.title}
                  </h3>
                  <p className="text-stone-500 font-light text-sm leading-relaxed mb-8">
                    {lesson.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between mt-auto">
                  <button className="flex items-center space-x-3 text-stone-900 font-bold text-xs uppercase tracking-widest hover:text-amber-600 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-amber-100">
                      <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                    <span>Preview Session</span>
                  </button>
                  <a href="#" className="text-stone-400 hover:text-stone-900 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-24 p-12 bg-stone-900 rounded-[3rem] text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          {/* Subtle background blob */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[80px] rounded-full"></div>
          
          <h2 className="text-3xl serif text-white mb-6 italic relative z-10">Start your recovery journey today.</h2>
          <p className="text-stone-400 font-light mb-10 max-w-xl mx-auto relative z-10">
            Download MORE and join thousands of others who are reclaiming their focus and finding lasting relief through clinical mindfulness.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 relative z-10">
            <button className="px-10 py-4 bg-amber-600 text-white rounded-full font-bold text-sm hover:bg-amber-700 transition-all uppercase tracking-widest">
              Download on iOS
            </button>
            <button className="px-10 py-4 bg-white text-stone-900 rounded-full font-bold text-sm hover:bg-stone-50 transition-all uppercase tracking-widest">
              Get it for Android
            </button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={() => setView('landing')}
            className="text-stone-400 text-xs font-bold uppercase tracking-widest hover:text-stone-900 transition-colors flex items-center justify-center mx-auto"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};
