import React from 'react';

const WhyZambeel = () => {
  const features = [
    {
      id: 1,
      text: "Dedicated Account Managers",
      mobileLineW: "w-[12%]",
      mobileCardMl: "ml-[12%]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[#1e3a8a] stroke-2 fill-none stroke-linecap-round stroke-linejoin-round">
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
      )
    },
    {
      id: 2,
      text: "Highest Delivery Rates",
      mobileLineW: "w-[22%]",
      mobileCardMl: "ml-[22%]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[#1e3a8a] stroke-2 fill-none stroke-linecap-round stroke-linejoin-round">
          <rect x="1" y="3" width="15" height="13"></rect>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
          <circle cx="5.5" cy="18.5" r="2.5"></circle>
          <circle cx="18.5" cy="18.5" r="2.5"></circle>
        </svg>
      )
    },
    {
      id: 3,
      text: "Biggest Catalog of Winning Products",
      mobileLineW: "w-[32%]",
      mobileCardMl: "ml-[32%]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[#1e3a8a] stroke-2 fill-none stroke-linecap-round stroke-linejoin-round">
          <path d="M12 2v10h4l2 5h4"></path>
          <path d="M2 17h10v-8h-6l-2 3v5"></path>
          <circle cx="5" cy="19" r="2"></circle>
          <circle cx="14" cy="19" r="2"></circle>
          <line x1="18" y1="17" x2="22" y2="17"></line>
        </svg>
      )
    },
    {
      id: 4,
      text: "No need to purchase Inventory",
      mobileLineW: "w-[18%]",
      mobileCardMl: "ml-[18%]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[#1e3a8a] stroke-2 fill-none stroke-linecap-round stroke-linejoin-round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
          <polyline points="3.27 16 12 11 20.73 16"></polyline>
        </svg>
      )
    },
    {
      id: 5,
      text: "Receive timely payments weekly",
      mobileLineW: "w-[8%]",
      mobileCardMl: "ml-[8%]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[#1e3a8a] stroke-2 fill-none stroke-linecap-round stroke-linejoin-round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="8" y1="16" x2="16" y2="8"></line>
          <circle cx="9" cy="9" r="0.5" fill="currentColor"></circle>
          <circle cx="15" cy="15" r="0.5" fill="currentColor"></circle>
        </svg>
      )
    }
  ];

  return (
    <section className="relative w-full mx-auto py-8 md:py-20 px-6 sm:px-10 lg:px-12">
      <div className="max-w-[1050px] mx-auto relative z-10">
        
        {/* ==================== */}
        {/* DESKTOP VIEW (850px and above) */}
        {/* ==================== */}
        <div className="hidden md:block rounded-3xl overflow-hidden shadow-2xl">
          <div className="bg-white px-14 pt-16 pb-10 text-center">
            <h2 className="text-4xl font-bold text-[#35466d] mb-6">Why China Sourcing with Zambeel?</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We sourced high quality products from trusted suppliers in China. Our end-to-end service includes product
              sourcing, quality control, shipping logistics, and customs clearance, making it easy for you to focus on
              growing your business.
            </p>
          </div>
          <div className="bg-[#e7ecef] px-14 py-10">
            <div className="flex flex-wrap justify-center gap-12">
              <div className="flex flex-col items-center w-32 text-center">
                <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 ring-1 ring-gray-200">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#d_hq)">
                      <path d="M28 8C28 7.46957 28.2107 6.96086 28.5858 6.58579C28.9609 6.21071 29.4696 6 30 6H40C40.5304 6 41.0391 6.21071 41.4142 6.58579C41.7893 6.96086 42 7.46957 42 8V18C42 18.5304 41.7893 19.0391 41.4142 19.4142C41.0391 19.7893 40.5304 20 40 20H30C29.4696 20 28.9609 19.7893 28.5858 19.4142C28.2107 19.0391 28 18.5304 28 18V8Z" fill="#F4D03F" stroke="#2D3E7E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6 28H30C31.0609 28 32.0783 28.4214 32.8284 29.1716C33.5786 29.9217 34 30.9391 34 32V38C34 39.0609 33.5786 40.0783 32.8284 40.8284C32.0783 41.5786 31.0609 42 30 42H10C8.93913 42 7.92172 41.5786 7.17157 40.8284C6.42143 40.0783 6 39.0609 6 38V18C6 16.9391 6.42143 15.9217 7.17157 15.1716C7.92172 14.4214 8.93913 14 10 14H16C17.0609 14 18.0783 14.4214 18.8284 15.1716C19.5786 15.9217 20 16.9391 20 18V42" stroke="#2D3E7E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs><clipPath id="d_hq"><rect width="48" height="48" fill="white" /></clipPath></defs>
                  </svg>
                </div>
                <p className="text-xs font-semibold text-[#35466d] leading-tight">High Quality<br />Products</p>
              </div>
              <div className="flex flex-col items-center w-32 text-center">
                <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 ring-1 ring-gray-200">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#d_ship)">
                      <path d="M10 34C10 35.0609 10.4214 36.0783 11.1716 36.8284C11.9217 37.5786 12.9391 38 14 38C15.0609 38 16.0783 37.5786 16.8284 36.8284C17.5786 36.0783 18 35.0609 18 34C18 32.9391 17.5786 31.9217 16.8284 31.1716C16.0783 30.4214 15.0609 30 14 30C12.9391 30 11.9217 30.4214 11.1716 31.1716C10.4214 31.9217 10 32.9391 10 34Z" fill="#F4D03F" stroke="#2D3E7E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M30 34C30 35.0609 30.4214 36.0783 31.1716 36.8284C31.9217 37.5786 32.9391 38 34 38C35.0609 38 36.0783 37.5786 36.8284 36.8284C37.5786 36.0783 38 35.0609 38 34C38 32.9391 37.5786 31.9217 36.8284 31.1716C36.0783 30.4214 35.0609 30 34 30C32.9391 30 31.9217 30.4214 31.1716 31.1716C30.4214 31.9217 30 32.9391 30 34Z" fill="#F4D03F" stroke="#2D3E7E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10 34H6V12C6 11.4696 6.21071 10.9609 6.58579 10.5858C6.96086 10.2107 7.46957 10 8 10H26V34M18 34H30M38 34H42V22M42 22H26M42 22L36 12H26" stroke="#2D3E7E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs><clipPath id="d_ship"><rect width="48" height="48" fill="white" /></clipPath></defs>
                  </svg>
                </div>
                <p className="text-xs font-semibold text-[#35466d] leading-tight">Fast Shipping<br />from China</p>
              </div>
              <div className="flex flex-col items-center w-32 text-center">
                <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 ring-1 ring-gray-200">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#d_src)">
                      <path d="M6 34C6 35.0609 6.42143 36.0783 7.17157 36.8284C7.92172 37.5786 8.93913 38 10 38C11.0609 38 12.0783 37.5786 12.8284 36.8284C13.5786 36.0783 14 35.0609 14 34C14 32.9391 13.5786 31.9217 12.8284 31.1716C12.0783 30.4214 11.0609 30 10 30C8.93913 30 7.92172 30.4214 7.17157 31.1716C6.42143 31.9217 6 32.9391 6 34Z" fill="#F4D03F" stroke="#2D3E7E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M24 34C24 35.0609 24.4214 36.0783 25.1716 36.8284C25.9217 37.5786 26.9391 38 28 38C29.0609 38 30.0783 37.5786 30.8284 36.8284C31.5786 36.0783 32 35.0609 32 34C32 32.9391 31.5786 31.9217 30.8284 31.1716C30.0783 30.4214 29.0609 30 28 30C26.9391 30 25.9217 30.4214 25.1716 31.1716C24.4214 31.9217 24 32.9391 24 34Z" fill="#F4D03F" stroke="#2D3E7E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M14 34H24" stroke="#2D3E7E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6 34V22H32V34" stroke="#2D3E7E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10 22V14H18" stroke="#2D3E7E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M18 22V10H26L32 22" stroke="#2D3E7E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M44 30H38V10" stroke="#2D3E7E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M32 26H38" stroke="#2D3E7E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs><clipPath id="d_src"><rect width="48" height="48" fill="white" /></clipPath></defs>
                  </svg>
                </div>
                <p className="text-xs font-semibold text-[#35466d] leading-tight">Source<br />Anything</p>
              </div>
              <div className="flex flex-col items-center w-32 text-center">
                <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 ring-1 ring-gray-200">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#d_pkg)">
                      <path d="M42 32.015V15.979C41.9988 15.2812 41.8132 14.596 41.4619 13.993C41.1107 13.39 40.6064 12.8904 40 12.545L26 4.52904C25.3909 4.18107 24.7015 3.99805 24 3.99805C23.2985 3.99805 22.6091 4.18107 22 4.52904L8 12.545C6.762 13.255 6 14.565 6 15.981V32.017C6 33.435 6.762 34.743 8 35.451L22 43.467C23.24 44.175 24.76 44.175 26 43.467L40 35.451C41.238 34.741 42 33.431 42 32.015Z" stroke="#2D3E7E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M24 44V24" stroke="#2D3E7E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M24 23.9999L41.46 13.9199" stroke="#2D3E7E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6.53906 13.9199L23.9991 23.9999" stroke="#2D3E7E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M30.006 30.664L24 34L6 24M36.006 27.33L42 24" stroke="#2D3E7E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M30 34.0002L36 30.6602V24.6602L30 28.0002V34.0002Z" fill="#F4D03F" stroke="#2D3E7E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs><clipPath id="d_pkg"><rect width="48" height="48" fill="white" /></clipPath></defs>
                  </svg>
                </div>
                <p className="text-xs font-semibold text-[#35466d] leading-tight">Customize<br />Packaging</p>
              </div>
              <div className="flex flex-col items-center w-32 text-center">
                <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 ring-1 ring-gray-200">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#d_low)">
                      <path d="M18 30L30 18" stroke="#2D3E7E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M29 27C30.1046 27 31 27.8954 31 29C31 30.1046 30.1046 31 29 31C27.8954 31 27 30.1046 27 29C27 27.8954 27.8954 27 29 27Z" fill="#F4D03F" stroke="#2D3E7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M19 17C20.1046 17 21 17.8954 21 19C21 20.1046 20.1046 21 19 21C17.8954 21 17 20.1046 17 19C17 17.8954 17.8954 17 19 17Z" fill="#F4D03F" stroke="#2D3E7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6 24C6 26.3638 6.46558 28.7044 7.37017 30.8883C8.27475 33.0722 9.60062 35.0565 11.2721 36.7279C12.9435 38.3994 14.9278 39.7252 17.1117 40.6298C19.2956 41.5344 21.6362 42 24 42C26.3638 42 28.7044 41.5344 30.8883 40.6298C33.0722 39.7252 35.0565 38.3994 36.7279 36.7279C38.3994 35.0565 39.7252 33.0722 40.6298 30.8883C41.5344 28.7044 42 26.3638 42 24C42 21.6362 41.5344 19.2956 40.6298 17.1117C39.7252 14.9278 38.3994 12.9435 36.7279 11.2721C35.0565 9.60062 33.0722 8.27475 30.8883 7.37017C28.7044 6.46558 26.3638 6 24 6C21.6362 6 19.2956 6.46558 17.1117 7.37017C14.9278 8.27475 12.9435 9.60062 11.2721 11.2721C9.60062 12.9435 8.27475 14.9278 7.37017 17.1117C6.46558 19.2956 6 21.6362 6 24Z" stroke="#2D3E7E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs><clipPath id="d_low"><rect width="48" height="48" fill="white" /></clipPath></defs>
                  </svg>
                </div>
                <p className="text-xs font-semibold text-[#35466d] leading-tight">Lowest<br />Prices</p>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== */}
        {/* MOBILE VIEW (below 850px) */}
        {/* ==================== */}
        <div className="md:hidden w-full bg-[#92a3b1] overflow-hidden">
          <div className="bg-gradient-to-b from-[#2b3e6a] via-[#3a5074] to-[#5f7389] px-6 pt-10 pb-8 text-center">
            <h2 className="text-white text-xl font-bold mb-3 tracking-wide">Why China Sourcing with Zambeel?</h2>
            <p className="text-white/90 text-[12px] leading-5 font-light">
              We sourced high quality products from trusted suppliers in China. Our end-to-end service includes product
              sourcing, quality control, shipping logistics, and customs clearance, making it easy for you to focus on
              growing your business.
            </p>
          </div>
          <div className="py-8 space-y-5">
            {features.map((feature) => (
              <div key={feature.id} className="relative flex items-center w-full">
                <div className={`absolute left-0 h-[2px] bg-[#fbbf24] z-0 transition-all duration-300 ${feature.mobileLineW}`}></div>
                <div className={`relative z-10 flex items-center bg-gradient-to-r from-[#eef2ff] to-white rounded-l-full rounded-r-full py-2 pl-2 pr-6 shadow-lg transition-all duration-300 ${feature.mobileCardMl}`}>
                  <div className="w-10 h-10 bg-[#e0e7ff] rounded-full flex items-center justify-center border-2 border-white shadow-sm shrink-0">
                    {feature.icon}
                  </div>
                  <span className="ml-3 text-[#1e3a8a] font-semibold text-[13px] leading-tight">
                    {feature.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="h-10 bg-gradient-to-t from-[#2b3e6a] via-[#3a5074] to-[#5f7389]"></div>
        </div>
        
      </div>
    </section>
  );
};

export default WhyZambeel;