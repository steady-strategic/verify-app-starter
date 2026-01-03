
import React from 'react';
import { ViewType } from '../App';

interface NavbarProps {
  scrolled: boolean;
  setView: (view: ViewType) => void;
  currentView: ViewType;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled, setView, currentView }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 glass shadow-sm border-b border-stone-100' : 'py-8 bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button 
          onClick={() => setView('landing')}
          className="flex items-center space-x-2 focus:outline-none"
        >
          <div className="w-8 h-8 rounded-full bg-stone-900 flex items-center justify-center">
            <span className="text-white font-bold text-xs">M</span>
          </div>
          <span className="text-xl font-bold tracking-tighter text-stone-900">MORE</span>
        </button>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-stone-600">
          <button 
            onClick={() => setView('landing')} 
            className={`hover:text-stone-900 transition-colors ${currentView === 'landing' ? 'text-stone-900 font-bold' : ''}`}
          >
            Philosophy
          </button>
          <a href="#" className="hover:text-stone-900 transition-colors">Evidence</a>
          <button 
            onClick={() => setView('stories')} 
            className={`hover:text-stone-900 transition-colors ${currentView === 'stories' ? 'text-stone-900 font-bold border-b-2 border-amber-500' : ''}`}
          >
            Stories
          </button>
          <button 
            onClick={() => setView('app')} 
            className={`hover:text-stone-900 transition-colors ${currentView === 'app' ? 'text-stone-900 font-bold border-b-2 border-amber-500' : ''}`}
          >
            The App
          </button>
          
          <div className="h-4 w-[1px] bg-stone-200"></div>

          <button className="px-5 py-2.5 bg-stone-900 text-white text-xs font-semibold rounded-full hover:bg-stone-800 transition-all active:scale-95">
            Get Started
          </button>

          <button 
            onClick={() => setView('admin')} 
            className={`hover:text-stone-900 transition-colors uppercase tracking-widest text-[10px] font-bold ${currentView === 'admin' ? 'text-amber-600' : 'text-stone-400'}`}
          >
            Admin
          </button>
        </div>
      </div>
    </nav>
  );
};
