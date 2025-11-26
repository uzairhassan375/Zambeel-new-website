import React from 'react';

// Import your image assets
import connectionImg from '../../assets/images/connection.png';
import databaseImg from '../../assets/images/database.png';
import frameImg from '../../assets/images/frame1.png';

const Wts = ({
  title = "Where to Start?",
  description = "From AI-built stores, winning products, and personalized assistance, we provide everything you need to start selling under 30 minutes.",
  buttonText = "Get Started with Zambeel Dropshipping",
  buttonLink = null,
  showButton = true,
  steps = [
    {
      number: 1,
      title: "Create account",
      description: "Sign up in seconds and access your Zambeel dashboard instantly.",
      desktopDescription: "Sign up in seconds and\naccess your Zambeel\ndashboard instantly.",
      icon: connectionImg,
      iconAlt: "connection"
    },
    {
      number: 2,
      title: "Connect store",
      description: "Link Shopify, YouCan, EasyOrders store, or upload orders manually.",
      desktopDescription: "Link Shopify, YouCan,\nEasyOrders store, or\nupload orders manually.",
      icon: frameImg,
      iconAlt: "frame"
    },
    {
      number: 3,
      title: "List Products",
      description: "Choose from 20K+ products and set your own selling price — your profit is the difference.",
      desktopDescription: "Choose from 20K+ products and\nset your own selling price — your\nprofit is the difference.",
      icon: databaseImg,
      iconAlt: "database"
    },
    {
      number: 4,
      title: "Start Selling",
      description: "Promote your store on Facebook, Instagram, or any platform you like.",
      desktopDescription: "Promote your store on\nFacebook, Instagram, or\nany platform you like.",
      icon: null,
      iconAlt: null
    }
  ]
}) => {
  const handleButtonClick = () => {
    if (buttonLink) {
      window.location.href = buttonLink;
    }
  };

  return (
    <section
      className="w-full mx-auto py-8 md:py-8 px-6 sm:px-10 lg:px-12"
      style={{
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div
        className="max-w-[1050px] mx-auto bg-white rounded-[2rem] shadow-2xl p-6 md:p-8 text-center"
        style={{
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Title */}
        <h2 className="text-3xl font-bold mb-3 md:mb-4 text-[#243a86]">
          {title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 max-w-[750px] mx-auto mb-4 md:mb-6 text-base sm:text-lg">
          {description}
        </p>

        {/* Button */}
        {showButton && (
          <button 
            onClick={handleButtonClick}
            className="hidden md:inline-flex items-center px-8 py-3.5 bg-[#243a86] text-white text-base font-semibold rounded-full hover:bg-[#1d2a69] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mb-4 md:mb-6"
          >
            <span>{buttonText}</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        )}

        {/* ==================== */}
        {/* DESKTOP VIEW (850px and above) */}
        {/* ==================== */}
        <div className="hidden min-[850px]:block relative">
          <div className="relative flex justify-between items-start pt-2">
            
            {/* Dashed Line Background */}
            <div
              className="absolute top-12 left-[12.5%] w-3/4 h-0.5"
              style={{
                borderBottom: "2px dashed #ccc",
                zIndex: 0,
              }}
            ></div>

            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                {/* STEP */}
                <div className="flex flex-col items-center w-1/4 relative z-10 px-2">
                  <div
                    className="w-16 h-16 bg-[#ffd24c] rounded-full grid place-items-center mb-2 font-extrabold text-2xl ring-4 ring-white shadow-lg"
                    style={{ color: "#243a86" }}
                  >
                    {step.number}
                  </div>
                  <h3 className="font-semibold text-gray-800 text-base mb-1 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-tight text-center whitespace-pre-line">
                    {step.desktopDescription}
                  </p>
                </div>

                {/* Icon (Between steps) */}
                {index < steps.length - 1 && step.icon && (
                  <div
                    className="absolute top-12 transform -translate-x-1/2 -translate-y-1/2 z-20"
                    style={{ left: `${(index + 1) * 25}%` }}
                  >
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-2 shadow-md border border-gray-100">
                      <img 
                        src={step.icon} 
                        alt={step.iconAlt} 
                        className="w-8 h-8 object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ==================== */}
        {/* MOBILE VIEW (below 850px) */}
        {/* ==================== */}
        <div className="min-[850px]:hidden relative">
          <div className="flex flex-col items-center space-y-0">
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                {/* STEP */}
                <div className="relative w-full pb-2">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-[#ffd24c] rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                        <span className="text-gray-900 font-bold text-lg">{step.number}</span>
                      </div>
                      <h3 className="text-lg font-bold text-[#243a86]">{step.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {/* Connection Line and Icon */}
                  {index < steps.length - 1 && step.icon && (
                    <div className="flex justify-center py-2">
                      <div className="flex flex-col items-center">
                        <div className="w-0.5 h-4 border-l-2 border-dashed border-gray-300"></div>
                        <div className="w-8 h-8 bg-white rounded-lg shadow-md flex items-center justify-center my-1">
                          <img 
                            src={step.icon} 
                            alt={step.iconAlt} 
                            className="w-4 h-4 object-contain"
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                        </div>
                        <div className="w-0.5 h-4 border-l-2 border-dashed border-gray-300"></div>
                      </div>
                    </div>
                  )}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wts;
