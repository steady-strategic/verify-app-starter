import React, { useState } from 'react';
import { FAQSectionProps } from './types';

// Icons
const QuestionIcon = ({ className }: { className?: string }) => (
    <svg
        className={className}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M8,0c-1.582,0 -3.129,0.469 -4.445,1.348c-1.315,0.879 -2.341,2.129 -2.946,3.591c-0.606,1.461 -0.764,3.07 -0.455,4.622c0.308,1.552 1.07,2.977 2.189,4.096c1.119,1.119 2.544,1.881 4.096,2.189c1.552,0.309 3.161,0.151 4.622,-0.455c1.462,-0.605 2.712,-1.631 3.591,-2.946c0.879,-1.316 1.348,-2.863 1.348,-4.445c-0.002,-2.121 -0.846,-4.154 -2.346,-5.654c-1.5,-1.5 -3.533,-2.344 -5.654,-2.346zM8,12.8c-0.158,0 -0.313,-0.047 -0.444,-0.135c-0.132,-0.088 -0.235,-0.213 -0.295,-0.359c-0.061,-0.146 -0.076,-0.307 -0.046,-0.462c0.031,-0.155 0.107,-0.298 0.219,-0.41c0.112,-0.112 0.255,-0.188 0.41,-0.219c0.155,-0.03 0.316,-0.015 0.462,0.046c0.146,0.06 0.271,0.163 0.359,0.295c0.088,0.131 0.135,0.286 0.135,0.444c0,0.212 -0.084,0.416 -0.234,0.566c-0.15,0.15 -0.354,0.234 -0.566,0.234zM8.8,9.173v0.427c0,0.212 -0.084,0.416 -0.234,0.566c-0.15,0.15 -0.354,0.234 -0.566,0.234c-0.212,0 -0.416,-0.084 -0.566,-0.234c-0.15,-0.15 -0.234,-0.354 -0.234,-0.566v-1.134c0,-0.108 0.022,-0.215 0.064,-0.314c0.042,-0.099 0.104,-0.189 0.182,-0.263c0.077,-0.075 0.168,-0.134 0.269,-0.172c0.101,-0.038 0.208,-0.056 0.315,-0.051c0.155,0.006 0.309,-0.02 0.454,-0.075c0.144,-0.056 0.276,-0.14 0.387,-0.247c0.111,-0.108 0.2,-0.237 0.26,-0.38c0.06,-0.142 0.09,-0.296 0.09,-0.45c0.012,-0.319 -0.103,-0.629 -0.319,-0.863c-0.216,-0.233 -0.517,-0.371 -0.835,-0.384c-0.318,-0.012 -0.628,0.103 -0.862,0.319c-0.234,0.216 -0.372,0.517 -0.384,0.835c-0.003,0.105 -0.026,0.209 -0.07,0.305c-0.043,0.096 -0.105,0.183 -0.183,0.254c-0.077,0.072 -0.168,0.128 -0.267,0.163c-0.099,0.036 -0.204,0.052 -0.31,0.047c-0.212,-0.009 -0.411,-0.101 -0.555,-0.256c-0.144,-0.156 -0.221,-0.362 -0.213,-0.574c0.023,-0.514 0.187,-1.013 0.475,-1.44c0.287,-0.427 0.687,-0.767 1.155,-0.981c0.468,-0.215 0.986,-0.297 1.497,-0.236c0.512,0.061 0.997,0.261 1.401,0.58c0.405,0.318 0.714,0.742 0.894,1.224c0.179,0.483 0.222,1.006 0.124,1.511c-0.098,0.506 -0.334,0.974 -0.682,1.354c-0.347,0.38 -0.792,0.657 -1.287,0.801z"
            fill="currentColor"
        />
    </svg>
);

