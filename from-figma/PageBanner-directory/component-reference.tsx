// React/NextJS Component Reference for PageBanner-directory
// This is a code template showing the structure from the design

'use client'

import Image from 'next/image'
import SearchIcon from '@/public/assets/search-icon.svg'
import DropdownIcon from '@/public/assets/dropdown-chevron.svg'

export default function PageBannerDirectory() {
  return (
    <div
      className="flex flex-col gap-[64px] px-20 py-20"
      style={{
        backgroundImage: 'url(/assets/page-banner-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Title & Description Section */}
      <div className="flex flex-col gap-[24px]">
        {/* Title */}
        <h1
          className="w-96 font-inter text-white"
          style={{
            fontSize: '50px',
            fontWeight: 800,
            lineHeight: '55px',
            letterSpacing: '-1px',
          }}
        >
          Find a Clinician
        </h1>

        {/* Description */}
        <p
          className="w-96 text-white font-inter"
          style={{
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: '27px',
          }}
        >
          Looking to receive MORE therapy from a clinician near you? Select your state to begin your search. Each
          listed clinician has been officially trained and certified in MORE therapy by Dr. Eric Garland.
        </p>
      </div>

      {/* Form Section */}
      <div className="flex gap-[10px] bg-white rounded-[8px] w-fit">
        {/* Dropdown Input */}
        <div className="flex gap-[10px] items-center px-6 py-4">
          <span
            className="text-[#111928] font-inter"
            style={{
              fontSize: '16px',
              fontWeight: 400,
            }}
          >
            California
          </span>
          <DropdownIcon width={18} height={12} style={{ color: '#6f6f6f' }} />
        </div>

        {/* Search Button */}
        <button
          className="flex gap-[8px] items-center justify-center bg-[#d80ada] rounded-[8px] px-8 py-3"
          style={{
            minWidth: '127px',
            height: '52px',
          }}
        >
          <SearchIcon width={16} height={16} style={{ color: '#ffffff' }} />
          <span
            className="text-white font-inter"
            style={{
              fontSize: '16px',
              fontWeight: 700,
            }}
          >
            Search
          </span>
        </button>
      </div>
    </div>
  )
}

/*
KEY MEASUREMENTS (from design-xml element-boxes):
- Title: 768px width × 55px height
- Description: 768px width × 81px height
- Form container: 469px width × 72px height
- Dropdown area: 252px width × 24px height
- Button: 127px width × 52px height
- Dropdown icon: 18px × 12px
- Search icon: 16px × 16px

TAILWIND CLASSES:
- Main container: flex flex-col gap-[64px] (gap from n_815dc)
- Title & Desc: flex flex-col gap-[24px] (gap from n_33c9a)
- Form: flex gap-[10px] bg-white rounded-[8px] (gap from n_209f0)
- Button: flex gap-[8px] bg-[#d80ada] rounded-[8px] (gap from n_7097b)

COLORS TO USE:
- Primary: #d80ada (magenta)
- Text White: #ffffff
- Text Dark: #111928
- Icon Color: #6f6f6f
*/
