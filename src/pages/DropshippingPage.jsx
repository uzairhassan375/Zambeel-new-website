import React, { useState, useEffect } from "react";
import PricingSection from "../components/PricingSection.jsx"; 
import TrendingProducts from "../components/dropshiping_components/TrendingProducts.jsx"; 
import Wts from "../components/dropshiping_components/WhereTS.jsx";
import WhyZambeel from "../components/dropshiping_components/WhyZambeel.jsx";


const DropshippingPage = () => {
  // Text carousel state
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const carouselTexts = [
    "Start your Ecommerce business from anywhere in the world without business registration.",
    "Launch your online store instantly with zero inventory investment and global reach.",
    "Access thousands of trending products and start selling with AI-powered insights."
  ];

  // Auto-rotate text every 3.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % carouselTexts.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [carouselTexts.length]);
  return (
    <div
      className="min-h-screen m-0 p-0 overflow-x-hidden"
      style={{
        background: `linear-gradient(186.57deg, rgba(89, 10, 10, 0.75) 5.1%, rgba(31, 46, 100, 0.958277) 12.51%, rgba(48, 41, 90, 0.897201) 31.86%, rgba(125, 20, 20, 0.793286) 47.98%, rgba(75, 72, 147, 0.918182) 63.78%, #4A61C4 81.76%)`,
      }}
    >
      {/* ================= HERO SECTION ================= */}
      <section className="pb-8 md:pb-16 text-center relative pt-24 md:pt-28">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6">Zambeel Dropshipping</h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white font-normal mb-2 md:mb-3 italic">Start from Anywhere</p>
        <div className="mb-6 md:mb-8">
          <p className="text-xs sm:text-sm md:text-base text-white/95 max-w-3xl mx-auto leading-relaxed px-2 min-h-[60px] md:min-h-[72px] transition-opacity duration-500">
            {carouselTexts[currentTextIndex]}
          </p>
        </div>
        {/* Carousel dots */}
        <div className="flex justify-center gap-2 mb-8">
          {carouselTexts.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentTextIndex(index)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                index === currentTextIndex
                  ? 'w-7 md:w-8 h-2 bg-[#ffd24c]'
                  : 'w-2 h-2 bg-white/40'
              }`}
            ></div>
          ))}
        </div>
        {/* UAE/KSA Box */}
        <div className="mx-auto rounded-[32px] shadow-lg max-w-lg overflow-hidden" style={{boxShadow: '0 8px 32px rgba(36,58,134,0.18)'}}>
          {/* Top: Dropshipping available */}
          <div className="bg-[#e3e7f6] px-4 pt-4 pb-2">
            <p className="text-[#243a86] font-bold text-lg mb-6 text-center">Dropshipping currently available in</p>
            <div className="flex items-center justify-center gap-12">
              {/* UAE Flag */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-1 shadow-md">
                  <div className="w-12 h-12 rounded-full overflow-hidden relative">
                    <div className="absolute inset-0 flex flex-col">
                      <div className="h-1/3 bg-green-600"></div>
                      <div className="h-1/3 bg-white"></div>
                      <div className="h-1/3 bg-black"></div>
                    </div>
                    <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-red-600"></div>
                  </div>
                </div>
                <span className="mt-1 text-[#243a86] font-semibold text-sm">UAE</span>
              </div>
              {/* KSA Custom Icon */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-1 shadow-md">
                  <svg width="56" height="56" viewBox="0 0 96 96" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="48" cy="48" r="34" fill="#6DA544" />
                    <path d="M34 58C34 60.7614 36.2386 63 39 63H53C53 65.2091 54.7909 67 57 67H61C63.2091 67 65 65.2091 65 63V58H34Z" fill="#F0F0F0" />
                    <path d="M65 36V46C65 47.6569 63.6569 49 62 49V53C65.866 53 69 49.866 69 46V36H65Z" fill="#F0F0F0" />
                    <path d="M32 46C32 47.6569 30.6569 49 29 49V53C32.866 53 36 49.866 36 46V36H32V46Z" fill="#F0F0F0" />
                    <path d="M56 36H60V46H56V36Z" fill="#F0F0F0" />
                    <path d="M50 42C50 42.5523 49.5523 43 49 43C48.4477 43 48 42.5523 48 42V36H44V42C44 42.5523 43.5523 43 43 43C42.4477 43 42 42.5523 42 42V36H38V42C38 44.7614 40.2386 47 43 47C44.1046 47 45.1046 46.6569 46 46C46.8954 46.6569 47.8954 47 49 47C49.1843 47 49.364 46.987 49.538 46.962C49.268 48.378 48.1 49.4 46.7 49.4V53C50.566 53 53.7 49.866 53.7 46V42H50Z" fill="#F0F0F0" />
                    <path d="M38 49H44V53H38V49Z" fill="#F0F0F0" />
                  </svg>
                </div>
                <span className="mt-1 text-[#243a86] font-semibold text-sm">KSA</span>
              </div>
            </div>
          </div>
          {/* Divider */}
          <div className="bg-[#e3e7f6] h-2"></div>
          {/* Bottom: Other services available */}
          <div className="bg-gray-100 px-4 pt-2 pb-4 rounded-b-[32px]" style={{ filter: 'grayscale(100%)', opacity: 0.6 }}>
            <p className="text-gray-500 font-bold text-lg mb-6 text-center">Other Zambeel services available in</p>
            <div className="flex items-center justify-center gap-10">
              {/* Pakistan */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-1 shadow" style={{ filter: 'grayscale(100%)' }}>
                  <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" className="w-full h-full p-1" style={{ filter: 'grayscale(100%)' }}>
                    <g clipPath="url(#clip-pk)">
                      <path d="M48 86C70.0914 86 88 68.0914 88 46C88 23.9086 70.0914 6 48 6C25.9086 6 8 23.9086 8 46C8 68.0914 25.9086 86 48 86Z" fill="#F0F0F0" />
                      <path d="M8 45.9997C8 61.1614 16.4358 74.3519 28.8695 81.1361V10.8633C16.4358 17.6475 8 30.838 8 45.9997Z" fill="#F0F0F0" />
                      <path d="M48.0035 6C41.0738 6 34.556 7.76297 28.873 10.8636V81.1363C34.556 84.237 41.0738 86 48.0035 86C70.0948 86 88.0035 68.0913 88.0035 46C88.0035 23.9087 70.0948 6 48.0035 6Z" fill="#496E2D" />
                      <path d="M65.1017 52.6155C60.0412 56.2719 52.9746 55.1338 49.3184 50.0735C45.6618 45.0129 46.8001 37.9465 51.8606 34.2902C53.4384 33.1502 55.2112 32.4763 57.0148 32.2421C53.5449 31.7232 49.877 32.5051 46.8087 34.7221C40.5806 39.2224 39.1795 47.9194 43.6796 54.1479C48.1798 60.3758 56.877 61.7771 63.1054 57.2765C66.174 55.0594 68.0679 51.823 68.6645 48.3654C67.876 50.0038 66.6796 51.4754 65.1017 52.6155Z" fill="#F0F0F0" />
                      <path d="M64.8824 32.0879L67.733 35.1599L71.5355 33.3987L69.4945 37.0587L72.3449 40.131L68.233 39.3209L66.1921 42.9812L65.692 38.8202L61.5801 38.0101L65.3827 36.2488L64.8824 32.0879Z" fill="#F0F0F0" />
                    </g>
                    <defs>
                      <clipPath id="clip-pk">
                        <rect width="80" height="80" transform="translate(8 6)" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <span className="text-gray-500 font-semibold text-xs">Pakistan</span>
              </div>
              {/* Qatar */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-1 shadow" style={{ filter: 'grayscale(100%)' }}>
                  <div className="w-9 h-9 rounded-full bg-gray-400 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-gray-300" style={{ clipPath: 'polygon(0 0, 100% 20%, 100% 30%, 0 50%, 100% 70%, 100% 80%, 0 100%)' }}></div>
                  </div>
                </div>
                <span className="text-gray-500 font-semibold text-xs">Qatar</span>
              </div>
              {/* Kuwait */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-1 shadow" style={{ filter: 'grayscale(100%)' }}>
                  <div className="w-9 h-9 rounded-full overflow-hidden relative">
                    <div className="absolute inset-0 flex flex-col">
                      <div className="h-1/3 bg-gray-500"></div>
                      <div className="h-1/3 bg-gray-200"></div>
                      <div className="h-1/3 bg-gray-600"></div>
                    </div>
                    <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-gray-700"></div>
                  </div>
                </div>
                <span className="text-gray-500 font-semibold text-xs">Kuwait</span>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative shapes (absolute, for visual effect) */}
        <div className="absolute left-0 top-10 w-16 h-16 bg-[#fdd24d] opacity-30 rounded-xl rotate-12" style={{zIndex:1}}></div>
        <div className="absolute left-32 top-40 w-14 h-14 bg-[#fdd24d] opacity-30 rounded-xl rotate-6" style={{zIndex:1}}></div>
        <div className="absolute right-0 top-20 w-20 h-20 bg-[#fdd24d] opacity-30 rounded-xl -rotate-12" style={{zIndex:1}}></div>
        <div className="absolute right-32 top-56 w-16 h-16 bg-[#fdd24d] opacity-30 rounded-xl rotate-3" style={{zIndex:1}}></div>
      </section>

      {/* ================= I GRID (Single Large Video Frame) ================= */}
      <section className="w-full py-4 md:py-10">
        <div className="max-w-[1150px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="rounded-xl overflow-hidden">
            <video
              className="w-full h-64 md:h-96 object-cover pointer-events-none"
              autoPlay
              muted
              loop
              playsInline
              poster="https://plus.unsplash.com/premium_photo-1661521056111-73d80cb1fd00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHJvcHNoaXBwaW5nfGVufDB8MHwwfHx8MA%3D%3D"
            >
              <source src="/src/assets/dropshipping.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* ================= Trending products ================= */}
      <section>
        <TrendingProducts />
      </section>

      {/* ================= WHY DROPSHIPPING ================= */}
      <section>
        <WhyZambeel />
      </section>

      {/* ================= WHERE TO START ================= */}
      <section>
        <Wts />
      </section>

      {/* ================= PRICING ================= */}
      <PricingSection 
        title="Clear Pricing. Great Value."
        subtitle="Click on any plan to see full details and features."
        customPlans={[
          {
            tag: "Basic",
            name: "Starter Pack",
            monthlyPrice: "$25",
            yearlyPrice: "$22",
            description: "Perfect for beginners starting their dropshipping journey with essential features.",
            features: [
              { text: "Access to Product Catalog", included: true },
              { text: "Basic Order Management", included: true },
              { text: "Email Support", included: true },
              { text: "Dedicated Account Manager", included: false },
              { text: "Advanced Analytics & Reports", included: false },
            ],
          },
          {
            tag: "Premium",
            name: "Business Pack",
            monthlyPrice: "$75",
            yearlyPrice: "$69",
            description: "Advanced features for growing businesses with priority support and analytics.",
            features: [
              { text: "Access to Product Catalog", included: true },
              { text: "Advanced Order Management", included: true },
              { text: "Priority Support", included: true },
              { text: "Dedicated Account Manager", included: true },
              { text: "Advanced Analytics & Reports", included: true },
            ],
          },
          {
            tag: "Advanced",
            name: "Enterprise Pack",
            monthlyPrice: "$45",
            yearlyPrice: "$42",
            description: "Ideal for established sellers looking to scale with automation and support.",
            features: [
              { text: "Access to Product Catalog", included: true },
              { text: "Advanced Order Management", included: true },
              { text: "Priority Support", included: true },
              { text: "Dedicated Account Manager", included: true },
              { text: "Advanced Analytics & Reports", included: false },
            ],
          },
        ]}
      />
    </div>
  );
};

export default DropshippingPage;

