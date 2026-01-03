
import React from 'react';

interface BlobAnimationProps {
  active: boolean;
}

export const BlobAnimation: React.FC<BlobAnimationProps> = ({ active }) => {
  return (
    <div className={`relative w-full h-full transition-all duration-[2500ms] ease-in-out flex items-center justify-center ${active ? 'scale-110 rotate-6' : 'scale-95 rotate-0'}`}>
      <svg 
        viewBox="0 0 200 200" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-full h-full drop-shadow-[0_0_20px_rgba(244,63,94,0.2)]"
      >
        <defs>
          {/* Slightly softened vibrant colors for better balance */}
          <linearGradient id="vibrantGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#f43f5e', stopOpacity: 1 }} />
            <stop offset="45%" style={{ stopColor: '#d946ef', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#6366f1', stopOpacity: 1 }} />
          </linearGradient>
          
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
          </filter>
        </defs>
        
        <g filter="url(#goo)">
          {/* Main organic blob - Opacity reduced by 50% */}
          <path 
            fill="url(#vibrantGradient)" 
            d="M44.7,-76.4C58.3,-69.2,70.1,-58.5,78.2,-45.5C86.4,-32.5,90.9,-17.2,89.5,-2.4C88.1,12.4,80.7,26.7,71.5,39.2C62.3,51.8,51.2,62.5,38.2,70.2C25.2,77.9,10.3,82.5,-3.8,89.1C-17.9,95.7,-31.2,104.2,-44.1,101.4C-57,98.6,-69.5,84.4,-77.9,69.5C-86.4,54.6,-90.7,39,-92.8,23.3C-94.9,7.6,-94.7,-8.1,-90.3,-22.8C-85.9,-37.6,-77.1,-51.3,-65,-59.4C-52.8,-67.4,-37.2,-69.7,-23.1,-76.5C-9,-83.4,3.7,-94.8,17.2,-95.7C30.6,-96.5,45,-86.8,44.7,-76.4Z" 
            transform="translate(100 100)"
            className={`transition-all duration-[10s] ease-in-out ${active ? 'animate-vibrant-morph opacity-40' : 'opacity-20'}`}
          />
          
          {/* Overlapping contrast blob - Opacity reduced by 50% */}
          <path 
            fill="#fbbf24" 
            opacity="0.3"
            d="M38.1,-63.9C50.2,-57.8,61.4,-49.4,69.4,-38.5C77.4,-27.6,82.3,-14.2,82.1,-0.1C81.9,14,76.6,28.8,68,41.2C59.3,53.7,47.4,63.9,34.1,70.8C20.8,77.7,6.1,81.3,-8,81C-22.1,80.7,-35.6,76.5,-47.3,68.9C-59,61.4,-68.9,50.6,-75.4,38.1C-81.8,25.6,-84.9,11.5,-84.7,-2.5C-84.5,-16.5,-81.1,-30.3,-73.4,-41.7C-65.7,-53.1,-53.8,-62,-40.8,-67.7C-27.8,-73.4,-13.9,-75.9,0.3,-76.4C14.4,-76.9,26,-70,38.1,-63.9Z" 
            transform="translate(100 100)"
            className={`transition-all duration-[12s] ease-in-out ${active ? 'animate-vibrant-morph-alt opacity-30' : 'opacity-10'}`}
          />
        </g>
      </svg>
      
      <style>{`
        @keyframes vibrant-morph {
          0%, 100% { transform: translate(100px, 100px) scale(1) rotate(0deg); }
          33% { transform: translate(105px, 95px) scale(1.08) rotate(120deg); }
          66% { transform: translate(95px, 105px) scale(0.95) rotate(240deg); }
        }
        @keyframes vibrant-morph-alt {
          0%, 100% { transform: translate(100px, 100px) scale(1) rotate(360deg); }
          33% { transform: translate(95px, 105px) scale(1.05) rotate(240deg); }
          66% { transform: translate(105px, 98px) scale(0.92) rotate(120deg); }
        }
        .animate-vibrant-morph {
          animation: vibrant-morph 15s infinite ease-in-out;
        }
        .animate-vibrant-morph-alt {
          animation: vibrant-morph-alt 18s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};
