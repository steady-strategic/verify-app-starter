
import React from 'react';
import { ViewType, Story } from '../App';

interface BlogSectionProps {
  stories: Story[];
  setView: (view: ViewType) => void;
  onOpenStory: (id: number) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ stories, setView, onOpenStory }) => {
  if (stories.length === 0) return null;

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600 mb-4 block">Insights & Stories</span>
          <h2 className="text-4xl md:text-5xl serif text-stone-900 mb-6 italic">The Path of Savoring</h2>
          <p className="text-stone-500 text-lg font-light leading-relaxed">
            Explore the latest scientific breakthroughs in neurobiology and real stories of transformation from our community.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Featured Post Preview */}
          <div className="lg:col-span-7 group cursor-pointer" onClick={() => onOpenStory(stories[0].id)}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video bg-stone-100">
              <img 
                src={stories[0].image || "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200"} 
                alt="Story Thumbnail" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-stone-900/10 transition-colors"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-amber-500 text-white rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                  <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                <div>
                   <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">Featured Talk</p>
                   <p className="text-xl font-medium serif italic">{stories[0].title}</p>
                </div>
                <span className="px-3 py-1 bg-black/30 backdrop-blur-md rounded-full text-[10px] font-bold">Read Story</span>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-stone-600 leading-relaxed font-light">
                {stories[0].excerpt}
              </p>
            </div>
          </div>

          {/* Story Previews */}
          <div className="lg:col-span-5 space-y-10">
            {stories.slice(1, 4).map((story) => (
              <div key={story.id} className="group cursor-pointer" onClick={() => onOpenStory(story.id)}>
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">{story.category}</span>
                  <span className="text-stone-300">•</span>
                  <span className="text-[10px] text-stone-400 font-medium">{story.date}</span>
                </div>
                <h3 className="text-2xl serif text-stone-900 mb-3 group-hover:text-amber-700 transition-colors">
                  {story.title}
                </h3>
                <p className="text-stone-500 text-sm font-light leading-relaxed mb-4">
                  {story.excerpt}
                </p>
                <div className="h-[1px] w-full bg-stone-100 group-hover:bg-amber-100 transition-colors"></div>
              </div>
            ))}
            
            <button 
              onClick={() => setView('stories')}
              className="text-amber-800 text-sm font-bold uppercase tracking-widest hover:text-amber-600 transition-colors flex items-center"
            >
              View All Stories
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
