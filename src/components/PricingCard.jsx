import { Check, X } from 'lucide-react';

// --- Constants ---
const COLLAPSED_HEIGHT = 120; // Height for the collapsed state
const EXPANDED_HEIGHT = 500; // Fixed height when the card is fully expanded

// --- Pricing Card Component ---
const PricingCard = ({ plan, isMonthly, isActive, onClick }) => {
  const price = isMonthly ? plan.monthlyPrice : plan.yearlyPrice;

  // Determine card styling based on active state
  const cardHeight = isActive ? EXPANDED_HEIGHT : COLLAPSED_HEIGHT;
  const isPremium = plan.tag === "Premium";
  const backgroundColor = isActive ? (isPremium ? 'bg-[#ffe4a0]' : 'bg-white') : 'bg-white/95';
  const borderColor = isActive ? (isPremium ? 'border-[#ffd24c]' : 'border-[#243a86]') : 'border-gray-200';
  const tagBg = isPremium ? 'bg-[#ffd24c] text-[#243a86]' : 'bg-[#243a86] text-white';

  // Tag positioning
  const OverflowTag = (
    <div
      className={`
        absolute top-[5px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 
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
        rounded-2xl border transition-all duration-500 ease-in-out shadow-xl
        flex flex-col justify-start
        ${backgroundColor} ${borderColor} hover:shadow-2xl
        ${isPremium ? 'md:flex-[1.15] md:max-w-[360px]' : 'md:flex-1 md:max-w-[320px]'}
      `}
      style={{
        height: `${cardHeight}px`,
        transform: isActive ? (isPremium ? 'scale(1.05)' : 'scale(1.02)') : 'scale(1)',
        boxShadow: isActive ? '0 15px 30px rgba(0,0,0,0.25)' : '0 10px 15px rgba(0,0,0,0.1)',
      }}
    >
      {/* RENDER THE OVERFLOW TAG */}
      {OverflowTag}

      {/* COLLAPSED VIEW (When !isActive) */}
      {!isActive && (
        <div className="flex flex-col items-center justify-center h-full w-full px-4 pt-4">
          {/* 1. Name: Made bigger (text-2xl) and less bold (font-semibold) */}
          <p className="font-semibold text-2xl text-gray-800 mb-1 mt-6">
            {plan.name}
          </p>
          {/* 2. Price: Stays after the pack name */}
          <div className={`text-2xl font-extrabold text-[#243a86]`}>
            {price}
            <span className="text-base font-normal opacity-100">/mo</span>
          </div>
        </div>
      )}

      {/* EXPANDED VIEW (When isActive) - Detailed View */}
      {isActive && (
        <div className="p-4 flex flex-col flex-grow">
          {/* COMBINED NAME AND PRICE SECTION (mt-6 to account for the overflowing tag) */}
          <div className="flex items-baseline justify-between mb-4 mt-6">
            {/* Name (Plan Name) - text-3xl and font-semibold */}
            <p className={`font-semibold text-3xl text-gray-800`}>
              {plan.name}
            </p>

            {/* Price (Money) - Aligned after the pack name */}
            <div className={`text-3xl font-extrabold text-[#243a86]`}>
              {price}
              <span className={`text-base font-normal opacity-70`}>/mo</span>
            </div>
          </div>
          {/* Full Expanded Content Area */}
          <div className="pt-2 flex flex-col flex-grow text-left">
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
              className={`w-full font-semibold py-3 rounded-full shadow-lg hover:opacity-95 transition-all text-base mt-auto transform hover:scale-[1.01] active:scale-95 ${
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
              {isPremium ? 'Select Premium' : 'Get Started →'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingCard;

