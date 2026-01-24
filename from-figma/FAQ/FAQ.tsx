'use client';

import { useState } from 'react';
import QuestionIcon from './assets/question-icon.svg';
import ChevronUpIcon from './assets/chevron-up-icon.svg';
import ChevronDownIcon from './assets/chevron-down-icon.svg';

interface FAQItem {
  id: string;
  question: string;
  answer: React.ReactNode;
}

interface FAQProps {
  items?: FAQItem[];
  title?: string;
}

const DEFAULT_ITEMS: FAQItem[] = [
  {
    id: 'q1',
    question: 'Can I use MORE in clinical settings?',
    answer: (
      <>
        <p className="faq-answer-paragraph">
          Generally, it is accepted to use FlowBite in open-source projects, as long as it is not a
          UI library, a theme, a template, a page-builder that would be considered as an
          alternative to FlowBite itself.
        </p>
        <p className="faq-answer-paragraph">
          With that being said, feel free to use this design kit for your open-source projects.
        </p>
        <p className="faq-answer-paragraph">
          Find out more information by{' '}
          <a href="#" className="faq-answer-link">
            reading the license
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: 'q2',
    question: 'Where can I access my download files?',
    answer: (
      <p className="faq-answer-paragraph">
        You can access your download files from your account dashboard.
      </p>
    ),
  },
  {
    id: 'q3',
    question: 'Can I use MORE for commercial purposes?',
    answer: (
      <p className="faq-answer-paragraph">
        Commercial usage depends on your license type. Please check your license agreement for details.
      </p>
    ),
  },
  {
    id: 'q4',
    question: 'What about browser support?',
    answer: (
      <p className="faq-answer-paragraph">
        Our platform supports all modern browsers including Chrome, Firefox, Safari, and Edge.
      </p>
    ),
  },
];

export default function FAQ({ items = DEFAULT_ITEMS, title = "FAQ's" }: FAQProps) {
  const [expandedId, setExpandedId] = useState<string>(items[0]?.id || '');

  const toggleItem = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-heading">{title}</h2>
      <div className="faq-accordion">
        {items.map((item) => (
          <div key={item.id} className="faq-accordion-item">
            <button
              className="faq-button"
              onClick={() => toggleItem(item.id)}
              aria-expanded={expandedId === item.id}
              aria-controls={`faq-content-${item.id}`}
            >
              <div className="faq-button-content">
                <QuestionIcon className="faq-button-icon" />
                <span className="faq-button-text">{item.question}</span>
              </div>
              {expandedId === item.id ? (
                <ChevronUpIcon className="faq-toggle-icon" />
              ) : (
                <ChevronDownIcon className="faq-toggle-icon" />
              )}
            </button>
            {expandedId === item.id && (
              <div className="faq-content" id={`faq-content-${item.id}`}>
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
