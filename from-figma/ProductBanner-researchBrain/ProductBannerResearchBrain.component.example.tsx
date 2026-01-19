/**
 * ProductBannerResearchBrain Component Example
 * 
 * This is an example implementation for the ProductBanner-researchBrain design
 * Adapt this to your app's component structure and styling approach
 */

import Image from 'next/image';
import '../../../styles/productbanner-research-brain.css';

interface ProductBannerResearchBrainProps {
  title?: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  illustrationImage?: string;
  className?: string;
}

export default function ProductBannerResearchBrain({
  title = 'Research',
  subtitle = 'MORE™ Delivers Powerful Clinical Results',
  description = 'Lorem iPsum',
  backgroundImage = '/images/banners/research-background.png',
  illustrationImage = '/images/banners/research-brain.png',
  className = '',
}: ProductBannerResearchBrainProps) {
  return (
    <div 
      className={`banner-product-research ${className}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="banner-product-research__content">
        <h1 className="banner-product-research__title">
          {title}
        </h1>
        <div className="banner-product-research__subtitle">
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
        className="banner-product-research__image"
      />
    </div>
  );
}
