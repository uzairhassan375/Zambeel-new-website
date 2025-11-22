import { useState, useEffect } from "react";
import PricingCard from "./PricingCard";
import { pricingPlans as defaultPricingPlans } from "../data/pricingPlans";

// --- Main Pricing Section Component ---
const PricingSection = ({ 
  title = "Clear Pricing. Great Value.",
  subtitle = "Click on any plan to see full details and features.",
  showBillingToggle = true,
  defaultActiveIndex = null,
  customPlans = null 
}) => {
  const [isMonthly, setIsMonthly] = useState(true);
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
      className="w-full mx-auto py-16 px-4 sm:px-6 md:px-8"
      style={{
        fontFamily: "Inter, sans-serif",
        background: "linear-gradient(135deg, #243a86 0%, #6a3fa0 100%)"
      }}
    >
      <div className="max-w-[1050px] mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-4 text-white">
          {title}
        </h2>
        <p className="text-white text-opacity-80 mb-8 text-sm sm:text-base">
          {subtitle}
        </p>

        {/* Billing Switch */}
        {showBillingToggle && (
          <div
            className="flex items-center justify-center gap-2 mt-4 mb-14 bg-[#1a2d6b] p-1.5 rounded-full w-max mx-auto shadow-inner"
            style={{ boxShadow: "inset 0 2px 4px rgba(0,0,0,0.3)" }}
          >
            <button
              onClick={() => setIsMonthly(true)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                isMonthly ? "bg-[#ffd24c] text-[#243a86] shadow-md" : "bg-transparent text-white opacity-80 hover:opacity-100"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsMonthly(false)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                !isMonthly ? "bg-[#ffd24c] text-[#243a86] shadow-md" : "bg-transparent text-white opacity-80 hover:opacity-100"
              }`}
            >
              Yearly
            </button>
          </div>
        )}

        {/* Card Layout - Vertical on mobile, horizontal on desktop */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center w-full max-w-7xl mx-auto">
          {plans.map((plan, idx) => (
            <PricingCard
              key={idx}
              plan={plan}
              isMonthly={isMonthly}
              isActive={isDesktop ? true : activeIndex === idx}
              onClick={() => setActiveIndex(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

