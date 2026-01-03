
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-stone-100 pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-stone-900 flex items-center justify-center">
                <span className="text-white font-bold text-xs">M</span>
              </div>
              <span className="text-xl font-bold tracking-tighter text-stone-900">MORE</span>
            </div>
            <p className="text-stone-500 text-sm font-light leading-relaxed">
              Advancing the science of human flourishing through evidence-based mindfulness and cognitive therapy.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-stone-50 text-stone-400 hover:text-stone-900 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-stone-50 text-stone-400 hover:text-stone-900 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-stone-900 mb-6 uppercase text-xs tracking-widest">Resources</h4>
            <ul className="space-y-4 text-sm text-stone-500 font-light">
              <li><a href="#" className="hover:text-stone-900 transition-colors">Program Overview</a></li>
              <li><a href="#" className="hover:text-stone-900 transition-colors">Scientific Journals</a></li>
              <li><a href="#" className="hover:text-stone-900 transition-colors">For Practitioners</a></li>
              <li><a href="#" className="hover:text-stone-900 transition-colors">Workshops</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-stone-900 mb-6 uppercase text-xs tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm text-stone-500 font-light">
              <li><a href="#" className="hover:text-stone-900 transition-colors">Our Mission</a></li>
              <li><a href="#" className="hover:text-stone-900 transition-colors">The Lab</a></li>
              <li><a href="#" className="hover:text-stone-900 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-stone-900 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-stone-900 mb-6 uppercase text-xs tracking-widest">Subscribe</h4>
            <p className="text-stone-500 text-xs mb-4">Get the latest research insights on mindfulness and recovery.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-stone-100 border-none rounded-l-full py-3 px-4 text-xs w-full focus:ring-1 focus:ring-stone-200 outline-none"
              />
              <button className="bg-stone-900 text-white p-3 rounded-r-full hover:bg-stone-800 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-stone-50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] text-stone-400 font-medium uppercase tracking-widest">
          <p>© 2024 MORE Mindfulness. All rights reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-stone-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-stone-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
