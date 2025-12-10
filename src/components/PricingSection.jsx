import { useState, useEffect } from "react";
import PricingCard from "./PricingCard";
import { pricingPlans as defaultPricingPlans } from "../data/pricingPlans";

// --- Main Pricing Section Component ---
const PricingSection = ({ 
  title = "Clear Pricing. Great Value.",
  subtitle = "Click on any plan to see full details and features.",
  defaultActiveIndex = null,
  customPlans = null 
}) => {
  const [isDesktop, setIsDesktop] = useState(false);
  
  // Use custom plans if provided, otherwise use default
  const plans = customPlans || defaultPricingPlans;
  
  // Find the index of "Premium" to set it as the default active card, or use provided default
  const premiumIndex = plans.findIndex(plan => plan.tag === "Premium");
  const initialActiveIndex = defaultActiveIndex !== null 
    ? defaultActiveIndex 
    : (premiumIndex !== -1 ? premiumIndex : 0);
  
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

  // Detect desktop view
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  return (
    <section
      className="w-full mx-auto py-8 md:py-8 px-4 sm:px-6 md:px-8"
      style={{
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div className="max-w-[1050px] mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-4 text-white">
          {isDesktop ? title : (title === "Clear Pricing. Great Value." || title === "Our pricing is clear and transparent" ? "Choose your plan" : title)}
        </h2>
        <p className="text-white text-opacity-80 mb-8 text-sm sm:text-base">
          {isDesktop ? subtitle : (subtitle === "Click on any plan to see full details and features." ? "Swipe or Tap to explore our pricing options" : subtitle)}
        </p>

        {/* Card Layout - Vertical on mobile, horizontal on desktop */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-6 items-center justify-center w-full max-w-7xl mx-auto">
          {plans.map((plan, idx) => {
            const middleIndex = Math.floor(plans.length / 2);
            const isMiddle = idx === middleIndex;
            return (
            <PricingCard
              key={idx}
              plan={plan}
              isActive={isDesktop ? true : activeIndex === idx}
              onClick={() => setActiveIndex(idx)}
                isLast={idx === plans.length - 1}
                isMiddle={isMiddle}
                cardIndex={idx}
            />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

