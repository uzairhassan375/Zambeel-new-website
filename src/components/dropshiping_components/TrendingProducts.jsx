import React, { useState, useRef } from "react";

const trendingProducts = [
  {
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    name: "BT headphones with Built-in Mic",
    sold: "2.4k sold",
    rank: "1st",
    roas: "5x ROAS",
    price: "21 AED",
  },
  {
    img: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop",
    name: "Cozy Sports Car Nest for Pets",
    sold: "3.8k sold",
    rank: "2nd",
    roas: "6x ROAS",
    price: "24 AED",
  },
  {
    img: "https://images.unsplash.com/photo-1607613009820-a38f7e589163?w=400&h=400&fit=crop",
    name: "Electric Knife Sharpener",
    sold: "1.6k sold",
    rank: "3rd",
    roas: "4x ROAS",
    price: "18 AED",
  },
  {
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    name: "Pretend & Blend Magic Playset",
    sold: "7.4k sold",
    rank: "4th",
    roas: "5x ROAS",
    price: "31 AED",
  },
  {
    img: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&h=400&fit=crop",
    name: "Kitchen Utensils",
    sold: "11.9k sold",
    rank: "5th",
    roas: "4x ROAS",
    price: "16 AED",
  },
  {
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop",
    name: "Stylish Accessories",
    sold: "9.2k sold",
    rank: "6th",
    roas: "4x ROAS",
    price: "22 AED",
  },
];

const TrendingProducts = () => {
  const carouselRef = useRef(null);
  const [showMore, setShowMore] = useState(false);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 300;
      carouselRef.current.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="trending-products"
      className="w-full mx-auto py-8 md:py-20 px-6 sm:px-10 lg:px-12"
      style={{
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div className="max-w-[1050px] mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-white tracking-wide">
          Trending Dropshipping Products this week
        </h2>

        {/* ==================== */}
        {/* MOBILE VIEW (below 850px) - 2x2 grid with Show More/Less buttons */}
        {/* ==================== */}
        <div className="min-[850px]:hidden">
          {/* 2x2 Grid for first 4 cards */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {trendingProducts.slice(0, 4).map((product, idx) => (
              <div
                key={idx}
                className="bg-gray-800 rounded-2xl w-full relative overflow-hidden"
                style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.25)" }}
              >
                <div className="relative">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                    onError={(e) => {
                      e.target.src = `https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop&auto=format`;
                    }}
                  />
                  <span className="absolute top-3 left-3 text-white text-xs font-medium">
                    {product.sold}
                  </span>
                  <div
                    className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-[#243a86] border-2 border-white"
                    style={{ backgroundColor: "#FFD24C" }}
                  >
                    {product.rank}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-3 pt-8 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="font-semibold text-white text-sm mb-2 text-left leading-tight">
                      {product.name}
                    </div>
                    <div className="flex gap-2 text-xs justify-start">
                      <span className="bg-[#243a86] text-white px-2 py-1 rounded-full font-medium">
                        {product.roas}
                      </span>
                      <span className="bg-[#ffd24c] text-[#243a86] px-2 py-1 rounded-full font-bold">
                        {product.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          {!showMore && (
            <button
              onClick={() => setShowMore(true)}
              className="bg-[#243a86] text-white px-8 py-3 rounded-full font-medium text-base hover:bg-opacity-90 transition-colors mb-6"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.25)" }}
            >
              Show More Products
            </button>
          )}

          {/* Additional cards when Show More is clicked */}
          {showMore && (
            <>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {trendingProducts.slice(4).map((product, idx) => (
                  <div
                    key={idx + 4}
                    className="bg-gray-800 rounded-2xl w-full relative overflow-hidden"
                    style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.25)" }}
                  >
                    <div className="relative">
                      <img
                        src={product.img}
                        alt={product.name}
                        className="w-full h-64 object-cover"
                        onError={(e) => {
                          e.target.src = `https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop&auto=format`;
                        }}
                      />
                      <span className="absolute top-3 left-3 text-white text-xs font-medium">
                        {product.sold}
                      </span>
                      <div
                        className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-[#243a86] border-2 border-white"
                        style={{ backgroundColor: "#FFD24C" }}
                      >
                        {product.rank}
                      </div>
                      <div className="absolute inset-x-0 bottom-0 p-3 pt-8 bg-gradient-to-t from-black/80 to-transparent">
                        <div className="font-semibold text-white text-sm mb-2 text-left leading-tight">
                          {product.name}
                        </div>
                        <div className="flex gap-2 text-xs justify-start">
                          <span className="bg-[#243a86] text-white px-2 py-1 rounded-full font-medium">
                            {product.roas}
                          </span>
                          <span className="bg-[#ffd24c] text-[#243a86] px-2 py-1 rounded-full font-bold">
                            {product.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Show Less Button */}
              <button
                onClick={() => setShowMore(false)}
                className="bg-[#243a86] text-white px-8 py-3 rounded-full font-medium text-base hover:bg-opacity-90 transition-colors"
                style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.25)" }}
              >
                Show Less
              </button>
            </>
          )}
        </div>

        {/* ==================== */}
        {/* DESKTOP VIEW (850px and above) - Horizontal carousel */}
        {/* ==================== */}
        <div className="hidden min-[850px]:block relative">
          {/* Product Carousel */}
          <div
            className="mb-10 overflow-x-hidden"
            ref={carouselRef}
          >
            <div className="flex gap-8 justify-start w-max" style={{ paddingBottom: "1rem" }}>
              {trendingProducts.map((product, idx) => (
                <div
                  key={idx}
                  className="bg-gray-800 rounded-2xl w-52 shrink-0 relative overflow-hidden"
                  style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.25)" }}
                >
                  <div className="relative">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-64 object-cover"
                      onError={(e) => {
                        e.target.src = `https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop&auto=format`;
                      }}
                    />
                    <span className="absolute top-3 left-3 text-white text-xs font-medium">
                      {product.sold}
                    </span>
                    <div
                      className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-[#243a86] border-2 border-white"
                      style={{ backgroundColor: "#FFD24C" }}
                    >
                      {product.rank}
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-3 pt-8 bg-gradient-to-t from-black/80 to-transparent">
                      <div className="font-semibold text-white text-sm mb-2 text-left">
                        {product.name}
                      </div>
                      <div className="flex gap-2 text-xs justify-start">
                        <span className="bg-[#243a86] text-white px-2 py-1 rounded-full font-medium">
                          {product.roas}
                        </span>
                        <span className="bg-[#ffd24c] text-[#243a86] px-2 py-1 rounded-full font-bold">
                          {product.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Navigation Buttons */}
          <div className="relative mt-6">
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#243a86] text-white px-6 py-3 rounded-full font-medium text-base hover:bg-opacity-90 transition-colors flex items-center gap-2"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.25)" }}
            >
              <i className="fa-solid fa-arrow-left"></i>
              View more
            </button>

            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#243a86] text-white px-6 py-3 rounded-full font-medium text-base hover:bg-opacity-90 transition-colors flex items-center gap-2"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.25)" }}
            >
              View more
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;