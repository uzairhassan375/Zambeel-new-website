import { Link } from "react-router-dom";
import white_logoImage from "../white_logo.png";

export default function Footer() {
  return (
    <footer className="max-w-6xl mx-auto text-white pb-8 md:pb-12 pt-8 md:pt-12 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 text-sm items-start">
        <div className="space-y-5 flex flex-col">
          <img
            src={white_logoImage}
            alt="Zambeel Logo"
            className="h-12 md:h-14 object-contain"
          />
          <p className="text-sm leading-relaxed text-blue-50 opacity-90 pr-2">
            Zambeel helps businesses grow with reliable dropshipping,
            fulfillment, and 3PL solutions. Sell smarter, scale faster, and
            reach new markets with ease.
          </p>
          <div className="flex gap-5 text-sm mt-6">
            <a href="#" className="opacity-80 hover:opacity-100 transition">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" className="opacity-80 hover:opacity-100 transition">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" className="opacity-80 hover:opacity-100 transition">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <div className="pt-2 md:pl-4 flex flex-col">
          <h4 className="font-bold text-base mb-4 md:mb-6 text-white">
            Services
          </h4>
          <ul className="space-y-3 text-sm text-blue-50 opacity-90">
            <li>
              <a href="#" className="hover:text-white hover:underline">
                Zambeel Dropshipping
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white hover:underline">
                Zambeel 3PL
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white hover:underline">
                Zambeel 360
              </a>
            </li>
          </ul>
        </div>
        <div className="pt-2 md:pl-4 flex flex-col">
          <h4 className="font-bold text-base mb-4 md:mb-6 text-white">
            Zambeel Portal
          </h4>
          <ul className="space-y-3 text-sm text-blue-50 opacity-90">
            <li>
              <a href="#" className="hover:text-white hover:underline">
                Sign Up
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white hover:underline">
                Sign In
              </a>
            </li>
          </ul>
        </div>
        <div className="pt-2 flex flex-col">
          <h4 className="font-bold text-base mb-4 md:mb-6 text-white">
            Contact Us
          </h4>
          <ul className="space-y-3 text-sm text-blue-50 opacity-90">
            <li className="flex items-center gap-3">
              <i className="fa-solid fa-envelope w-4"></i>
              <a
                href="mailto:zambeel@help.com"
                className="hover:text-white hover:underline"
              >
                zambeel@help.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <i className="fa-brands fa-whatsapp w-4"></i>
              <a href="#" className="hover:text-white hover:underline">
                +92 331 0090291
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

