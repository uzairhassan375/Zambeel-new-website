import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "../../i18n.js";
import white_logoImage from "../white_logo.png";
import blue_logoImage from "../blue_logo.png";

export default function Header({ theme = "dark" }) {
  const { t, i18n } = useTranslation();
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const currentLanguage = i18n.language || 'en';

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    setShowLanguageDropdown(false);
  };

  const handleSectionClick = (sectionId) => {
    setShowMobileMenu(false);
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 50);
    }
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (showLanguageDropdown && !e.target.closest('.language-dropdown')) {
        setShowLanguageDropdown(false);
      }
      if (showServicesDropdown && !e.target.closest('.services-dropdown')) {
        setShowServicesDropdown(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showLanguageDropdown, showServicesDropdown]);

  const isLightTheme = theme === "light";
  const navBgColor = isLightTheme ? "bg-[#E8F0FE]" : "bg-[#2D3E7E]";
  const textColor = isLightTheme ? "text-[#2E3B78]" : "text-white";
  const logoImage = isLightTheme ? blue_logoImage : white_logoImage;
  const hoverColor = isLightTheme ? "hover:text-[#2E3B78]" : "hover:text-yellow-300";
  const dropdownHoverColor = isLightTheme ? "hover:bg-[#2E3B78] hover:text-white" : "hover:bg-[#FCD64C]";
  const servicesHoverColor = isLightTheme ? "hover:text-[#2E3B78]" : "hover:text-[#FCD64C]";


  return (
    <>
      <nav className={`w-[96%] max-w-[1400px] ${navBgColor} rounded-full px-4 md:px-6 py-3 flex justify-between items-center shadow-xl fixed top-4 left-1/2 transform -translate-x-1/2 z-50 mx-auto`}>
        <div className="flex items-center gap-3 pl-4">
          <Link to="/" className="mt-1">
            <img
              src={logoImage}
              alt="Zambeel Logo"
              className="h-10 md:h-12 object-contain"
            />
          </Link>
        </div>
        <div className={`hidden lg:flex items-center gap-10 ${textColor} text-[15px] font-medium tracking-wide`}>
          <div
            className="relative services-dropdown"
            onMouseEnter={() => setShowServicesDropdown(true)}
            onMouseLeave={() => setShowServicesDropdown(false)}
          >
            <button className={`transition flex items-center gap-2 ${showServicesDropdown ? (isLightTheme ? 'text-[#2E3B78]' : 'text-[#FCD64C]') : servicesHoverColor}`}>
              {t('header.services')}
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${showServicesDropdown ? 'rotate-180' : ''}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {showServicesDropdown && (
              <div className="absolute top-full left-0 pt-2 bg-transparent min-w-[200px] z-50">
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                  <Link
                    to="/dropshipping"
                    className={`block px-4 py-3 ${isLightTheme ? 'text-[#2E3B78]' : 'text-[#2E3B78]'} ${dropdownHoverColor} transition text-sm font-medium w-full`}
                  >
                    {t('header.dropshipping')}
                  </Link>
                  <Link
                    to="/zambeel-360"
                    className={`block px-4 py-3 ${isLightTheme ? 'text-[#2E3B78]' : 'text-[#2E3B78]'} ${dropdownHoverColor} transition text-sm font-medium w-full`}
                  >
                    {t('header.zambeel360')}
                  </Link>
                  <Link
                    to="/zambeel-3pl"
                    className={`block px-4 py-3 ${isLightTheme ? 'text-[#2E3B78]' : 'text-[#2E3B78]'} ${dropdownHoverColor} transition text-sm font-medium w-full`}
                  >
                    {t('header.zambeel3PL')}
                  </Link>
                </div>
              </div>
            )}
          </div>
          <button
            onClick={() => handleSectionClick("where-to-sell")}
            className={`${hoverColor} transition cursor-pointer`}
          >
            {t('header.whereCanYouSell')}
          </button>
          <button
            onClick={() => handleSectionClick("why-zambeel")}
            className={`${hoverColor} transition cursor-pointer`}
          >
            {t('header.whyZambeel')}
          </button>
          <button
            onClick={() => handleSectionClick("reviews")}
            className={`${hoverColor} transition cursor-pointer`}
          >
            {t('header.reviews')}
          </button>
          <Link to="/team" className={`${hoverColor} transition`}>
            {t('header.ourTeam')}
          </Link>
          <Link to="/about" className={`${hoverColor} transition`}>
            {t('header.aboutUs')}
          </Link>
        </div>

        {/* Language Dropdown */}
        <div className="relative hidden md:block language-dropdown">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowLanguageDropdown(!showLanguageDropdown);
            }}
            className={`${textColor} p-2 rounded-full hover:bg-white/10 transition flex items-center gap-2`}
            aria-label={t('header.selectLanguage')}
          >
            {currentLanguage === 'en' ? (
              <svg className="w-5 h-5" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="15" fill="#012169" />
                <path d="M0 0L20 15M20 0L0 15" stroke="white" strokeWidth="2" />
                <path d="M0 5L20 10M20 5L0 10" stroke="white" strokeWidth="2" />
                <path d="M10 0V15M0 7.5H20" stroke="white" strokeWidth="1.5" />
                <path d="M10 0V15M0 7.5H20" stroke="#C8102E" strokeWidth="1" />
              </svg>
            ) : (
              <svg className="w-5 h-5" viewBox="0 0 20 13.33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="4.44" y="0" fill="#000000" />
                <rect width="20" height="4.44" y="4.44" fill="#FFFFFF" />
                <rect width="20" height="4.44" y="8.89" fill="#CE1126" />
              </svg>
            )}
            <svg
              className={`w-3 h-3 transition-transform duration-200 ${showLanguageDropdown ? 'rotate-180' : ''}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          {showLanguageDropdown && (
            <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-2xl overflow-hidden min-w-[160px] z-50 border border-gray-100">
              <button
                onClick={() => handleLanguageChange('en')}
                className={`w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 transition text-left ${currentLanguage === 'en' ? 'bg-blue-50' : ''
                  }`}
              >
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20" height="15" fill="#012169" />
                  <path d="M0 0L20 15M20 0L0 15" stroke="white" strokeWidth="2" />
                  <path d="M0 5L20 10M20 5L0 10" stroke="white" strokeWidth="2" />
                  <path d="M10 0V15M0 7.5H20" stroke="white" strokeWidth="1.5" />
                  <path d="M10 0V15M0 7.5H20" stroke="#C8102E" strokeWidth="1" />
                </svg>
                <span className={`text-sm font-medium ${currentLanguage === 'en' ? 'text-[#2E3B78]' : 'text-gray-700'}`}>
                  {t('header.languageEnglish')}
                </span>
              </button>
              <button
                onClick={() => handleLanguageChange('ar')}
                className={`w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 transition text-left ${currentLanguage === 'ar' ? 'bg-blue-50' : ''
                  }`}
              >
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 20 13.33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20" height="4.44" y="0" fill="#000000" />
                  <rect width="20" height="4.44" y="4.44" fill="#FFFFFF" />
                  <rect width="20" height="4.44" y="8.89" fill="#CE1126" />
                </svg>
                <span className={`text-sm font-medium ${currentLanguage === 'ar' ? 'text-[#2E3B78]' : 'text-gray-700'}`}>
                  {t('header.languageArabic')}
                </span>
              </button>
            </div>
          )}
        </div>

        <div className={`${isLightTheme ? 'bg-white' : 'bg-white'} rounded-full p-[4px] pl-6 hidden md:flex items-center gap-4 shadow-md`}>
          <a href="#" className={`${isLightTheme ? 'text-[#2E3B78]' : 'text-[#2D3E7E]'} font-bold text-sm`}>
            {t('common.signIn')}
          </a>
          <button className="bg-[#FCD64C] text-[#2D3E7E] px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap">
            {t('common.signUp')}
          </button>
        </div>

        {/* Mobile Language Toggle & Menu Button Group */}
        <div className="flex items-center gap-1 lg:hidden">
          <div className="relative md:hidden language-dropdown">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowLanguageDropdown(!showLanguageDropdown);
              }}
              className={`${textColor} p-2 rounded-full hover:bg-white/10 transition flex items-center gap-1`}
              aria-label={t('header.selectLanguage')}
            >
              {currentLanguage === 'en' ? (
                <svg className="w-5 h-5" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20" height="15" fill="#012169" />
                  <path d="M0 0L20 15M20 0L0 15" stroke="white" strokeWidth="2" />
                  <path d="M0 5L20 10M20 5L0 10" stroke="white" strokeWidth="2" />
                  <path d="M10 0V15M0 7.5H20" stroke="white" strokeWidth="1.5" />
                  <path d="M10 0V15M0 7.5H20" stroke="#C8102E" strokeWidth="1" />
                </svg>
              ) : (
                <svg className="w-5 h-5" viewBox="0 0 20 13.33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20" height="4.44" y="0" fill="#000000" />
                  <rect width="20" height="4.44" y="4.44" fill="#FFFFFF" />
                  <rect width="20" height="4.44" y="8.89" fill="#CE1126" />
                </svg>
              )}
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${showLanguageDropdown ? 'rotate-180' : ''}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {showLanguageDropdown && (
              <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-2xl overflow-hidden min-w-[160px] z-50 border border-gray-100">
                <button
                  onClick={() => handleLanguageChange('en')}
                  className={`w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 transition text-left ${currentLanguage === 'en' ? 'bg-blue-50' : ''
                    }`}
                >
                  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="20" height="15" fill="#012169" />
                    <path d="M0 0L20 15M20 0L0 15" stroke="white" strokeWidth="2" />
                    <path d="M0 5L20 10M20 5L0 10" stroke="white" strokeWidth="2" />
                    <path d="M10 0V15M0 7.5H20" stroke="white" strokeWidth="1.5" />
                    <path d="M10 0V15M0 7.5H20" stroke="#C8102E" strokeWidth="1" />
                  </svg>
                  <span className={`text-sm font-medium ${currentLanguage === 'en' ? 'text-[#2E3B78]' : 'text-gray-700'}`}>
                    {t('header.languageEnglish')}
                  </span>
                </button>
                <button
                  onClick={() => handleLanguageChange('ar')}
                  className={`w-full px-4 py-3 flex items-center gap-3 hover:bg-gray-50 transition text-left ${currentLanguage === 'ar' ? 'bg-blue-50' : ''
                    }`}
                >
                  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 20 13.33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="20" height="4.44" y="0" fill="#000000" />
                    <rect width="20" height="4.44" y="4.44" fill="#FFFFFF" />
                    <rect width="20" height="4.44" y="8.89" fill="#CE1126" />
                  </svg>
                  <span className={`text-sm font-medium ${currentLanguage === 'ar' ? 'text-[#2E3B78]' : 'text-gray-700'}`}>
                    {t('header.languageArabic')}
                  </span>
                </button>
              </div>
            )}
          </div>
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className={`lg:hidden ${textColor} p-2`}
            aria-label={t('header.toggleMenu')}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {showMobileMenu ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <button className="hidden md:block lg:hidden bg-[#FCD64C] text-[#2D3E7E] px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap shadow-md">
          {t('common.signUp')}
        </button>
      </nav>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className={`lg:hidden fixed top-20 left-1/2 transform -translate-x-1/2 w-[96%] max-w-[1400px] ${isLightTheme ? 'bg-[#E8F0FE]' : 'bg-[#2D3E7E]'} rounded-2xl shadow-2xl z-40 mt-2 overflow-hidden`}>
          <div className="flex flex-col p-6 space-y-4">
            <div className="relative services-dropdown">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowServicesDropdown(!showServicesDropdown);
                }}
                className={`w-full flex items-center justify-between ${isLightTheme ? 'text-[#2E3B78]' : 'text-white'} text-[15px] font-medium py-3 ${isLightTheme ? 'hover:text-[#2E3B78]' : 'hover:text-[#FCD64C]'} transition`}
              >
                <span>{t('header.services')}</span>
                <svg
                  className={`w-4 h-4 transition-transform ${showServicesDropdown ? "rotate-180" : ""
                    }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {showServicesDropdown && (
                <div className="mt-2 pl-4 space-y-2">
                  <Link
                    to="/dropshipping"
                    className={`block ${isLightTheme ? 'text-[#2E3B78]/80' : 'text-white/80'} ${isLightTheme ? 'hover:text-[#2E3B78]' : 'hover:text-[#FCD64C]'} transition py-2 text-sm`}
                    onClick={() => setShowMobileMenu(false)}
                  >
                    {t('header.dropshipping')}
                  </Link>
                  <Link
                    to="/zambeel-360"
                    className={`block ${isLightTheme ? 'text-[#2E3B78]/80' : 'text-white/80'} ${isLightTheme ? 'hover:text-[#2E3B78]' : 'hover:text-[#FCD64C]'} transition py-2 text-sm`}
                    onClick={() => setShowMobileMenu(false)}
                  >
                    {t('header.zambeel360')}
                  </Link>
                  <Link
                    to="/zambeel-3pl"
                    className={`block ${isLightTheme ? 'text-[#2E3B78]/80' : 'text-white/80'} ${isLightTheme ? 'hover:text-[#2E3B78]' : 'hover:text-[#FCD64C]'} transition py-2 text-sm`}
                    onClick={() => setShowMobileMenu(false)}
                  >
                    {t('header.zambeel3PL')}
                  </Link>
                </div>
              )}
            </div>
            <button
              onClick={() => handleSectionClick("where-to-sell")}
              className={`${isLightTheme ? 'text-[#2E3B78]' : 'text-white'} text-[15px] font-medium py-3 ${isLightTheme ? 'hover:text-[#2E3B78]' : 'hover:text-[#FCD64C]'} transition text-left w-full`}
            >
              {t('header.whereCanYouSell')}
            </button>
            <button
              onClick={() => handleSectionClick("why-zambeel")}
              className={`${isLightTheme ? 'text-[#2E3B78]' : 'text-white'} text-[15px] font-medium py-3 ${isLightTheme ? 'hover:text-[#2E3B78]' : 'hover:text-[#FCD64C]'} transition text-left w-full`}
            >
              {t('header.whyZambeel')}
            </button>
            <Link
              to="/about"
              onClick={() => setShowMobileMenu(false)}
              className={`${isLightTheme ? 'text-[#2E3B78]' : 'text-white'} text-[15px] font-medium py-3 ${isLightTheme ? 'hover:text-[#2E3B78]' : 'hover:text-[#FCD64C]'} transition`}
            >
              {t('header.aboutUs')}
            </Link>
            <Link
              to="/team"
              onClick={() => setShowMobileMenu(false)}
              className={`${isLightTheme ? 'text-[#2E3B78]' : 'text-white'} text-[15px] font-medium py-3 ${isLightTheme ? 'hover:text-[#2E3B78]' : 'hover:text-[#FCD64C]'} transition`}
            >
              {t('header.ourTeam')}
            </Link>
            <button
              onClick={() => handleSectionClick("reviews")}
              className={`${isLightTheme ? 'text-[#2E3B78]' : 'text-white'} text-[15px] font-medium py-3 ${isLightTheme ? 'hover:text-[#2E3B78]' : 'hover:text-[#FCD64C]'} transition text-left w-full`}
            >
              {t('header.reviews')}
            </button>
            <div className={`pt-4 border-t ${isLightTheme ? 'border-[#2E3B78]/20' : 'border-white/20'}`}>
              {/* Language Dropdown for Mobile */}

              <a
                href="#"
                className={`block ${isLightTheme ? 'text-[#2E3B78]' : 'text-white'} text-[15px] font-medium py-3 ${isLightTheme ? 'hover:text-[#2E3B78]' : 'hover:text-[#FCD64C]'} transition`}
              >
                {t('common.signIn')}
              </a>
              <button className="w-full bg-[#FCD64C] text-[#2D3E7E] px-6 py-3 rounded-full text-sm font-bold mt-2">
                {t('common.signUp')}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

