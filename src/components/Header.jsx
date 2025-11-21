import { useState } from "react";
import { Link } from "react-router-dom";
import white_logoImage from "../white_logo.png";

export default function Header() {
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  return (
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
        <a href="#where-to-sell" className="hover:text-yellow-300 transition">
          Where can you sell?
        </a>
        <a href="#why-zambeel" className="hover:text-yellow-300 transition">
          Why Zambeel?
        </a>
        <a href="/#reviews" className="hover:text-yellow-300 transition">
          Reviews
        </a>
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
      <button className="md:hidden bg-[#FCD64C] text-[#2D3E7E] px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap shadow-md">
        Sign Up
      </button>
    </nav>
  );
}

