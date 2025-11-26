import { useState, useEffect } from 'react';
import PricingSection from '../components/PricingSection';
import WhyZambeel from '../components/dropshiping_components/WhyZambeel';
import Wts from '../components/dropshiping_components/WhereTS';
import connectionImg from '../assets/images/connection.png';
import databaseImg from '../assets/images/database.png';
import frameImg from '../assets/images/frame1.png';

const Zambeel3PLPage = () => {
  // Text carousel state
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const carouselTexts = [
    {
      line1: "Reliable storage and fast delivery for your business.",
      line2: "We handle inventory management, fulfillment, and",
      line3: "shipping logistics to our warehouse network."
    },
    {
      line1: "Streamline your fulfillment with our 3PL solution.",
      line2: "From warehousing to order processing, we manage",
      line3: "every step of your logistics journey."
    },
    {
      line1: "Scale your business without the complexity.",
      line2: "Our expert team handles storage, picking, packing, and",
      line3: "shipping so you can focus on growth."
    },
    {
      line1: "Transform your logistics with confidence.",
      line2: "Trusted warehousing, reliable delivery, and dedicated",
      line3: "support to help your business succeed."
    }
  ];

  // Auto-rotate text every 4.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % carouselTexts.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [carouselTexts.length]);
  const features = [
    {
      id: 1,
      text: "Dedicated Account Managers",
      lineWidth: "md:w-[15%]",
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
      lineWidth: "md:w-[25%]",
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
      lineWidth: "md:w-[35%]",
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
      lineWidth: "md:w-[20%]",
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
      lineWidth: "md:w-[10%]",
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
    <div className="min-h-screen overflow-x-hidden relative -mt-20 pt-20" style={{ background: 'linear-gradient(186.57deg, rgba(72, 11, 96, 0.75) 5.1%, rgba(31, 46, 100, 0.958277) 12.51%, rgba(28, 54, 89, 0.911419) 31.95%, rgba(53, 4, 72, 0.793286) 47.98%, rgba(51, 88, 140, 0.913498) 70.93%, #4A61C4 81.76%)' }}>
      {/* Decorative SVG Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-32 left-12 w-20 h-24 opacity-30" viewBox="0 0 106 124" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-1.68109e-06 55.9593C-4.18271e-06 84.5745 20.406 124 23.039 124C30.2799 106.195 106 95.3848 106 74.4002C106 48.3289 84.2674 5.72947e-06 84.2674 5.72947e-06C53.3291 29.8871 3.20237e-07 33.0668 -1.68109e-06 55.9593Z" fill="#F4D03F" fillOpacity="0.3" />
        </svg>
        <svg className="absolute top-48 left-8 w-24 h-28 opacity-25 transform -rotate-12" viewBox="0 0 106 124" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-1.68109e-06 55.9593C-4.18271e-06 84.5745 20.406 124 23.039 124C30.2799 106.195 106 95.3848 106 74.4002C106 48.3289 84.2674 5.72947e-06 84.2674 5.72947e-06C53.3291 29.8871 3.20237e-07 33.0668 -1.68109e-06 55.9593Z" fill="#F4D03F" fillOpacity="0.25" />
        </svg>
        <svg className="absolute top-16 right-16 w-28 h-32 opacity-30 transform rotate-45" viewBox="0 0 106 124" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-1.68109e-06 55.9593C-4.18271e-06 84.5745 20.406 124 23.039 124C30.2799 106.195 106 95.3848 106 74.4002C106 48.3289 84.2674 5.72947e-06 84.2674 5.72947e-06C53.3291 29.8871 3.20237e-07 33.0668 -1.68109e-06 55.9593Z" fill="#F4D03F" fillOpacity="0.3" />
        </svg>
        <svg className="absolute top-52 right-24 w-24 h-28 opacity-25 transform rotate-12" viewBox="0 0 106 124" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-1.68109e-06 55.9593C-4.18271e-06 84.5745 20.406 124 23.039 124C30.2799 106.195 106 95.3848 106 74.4002C106 48.3289 84.2674 5.72947e-06 84.2674 5.72947e-06C53.3291 29.8871 3.20237e-07 33.0668 -1.68109e-06 55.9593Z" fill="#F4D03F" fillOpacity="0.25" />
        </svg>
        <svg className="absolute top-[40%] left-8 w-32 h-36 opacity-25 transform -rotate-6" viewBox="0 0 106 124" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-1.68109e-06 55.9593C-4.18271e-06 84.5745 20.406 124 23.039 124C30.2799 106.195 106 95.3848 106 74.4002C106 48.3289 84.2674 5.72947e-06 84.2674 5.72947e-06C53.3291 29.8871 3.20237e-07 33.0668 -1.68109e-06 55.9593Z" fill="#F4D03F" fillOpacity="0.25" />
        </svg>
        <svg className="absolute top-[48%] left-16 w-28 h-32 opacity-20 transform rotate-15" viewBox="0 0 106 124" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-1.68109e-06 55.9593C-4.18271e-06 84.5745 20.406 124 23.039 124C30.2799 106.195 106 95.3848 106 74.4002C106 48.3289 84.2674 5.72947e-06 84.2674 5.72947e-06C53.3291 29.8871 3.20237e-07 33.0668 -1.68109e-06 55.9593Z" fill="#F4D03F" fillOpacity="0.2" />
        </svg>
        <svg className="absolute top-[45%] right-12 w-28 h-32 opacity-25 transform -rotate-12" viewBox="0 0 106 124" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-1.68109e-06 55.9593C-4.18271e-06 84.5745 20.406 124 23.039 124C30.2799 106.195 106 95.3848 106 74.4002C106 48.3289 84.2674 5.72947e-06 84.2674 5.72947e-06C53.3291 29.8871 3.20237e-07 33.0668 -1.68109e-06 55.9593Z" fill="#F4D03F" fillOpacity="0.25" />
        </svg>
        <svg className="absolute bottom-64 left-10 w-24 h-28 opacity-20 transform rotate-20" viewBox="0 0 106 124" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-1.68109e-06 55.9593C-4.18271e-06 84.5745 20.406 124 23.039 124C30.2799 106.195 106 95.3848 106 74.4002C106 48.3289 84.2674 5.72947e-06 84.2674 5.72947e-06C53.3291 29.8871 3.20237e-07 33.0668 -1.68109e-06 55.9593Z" fill="#F4D03F" fillOpacity="0.2" />
        </svg>
        <svg className="absolute bottom-40 left-16 w-28 h-32 opacity-25 transform -rotate-8" viewBox="0 0 106 124" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-1.68109e-06 55.9593C-4.18271e-06 84.5745 20.406 124 23.039 124C30.2799 106.195 106 95.3848 106 74.4002C106 48.3289 84.2674 5.72947e-06 84.2674 5.72947e-06C53.3291 29.8871 3.20237e-07 33.0668 -1.68109e-06 55.9593Z" fill="#F4D03F" fillOpacity="0.25" />
        </svg>
        <svg className="absolute bottom-56 right-14 w-26 h-30 opacity-20 transform rotate-30" viewBox="0 0 106 124" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-1.68109e-06 55.9593C-4.18271e-06 84.5745 20.406 124 23.039 124C30.2799 106.195 106 95.3848 106 74.4002C106 48.3289 84.2674 5.72947e-06 84.2674 5.72947e-06C53.3291 29.8871 3.20237e-07 33.0668 -1.68109e-06 55.9593Z" fill="#F4D03F" fillOpacity="0.2" />
        </svg>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 md:py-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 md:mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6">
              Zambeel 3PL
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white font-normal mb-2 md:mb-3 italic">
              Reliable storage and fast delivery
            </p>
            <div className="mb-6 md:mb-8">
              <p className="text-xs sm:text-sm md:text-base text-white/95 max-w-3xl mx-auto leading-relaxed px-2 min-h-[60px] md:min-h-[72px] transition-opacity duration-500">
                {carouselTexts[currentTextIndex].line1}
                <br />
                {carouselTexts[currentTextIndex].line2}
                <br className="hidden sm:block" />
                {carouselTexts[currentTextIndex].line3}
              </p>
            </div>
            <div className="flex justify-center items-center space-x-2 mb-8 md:mb-10">
              {carouselTexts.map((_, index) => (
                <div
                  key={index}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentTextIndex
                      ? 'w-7 md:w-8 h-2 bg-[#fbbf24]'
                      : 'w-2 h-2 bg-white'
                  }`}
                ></div>
              ))}
            </div>
          </div>
          <div className="max-w-md md:max-w-2xl mx-auto">
            <div className="bg-[#d5dce8]/95 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-8 lg:p-10">
              <p className="text-[#2c3e5f] text-center text-xs sm:text-sm md:text-base font-semibold mb-6 md:mb-8">
                3PL currently available in
              </p>
              <div className="flex flex-col gap-4 md:gap-0 md:flex-row md:justify-center md:items-center md:space-x-6 lg:space-x-10">
                <div className="flex justify-center items-center gap-6 md:contents">
                  <div className="flex flex-col items-center transform hover:scale-110 transition-transform">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-2 md:mb-3">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden relative">
                        <div className="absolute inset-0 flex flex-col">
                          <div className="h-1/3 bg-green-600"></div>
                          <div className="h-1/3 bg-white"></div>
                          <div className="h-1/3 bg-black"></div>
                        </div>
                        <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-red-600"></div>
                      </div>
                    </div>
                    <span className="text-[10px] sm:text-xs md:text-sm text-[#2c3e5f] font-semibold">UAE</span>
                  </div>
                  <div className="flex flex-col items-center transform hover:scale-110 transition-transform">
                    <div className="w-20 h-20 md:w-22 md:h-22 rounded-full flex items-center justify-center mb-2 md:mb-3">
                      <svg width="96" height="96" viewBox="0 0 96 96" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="48" cy="48" r="34" fill="#6DA544" />
                        <path d="M34 58C34 60.7614 36.2386 63 39 63H53C53 65.2091 54.7909 67 57 67H61C63.2091 67 65 65.2091 65 63V58H34Z" fill="#F0F0F0" />
                        <path d="M65 36V46C65 47.6569 63.6569 49 62 49V53C65.866 53 69 49.866 69 46V36H65Z" fill="#F0F0F0" />
                        <path d="M32 46C32 47.6569 30.6569 49 29 49V53C32.866 53 36 49.866 36 46V36H32V46Z" fill="#F0F0F0" />
                        <path d="M56 36H60V46H56V36Z" fill="#F0F0F0" />
                        <path d="M50 42C50 42.5523 49.5523 43 49 43C48.4477 43 48 42.5523 48 42V36H44V42C44 42.5523 43.5523 43 43 43C42.4477 43 42 42.5523 42 42V36H38V42C38 44.7614 40.2386 47 43 47C44.1046 47 45.1046 46.6569 46 46C46.8954 46.6569 47.8954 47 49 47C49.1843 47 49.364 46.987 49.538 46.962C49.268 48.378 48.1 49.4 46.7 49.4V53C50.566 53 53.7 49.866 53.7 46V42H50Z" fill="#F0F0F0" />
                        <path d="M38 49H44V53H38V49Z" fill="#F0F0F0" />
                      </svg>
                    </div>
                    <span className="text-[10px] sm:text-xs md:text-sm text-[#2c3e5f] font-semibold">KSA</span>
                  </div>
                  <div className="flex flex-col items-center transform hover:scale-110 transition-transform">
                    <div className="w-18 h-18 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-2 md:mb-3">
                      <svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" className="w-full h-full p-1">
                        <g clipPath="url(#clip)">
                          <path d="M48 86C70.0914 86 88 68.0914 88 46C88 23.9086 70.0914 6 48 6C25.9086 6 8 23.9086 8 46C8 68.0914 25.9086 86 48 86Z" fill="#F0F0F0" />
                          <path d="M8 45.9997C8 61.1614 16.4358 74.3519 28.8695 81.1361V10.8633C16.4358 17.6475 8 30.838 8 45.9997Z" fill="#F0F0F0" />
                          <path d="M48.0035 6C41.0738 6 34.556 7.76297 28.873 10.8636V81.1363C34.556 84.237 41.0738 86 48.0035 86C70.0948 86 88.0035 68.0913 88.0035 46C88.0035 23.9087 70.0948 6 48.0035 6Z" fill="#496E2D" />
                          <path d="M65.1017 52.6155C60.0412 56.2719 52.9746 55.1338 49.3184 50.0735C45.6618 45.0129 46.8001 37.9465 51.8606 34.2902C53.4384 33.1502 55.2112 32.4763 57.0148 32.2421C53.5449 31.7232 49.877 32.5051 46.8087 34.7221C40.5806 39.2224 39.1795 47.9194 43.6796 54.1479C48.1798 60.3758 56.877 61.7771 63.1054 57.2765C66.174 55.0594 68.0679 51.823 68.6645 48.3654C67.876 50.0038 66.6796 51.4754 65.1017 52.6155Z" fill="#F0F0F0" />
                          <path d="M64.8824 32.0879L67.733 35.1599L71.5355 33.3987L69.4945 37.0587L72.3449 40.131L68.233 39.3209L66.1921 42.9812L65.692 38.8202L61.5801 38.0101L65.3827 36.2488L64.8824 32.0879Z" fill="#F0F0F0" />
                        </g>
                        <defs>
                          <clipPath id="clip">
                            <rect width="80" height="80" transform="translate(8 6)" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <span className="text-[10px] sm:text-xs md:text-sm text-[#2c3e5f] font-semibold">Pakistan</span>
                  </div>
                </div>
                <div className="flex justify-center items-center gap-12 md:contents">
                  <div className="flex flex-col items-center transform hover:scale-110 transition-transform">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-2 md:mb-3">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden relative">
                        <div className="absolute inset-0 flex flex-col">
                          <div className="h-1/3 bg-green-600"></div>
                          <div className="h-1/3 bg-white"></div>
                          <div className="h-1/3 bg-red-600"></div>
                        </div>
                        <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-black"></div>
                      </div>
                    </div>
                    <span className="text-[10px] sm:text-xs md:text-sm text-[#2c3e5f] font-semibold">Kuwait</span>
                  </div>
                  <div className="flex flex-col items-center transform hover:scale-110 transition-transform">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-2 md:mb-3">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#8d1b3d] flex items-center justify-center relative overflow-hidden">
                        <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-white" style={{ clipPath: 'polygon(0 0, 100% 20%, 100% 30%, 0 50%, 100% 70%, 100% 80%, 0 100%)' }}></div>
                      </div>
                    </div>
                    <span className="text-[10px] sm:text-xs md:text-sm text-[#2c3e5f] font-semibold">Qatar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden">
            <video
              className="w-full h-72 md:h-96 object-cover pointer-events-none"
              autoPlay
              muted
              loop
              playsInline
              poster="https://plus.unsplash.com/premium_photo-1749423089108-9ab9871fb9e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGhpcmQlMjBwYXJ0JTIwbG9naXN0aWNzfGVufDB8MHwwfHx8MA%3D%3D"
            >
              <source src="/src/assets/3pl-landscape.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Why 3PL with Zambeel Section */}
      <WhyZambeel
        title="Why 3PL with Zambeel?"
        mobileTitle="Why 3PL with Zambeel?"
        description="We provide reliable warehousing and fulfillment services. Our end-to-end 3PL solution includes inventory management, order processing, picking, packing, and fast shipping, making it easy for you to focus on growing your business."
        features={features}
        desktopFeatures={[
          {
            icon: (
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#d_hq)">
                  <path d="M28 8C28 7.46957 28.2107 6.96086 28.5858 6.58579C28.9609 6.21071 29.4696 6 30 6H40C40.5304 6 41.0391 6.21071 41.4142 6.58579C41.7893 6.96086 42 7.46957 42 8V18C42 18.5304 41.7893 19.0391 41.4142 19.4142C41.0391 19.7893 40.5304 20 40 20H30C29.4696 20 28.9609 19.7893 28.5858 19.4142C28.2107 19.0391 28 18.5304 28 18V8Z" fill="#F4D03F" stroke="#2D3E7E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 28H30C31.0609 28 32.0783 28.4214 32.8284 29.1716C33.5786 29.9217 34 30.9391 34 32V38C34 39.0609 33.5786 40.0783 32.8284 40.8284C32.0783 41.5786 31.0609 42 30 42H10C8.93913 42 7.92172 41.5786 7.17157 40.8284C6.42143 40.0783 6 39.0609 6 38V18C6 16.9391 6.42143 15.9217 7.17157 15.1716C7.92172 14.4214 8.93913 14 10 14H16C17.0609 14 18.0783 14.4214 18.8284 15.1716C19.5786 15.9217 20 16.9391 20 18V42" stroke="#2D3E7E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs><clipPath id="d_hq"><rect width="48" height="48" fill="white" /></clipPath></defs>
              </svg>
            ),
            label: "Secure\nWarehousing"
          },
          {
            icon: (
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#d_ship)">
                  <path d="M10 34C10 35.0609 10.4214 36.0783 11.1716 36.8284C11.9217 37.5786 12.9391 38 14 38C15.0609 38 16.0783 37.5786 16.8284 36.8284C17.5786 36.0783 18 35.0609 18 34C18 32.9391 17.5786 31.9217 16.8284 31.1716C16.0783 30.4214 15.0609 30 14 30C12.9391 30 11.9217 30.4214 11.1716 31.1716C10.4214 31.9217 10 32.9391 10 34Z" fill="#F4D03F" stroke="#2D3E7E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M30 34C30 35.0609 30.4214 36.0783 31.1716 36.8284C31.9217 37.5786 32.9391 38 34 38C35.0609 38 36.0783 37.5786 36.8284 36.8284C37.5786 36.0783 38 35.0609 38 34C38 32.9391 37.5786 31.9217 36.8284 31.1716C36.0783 30.4214 35.0609 30 34 30C32.9391 30 31.9217 30.4214 31.1716 31.1716C30.4214 31.9217 30 32.9391 30 34Z" fill="#F4D03F" stroke="#2D3E7E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 34H6V12C6 11.4696 6.21071 10.9609 6.58579 10.5858C6.96086 10.2107 7.46957 10 8 10H26V34M18 34H30M38 34H42V22M42 22H26M42 22L36 12H26" stroke="#2D3E7E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs><clipPath id="d_ship"><rect width="48" height="48" fill="white" /></clipPath></defs>
              </svg>
            ),
            label: "Fast Shipping\n& Delivery"
          },
          {
            icon: (
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
            ),
            label: "Order\nProcessing"
          },
          {
            icon: (
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
            ),
            label: "Customize\nPackaging"
          },
          {
            icon: (
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#d_low)">
                  <path d="M18 30L30 18" stroke="#2D3E7E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M29 27C30.1046 27 31 27.8954 31 29C31 30.1046 30.1046 31 29 31C27.8954 31 27 30.1046 27 29C27 27.8954 27.8954 27 29 27Z" fill="#F4D03F" stroke="#2D3E7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M19 17C20.1046 17 21 17.8954 21 19C21 20.1046 20.1046 21 19 21C17.8954 21 17 20.1046 17 19C17 17.8954 17.8954 17 19 17Z" fill="#F4D03F" stroke="#2D3E7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 24C6 26.3638 6.46558 28.7044 7.37017 30.8883C8.27475 33.0722 9.60062 35.0565 11.2721 36.7279C12.9435 38.3994 14.9278 39.7252 17.1117 40.6298C19.2956 41.5344 21.6362 42 24 42C26.3638 42 28.7044 41.5344 30.8883 40.6298C33.0722 39.7252 35.0565 38.3994 36.7279 36.7279C38.3994 35.0565 39.7252 33.0722 40.6298 30.8883C41.5344 28.7044 42 26.3638 42 24C42 21.6362 41.5344 19.2956 40.6298 17.1117C39.7252 14.9278 38.3994 12.9435 36.7279 11.2721C35.0565 9.60062 33.0722 8.27475 30.8883 7.37017C28.7044 6.46558 26.3638 6 24 6C21.6362 6 19.2956 6.46558 17.1117 7.37017C14.9278 8.27475 12.9435 9.60062 11.2721 11.2721C9.60062 12.9435 8.27475 14.9278 7.37017 17.1117C6.46558 19.2956 6 21.6362 6 24Z" stroke="#2D3E7E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs><clipPath id="d_low"><rect width="48" height="48" fill="white" /></clipPath></defs>
              </svg>
            ),
            label: "Competitive\nPricing"
          }
        ]}
      />

      {/* Where to Start Section */}
      <Wts
        title="Where to Start?"
        description="Getting started with Zambeel's 3PL service is easy. Follow these simple steps to begin your journey with Zambeel."
        buttonText="Get Started with Zambeel 3PL"
        steps={[
          {
            number: 1,
            title: "Book Consultation",
            description: "Contact us through our Whatsapp number and our senior business consultant will get in touch with you.",
            desktopDescription: "Contact us through our\nWhatsapp number and our\nsenior business consultant\nwill get in touch with you.",
            icon: connectionImg,
            iconAlt: "connection"
          },
          {
            number: 2,
            title: "Send Inventory",
            description: "Our team will share the product and shipping cost with you. Once you approve, we will send you a payment link.",
            desktopDescription: "Our team will share the\nproduct and shipping cost\nwith you. Once you approve,\nwe will send you a payment link.",
            icon: frameImg,
            iconAlt: "frame"
          },
          {
            number: 3,
            title: "Connect Store",
            description: "We will source your product and handle all shipping logistics to our warehouse.",
            desktopDescription: "We will source your product\nand handle all shipping\nlogistics to our warehouse.",
            icon: databaseImg,
            iconAlt: "database"
          },
          {
            number: 4,
            title: "Start Selling",
            description: "Integrate your online store with us through Shopify, Youcan, Easyorders & Lightfunnels or use Zambeel portal manually.",
            desktopDescription: "Integrate your online store\nwith us through Shopify,\nYoucan, Easyorders &\nLightfunnels or use Zambeel\nportal manually.",
            icon: null,
            iconAlt: null
          }
        ]}
      />

      {/* Pricing Section */}
      <PricingSection 
        title="Our pricing is clear and transparent"
        subtitle="Click on any plan to see full details and features."
        customPlans={[
          {
            tag: "Basic",
            name: "Starter Pack",
            monthlyPrice: "$35",
            yearlyPrice: "$32",
            description: "Perfect for small businesses starting with 3PL services and basic warehousing needs.",
            features: [
              { text: "Basic Storage Space", included: true },
              { text: "Order Fulfillment", included: true },
              { text: "Email Support", included: true },
              { text: "Dedicated Account Manager", included: false },
              { text: "Advanced Inventory Management", included: false },
            ],
          },
          {
            tag: "Premium",
            name: "Business Pack",
            monthlyPrice: "$85",
            yearlyPrice: "$79",
            description: "Advanced features for growing businesses with priority support and comprehensive logistics.",
            features: [
              { text: "Extended Storage Space", included: true },
              { text: "Priority Order Fulfillment", included: true },
              { text: "Priority Support", included: true },
              { text: "Dedicated Account Manager", included: true },
              { text: "Advanced Inventory Management", included: true },
            ],
          },
          {
            tag: "Advanced",
            name: "Enterprise Pack",
            monthlyPrice: "$55",
            yearlyPrice: "$52",
            description: "Ideal for established businesses looking to scale with automation and dedicated support.",
            features: [
              { text: "Extended Storage Space", included: true },
              { text: "Priority Order Fulfillment", included: true },
              { text: "Priority Support", included: true },
              { text: "Dedicated Account Manager", included: true },
              { text: "Advanced Inventory Management", included: false },
            ],
          },
        ]}
      />
    </div>
  );
};

export default Zambeel3PLPage;

