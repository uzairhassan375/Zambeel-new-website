import { useState, useEffect } from 'react';
import PricingSection from '../components/PricingSection';
import WhyZambeel from '../components/dropshiping_components/WhyZambeel';
import Wts from '../components/dropshiping_components/WhereTS';
import DeliveryCharges from '../components/DeliveryCharges';
import connectionImg from '../assets/images/connection.png';
import databaseImg from '../assets/images/database.png';
import frameImg from '../assets/images/frame1.png';

const Zambeel360Page = () => {
  // Text carousel state
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const carouselTexts = [
    {
      line1: "Sourcing, Custom Clearance & Delivery- All done by Zambeel",
    },
    {
      line1: "High Quality Guaranteed",
    },
    {
      line1: "All in solution for your E-commerce",
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
      text: "Find Products",
      lineWidth: "md:w-[15%]",
      mobileLineW: "w-[12%]",
      mobileCardMl: "ml-[12%]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11" cy="11" r="4" stroke="#1e3a8a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 15L19 19" stroke="#1e3a8a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="4" y="4" width="6" height="6" rx="1" stroke="#1e3a8a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 5H9M5 7H7" stroke="#1e3a8a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: 2,
      text: "Quality Check",
      lineWidth: "md:w-[25%]",
      mobileLineW: "w-[22%]",
      mobileCardMl: "ml-[22%]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3L14 7L18 8L15 11L15.5 15L12 13L8.5 15L9 11L6 8L10 7L12 3Z" stroke="#1e3a8a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 12L10 14L14 10" stroke="#1e3a8a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="9" stroke="#1e3a8a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: 3,
      text: "Handle Customs",
      lineWidth: "md:w-[35%]",
      mobileLineW: "w-[32%]",
      mobileCardMl: "ml-[32%]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="4" width="14" height="16" rx="1" stroke="#1e3a8a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 8H19" stroke="#1e3a8a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 12H16" stroke="#1e3a8a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 15H14" stroke="#1e3a8a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 18H14" stroke="#1e3a8a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 6H11" stroke="#1e3a8a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="16" cy="6" r="1" stroke="#1e3a8a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: 4,
      text: "Store Safely",
      lineWidth: "md:w-[20%]",
      mobileLineW: "w-[18%]",
      mobileCardMl: "ml-[18%]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="7" width="16" height="14" rx="1" stroke="#1e3a8a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4 10H20" stroke="#1e3a8a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 13H17" stroke="#1e3a8a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 16H15" stroke="#1e3a8a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 19H13" stroke="#1e3a8a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 4V7" stroke="#1e3a8a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 4V7" stroke="#1e3a8a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="16" cy="5" r="0.75" stroke="#1e3a8a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      id: 5,
      text: "Fast Delivery",
      lineWidth: "md:w-[10%]",
      mobileLineW: "w-[8%]",
      mobileCardMl: "ml-[8%]",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19C7.53043 19 8.03914 18.7893 8.41421 18.4142C8.78929 18.0391 9 17.5304 9 17C9 16.4696 8.78929 15.9609 8.41421 15.5858C8.03914 15.2107 7.53043 15 7 15C6.46957 15 5.96086 15.2107 5.58579 15.5858C5.21071 15.9609 5 16.4696 5 17Z" stroke="#1e3a8a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 17C15 17.5304 15.2107 18.0391 15.5858 18.4142C15.9609 18.7893 16.4696 19 17 19C17.5304 19 18.0391 18.7893 18.4142 18.4142C18.7893 18.0391 19 17.5304 19 17C19 16.4696 18.7893 15.9609 18.4142 15.5858C18.0391 15.2107 17.5304 15 17 15C16.4696 15 15.9609 15.2107 15.5858 15.5858C15.2107 15.9609 15 16.4696 15 17Z" stroke="#1e3a8a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 17H3V6C3 5.73478 3.10536 5.48043 3.29289 5.29289C3.48043 5.10536 3.73478 5 4 5H13V17M9 17H15M19 17H21V11M21 11H13M21 11L18 6H13" stroke="#1e3a8a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 3L19 6H16V3Z" stroke="#1e3a8a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden relative -mt-20 pt-20" style={{ background: 'linear-gradient(186.57deg, rgba(18, 75, 61, 0.75) 5.1%, rgba(31, 46, 100, 0.958277) 12.51%, rgba(28, 54, 89, 0.911419) 31.95%, rgba(22, 81, 66, 0.793286) 47.98%, rgba(51, 88, 140, 0.913498) 70.93%, #4A61C4 81.76%)' }}>
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
      <section className="pb-8 md:pb-8 text-center relative pt-24 md:pt-28">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h3 className="text-[26px] md:text-[44px] font-[700] leading-[100%] tracking-[0.02em] text-center text-white mt-8 md:mt-0 mb-4 md:mb-6" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Zambeel 360
            </h3>
            <p className="text-[20px] md:text-[30px] font-normal italic leading-[100%] tracking-[0] text-center text-white mb-2 md:mb-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Source anything from China
            </p>
            <div>
              <p className="text-[14px] md:text-[20px] font-normal italic leading-[100%] tracking-[0] text-center text-white/95 max-w-3xl mx-auto px-2 min-h-[30px] md:min-h-[40px] transition-opacity duration-500 mb-2 md:mb-0" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                {carouselTexts[currentTextIndex].line1}
              </p>
            </div>
            {/* Carousel dots */}
            <div className="flex justify-center gap-2 mb-4 md:-mt-2">
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
            {/* Get Started Button */}
            <div className="flex justify-center mb-8">
              <button className="bg-[#ffd24c] text-[#243a86] font-bold px-8 py-3 rounded-full hover:bg-[#ffc933] transition-all duration-300 shadow-lg text-base md:text-lg">
                Get Started
              </button>
            </div>
          </div>
          <div className="max-w-md md:max-w-2xl mx-auto">
            <div className="bg-[#d5dce8]/95 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-8 lg:p-10">
              <p className="text-[#2c3e5f] text-center text-xs sm:text-sm md:text-base font-semibold mb-6 md:mb-8">
                Zambeel 360 currently available in
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
      <section className="w-full py-4 md:py-4">
        <div className="max-w-[1150px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="rounded-xl overflow-hidden">
            <video
              className="w-full h-64 md:h-96 object-cover pointer-events-none"
              autoPlay
              muted
              loop
              playsInline
              poster="https://plus.unsplash.com/premium_photo-1683984171269-04c84ee23234?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGVjb21tZXJjZXxlbnwwfDB8MHx8fDA%3D"
            >
              <source src="/src/assets/dropshipping.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Why China Sourcing Section */}
      <WhyZambeel
        title="What is Zambeel 360?"
        mobileTitle="What is Zambeel 360?"
        description="We sourced high quality products from trusted suppliers in China. Our end-to-end service includes product sourcing, quality control, shipping logistics, and customs clearance, making it easy for you to focus on growing your business."
        features={features}
        desktopFeatures={[
          {
            icon: (
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#d_find)">
                  <circle cx="22" cy="22" r="8" stroke="#2D3E7E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M30 30L36 36" stroke="#2D3E7E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="8" y="8" width="12" height="12" rx="2" stroke="#2D3E7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 10H18M10 14H16" stroke="#2D3E7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs><clipPath id="d_find"><rect width="48" height="48" fill="white" /></clipPath></defs>
              </svg>
            ),
            label: "Find\nProducts"
          },
          {
            icon: (
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#d_quality)">
                  <path d="M24 6L28 14L36 16L30 22L31 30L24 26L17 30L18 22L12 16L20 14L24 6Z" stroke="#2D3E7E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 24L20 28L28 20" stroke="#2D3E7E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="24" cy="24" r="18" stroke="#2D3E7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs><clipPath id="d_quality"><rect width="48" height="48" fill="white" /></clipPath></defs>
              </svg>
            ),
            label: "Quality\nCheck"
          },
          {
            icon: (
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#d_customs)">
                  <rect x="10" y="8" width="28" height="32" rx="2" stroke="#2D3E7E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 16H38" stroke="#2D3E7E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 24H32" stroke="#2D3E7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 30H28" stroke="#2D3E7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20 36H28" stroke="#2D3E7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14 12H18" stroke="#2D3E7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="32" cy="12" r="2" stroke="#2D3E7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs><clipPath id="d_customs"><rect width="48" height="48" fill="white" /></clipPath></defs>
              </svg>
            ),
            label: "Handle\nCustoms"
          },
          {
            icon: (
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#d_store)">
                  <rect x="8" y="14" width="32" height="28" rx="2" stroke="#2D3E7E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 20H40" stroke="#2D3E7E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14 26H34" stroke="#2D3E7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14 32H30" stroke="#2D3E7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14 38H26" stroke="#2D3E7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18 8V14" stroke="#2D3E7E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M30 8V14" stroke="#2D3E7E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="32" cy="10" r="1.5" stroke="#2D3E7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs><clipPath id="d_store"><rect width="48" height="48" fill="white" /></clipPath></defs>
              </svg>
            ),
            label: "Store\nSafely"
          },
          {
            icon: (
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#d_delivery)">
                  <path d="M10 34C10 35.0609 10.4214 36.0783 11.1716 36.8284C11.9217 37.5786 12.9391 38 14 38C15.0609 38 16.0783 37.5786 16.8284 36.8284C17.5786 36.0783 18 35.0609 18 34C18 32.9391 17.5786 31.9217 16.8284 31.1716C16.0783 30.4214 15.0609 30 14 30C12.9391 30 11.9217 30.4214 11.1716 31.1716C10.4214 31.9217 10 32.9391 10 34Z" stroke="#2D3E7E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M30 34C30 35.0609 30.4214 36.0783 31.1716 36.8284C31.9217 37.5786 32.9391 38 34 38C35.0609 38 36.0783 37.5786 36.8284 36.8284C37.5786 36.0783 38 35.0609 38 34C38 32.9391 37.5786 31.9217 36.8284 31.1716C36.0783 30.4214 35.0609 30 34 30C32.9391 30 31.9217 30.4214 31.1716 31.1716C30.4214 31.9217 30 32.9391 30 34Z" stroke="#2D3E7E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 34H6V12C6 11.4696 6.21071 10.9609 6.58579 10.5858C6.96086 10.2107 7.46957 10 8 10H26V34M18 34H30M38 34H42V22M42 22H26M42 22L36 12H26" stroke="#2D3E7E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M32 6L38 12H32V6Z" stroke="#2D3E7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs><clipPath id="d_delivery"><rect width="48" height="48" fill="white" /></clipPath></defs>
              </svg>
            ),
            label: "Fast\nDelivery"
          }
        ]}
      />

      {/* Where to Start Section */}
      <Wts
        title="Where to Start?"
        description="Getting started with Zambeel's 360 service is easy. Follow these simple steps to begin your journey with Zambeel."
        buttonText="Talk to our agent"
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
      />

      {/* ================= DELIVERY CHARGES ================= */}
      <DeliveryCharges
        title="Zambeel 360 Delivery Charges"
        subtitle="Comprehensive pricing across all supported regions"
        countries={[
          { code: "UAE", name: "UAE", currency: "AED" },
          { code: "KSA", name: "KSA", currency: "SAR" },
          { code: "Kuwait", name: "Kuwait", currency: "AED" },
          { code: "Qatar", name: "Qatar", currency: "AED" },
          { code: "Pakistan", name: "Pakistan", currency: "PKR" }
        ]}
        charges={[
          {
            label: "Order Confirmation + Followup / Order Packing / Delivery",
            values: {
              UAE: "18 AED",
              KSA: "26 SAR",
              Kuwait: "30 AED",
              Qatar: "25 AED",
              Pakistan: "300 PKR"
            }
          },
          {
            label: "Return",
            values: {
              UAE: "5 AED",
              KSA: "7.5 SAR",
              Kuwait: "15 AED",
              Qatar: "5 AED",
              Pakistan: "300 PKR"
            }
          },
          {
            label: "COD Tax",
            values: {
              UAE: "0%",
              KSA: "0%",
              Kuwait: "0%",
              Qatar: "0%",
              Pakistan: "4%"
            }
          },
          {
            label: "Delivery Time",
            icon: "⚡",
            values: {
              UAE: "1-2 Days",
              KSA: "1-3 Days",
              Kuwait: "1-2 Days",
              Qatar: "1-2 Days",
              Pakistan: "1-3 Days"
            }
          }
        ]}
        importantInfo={[
          "Warehousing is FREE for first 2 months, after this 1AED/item/Month will be charged on unsold inventory",
          "In case of failed delivery, only 'Return' will be charged",
          "In some outskirt areas, delivery charges can be greater too. This happens on 3% of the orders only."
        ]}
      />
    </div>
  );
};

export default Zambeel360Page;

