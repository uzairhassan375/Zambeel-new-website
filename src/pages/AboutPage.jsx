function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* About Zambeel Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center mb-12 sm:mb-16">
          <div className="relative inline-block mb-6">
            <div className="absolute -left-8 -top-2 w-4 h-4 bg-yellow-400 rounded-sm transform rotate-12"></div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1e3a8a] relative z-10">
              About Zambeel
            </h1>
            <div className="absolute -right-8 -bottom-2 w-4 h-4 bg-yellow-400 rounded-sm transform -rotate-12"></div>
          </div>
          <p className="text-base sm:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Zambeel is a commerce platform that provides sellers with the tools, automation, and fulfillment options they need to build and scale their online businesses. Whether you're just starting out or looking to expand, Zambeel offers solutions that make e-commerce accessible and profitable.
          </p>
        </div>

        {/* Our Mission */}
        <div className="bg-gray-100 rounded-4xl p-8 sm:p-10 lg:p-12 max-w-4xl mx-auto">
          <div className="relative inline-block mb-6">
            <div className="absolute -left-6 -top-1 w-3 h-3 bg-yellow-400 rounded-xl transform rotate-12"></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1e3a8a] relative z-10">
              Our Mission
            </h2>
            <div className="absolute -right-6 -bottom-1 w-3 h-3 bg-yellow-400 rounded-full transform -rotate-12"></div>
          </div>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            To empower sellers with an accessible, intelligent, and local-first platform that makes online selling simple and genuinely profitable.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a8a] text-center mb-12 sm:mb-16">
            What We Do
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {/* Smart Selling Tools */}
            <div className="bg-sky-100 rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col items-center text-center min-h-[320px] sm:min-h-[360px] lg:min-h-[400px]">
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full flex items-center justify-center text-3xl sm:text-4xl lg:text-5xl mb-6 sm:mb-8" style={{ backgroundColor: '#F0FAFF' }}>
                <i className="fa-solid fa-bolt text-[#1e3a8a]"></i>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1e3a8a] mb-4 sm:mb-6">
                Smart Selling Tools
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed flex-grow">
                Our AI-powered tools help you evaluate products, understand demand, build your store, get instant support, gain insights, and automate workflows. Everything you need to sell smarter and scale faster.
              </p>
            </div>

            {/* Flexible Fulfillment Options */}
            <div className="bg-gray-100 rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col items-center text-center min-h-[320px] sm:min-h-[360px] lg:min-h-[400px]">
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full flex items-center justify-center text-3xl sm:text-4xl lg:text-5xl mb-6 sm:mb-8" style={{ backgroundColor: '#F0FAFF' }}>
                <i className="fa-solid fa-truck-fast text-[#1e3a8a]"></i>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1e3a8a] mb-4 sm:mb-6">
                Flexible Fulfillment Options
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed flex-grow">
                Choose from dropshipping, 3PL, or our comprehensive 360 brand building solution. We handle storage, packaging, and delivery so you can focus on growing your business.
              </p>
            </div>

            {/* Local Solutions for Local Sellers */}
            <div className="bg-sky-100 rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col items-center text-center min-h-[320px] sm:min-h-[360px] lg:min-h-[400px]">
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full flex items-center justify-center text-3xl sm:text-4xl lg:text-5xl mb-6 sm:mb-8" style={{ backgroundColor: '#F0FAFF' }}>
                <i className="fa-solid fa-globe text-[#1e3a8a]"></i>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1e3a8a] mb-4 sm:mb-6">
                Local Solutions for Local Sellers
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed flex-grow">
                We understand the Pakistani market and the unique challenges you face. From payment constraints to logistics reliability, we've built solutions that work for local sellers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Zambeel? Section */}
      <section className="w-full py-12 sm:py-16 lg:py-20" style={{ backgroundColor: '#F5FCFF' }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a8a] text-center mb-6">
            Why Zambeel?
          </h2>
          <p className="text-center text-base sm:text-lg text-gray-700 mb-12 sm:mb-16">
            Start your Ecommerce business from anywhere in the world without business registration.
          </p>

        {/* Metrics */}
        <div className="bg-white rounded-full p-6 sm:p-8 lg:p-10 mb-12 sm:mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: '#F0FAFF' }}>
                <i className="fa-solid fa-globe text-[#1e3a8a] text-xl"></i>
              </div>
              <p className="text-sm sm:text-base font-semibold text-[#1e3a8a]">5 countries covered</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: '#F0FAFF' }}>
                <i className="fa-solid fa-truck-fast text-[#1e3a8a] text-xl"></i>
              </div>
              <p className="text-sm sm:text-base font-semibold text-[#1e3a8a]">80% Delivery Success</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: '#F0FAFF' }}>
                <i className="fa-solid fa-cart-shopping text-[#1e3a8a] text-xl"></i>
              </div>
              <p className="text-sm sm:text-base font-semibold text-[#1e3a8a]">10K+ Products Listed</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: '#F0FAFF' }}>
                <i className="fa-regular fa-credit-card text-[#1e3a8a] text-xl"></i>
              </div>
              <p className="text-sm sm:text-base font-semibold text-[#1e3a8a]">5-Day Payment Guarantee</p>
            </div>
          </div>
        </div>

        {/* Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          {/* Zambeel Dropshipping */}
          <div className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow min-h-[280px] sm:min-h-[320px]">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop"
              alt="Zambeel Dropshipping"
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Zambeel Dropshipping
              </h3>
              <p className="text-sm sm:text-base text-white/90">
                Start your Ecommerce business from anywhere in the world without business registration.
              </p>
            </div>
          </div>

          {/* Cash on Delivery */}
          <div className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow min-h-[280px] sm:min-h-[320px]">
            <img
              src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=300&fit=crop"
              alt="Cash on Delivery"
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Cash on Delivery
              </h3>
              <p className="text-sm sm:text-base text-white/90">
                No need for payment gateway. You can start and scale your business with Cash on Delivery.
              </p>
            </div>
          </div>

          {/* AI Enabled Economy */}
          <div className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow min-h-[280px] sm:min-h-[320px]">
            <img
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop"
              alt="AI Enabled Economy"
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                AI Enabled Economy
              </h3>
              <p className="text-sm sm:text-base text-white/90">
                Use our AI tools to make your work easier and more efficient.
              </p>
            </div>
          </div>

          {/* Dedicated Support */}
          <div className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow min-h-[280px] sm:min-h-[320px]">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop"
              alt="Dedicated Support"
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                Dedicated Support
              </h3>
              <p className="text-sm sm:text-base text-white/90">
                Get dedicated expert support from day one.
              </p>
            </div>
          </div>
        </div>

        {/* View More Button */}
        <div className="flex justify-end">
          <button className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-[#1e3a8a] text-[#1e3a8a] font-semibold rounded-lg hover:bg-[#1e3a8a] hover:text-white transition-colors">
            View more
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;

