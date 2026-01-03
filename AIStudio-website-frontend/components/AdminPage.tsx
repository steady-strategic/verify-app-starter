
import React, { useState, useEffect } from 'react';
import { Story } from '../App';
import { GoogleGenAI } from "@google/genai";

interface AdminPageProps {
  stories: Story[];
  onPreview: (story: Story) => void;
  onDelete: (id: number) => void;
  onEdit: (story: Story) => void;
  initialEditStory: Story | null;
  clearEdit: () => void;
}

export const AdminPage: React.FC<AdminPageProps> = ({ 
  stories, 
  onPreview, 
  onDelete, 
  onEdit,
  initialEditStory,
  clearEdit
}) => {
  const [formData, setFormData] = useState<Omit<Story, 'id' | 'status'>>({
    title: '',
    excerpt: '',
    body: '',
    author: 'Dr. Eric Garland',
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    category: 'Success Story',
    image: '',
    mediaLink: ''
  });
  
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [uploadPreview, setUploadPreview] = useState<string | null>(null);

  useEffect(() => {
    if (initialEditStory) {
      setFormData({
        title: initialEditStory.title,
        excerpt: initialEditStory.excerpt,
        body: initialEditStory.body,
        author: initialEditStory.author,
        date: initialEditStory.date,
        category: initialEditStory.category,
        image: initialEditStory.image,
        mediaLink: initialEditStory.mediaLink || ''
      });
      setUploadPreview(initialEditStory.image);
    }
  }, [initialEditStory]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadPreview(reader.result as string);
        setFormData(prev => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const generateAIImage = async () => {
    if (!formData.title || !formData.excerpt) {
      alert("Please provide a Title and Short Description first to give the AI context.");
      return;
    }

    setIsGeneratingImage(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: [{ 
          text: `A professional, serene, therapeutic, and high-quality artistic photography related to wellness and mindfulness. Theme: ${formData.title}. Description: ${formData.excerpt}. Style: Minimalist, natural lighting, calming atmosphere.` 
        }],
        config: {
          imageConfig: {
            aspectRatio: "16:9"
          }
        }
      });

      let base64Image = '';
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          base64Image = `data:image/png;base64,${part.inlineData.data}`;
          break;
        }
      }

      if (base64Image) {
        setUploadPreview(base64Image);
        setFormData(prev => ({ ...prev, image: base64Image }));
      }
    } catch (err) {
      console.error("Image generation failed:", err);
      alert("Failed to generate image. Please try again or upload manually.");
    } finally {
      setIsGeneratingImage(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newStory: Story = {
      ...formData,
      id: initialEditStory ? initialEditStory.id : Date.now(),
      status: 'Draft' // Initial state when hitting preview
    };
    onPreview(newStory);
  };

  const categories = ["Success Story", "Science", "Technique", "Philosophy", "Research"];

  return (
    <div className="bg-[#fefaf6] pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-4xl serif text-stone-900 mb-2">Content Manager</h1>
            <p className="text-stone-500">Draft, edit, and publish stories to the MORE journal.</p>
          </div>
          <button 
            onClick={() => {
              clearEdit();
              setFormData({
                title: '',
                excerpt: '',
                body: '',
                author: 'Dr. Eric Garland',
                date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
                category: 'Success Story',
                image: '',
                mediaLink: ''
              });
              setUploadPreview(null);
            }}
            className="px-6 py-3 bg-stone-900 text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-stone-800 transition-all"
          >
            Create New Post
          </button>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Editor Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-stone-100">
              <h2 className="text-2xl serif text-stone-900 mb-8 italic">
                {initialEditStory ? 'Edit Post' : 'New Blog Post'}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Title</label>
                     <input 
                       name="title"
                       value={formData.title}
                       onChange={handleInputChange}
                       required
                       className="w-full bg-stone-50 border-none rounded-2xl py-3 px-4 focus:ring-2 focus:ring-amber-200 outline-none text-stone-900"
                       placeholder="Enter an engaging title"
                     />
                   </div>
                   <div className="space-y-2">
                     <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Category</label>
                     <select 
                       name="category"
                       value={formData.category}
                       onChange={handleInputChange}
                       className="w-full bg-stone-50 border-none rounded-2xl py-3 px-4 focus:ring-2 focus:ring-amber-200 outline-none text-stone-900 appearance-none"
                     >
                       {categories.map(c => <option key={c} value={c}>{c}</option>)}
                     </select>
                   </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Short Description</label>
                  <textarea 
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleInputChange}
                    required
                    rows={2}
                    className="w-full bg-stone-50 border-none rounded-2xl py-3 px-4 focus:ring-2 focus:ring-amber-200 outline-none text-stone-900 resize-none"
                    placeholder="Provide a brief overview of the story..."
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Author</label>
                     <input 
                       name="author"
                       value={formData.author}
                       onChange={handleInputChange}
                       required
                       className="w-full bg-stone-50 border-none rounded-2xl py-3 px-4 focus:ring-2 focus:ring-amber-200 outline-none text-stone-900"
                     />
                   </div>
                   <div className="space-y-2">
                     <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Date</label>
                     <input 
                       name="date"
                       value={formData.date}
                       onChange={handleInputChange}
                       className="w-full bg-stone-50 border-none rounded-2xl py-3 px-4 focus:ring-2 focus:ring-amber-200 outline-none text-stone-900"
                     />
                   </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Body Content</label>
                  <textarea 
                    name="body"
                    value={formData.body}
                    onChange={handleInputChange}
                    required
                    rows={8}
                    className="w-full bg-stone-50 border-none rounded-2xl py-3 px-4 focus:ring-2 focus:ring-amber-200 outline-none text-stone-900"
                    placeholder="Write the full story here..."
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">External Media Link (Optional)</label>
                  <input 
                    name="mediaLink"
                    value={formData.mediaLink}
                    onChange={handleInputChange}
                    className="w-full bg-stone-50 border-none rounded-2xl py-3 px-4 focus:ring-2 focus:ring-amber-200 outline-none text-stone-900"
                    placeholder="https://youtube.com/..."
                  />
                </div>

                <div className="p-6 border-2 border-dashed border-stone-100 rounded-[2rem] space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 block">Post Imagery</label>
                  <div className="flex flex-col sm:flex-row gap-4 items-center">
                    <label className="flex-1 cursor-pointer group">
                      <div className="px-6 py-4 bg-stone-50 rounded-2xl text-center group-hover:bg-amber-50 transition-colors border border-transparent group-hover:border-amber-100">
                         <span className="text-xs font-bold text-stone-500 group-hover:text-amber-700">Upload Image</span>
                         <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                      </div>
                    </label>
                    <span className="text-stone-300 text-xs font-bold uppercase">or</span>
                    <button 
                      type="button"
                      onClick={generateAIImage}
                      disabled={isGeneratingImage}
                      className="flex-1 px-6 py-4 bg-stone-900 text-white rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-stone-800 transition-all flex items-center justify-center disabled:opacity-50"
                    >
                      {isGeneratingImage ? (
                        <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        "Generate with AI"
                      )}
                    </button>
                  </div>
                  {uploadPreview && (
                    <div className="relative mt-4 rounded-xl overflow-hidden aspect-video bg-stone-100">
                      <img src={uploadPreview} className="w-full h-full object-cover" alt="Preview" />
                      <button 
                        type="button"
                        onClick={() => {setUploadPreview(null); setFormData(p => ({...p, image: ''}))}}
                        className="absolute top-2 right-2 bg-black/50 text-white p-2 rounded-full hover:bg-black transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
                    </div>
                  )}
                </div>

                <button 
                  type="submit"
                  className="w-full py-5 bg-amber-600 text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-amber-700 transition-all shadow-lg shadow-amber-100"
                >
                  Preview Post
                </button>
              </form>
            </div>
          </div>

          {/* Summarized List */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-stone-900 rounded-[2.5rem] p-10 text-white shadow-xl min-h-[600px]">
              <h2 className="text-2xl serif mb-8 italic">Your Dashboard</h2>
              
              <div className="space-y-6">
                {stories.length === 0 ? (
                  <p className="text-stone-400 italic font-light">No posts yet. Start by creating your first story.</p>
                ) : (
                  stories.map(story => (
                    <div key={story.id} className="group bg-stone-800/50 p-6 rounded-3xl border border-stone-800 hover:border-amber-500/30 transition-all">
                      <div className="flex justify-between items-start mb-4">
                        <span className={`px-3 py-1 rounded-full text-[8px] font-bold uppercase tracking-[0.2em] ${story.status === 'Published' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}`}>
                          {story.status}
                        </span>
                        <div className="flex space-x-2">
                           {story.status === 'Draft' ? (
                             <button onClick={() => onEdit(story)} className="p-2 text-stone-400 hover:text-white transition-colors">
                               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                             </button>
                           ) : (
                             <button onClick={() => { /* Navigation handled in App */ }} className="p-2 text-stone-400 hover:text-white transition-colors">
                               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                             </button>
                           )}
                           <button onClick={() => onDelete(story.id)} className="p-2 text-stone-400 hover:text-rose-400 transition-colors">
                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                           </button>
                        </div>
                      </div>
                      <h3 className="font-bold text-stone-100 mb-2 truncate">{story.title}</h3>
                      <p className="text-stone-500 text-[10px] uppercase tracking-widest">{story.date} • {story.category}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
