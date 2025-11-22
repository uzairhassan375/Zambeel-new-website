import React from 'react';

// Import your image assets
import connectionImg from '../../assets/images/connection.png';
import databaseImg from '../../assets/images/database.png';
import frameImg from '../../assets/images/frame1.png';

const Wts = () => {
  return (
    <section
      className="w-full mx-auto py-8 md:py-20 px-6 sm:px-10 lg:px-12"
      style={{
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div
        className="max-w-[1050px] mx-auto bg-white rounded-[2rem] shadow-2xl p-10 sm:p-14 text-center"
        style={{
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Title */}
        <h2 className="text-3xl font-bold mb-6 text-[#243a86]">
          Where to Start?
        </h2>

        {/* Description */}
        <p className="text-gray-600 max-w-[750px] mx-auto mb-10 text-base sm:text-lg">
          From AI-built stores, winning products, and personalized assistance,
          we provide everything you need to start selling under 30 minutes.
        </p>

        {/* Button */}
        <button className="inline-flex items-center px-8 py-3.5 bg-[#243a86] text-white text-base font-semibold rounded-full hover:bg-[#1d2a69] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mb-12">
          <span>Get Started with Zambeel Dropshipping</span>
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>

        {/* ==================== */}
        {/* DESKTOP VIEW (850px and above) */}
        {/* ==================== */}
        <div className="hidden min-[850px]:block relative">
          <div className="relative flex justify-between items-start pt-4">
            
            {/* Dashed Line Background */}
            <div
              className="absolute top-12 left-[12.5%] w-3/4 h-0.5"
              style={{
                borderBottom: "2px dashed #ccc",
                zIndex: 0,
              }}
            ></div>

            {/* STEP 1 */}
            <div className="flex flex-col items-center w-1/4 relative z-10 px-2">
              <div
                className="w-16 h-16 bg-[#ffd24c] rounded-full grid place-items-center mb-4 font-extrabold text-2xl ring-4 ring-white shadow-lg"
                style={{ color: "#243a86" }}
              >
                1
              </div>
              <h3 className="font-semibold text-gray-800 text-base mb-2 text-center">
                Create account
              </h3>
              <p className="text-gray-500 text-sm leading-tight text-center">
                Sign up in seconds and <br />
                access your Zambeel <br />
                dashboard instantly.
              </p>
            </div>

            {/* Icon 1 (Between 1 & 2) */}
            <div
              className="absolute left-1/4 top-12 transform -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-2 shadow-md border border-gray-100">
                <img 
                  src={connectionImg} 
                  alt="connection" 
                  className="w-8 h-8 object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>

            {/* STEP 2 */}
            <div className="flex flex-col items-center w-1/4 relative z-10 px-2">
              <div
                className="w-16 h-16 bg-[#ffd24c] rounded-full grid place-items-center mb-4 font-extrabold text-2xl ring-4 ring-white shadow-lg"
                style={{ color: "#243a86" }}
              >
                2
              </div>
              <h3 className="font-semibold text-gray-800 text-base mb-2 text-center">
                Connect store
              </h3>
              <p className="text-gray-500 text-sm leading-tight text-center">
                Link Shopify, YouCan, <br />
                EasyOrders store, or <br />
                upload orders manually.
              </p>
            </div>

            {/* Icon 2 (Between 2 & 3) */}
            <div
              className="absolute left-2/4 top-12 transform -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-2 shadow-md border border-gray-100">
                <img 
                  src={frameImg} 
                  alt="frame" 
                  className="w-8 h-8 object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>

            {/* STEP 3 */}
            <div className="flex flex-col items-center w-1/4 relative z-10 px-2">
              <div
                className="w-16 h-16 bg-[#ffd24c] rounded-full grid place-items-center mb-4 font-extrabold text-2xl ring-4 ring-white shadow-lg"
                style={{ color: "#243a86" }}
              >
                3
              </div>
              <h3 className="font-semibold text-gray-800 text-base mb-2 text-center">
                List Products 
              </h3>
              <p className="text-gray-500 text-sm leading-tight text-center">
                Choose from 20K+ products and <br />
                set your own selling price — your <br />
                profit is the difference.
              </p>
            </div>

            {/* Icon 3 (Between 3 & 4) */}
            <div
              className="absolute left-3/4 top-12 transform -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-2 shadow-md border border-gray-100">
                <img 
                  src={databaseImg} 
                  alt="database" 
                  className="w-8 h-8 object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>

            {/* STEP 4 */}
            <div className="flex flex-col items-center w-1/4 relative z-10 px-2">
              <div
                className="w-16 h-16 bg-[#ffd24c] rounded-full grid place-items-center mb-4 font-extrabold text-2xl ring-4 ring-white shadow-lg"
                style={{ color: "#243a86" }}
              >
                4
              </div>
              <h3 className="font-semibold text-gray-800 text-base mb-2 text-center">
                Start Selling
              </h3>
              <p className="text-gray-500 text-sm leading-tight text-center">
                Promote your store on <br />
                Facebook, Instagram, or <br />
                any platform you like.
              </p>
            </div>
          </div>
        </div>

        {/* ==================== */}
        {/* MOBILE VIEW (below 850px) */}
        {/* ==================== */}
        <div className="min-[850px]:hidden relative">
          <div className="flex flex-col items-center space-y-0">
            {/* STEP 1 */}
            <div className="relative w-full pb-2">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#ffd24c] rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                    <span className="text-gray-900 font-bold text-lg">1</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#243a86]">Create account</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Sign up in seconds and access your Zambeel dashboard instantly.
                </p>
              </div>
              {/* Connection Line and Icon */}
              <div className="flex justify-center py-2">
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-4 border-l-2 border-dashed border-gray-300"></div>
                  <div className="w-8 h-8 bg-white rounded-lg shadow-md flex items-center justify-center my-1">
                    <img 
                      src={connectionImg} 
                      alt="connection" 
                      className="w-4 h-4 object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="w-0.5 h-4 border-l-2 border-dashed border-gray-300"></div>
                </div>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="relative w-full pb-2">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#ffd24c] rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                    <span className="text-gray-900 font-bold text-lg">2</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#243a86]">Connect store</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Link Shopify, YouCan, EasyOrders store, or upload orders manually.
                </p>
              </div>
              {/* Connection Line and Icon */}
              <div className="flex justify-center py-2">
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-4 border-l-2 border-dashed border-gray-300"></div>
                  <div className="w-8 h-8 bg-white rounded-lg shadow-md flex items-center justify-center my-1">
                    <img 
                      src={frameImg} 
                      alt="frame" 
                      className="w-4 h-4 object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="w-0.5 h-4 border-l-2 border-dashed border-gray-300"></div>
                </div>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="relative w-full pb-2">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#ffd24c] rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                    <span className="text-gray-900 font-bold text-lg">3</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#243a86]">List Products</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Choose from 20K+ products and set your own selling price — your profit is the difference.
                </p>
              </div>
              {/* Connection Line and Icon */}
              <div className="flex justify-center py-2">
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-4 border-l-2 border-dashed border-gray-300"></div>
                  <div className="w-8 h-8 bg-white rounded-lg shadow-md flex items-center justify-center my-1">
                    <img 
                      src={databaseImg} 
                      alt="database" 
                      className="w-4 h-4 object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="w-0.5 h-4 border-l-2 border-dashed border-gray-300"></div>
                </div>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="relative w-full">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#ffd24c] rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                    <span className="text-gray-900 font-bold text-lg">4</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#243a86]">Start Selling</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Promote your store on Facebook, Instagram, or any platform you like.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wts;