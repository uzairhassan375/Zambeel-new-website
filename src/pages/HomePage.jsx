import { useState, useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import blue_logoImage from "../blue_logo.png";
import { StackedCards } from "../components/UI/staking-cards";

export default function HomePage() {
  const location = useLocation();
  const [selectedCountry, setSelectedCountry] = useState("UAE");
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  const [numberText, setNumberText] = useState("");
  
  // Statistics animation
  const statsRef = useRef(null);
  const [codCount, setCodCount] = useState(0);
  const [sellersCount, setSellersCount] = useState(0);
  const [countriesCount, setCountriesCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const numbers = ["Learn", "Start", "Build", "Grow"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId = null;
    const typeSpeed = 100;
    const deleteSpeed = 80;
    const pauseAfterWord = 1000;

    const type = () => {
      const currentWord = numbers[wordIndex];
      
      if (!isDeleting) {
        setNumberText(currentWord.substring(0, charIndex + 1));
        charIndex++;
        if (charIndex === currentWord.length) {
          timeoutId = setTimeout(() => {
            isDeleting = true;
            timeoutId = setTimeout(type, deleteSpeed);
          }, pauseAfterWord);
          return;
        }
      } else {
        setNumberText(currentWord.substring(0, charIndex - 1));
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          wordIndex++;
          if (wordIndex === numbers.length) {
            wordIndex = 0;
            }
          }
        }
      timeoutId = setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
    };
    
    type();
    
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  // Statistics counting animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            // Animate orders delivered (1000K+)
            const codTarget = 1000;
            const codDuration = 2000;
            const codSteps = 60;
            const codIncrement = codTarget / codSteps;
            let codCurrent = 0;
            const codInterval = setInterval(() => {
              codCurrent += codIncrement;
              if (codCurrent >= codTarget) {
                setCodCount(codTarget);
                clearInterval(codInterval);
              } else {
                setCodCount(Math.floor(codCurrent));
              }
            }, codDuration / codSteps);

            // Animate Sellers Registered (30K+)
            const sellersTarget = 50;
            const sellersDuration = 2000;
            const sellersSteps = 60;
            const sellersIncrement = sellersTarget / sellersSteps;
            let sellersCurrent = 0;
            const sellersInterval = setInterval(() => {
              sellersCurrent += sellersIncrement;
              if (sellersCurrent >= sellersTarget) {
                setSellersCount(sellersTarget);
                clearInterval(sellersInterval);
              } else {
                setSellersCount(Math.floor(sellersCurrent));
              }
            }, sellersDuration / sellersSteps);

            // Animate Countries Represented (177+)
            const countriesTarget = 177;
            const countriesDuration = 2000;
            const countriesSteps = 60;
            const countriesIncrement = countriesTarget / countriesSteps;
            let countriesCurrent = 0;
            const countriesInterval = setInterval(() => {
              countriesCurrent += countriesIncrement;
              if (countriesCurrent >= countriesTarget) {
                setCountriesCount(countriesTarget);
                clearInterval(countriesInterval);
              } else {
                setCountriesCount(Math.floor(countriesCurrent));
              }
            }, countriesDuration / countriesSteps);
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentRef = statsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated]);

  // Auto-rotate reviews carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => 
        prevIndex === 3 ? 0 : prevIndex + 1
      );
    }, 3500); // Change every 3.5 seconds

    return () => clearInterval(interval);
  }, []);

  // Handle scroll to section on page load
  useEffect(() => {
    const scrollToSection = (sectionId) => {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    };

    // Check for hash in URL
    const hash = window.location.hash;
    if (hash) {
      scrollToSection(hash.substring(1));
    }

    // Check for navigation state
    if (location.state?.scrollTo) {
      scrollToSection(location.state.scrollTo);
    }
  }, [location]);



  const countries = [
    { name: "UAE", code: "ae", services: ["Dropshipping", "360", "3PL"] },
    { name: "KSA", code: "sa", services: ["Dropshipping", "360", "3PL"] },
    { name: "Qatar", code: "qa", services: ["360", "3PL"] },
    { name: "Kuwait", code: "kw", services: ["360", "3PL"] },
    { name: "Pakistan", code: "pk", services: ["Dropshipping", "360", "3PL"] },
  ];

  const reviews = [
    {
      name: "Mark Smith",
      date: "19th August, 2022",
      rating: 4,
      text: "Started our dropshipping business with Zambeel and never looked back. The product quality is exceptional and customer support is available 24/7. Amazing experience!",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Ibrahim",
      date: "15th September, 2023",
      rating: 5,
      text: "Great panel and never looked back. The team is professional and delivery is always on time.",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "Sarah Johnson",
      date: "12th January, 2021",
      rating: 5,
      text: "Zambeel 360 has transformed our business. From design to delivery, everything is handled seamlessly. Highly recommend their services!",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Ahmed Hassan",
      date: "8th December, 2025",
      rating: 5,
      text: "The 3PL service is outstanding. Fast shipping, reliable tracking, and excellent customer service. Our customers love the quick delivery times.",
      image: "https://randomuser.me/api/portraits/men/89.jpg",
    },
  ];

  const featureCards = [
    {
      title: "Learn E-commerce with Zambeel",
      desc: [
        "Learn to Start, Build & Grow your E-commerce business from scratch",
        "Master the fundamentals of online selling and understand market trends",
        "Develop strategies to scale your business effectively",
        "Get expert guidance on product selection and marketing techniques",
        "Build a solid foundation for long-term success"
      ],
      cta: "Learn E-commerce",
      link: "/",
    },
    {
      title: "Start E-comm without buying inventory",
      desc: [
        "Sell winning products from anywhere in the world on Cash on Delivery",
        "Start your dropshipping business without upfront inventory costs",
        "Access our extensive product catalog with thousands of products",
        "Sell directly to customers in Pakistan, UAE, and KSA",
        "We handle order processing, packing, and delivery for you"
      ],
      cta: "Dropshipping",
      link: "/dropshipping",
    },
    {
      title: "Build your private label with Zambeel 360",
      desc: [
        "We handle the entire process — sourcing, customs clearance, and delivery",
        "Source high-quality products directly from China",
        "Our team manages product sourcing and quality control",
        "Complete customs documentation and international shipping handled",
        "Build your private label brand with confidence"
      ],
      cta: "Zambeel 360",
      link: "/zambeel-360",
    },
    {
      title: "Grow your E-comm with our 3PL service",
      desc: [
        "Use our automated system for storage and order fulfillment",
        "Store your inventory in our secure warehouses",
        "Real-time inventory tracking and automated order processing",
        "Fast last-mile delivery to your customers",
        "Scale your business effortlessly while we manage logistics",
      ],
      cta: "Zambeel 3PL",
      link: "/zambeel-3pl",
    },
  ];


  const selectedCountryData = countries.find((c) => c.name === selectedCountry);

  // Helper function to get route for service
  const getServiceRoute = (service) => {
    switch (service) {
      case "Dropshipping":
        return "/dropshipping";
      case "360":
        return "/zambeel-360";
      case "3PL":
        return "/zambeel-3pl";
      default:
        return "#";
    }
  };

  // Helper function to get display name for service
  const getServiceDisplayName = (service) => {
    switch (service) {
      case "Dropshipping":
        return "Dropshipping";
      case "360":
        return "Zambeel 360";
      case "3PL":
        return "Zambeel 3PL";
      default:
        return service;
    }
  };

  return (
    <div className="min-h-[100vh] bg-[#FBFCFE] font-sans flex flex-col items-center ">
      <main className="w-full max-w-[1200px] px-4 mt-16 mb-8 md:mb-8 flex flex-col items-center relative z-10 mx-auto">
        <div className="absolute top-0 left-[10%] w-40 h-40 bg-[#FFFBEB] rounded-full blur-xl -z-10 rotate-12 transform opacity-80"></div>
        <div className="absolute top-10 right-[15%] w-80 h-80 bg-[#FFFBEB] rounded-full blur-2xl -z-10 opacity-80"></div>

        <div className="text-center mb-16 md:mb-8 relative">
          <div className="mb-8 hidden md:flex justify-center relative items-center">
            <img
              src={blue_logoImage}
              alt="Zambeel Logo"
              className="h-16 md:h-20 object-contain relative"
              style={{ zIndex: 2 }}
            />
          </div>
          <div className="relative inline-block px-4 w-full max-w-full">
            <h1 className="text-[#2E3B78] text-xl md:text-lg font-bold leading-normal relative">
              One Platform,
              <span className="bg-[#FCD64C] px-5 py-1 rounded-full mx-1 inline-block w-[105px] text-center">
                {numberText}
                <span className="animate-pulse">|</span>
              </span>
              your E-commerce Business Profitably.
            </h1>
          </div>
        </div>



        {/* Mobile Staking Cards */}
        <div className="md:hidden w-full relative min-h-[100vh]">
          <StackedCards />
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-6 w-full p-2">
          {featureCards.map((card) => {
            const titleWords = card.title.split(' ');
            const firstWord = titleWords[0];
            const restOfTitle = titleWords.slice(1).join(' ');
            
            return (
            <div
              key={card.cta}
              className="group card-hover bg-[#E7EFFC] rounded-[32px] px-6 py-4 flex flex-col h-full transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex-grow">
                <h2 className="text-[#2E3B78] text-xl font-semibold mb-2 leading-tight">
                  <span className="font-bold">
                    {firstWord}
                  </span>
                  {restOfTitle && ` ${restOfTitle}`}
                </h2>
                <p className="text-[#4A5568] group-hover:text-[#2E3B78] text-sm leading-relaxed mb-4">
                  {card.desc}
                </p>
              </div>
              {card.link ? (
                <Link
                  to={card.link}
                  className="w-full bg-[#2E3B78] group-hover:bg-white text-white group-hover:text-black font-bold py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-3 shadow-lg"
                >
                  <span>{card.cta}</span>
                  <i className="fa-solid fa-arrow-right text-[#FCD64C] group-hover:text-black transition-colors"></i>
                </Link>
              ) : (
                <button className="w-full bg-[#2E3B78] group-hover:bg-white text-white group-hover:text-black font-bold py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-3 shadow-lg">
                  <span>{card.cta}</span>
                  <i className="fa-solid fa-arrow-right text-[#FCD64C] group-hover:text-black transition-colors"></i>
                </button>
              )}
            </div>
            );
          })}
        </div>
      </main>

      <section id="where-to-sell" className="w-full lg:bg-[#FDE8E9] pt-0 pb-0 md:py-8 px-4 flex justify-center">
        <div className="max-w-[1200px] w-full mx-auto bg-white rounded-[2.5rem] p-6 lg:px-12 lg:py-6">
          <div className="flex lg:hidden gap-3 items-center">
            <div className="flex flex-col items-center justify-between py-2">
              <button
                onClick={() => {
                  const currentIndex = countries.findIndex(
                    (c) => c.name === selectedCountry
                  );
                  const prevIndex =
                    currentIndex === 0
                      ? countries.length - 1
                      : currentIndex - 1;
                  setSelectedCountry(countries[prevIndex].name);
                }}
                className="w-10 h-10 rounded-full bg-[#FCD64C] flex items-center justify-center shadow-md hover:bg-[#E5C043] transition"
              >
                <i className="fa-solid fa-chevron-up text-[#2E3B78] text-sm"></i>
              </button>
              <div className="flex flex-col gap-2 items-center py-4">
                {countries.map((country) => (
                  <div
                    key={country.code}
                    onClick={() => setSelectedCountry(country.name)}
                    className={`w-16 h-12 rounded-xl flex items-center justify-center cursor-pointer transition overflow-hidden shadow-md ${country.name === selectedCountry
                        ? "ring-2 ring-[#FCD64C] shadow-lg scale-105"
                        : "border-2 border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={`https://flagcdn.com/w160/${country.code}.png`}
                      className="w-full h-full object-cover"
                      alt={country.name}
                    />
                  </div>
                ))}
              </div>
              <button
                onClick={() => {
                  const currentIndex = countries.findIndex(
                    (c) => c.name === selectedCountry
                  );
                  const nextIndex =
                    currentIndex === countries.length - 1
                      ? 0
                      : currentIndex + 1;
                  setSelectedCountry(countries[nextIndex].name);
                }}
                className="w-10 h-10 rounded-full bg-[#FCD64C] flex items-center justify-center shadow-md hover:bg-[#E5C043] transition"
              >
                <i className="fa-solid fa-chevron-down text-[#2E3B78] text-sm"></i>
              </button>
            </div>
            <div className="bg-[#FDE8E9] p-5 flex flex-col rounded-2xl">
              <div className="mb-4">
                <h2 className="text-sm font-bold text-[#2E3B78] mb-1 whitespace-nowrap">
                  Where do you want to sell?
                </h2>
                <h3 className="text-[#B91C1C] font-bold text-xs tracking-widest uppercase">
                  {selectedCountry}
                </h3>
              </div>
              <p className="text-[#4A5568] text-xs leading-relaxed mb-5">
                {selectedCountry === "Pakistan" 
                  ? `Selling in ${selectedCountry} gives you full access to all our services. If you want to know more about our services and how you can benefit from them click on one of the three services to begin.`
                  : selectedCountry === "Qatar" || selectedCountry === "Kuwait"
                  ? `Selling in ${selectedCountry} gives you access to all our services except dropshipping. If you want to know more about our services and how you can benefit from them click on one of the three services to begin.`
                  : `Selling in ${selectedCountry} gives you full access to all our services. If you want to know more about our services and how you can benefit from them click on one of the three services to begin.`
                }
              </p>
              <div className="space-y-2">
                {selectedCountryData?.services.map((service) => (
                  <Link
                    key={service}
                    to={getServiceRoute(service)}
                    className="w-full bg-[#2E3B78] hover:bg-[#1a234d] text-white rounded-xl p-3 flex items-center justify-between transition shadow-md group text-left"
                  >
                    <div>
                      <div className="font-bold text-sm">
                        {getServiceDisplayName(service)}
                      </div>
                      <div className="text-[10px] text-gray-300 font-light mt-0.5">
                        {service === "3PL" && "Fast, reliable and fully automated"}
                        {service === "360" && "Build your private label"}
                        {service === "Dropshipping" &&
                          "Start selling without buying inventory"}
                      </div>
                    </div>
                    <i className="fa-solid fa-arrow-right text-white text-xs"></i>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden lg:flex flex-col lg:flex-row gap-8 items-start">
            <div className="w-full lg:w-[45%] flex flex-col gap-6">
              <div className="relative bg-transparent rounded-3xl p-8 flex items-center justify-center min-h-[280px]">
                <button
                  onClick={() => {
                    const currentIndex = countries.findIndex(
                      (c) => c.name === selectedCountry
                    );
                    const prevIndex =
                      currentIndex === 0
                        ? countries.length - 1
                        : currentIndex - 1;
                    setSelectedCountry(countries[prevIndex].name);
                  }}
                  className="absolute left-4 w-10 h-10 bg-[#FCD64C] rounded-full flex items-center justify-center shadow-md hover:bg-[#E5C043] transition"
                >
                  <i className="fa-solid fa-chevron-left text-[#2E3B78] text-sm"></i>
                </button>
                <div className="w-48 h-32 rounded-xl overflow-hidden">
                  <img
                    src={`https://flagcdn.com/w320/${countries
                      .find((c) => c.name === selectedCountry)
                      ?.code}.png`}
                    className="w-full h-full object-cover"
                    alt={selectedCountry}
                  />
                </div>
                <button
                  onClick={() => {
                    const currentIndex = countries.findIndex(
                      (c) => c.name === selectedCountry
                    );
                    const nextIndex =
                      currentIndex === countries.length - 1
                        ? 0
                        : currentIndex + 1;
                    setSelectedCountry(countries[nextIndex].name);
                  }}
                  className="absolute right-4 w-10 h-10 bg-[#FCD64C] rounded-full flex items-center justify-center shadow-md hover:bg-[#E5C043] transition"
                >
                  <i className="fa-solid fa-chevron-right text-[#2E3B78] text-sm"></i>
                </button>
              </div>
              <div className="flex justify-center items-center gap-3 flex-wrap">
                {countries.map((country) => (
                  <div
                    key={country.code}
                    onClick={() => setSelectedCountry(country.name)}
                    className={`flex flex-col items-center gap-2 cursor-pointer transition p-3 rounded-xl ${country.name === selectedCountry
                        ? "bg-[#FFF9E6] shadow-md"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <div className="w-12 h-8 rounded shadow-sm overflow-hidden border border-gray-200">
                      <img
                        src={`https://flagcdn.com/w160/${country.code}.png`}
                        className="w-full h-full object-cover"
                        alt={country.name}
                      />
                    </div>
                    <span className="text-[10px] font-bold text-[#2E3B78]">
                      {country.name === "Qatar" ? "QTR" : country.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-[55%] flex flex-col justify-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#2E3B78] mb-3">
                Where do you want to sell?
              </h2>
              <h3 className="text-[#B91C1C] font-bold text-sm tracking-widest uppercase mb-4">
                {selectedCountry}
              </h3>
              <p className="text-[#4A5568] text-sm lg:text-base leading-relaxed mb-8">
                {selectedCountry === "Pakistan" 
                  ? `Selling in ${selectedCountry} gives you full access to all our services. If you want to know more about our services and how you can benefit from them click on one of the three services to begin.`
                  : selectedCountry === "Qatar" || selectedCountry === "Kuwait"
                  ? `Selling in ${selectedCountry} gives you access to all our services except dropshipping. If you want to know more about our services and how you can benefit from them click on one of the three services to begin.`
                  : `Selling in ${selectedCountry} gives you full access to all our services. If you want to know more about our services and how you can benefit from them click on one of the three services to begin.`
                }
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedCountryData?.services.map((service) => (
                  <Link
                    key={service}
                    to={getServiceRoute(service)}
                    className="bg-[#2E3B78] hover:bg-[#1a234d] text-white rounded-xl p-4 flex items-center justify-between transition shadow-md group text-left"
                  >
                    <div>
                      <div className="font-bold text-base">
                        {getServiceDisplayName(service)}
                      </div>
                      <div className="text-xs text-gray-300 font-light mt-1">
                        {service === "3PL" && "Fast, reliable and fully automated"}
                        {service === "360" && "Build your private label"}
                        {service === "Dropshipping" &&
                          "Start selling without buying inventory"}
                      </div>
                    </div>
                    <i className="fa-solid fa-arrow-right text-white text-sm transform group-hover:translate-x-1 transition"></i>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why-zambeel" className="w-full bg-[#F8FAFC] py-8 md:py-8 px-4 flex justify-center">
        <div className="max-w-[1200px] w-full mx-auto">
          <div className="text-center mb-12 md:mb-6 w-full mx-auto">
            <h2 className="text-[#2E3B78] text-2xl lg:text-3xl font-bold mb-3">
              Why Zambeel?
            </h2>
            <p className="text-gray-500 text-sm lg:text-base italic leading-relaxed">
              Start your Ecommerce business from anywhere in the world without
              business registration.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[500px] justify-center items-center lg:items-start">
            {/* Statistics Card - Mobile and Desktop */}
            <div className="bg-white border border-gray-200 rounded-[48px] p-6 md:p-8 pb-12 md:pb-8 shadow-md flex flex-col justify-between w-full max-w-[1200px] lg:max-w-[320px] lg:w-[320px] lg:h-full mb-6 md:mb-0">
              <div className="grid grid-cols-2 lg:flex lg:flex-col gap-4 md:gap-6 lg:gap-10">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-[#E6E9F5] text-[#344579] flex items-center justify-center text-xl md:text-2xl lg:text-3xl shrink-0">
                    <i className="fa-solid fa-globe" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2E3B78] text-base md:text-lg lg:text-xl">
                      5
                    </h4>
                    <span className="text-xs md:text-sm lg:text-base text-gray-500">Countries covered</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-[#E3F3FA] text-[#2B8FA9] flex items-center justify-center text-xl md:text-2xl lg:text-3xl shrink-0">
                    <i className="fa-solid fa-truck-fast" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2E3B78] text-base md:text-lg lg:text-xl">
                      80%
                    </h4>
                    <span className="text-xs md:text-sm lg:text-base text-gray-500">COD Delivery Ratio</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-[#F2E6FF] text-[#7C3AED] flex items-center justify-center text-xl md:text-2xl lg:text-3xl shrink-0">
                    <i className="fa-solid fa-cart-shopping" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2E3B78] text-base md:text-lg lg:text-xl">
                      Biggest
                    </h4>
                    <span className="text-xs md:text-sm lg:text-base text-gray-500">Product Catalog</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-[#FFF7E0] text-[#D97706] flex items-center justify-center text-xl md:text-2xl lg:text-3xl shrink-0">
                    <i className="fa-regular fa-credit-card" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2E3B78] text-base md:text-lg lg:text-xl">
                      Weekly
                    </h4>
                    <span className="text-xs md:text-sm lg:text-base text-gray-500">Payments Guaranteed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel - Desktop only */}
            <div className="hidden lg:flex gap-4 h-[500px] justify-center">

            <div
              className="relative overflow-hidden h-full mx-auto"
              style={{ width: "830px" }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to right, white 0%, rgba(255,255,255,0) 6%, rgba(255,255,255,0) 94%, white 100%)",
                }}
              />
              <div
                className="flex h-full gap-4 transition-transform duration-700 ease-in-out"
                style={{
                  transform: showAllFeatures
                    ? "translateX(-165px)"
                    : "translateX(0)",
                }}
              >
                {[
                  {
                    img: "https://images.unsplash.com/photo-1625571281240-694bfa82e4c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fDUtMTAlMjBwcm9kdWN0cyUyMGltYWdlc3xlbnwwfDF8MHx8fDA%3D",
                      title: "Dropshipping",
                    desc: "Start your Ecommerce business anywhere without registration.",
                  },
                  {
                    img: "https://plus.unsplash.com/premium_photo-1661393335735-7ee8d420b58a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FzaCUyMG9uJTIwZGVsaXZlcnl8ZW58MHwxfDB8fHww",
                      title: "Zambeel 360",
                    desc: "Scale easily with COD—no payment gateway needed.",
                  },
                  {
                    img: "https://plus.unsplash.com/premium_photo-1683120966127-14162cdd0935?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fEFJfGVufDB8MXwwfHx8MA%3D%3D",
                      title: "3PL Service",
                      desc: "Use our AI tools to accelerate your work.",
                    },
                    {
                      img: "https://plus.unsplash.com/premium_photo-1683120966127-14162cdd0935?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fEFJfGVufDB8MXwwfHx8MA%3D%3D",
                      title: "Learn E-commerce",
                    desc: "Use our AI tools to accelerate your work.",
                  },
                ].map((card) => (
                  <div
                    key={card.title}
                    className="group relative rounded-[32px] overflow-hidden cursor-pointer h-full shrink-0"
                    style={{ width: "320px" }}
                  >
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8 z-10">
                      <h3 className="text-white text-xl font-bold mb-1">
                        {card.title}
                      </h3>
                      <p className="text-gray-200 text-sm leading-snug">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            </div>
          </div>

          <div className="lg:hidden">
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  img: "https://images.unsplash.com/photo-1625571281240-694bfa82e4c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fDUtMTAlMjBwcm9kdWN0cyUyMGltYWdlc3xlbnwwfDF8MHx8fDA%3D",
                  title: "Zambeel Dropshipping",
                  desc: "Start your Ecommerce business anywhere without registration.",
                },
                {
                  img: "https://plus.unsplash.com/premium_photo-1661393335735-7ee8d420b58a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FzaCUyMG9uJTIwZGVsaXZlcnl8ZW58MHwxfDB8fHww",
                  title: "Cash on Delivery",
                  desc: "Scale easily with COD—no payment gateway needed.",
                },
                      {
                        img: "https://plus.unsplash.com/premium_photo-1683120966127-14162cdd0935?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fEFJfGVufDB8MXwwfHx8MA%3D%3D",
                        title: "AI Enabled Economy",
                        desc: "Use our AI tools to accelerate your work.",
                      },
                      {
                        img: "https://picsum.photos/400/600?random=4",
                        title: "Dedicated Support",
                        desc: "Get expert support from day one.",
                },
                ...(showAllFeatures
                  ? [
                    {
                      img: "https://picsum.photos/400/600?random=5",
                      title: "Global Reach",
                      desc: "Sell to customers worldwide with ease.",
                    },
                    {
                      img: "https://picsum.photos/400/600?random=6",
                      title: "Secure Platform",
                      desc: "Your data and transactions are always protected.",
                      },
                    ]
                  : []),
              ].map((card) => (
                <div
                  key={card.title}
                  className="group relative rounded-3xl overflow-hidden aspect-[4/5]"
                >
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5 z-10">
                    <h3 className="text-white text-base font-bold mb-1">
                      {card.title}
                    </h3>
                    <p className="text-gray-200 text-[11px] leading-snug">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowAllFeatures(!showAllFeatures)}
                className="bg-[#2E3B78] hover:bg-[#1a2542] text-white px-10 py-4 rounded-full text-sm font-bold flex items-center gap-3 shadow-lg transition"
              >
                {showAllFeatures ? (
                  <>
                    View less <i className="fa-solid fa-arrow-up" />
                  </>
                ) : (
                  <>
                    View more <i className="fa-solid fa-arrow-right" />
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="hidden lg:flex justify-between items-center mt-6 lg:mt-4">
            {showAllFeatures ? (
              <button
                onClick={() => setShowAllFeatures(false)}
                className="bg-[#2E3B78] hover:bg-[#1a2542] text-white px-10 py-4 rounded-full text-sm font-bold flex items-center gap-3 shadow-lg transition ml-[286px]"
              >
                <i className="fa-solid fa-arrow-left" /> View more
              </button>
            ) : (
              <div></div>
            )}
            <button
              onClick={() => setShowAllFeatures(true)}
              className="bg-[#2E3B78] hover:bg-[#1a2542] text-white px-10 py-4 rounded-full text-sm font-bold flex items-center gap-3 shadow-lg transition"
            >
              View more <i className="fa-solid fa-arrow-right" />
            </button>
          </div>
        </div>
      </section>

      <div className="w-full blue-gradient-bg flex justify-center">
        <div className="max-w-[1400px] w-full mx-auto px-4 py-8 md:py-8 space-y-12 md:space-y-6">
          <div ref={statsRef} className="max-w-6xl mx-auto bg-white rounded-[2rem] md:rounded-[3rem] px-6 py-10 md:p-8 shadow-2xl text-center">
            <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-6">
              Our Network, Active & Rising
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-[#F0F8FF] rounded-3xl p-6 md:p-8 flex flex-row md:flex-col items-center md:justify-center gap-5 md:gap-0 h-32 md:h-56 transition hover:-translate-y-1 duration-300">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-sm text-[#4B5563] text-xl md:text-2xl shrink-0 md:mb-3">
                  <i className="fa-solid fa-truck-fast"></i>
                </div>
                <div className="text-left md:text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#1F2937] md:mb-1">
                    {codCount}K+
                  </div>
                  <div className="text-[#4B5563] text-sm font-medium">
                    orders delivered
                  </div>
                </div>
              </div>
              <div className="bg-[#F3F0FF] rounded-3xl p-6 md:p-8 flex flex-row md:flex-col items-center md:justify-center gap-5 md:gap-0 h-32 md:h-56 transition hover:-translate-y-1 duration-300">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-sm text-[#4B5563] text-xl md:text-2xl shrink-0 md:mb-3">
                  <i className="fa-solid fa-users"></i>
                </div>
                <div className="text-left md:text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#1F2937] md:mb-1">
                    {sellersCount}K+
                  </div>
                  <div className="text-[#4B5563] text-sm font-medium">
                    Sellers Registered
                  </div>
                </div>
              </div>
              <div className="bg-[#EEF2FF] rounded-3xl p-6 md:p-8 flex flex-row md:flex-col items-center md:justify-center gap-5 md:gap-0 h-32 md:h-56 transition hover:-translate-y-1 duration-300">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-sm text-[#4B5563] text-xl md:text-2xl shrink-0 md:mb-3">
                  <i className="fa-solid fa-globe"></i>
                </div>
                <div className="text-left md:text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#1F2937] md:mb-1">
                    {countriesCount}+
                  </div>
                  <div className="text-[#4B5563] text-sm font-medium">
                    Countries Represented
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="reviews" className="max-w-6xl mx-auto md:bg-white md:rounded-[3rem] px-0 md:py-4 md:shadow-2xl overflow-hidden">
            <div className="px-4 mb-6 md:mb-4">
              <h2 className="text-center text-xl md:text-3xl font-bold text-white md:text-gray-900">
                What our Customers have to say
              </h2>
            </div>
            <div className="flex flex-col md:block gap-5 px-4 md:px-0">
              <div className="bg-white md:bg-transparent rounded-[2.5rem] md:rounded-none p-8 md:p-0 shadow-xl md:shadow-none text-center md:mb-4">
                <div className="text-[#2E3B78] text-5xl md:text-6xl font-extrabold tracking-tighter mb-2">
                  4.89
                </div>
                <div className="flex justify-center gap-1.5 text-2xl md:text-3xl text-[#FFC107] mb-2">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                </div>
                <div className="text-xs md:text-sm font-medium text-gray-500">
                  (1076 reviews)
                </div>
              </div>



              <h3 className="hidden md:block text-center text-lg font-bold text-gray-800 mb-4">
                Most recent reviews
              </h3>

              <div className="flex items-center justify-center w-full md:px-8 gap-4 md:gap-8">
                {(() => {
                  const prevIndex = currentReviewIndex === 0 ? reviews.length - 1 : currentReviewIndex - 1;
                  const prevReview = reviews[prevIndex];
                  return (
                <div className="hidden md:flex w-1/4 min-w-[220px] h-40 bg-white border border-gray-100 rounded-3xl p-6 shadow-sm opacity-60 flex-col justify-center select-none transform scale-95">
                      <div className="flex items-center gap-2 mb-3 opacity-70">
                        <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                          <img
                            src={prevReview.image}
                            className="w-full h-full object-cover"
                            alt={prevReview.name}
                          />
                        </div>
                        <span className="font-bold text-xs text-gray-700">
                          {prevReview.name}
                        </span>
                      </div>
                      <div className="flex text-[#FFC107] text-xs mb-2 opacity-70">
                        {[...Array(5)].map((_, i) => (
                          <i
                            key={i}
                            className={
                              i < prevReview.rating
                                ? "fa-solid fa-star"
                                : "fa-regular fa-star"
                            }
                          ></i>
                        ))}
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                        "{prevReview.text.substring(0, 40)}..."
                  </p>
                </div>
                  );
                })()}

                <div className="w-full md:w-[550px] flex-shrink-0 z-20">
                  <div className="bg-white border border-gray-100 rounded-[2.5rem] md:rounded-3xl p-6 md:p-6 shadow-xl md:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] h-auto">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex gap-3 md:gap-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-blue-50 flex-shrink-0">
                          <img
                            src={reviews[currentReviewIndex].image}
                            className="w-full h-full object-cover"
                            alt={reviews[currentReviewIndex].name}
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-base md:text-lg">
                            {reviews[currentReviewIndex].name}
                          </h4>
                          <p className="text-[10px] md:text-xs text-blue-600 font-bold mt-0.5">
                            {reviews[currentReviewIndex].date}
                          </p>
                        </div>
                      </div>
                      <div className="flex text-[#FFC107] text-sm md:text-lg">
                        {[...Array(5)].map((_, i) => (
                          <i
                            key={i}
                            className={
                              i < reviews[currentReviewIndex].rating
                                ? "fa-solid fa-star"
                                : "fa-regular fa-star text-gray-200"
                            }
                          ></i>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-medium">
                      "{reviews[currentReviewIndex].text}"
                    </p>
                  </div>
                </div>

                {(() => {
                  const nextIndex = currentReviewIndex === reviews.length - 1 ? 0 : currentReviewIndex + 1;
                  const nextReview = reviews[nextIndex];
                  return (
                <div className="hidden md:flex w-1/4 min-w-[220px] h-40 bg-white border border-gray-100 rounded-3xl p-6 shadow-sm opacity-60 flex-col justify-center select-none transform scale-95">
                  <div className="flex items-center gap-2 mb-3 opacity-70">
                    <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                      <img
                            src={nextReview.image}
                        className="w-full h-full object-cover"
                            alt={nextReview.name}
                      />
                    </div>
                    <span className="font-bold text-xs text-gray-700">
                          {nextReview.name}
                    </span>
                  </div>
                      <div className="flex text-[#FFC107] text-xs mb-2 opacity-70">
                        {[...Array(5)].map((_, i) => (
                          <i
                            key={i}
                            className={
                              i < nextReview.rating
                                ? "fa-solid fa-star"
                                : "fa-regular fa-star"
                            }
                          ></i>
                        ))}
                      </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                        "{nextReview.text.substring(0, 40)}..."
                  </p>
                </div>
                  );
                })()}
              </div>

              <div className="flex justify-center gap-2 md:gap-3 mt-2 md:mt-4">
                {reviews.map((_, idx) => (
                  <div
                    key={idx}
                    onClick={() => setCurrentReviewIndex(idx)}
                    className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full cursor-pointer transition-all ${idx === currentReviewIndex
                        ? "bg-[#FFD700]"
                        : "bg-white opacity-40 md:bg-[#2E3B78] md:opacity-80"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

