
import React from 'react';

export const Evidence: React.FC = () => {
  return (
    <section className="py-24 bg-stone-100/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-4 md:space-y-0">
          <div className="max-w-xl">
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600 mb-4 block">Clinical Integrity</span>
            <h2 className="text-4xl serif text-stone-900 leading-tight">Founded on decades of <span className="italic text-amber-700">NIH-funded</span> clinical trials.</h2>
          </div>
          <a href="#" className="text-amber-800 font-semibold border-b-2 border-amber-200 hover:border-amber-500 transition-all pb-1 text-sm">View full research catalog</a>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Rewiring the Reward System",
              desc: "Research shows MORE increases brain responsiveness to natural rewards like nature and social connection while decreasing responsiveness to drug cues.",
              label: "Neurological Impact"
            },
            {
              title: "Pain Management without Opioids",
              desc: "In a massive study published in JAMA Internal Medicine, MORE reduced chronic pain and opioid misuse significantly compared to standard therapy.",
              label: "Symptom Reduction"
            },
            {
              title: "Sustainable Recovery",
              desc: "MORE participants maintained recovery results for over 9 months post-treatment, showing long-term structural changes in behavior.",
              label: "Long-term Outcomes"
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-10 rounded-2xl shadow-sm border border-stone-200/50 hover:shadow-md transition-shadow group">
              <span className="text-[10px] font-bold uppercase tracking-widest text-amber-500 group-hover:text-amber-600 transition-colors mb-6 block">{item.label}</span>
              <h3 className="text-xl serif text-stone-900 mb-4">{item.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed font-light">{item.desc}</p>
              <div className="mt-8 pt-8 border-t border-stone-100 flex items-center justify-between">
                <span className="text-[10px] font-medium text-stone-400">Peer Reviewed</span>
                <svg className="w-4 h-4 text-stone-300 group-hover:text-stone-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
