import { Check, X } from 'lucide-react';

// --- Constants ---
const COLLAPSED_HEIGHT = 120; // Height for the collapsed state
const EXPANDED_HEIGHT = 500; // Fixed height when the card is fully expanded

// --- Pricing Card Component ---
const PricingCard = ({ plan, isMonthly, isActive, onClick, isLast = false, isMiddle = false, cardIndex = 0 }) => {
  const price = isMonthly ? plan.monthlyPrice : plan.yearlyPrice;

  // Determine card styling based on active state
  const cardHeight = isActive ? 'auto' : `${COLLAPSED_HEIGHT}px`;
  const minHeight = isActive ? `${EXPANDED_HEIGHT}px` : 'auto';
  const isPremium = plan.tag === "Premium";
  const backgroundColor = 'bg-white';
  const borderColor = isActive ? (isPremium ? 'border-[#ffd24c] border-2' : 'border-[#243a86] border-2') : 'border-gray-200';
  const tagBg = isPremium ? 'bg-[#ffd24c] text-[#243a86]' : 'bg-[#243a86] text-white';

  // Tag positioning
  const OverflowTag = (
    <div
      className={`
        absolute top-[5px] left-1/2 -translate-x-1/2 -translate-y-1/2
        md:left-auto md:right-4 md:translate-x-0 md:translate-y-0 md:top-4
        z-10 
        font-bold uppercase px-4 py-2 rounded-full shadow-xl whitespace-nowrap 
        ${tagBg}
        ${isActive ? 'text-base' : 'text-sm'} 
      `}
    >
      {plan.tag}
    </div>
  );

  return (
    <div
      onClick={onClick}
      className={`
        relative w-full md:w-auto mx-auto cursor-pointer
        rounded-3xl border transition-all duration-500 ease-in-out
        flex flex-col justify-start
        ${backgroundColor} ${borderColor}
        ${isPremium ? 'md:flex-[1.15] md:max-w-[360px]' : 'md:flex-1 md:max-w-[320px]'}
        md:hover:scale-105 md:hover:-translate-y-2
      `}
      style={{
        height: cardHeight,
        minHeight: minHeight,
        transform: isActive ? (isPremium ? 'scale(1.05) translateY(-8px)' : 'scale(1.02)') : 'scale(1)',
        boxShadow: isMiddle 
          ? '0px 0px 6px 6px #F4D03F99'
          : (isPremium 
              ? '0 10px 20px rgba(255, 210, 76, 0.2)' 
              : '0 10px 15px rgba(0,0,0,0.1)'),
      }}
      onMouseEnter={(e) => {
        if (window.innerWidth >= 768 && isMiddle) {
          e.currentTarget.style.boxShadow = '0px 0px 6px 6px #F4D03F99';
        }
      }}
      onMouseLeave={(e) => {
        if (window.innerWidth >= 768 && isMiddle) {
          e.currentTarget.style.boxShadow = '0px 0px 6px 6px #F4D03F99';
        }
      }}
    >
      {/* RENDER THE OVERFLOW TAG */}
      {OverflowTag}

      {/* COLLAPSED VIEW (When !isActive) */}
      {!isActive && (
        <div className="flex flex-col items-center justify-center h-full w-full px-4 pt-4">
          {/* 1. Name: Made bigger (text-2xl) and less bold (font-semibold) */}
          <p className="font-normal text-[#243a86] mb-1 mt-6 leading-[100%] tracking-[0] text-center" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '32.44px' }}>
            {plan.name}
          </p>
          {/* 2. Price: Stays after the pack name */}
          <div className={`text-2xl font-extrabold text-[#243a86]`}>
            {price}
            <span className="text-base font-normal opacity-100">{isLast ? '/6 mo' : '/mo'}</span>
          </div>
        </div>
      )}

      {/* EXPANDED VIEW (When isActive) - Detailed View */}
      {isActive && (
        <div className="flex flex-col w-full">
          {/* TOP SECTION - White Background with Pack Name and Price */}
          <div className="bg-white px-4 pt-16 pb-6 flex flex-col items-center justify-center rounded-t-3xl">
            {/* Name (Plan Name) - Centered */}
            <p className={`font-normal text-[#243a86] mb-2 leading-[100%] tracking-[0] text-center`} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '32.44px' }}>
              {plan.name}
            </p>
            {/* Price (Money) - Below pack name, centered */}
            <div className={`text-3xl font-extrabold text-[#243a86]`}>
              {price}
              <span className={`text-base font-normal opacity-70`}>{isLast ? '/6 mo' : '/mo'}</span>
            </div>
          </div>
          
          {/* BOTTOM SECTION - Background with Description and Features */}
          <div className={`px-4 pt-4 pb-4 flex flex-col text-left rounded-b-3xl ${isPremium ? 'bg-[#FFF8DE]' : 'bg-[#DEE2EE]'}`}>
            <p className="text-sm mb-6 text-gray-600">{plan.description}</p>
            <ul className="mb-8 space-y-3 text-gray-700 text-base">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  {feature.included ? (
                    <Check className="w-5 h-5 text-green-500 shrink-0" />
                  ) : (
                    <X className="w-5 h-5 text-red-400 shrink-0" />
                  )}
                  <span className={!feature.included ? 'text-gray-400 line-through' : ''}>
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>
            <button
              className={`w-full font-semibold py-3 rounded-xl shadow-lg hover:opacity-95 transition-all text-base mt-auto transform hover:scale-[1.02] active:scale-95 ${
                isPremium
                  ? 'bg-[#ffd24c] text-[#243a86]'
                  : 'bg-[#243a86] text-white'
              }`}
              style={{
                boxShadow: isPremium
                  ? '0 4px 15px rgba(255, 210, 76, 0.6)'
                  : '0 4px 15px rgba(36, 58, 134, 0.4)',
              }}
            >
              {cardIndex === 0 ? 'Get Started' : cardIndex === 1 ? 'Buy Gold plan' : cardIndex === 2 ? 'Buy Diamond plan' : 'Get Started'} →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingCard;

