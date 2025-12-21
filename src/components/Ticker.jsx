import React from "react";

export default function Ticker() {
  const registerLink = "https://docs.google.com/forms/d/e/1FAIpQLSdDZxKtAbua7PDzQe4_tqCLzcFCsuz9T0Kcw8C3lj0Ew18VVw/viewform?pli=1";

  const tickerText = (
    <span className="text-black text-sm md:text-base whitespace-nowrap px-8">
      To learn Ecommerce & Marketing with Zambeel Masterclass:{" "}
      <a
        href={registerLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline font-bold hover:text-blue-700 transition-colors"
      >
        Register Now!
      </a>
    </span>
  );

  return (
    <div className="fixed top-0 left-0 right-0 bg-[#FCD64C] w-full py-2 z-[60] overflow-hidden ticker-container">
      <div className="flex animate-marquee whitespace-nowrap" style={{ pointerEvents: 'none' }}>
        {tickerText}
        {tickerText}
        {tickerText}
        {tickerText}
        {tickerText}
        {tickerText}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          will-change: transform;
        }
        @media (min-width: 769px) {
          .ticker-container:hover .animate-marquee {
            animation-play-state: paused;
          }
        }
        @media (max-width: 768px) {
          .animate-marquee {
            animation: marquee 15s linear infinite;
          }
        }
        .animate-marquee a {
          pointer-events: auto;
        }
      `}</style>
    </div>
  );
}

