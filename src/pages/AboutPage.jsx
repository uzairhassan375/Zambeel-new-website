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
            <div className="bg-gray-100 rounded-2xl p-6 sm:p-8">
              <div className="w-12 h-12 bg-blue-300 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1e3a8a] mb-3">
                Smart Selling Tools
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Our AI-powered tools help you evaluate products, understand demand, build your store, get instant support, gain insights, and automate workflows. Everything you need to sell smarter and scale faster.
              </p>
            </div>

            {/* Flexible Fulfillment Options */}
            <div className="bg-gray-100 rounded-2xl p-6 sm:p-8">
              <div className="w-12 h-12 bg-purple-300 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1e3a8a] mb-3">
                Flexible Fulfillment Options
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Choose from dropshipping, 3PL, or our comprehensive 360 brand building solution. We handle storage, packaging, and delivery so you can focus on growing your business.
              </p>
            </div>

            {/* Local Solutions for Local Sellers */}
            <div className="bg-gray-100 rounded-2xl p-6 sm:p-8">
              <div className="w-12 h-12 bg-blue-300 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 1a7 7 0 110 14 7 7 0 010-14z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1e3a8a] mb-3">
                Local Solutions for Local Sellers
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                We understand the Pakistani market and the unique challenges you face. From payment constraints to logistics reliability, we've built solutions that work for local sellers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Zambeel? Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a8a] text-center mb-6">
          Why Zambeel?
        </h2>
        <p className="text-center text-base sm:text-lg text-gray-700 mb-12 sm:mb-16">
          Start your Ecommerce business from anywhere in the world without business registration.
        </p>

        {/* Metrics */}
        <div className="bg-gray-100 rounded-2xl p-6 sm:p-8 lg:p-10 mb-12 sm:mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm sm:text-base font-semibold text-[#1e3a8a]">5 countries covered</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                </svg>
              </div>
              <p className="text-sm sm:text-base font-semibold text-[#1e3a8a]">80% Delivery Success</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
              </div>
              <p className="text-sm sm:text-base font-semibold text-[#1e3a8a]">10K+ Products Listed</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm sm:text-base font-semibold text-[#1e3a8a]">5-Day Payment Guarantee</p>
            </div>
          </div>
        </div>

        {/* Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          {/* Zambeel Dropshipping */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-gray-200 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop"
                alt="Zambeel Dropshipping"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-[#1e3a8a] mb-2">
                Zambeel Dropshipping
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                Start your Ecommerce business from anywhere in the world without business registration.
              </p>
            </div>
          </div>

          {/* Cash on Delivery */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-gray-200 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=300&fit=crop"
                alt="Cash on Delivery"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-[#1e3a8a] mb-2">
                Cash on Delivery
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                No need for payment gateway. You can start and scale your business with Cash on Delivery.
              </p>
            </div>
          </div>

          {/* AI Enabled Economy */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-gray-200 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop"
                alt="AI Enabled Economy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-[#1e3a8a] mb-2">
                AI Enabled Economy
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                Use our AI tools to make your work easier and more efficient.
              </p>
            </div>
          </div>

          {/* Dedicated Support */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-gray-200 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop"
                alt="Dedicated Support"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-[#1e3a8a] mb-2">
                Dedicated Support
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
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
      </section>
    </div>
  );
}

export default AboutPage;

