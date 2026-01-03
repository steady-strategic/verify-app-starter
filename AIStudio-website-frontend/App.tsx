
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AppFeature } from './components/AppFeature';
import { Evidence } from './components/Evidence';
import { BlogSection } from './components/BlogSection';
import { Footer } from './components/Footer';
import { AppPage } from './components/AppPage';
import { StoriesPage } from './components/StoriesPage';
import { StoryDetail } from './components/StoryDetail';
import { AdminPage } from './components/AdminPage';

export type ViewType = 'landing' | 'app' | 'stories' | 'story' | 'admin' | 'admin-preview';

export interface Story {
  id: number;
  title: string;
  excerpt: string;
  body: string;
  author: string;
  date: string;
  category: string;
  image: string;
  mediaLink?: string;
  status: 'Published' | 'Draft';
}

const INITIAL_STORIES: Story[] = [
  {
    id: 1,
    title: "From Pain to Presence: Sarah's Journey",
    excerpt: "After ten years of chronic back pain and prescription dependencies, Sarah discovered a new way to interact with sensation.",
    body: "In the journey of recovery, traditional methods often focus solely on the suppression of negative symptoms. The MORE (Mindfulness-Oriented Recovery Enhancement) program takes a different approach...",
    author: "Eric Garland, PhD",
    date: "March 15, 2024",
    category: "Success Story",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200",
    status: 'Published'
  },
  {
    id: 2,
    title: "The Neurobiology of Savoring",
    excerpt: "Why looking at a sunset can actually change your brain chemistry and help suppress cravings.",
    body: "By leveraging the concept of 'savoring,' individuals learn to restructure their brain's perception of pleasure and reward. This isn't just about feeling good in the moment...",
    author: "Eric Garland, PhD",
    date: "March 02, 2024",
    category: "Science",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=800",
    status: 'Published'
  },
  {
    id: 3,
    title: "Mindfulness in the Moment",
    excerpt: "Three practical exercises you can do anywhere to ground yourself during high-stress situations.",
    body: "This transformation doesn't happen overnight. It requires consistent practice and a willingness to re-engage with the world through a lens of curiosity and appreciation...",
    author: "Eric Garland, PhD",
    date: "Feb 18, 2024",
    category: "Technique",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
    status: 'Published'
  }
];

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [view, setView] = useState<ViewType>('landing');
  const [selectedStoryId, setSelectedStoryId] = useState<number | null>(null);
  const [stories, setStories] = useState<Story[]>(INITIAL_STORIES);
  const [previewStory, setPreviewStory] = useState<Story | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view, selectedStoryId]);

  const handleSetView = (newView: ViewType) => {
    setView(newView);
    if (newView !== 'story') {
      setSelectedStoryId(null);
    }
  };

  const handleOpenStory = (id: number) => {
    setSelectedStoryId(id);
    setView('story');
  };

  const handleSaveStory = (story: Story) => {
    const existingIndex = stories.findIndex(s => s.id === story.id);
    if (existingIndex >= 0) {
      const updated = [...stories];
      updated[existingIndex] = story;
      setStories(updated);
    } else {
      setStories([story, ...stories]);
    }
  };

  const handleDeleteStory = (id: number) => {
    setStories(stories.filter(s => s.id !== id));
  };

  const handlePreview = (story: Story) => {
    setPreviewStory(story);
    setView('admin-preview');
  };

  return (
    <div className="min-h-screen text-stone-700 overflow-x-hidden selection:bg-amber-100 selection:text-amber-900">
      <Navbar scrolled={scrolled} setView={handleSetView} currentView={view} />
      
      <main>
        {view === 'landing' && (
          <>
            <Hero />
            <section className="py-12 bg-amber-50/30 border-y border-stone-100">
              <div className="container mx-auto px-6">
                <div className="flex flex-wrap justify-center gap-8 md:gap-24 text-center">
                  <div>
                    <p className="text-4xl font-bold text-stone-800 mb-1">200+</p>
                    <p className="text-stone-500 uppercase tracking-widest text-xs font-semibold">Scientific Papers</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-stone-800 mb-1">$50M+</p>
                    <p className="text-stone-500 uppercase tracking-widest text-xs font-semibold">NIH Research Funding</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-stone-800 mb-1">15k+</p>
                    <p className="text-stone-500 uppercase tracking-widest text-xs font-semibold">Lives Impacted</p>
                  </div>
                </div>
              </div>
            </section>
            <AppFeature setView={handleSetView} />
            <Evidence />
            <BlogSection stories={stories.filter(s => s.status === 'Published')} setView={handleSetView} onOpenStory={handleOpenStory} />
            <section className="py-24 bg-stone-50">
              <div className="container mx-auto px-6 max-w-4xl text-center">
                <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-[10px] uppercase tracking-widest font-bold mb-6">Foundational Insight</span>
                <h2 className="text-3xl md:text-4xl italic text-stone-700 leading-relaxed mb-8">
                  "Through mindfulness, we can restructure how our brains perceive pleasure and pain, turning toward natural rewards and away from cravings."
                </h2>
                <div className="flex items-center justify-center space-x-4">
                  <img src="https://picsum.photos/id/64/100/100" alt="Dr. Eric Garland" className="w-16 h-16 rounded-full border-2 border-white shadow-sm" />
                  <div className="text-left">
                    <p className="font-bold text-stone-900">Dr. Eric Garland</p>
                    <p className="text-stone-500 text-sm">Founder of MORE, PhD, LCSW</p>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {view === 'app' && <AppPage setView={handleSetView} />}
        
        {view === 'stories' && (
          <StoriesPage 
            stories={stories.filter(s => s.status === 'Published')}
            setView={handleSetView} 
            onOpenStory={handleOpenStory} 
          />
        )}

        {view === 'story' && selectedStoryId !== null && (
          <StoryDetail 
            story={stories.find(s => s.id === selectedStoryId)} 
            setView={handleSetView} 
          />
        )}

        {view === 'admin' && (
          <AdminPage 
            stories={stories} 
            onPreview={handlePreview} 
            onDelete={handleDeleteStory}
            onEdit={(story) => {
               setPreviewStory(story);
               setView('admin'); // Admin handles its own edit state via props if we wanted to be robust, 
               // but for this MVP we'll pass the story into the form.
            }}
            initialEditStory={previewStory}
            clearEdit={() => setPreviewStory(null)}
          />
        )}

        {view === 'admin-preview' && previewStory && (
          <div className="relative">
            <div className="bg-amber-100 py-3 text-center text-[10px] font-bold uppercase tracking-[0.3em] sticky top-0 z-[60] text-amber-900">
              Preview Mode — Post is not yet published
            </div>
            <StoryDetail 
              story={previewStory} 
              setView={() => setView('admin')} 
              isPreview={true}
              onBack={() => setView('admin')}
              onSaveDraft={() => {
                handleSaveStory({ ...previewStory, status: 'Draft' });
                setView('admin');
                setPreviewStory(null);
              }}
              onPublish={() => {
                handleSaveStory({ ...previewStory, status: 'Published' });
                setView('admin');
                setPreviewStory(null);
              }}
            />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
