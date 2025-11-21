import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import white_logoImage from "../white_logo.png";

export default function Header() {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  return (
    <>
      <nav className="w-[96%] max-w-[1400px] bg-[#2D3E7E] rounded-full px-4 md:px-6 py-3 flex justify-between items-center shadow-xl fixed top-4 left-1/2 transform -translate-x-1/2 z-50 mx-auto">
        <div className="flex items-center gap-3 pl-4">
          <Link to="/" className="mt-1">
            <img
              src={white_logoImage}
              alt="Zambeel Logo"
              className="h-10 md:h-12 object-contain"
            />
          </Link>
        </div>
        <div className="hidden lg:flex items-center gap-10 text-white text-[15px] font-medium tracking-wide">
        <div
          className="relative"
          onMouseEnter={() => setShowServicesDropdown(true)}
          onMouseLeave={() => setShowServicesDropdown(false)}
        >
          <button className={`transition flex items-center gap-2 ${showServicesDropdown ? 'text-[#FCD64C]' : 'hover:text-[#FCD64C]'}`}>
            Services
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
                <a
                  href="#"
                  className="block px-4 py-3 text-[#2E3B78] hover:bg-[#FCD64C] transition text-sm font-medium w-full"
                >
                  Dropshipping
                </a>
                <a
                  href="#"
                  className="block px-4 py-3 text-[#2E3B78] hover:bg-[#FCD64C] transition text-sm font-medium w-full"
                >
                  Zambeel 3PL
                </a>
                <a
                  href="#"
                  className="block px-4 py-3 text-[#2E3B78] hover:bg-[#FCD64C] transition text-sm font-medium w-full"
                >
                  Zambeel 360
                </a>
              </div>
            </div>
          )}
        </div>
        <button
          onClick={() => handleSectionClick("where-to-sell")}
          className="hover:text-yellow-300 transition cursor-pointer"
        >
          Where can you sell?
        </button>
        <button
          onClick={() => handleSectionClick("why-zambeel")}
          className="hover:text-yellow-300 transition cursor-pointer"
        >
          Why Zambeel?
        </button>
        <button
          onClick={() => handleSectionClick("reviews")}
          className="hover:text-yellow-300 transition cursor-pointer"
        >
          Reviews
        </button>
        <Link to="/team" className="hover:text-yellow-300 transition">
          Our Team
        </Link>
        <Link to="/about" className="hover:text-yellow-300 transition">
          About Us
        </Link>
      </div>
      <div className="bg-white rounded-full p-[4px] pl-6 hidden md:flex items-center gap-4 shadow-md">
        <a href="#" className="text-[#2D3E7E] font-bold text-sm">
          Sign In
        </a>
        <button className="bg-[#FCD64C] text-[#2D3E7E] px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap">
          Sign Up
        </button>
      </div>
        <button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
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
        <button className="hidden md:block lg:hidden bg-[#FCD64C] text-[#2D3E7E] px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap shadow-md">
          Sign Up
        </button>
      </nav>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="lg:hidden fixed top-20 left-1/2 transform -translate-x-1/2 w-[96%] max-w-[1400px] bg-[#2D3E7E] rounded-2xl shadow-2xl z-40 mt-2 overflow-hidden">
          <div className="flex flex-col p-6 space-y-4">
            <div className="relative">
              <button
                onClick={() => setShowServicesDropdown(!showServicesDropdown)}
                className="w-full flex items-center justify-between text-white text-[15px] font-medium py-3 hover:text-[#FCD64C] transition"
              >
                <span>Services</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    showServicesDropdown ? "rotate-180" : ""
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
                  <a
                    href="#"
                    className="block text-white/80 hover:text-[#FCD64C] transition py-2 text-sm"
                  >
                    Dropshipping
                  </a>
                  <a
                    href="#"
                    className="block text-white/80 hover:text-[#FCD64C] transition py-2 text-sm"
                  >
                    Zambeel 3PL
                  </a>
                  <a
                    href="#"
                    className="block text-white/80 hover:text-[#FCD64C] transition py-2 text-sm"
                  >
                    Zambeel 360
                  </a>
                </div>
              )}
            </div>
            <button
              onClick={() => handleSectionClick("where-to-sell")}
              className="text-white text-[15px] font-medium py-3 hover:text-[#FCD64C] transition text-left w-full"
            >
              Where can you sell?
            </button>
            <button
              onClick={() => handleSectionClick("why-zambeel")}
              className="text-white text-[15px] font-medium py-3 hover:text-[#FCD64C] transition text-left w-full"
            >
              Why Zambeel?
            </button>
            <Link
              to="/about"
              onClick={() => setShowMobileMenu(false)}
              className="text-white text-[15px] font-medium py-3 hover:text-[#FCD64C] transition"
            >
              About Us
            </Link>
            <Link
              to="/team"
              onClick={() => setShowMobileMenu(false)}
              className="text-white text-[15px] font-medium py-3 hover:text-[#FCD64C] transition"
            >
              Our Team
            </Link>
            <button
              onClick={() => handleSectionClick("reviews")}
              className="text-white text-[15px] font-medium py-3 hover:text-[#FCD64C] transition text-left w-full"
            >
              Reviews
            </button>
            <div className="pt-4 border-t border-white/20">
              <a
                href="#"
                className="block text-white text-[15px] font-medium py-3 hover:text-[#FCD64C] transition"
              >
                Sign In
              </a>
              <button className="w-full bg-[#FCD64C] text-[#2D3E7E] px-6 py-3 rounded-full text-sm font-bold mt-2">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

