/**
 * PageBannerResearch Component Example
 * 
 * This is an example implementation for the PageBanner-Research design
 * Adapt this to your app's component structure and styling approach
 */

import Image from 'next/image';
import '../../../styles/pagebanner-research.css';

interface PageBannerResearchProps {
  title?: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  illustrationImage?: string;
  className?: string;
}

export default function PageBannerResearch({
  title = 'Research',
  subtitle = 'MORE™ Delivers Powerful Clinical Results',
  description = 'Lorem iPsum',
  backgroundImage = '/images/pagebanners/research-background.png',
  illustrationImage = '/images/pagebanners/research-brain.png',
  className = '',
}: PageBannerResearchProps) {
  return (
    <div 
      className={`banner-research ${className}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="banner-research__content">
        <h1 className="banner-research__title">
          {title}
        </h1>
        <div className="banner-research__subtitle">
          <p className="font-bold text-white">
            {subtitle}
          </p>
          <p className="text-white mt-4">
            {description}
          </p>
        </div>
      </div>
      
      <img
        src={illustrationImage}
        alt="Brain illustration"
        className="banner-research__image"
      />
    </div>
  );
}