const ChevronUpIcon = ({ className }: { className?: string }) => (
    <svg
        className={className}
        viewBox="0 0 10.8 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M9.7204,5.988c-0.28,0 -0.56,-0.106 -0.76,-0.293l-3.55,-3.286l-3.56,3.286c-0.1,0.096 -0.21,0.172 -0.35,0.224c-0.13,0.052 -0.27,0.08 -0.41,0.081c-0.15,0.001 -0.29,-0.024 -0.42,-0.074c-0.13,-0.05 -0.25,-0.125 -0.35,-0.218c-0.11,-0.094 -0.19,-0.205 -0.24,-0.328c-0.05,-0.123 -0.08,-0.254 -0.08,-0.387c0,-0.132 0.03,-0.263 0.09,-0.385c0.05,-0.122 0.14,-0.232 0.24,-0.324l4.31,-3.992c0.21,-0.187 0.48,-0.292 0.77,-0.292c0.28,0 0.56,0.105 0.76,0.292l4.31,3.992c0.15,0.14 0.26,0.318 0.3,0.511c0.04,0.194 0.02,0.394 -0.06,0.577c-0.08,0.182 -0.22,0.338 -0.4,0.447c-0.18,0.11 -0.39,0.169 -0.6,0.169z"
            fill="currentColor"
        />
    </svg>
);

const ChevronDownIcon = ({ className }: { className?: string }) => (
    <svg
        className={className}
        viewBox="0 0 10.8 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M5.4104,6c-0.28,0 -0.56,-0.105 -0.76,-0.292l-4.32,-3.992c-0.1,-0.092 -0.19,-0.202 -0.24,-0.324c-0.06,-0.122 -0.09,-0.253 -0.09,-0.385c0,-0.133 0.03,-0.264 0.08,-0.387c0.05,-0.123 0.13,-0.234 0.24,-0.328c0.1,-0.093 0.22,-0.168 0.35,-0.218c0.13,-0.05 0.28,-0.075 0.42,-0.074c0.14,0.001 0.28,0.029 0.42,0.081c0.13,0.052 0.25,0.128 0.35,0.224l3.55,3.286l3.56,-3.286c0.2,-0.182 0.48,-0.283 0.76,-0.28c0.28,0.002 0.55,0.107 0.75,0.292c0.2,0.185 0.32,0.435 0.32,0.697c0,0.261 -0.11,0.514 -0.3,0.702l-4.32,3.992c-0.21,0.187 -0.48,0.292 -0.77,0.292z"
            fill="currentColor"
        />
    </svg>
);

export const FAQ: React.FC<FAQSectionProps> = ({
    items,
    title,
    variant = 'default',
    className = '',
    id,
}) => {
    const [expandedId, setExpandedId] = useState<string>(items[0]?.id || '');

    const toggleItem = (itemId: string) => {
        setExpandedId(expandedId === itemId ? '' : itemId);
    };

    return (
        <section className={`w-full py-[60px] ${className}`} id={id}>
            <div className="container mx-auto px-6 flex flex-col gap-[48px] max-w-4xl">
                {title && (
                    <h2
                        className="text-[50px] font-extrabold tracking-[-1px] text-[#111928] leading-none"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                        {title}
                    </h2>
                )}
                <div className="flex flex-col border-t border-[#e5e7eb]">
                    {items.map((item, index) => {
                        const isExpanded = expandedId === item.id;
                        return (
                            <div
                                key={item.id}
                                className={`border-b border-[#e5e7eb] ${index === 0 ? 'rounded-t-lg' : ''
                                    } ${index === items.length - 1 ? 'rounded-b-lg' : ''}`}
                            >
                                <div className="flex flex-col">
                                    <button
                                        className="w-full flex items-center justify-between py-6 text-left focus:outline-none group cursor-pointer"
                                        onClick={() => toggleItem(item.id)}
                                        aria-expanded={isExpanded}
                                        aria-controls={`faq-content-${item.id}`}
                                    >
                                        <div className="flex items-center gap-[8px]">
                                            <QuestionIcon className="w-[16px] h-[16px] text-[#d80ada] flex-shrink-0" />
                                            <span
                                                className="text-[18px] font-normal text-[#111928]"
                                                style={{ fontFamily: 'Inter, sans-serif' }}
                                            >
                                                {item.question}
                                            </span>
                                        </div>
                                        {isExpanded ? (
                                            <ChevronUpIcon className="w-[11px] h-[6px] text-[#6b7280]" />
                                        ) : (
                                            <ChevronDownIcon className="w-[11px] h-[6px] text-[#6b7280]" />
                                        )}
                                    </button>
                                    <div
                                        id={`faq-content-${item.id}`}
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <div
                                            className="text-[16px] leading-[24px] text-[#6b7280] pl-[24px] [&_p]:mb-[6px] last:[&_p]:mb-0 font-normal"
                                            style={{ fontFamily: 'Inter, sans-serif' }}
                                            dangerouslySetInnerHTML={{ __html: item.answer }}
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
