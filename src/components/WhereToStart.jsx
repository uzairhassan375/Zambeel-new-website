import { Link, Store, Database } from 'lucide-react';

const WhereToStart = () => {
  const steps = [
    {
      number: 1,
      title: "Book a Consultation",
      description: "Contact us through our Whatsapp number and our senior business consultant will get in touch with you.",
      Icon: Link
    },
    {
      number: 2,
      title: "Get Quotation",
      description: "Our team will share the product and shipping cost with you. Once you approve, we will send you a payment link.",
      Icon: Store
    },
    {
      number: 3,
      title: "Sourcing & Shipping",
      description: "We will source your product and handle all shipping logistics to our warehouse.",
      Icon: Database
    },
    {
      number: 4,
      title: "Start Selling",
      description: "Integrate your online store with us through Shopify, Youcan, Easyorders & Lightfunnels or use Zambeel portal manually.",
      Icon: Link
    }
  ];

  const StepItem = ({ step, isLast }) => (
    <>
      <div className="md:hidden relative pb-8 last:pb-0">
        <div className="absolute left-0 top-0 w-10 h-10 bg-[#fbbf24] rounded-full flex items-center justify-center shadow-lg z-10">
          <span className="text-gray-900 font-bold text-lg">{step.number}</span>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-6 shadow-sm ml-16">
          <h3 className="text-lg font-bold text-[#3b4a7c] mb-3">{step.title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
        </div>
        {!isLast && (
          <div className="flex justify-center py-4">
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-8 border-l-2 border-dashed border-gray-300"></div>
              <div className="w-8 h-8 bg-white rounded-lg shadow-md flex items-center justify-center my-2">
                <step.Icon className="w-4 h-4 text-[#3b4a7c]" />
              </div>
              <div className="w-0.5 h-8 border-l-2 border-dashed border-gray-300"></div>
            </div>
          </div>
        )}
      </div>
      <div className="hidden md:block relative">
        <div className="flex flex-col items-center mb-8">
          <div className="w-14 h-14 bg-[#fbbf24] rounded-full flex items-center justify-center shadow-lg z-10 mb-6">
            <span className="text-gray-900 font-bold text-2xl">{step.number}</span>
          </div>
          {!isLast && (
            <div className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center -mt-3">
              <step.Icon className="w-5 h-5 text-[#3b4a7c]" />
            </div>
          )}
        </div>
        <div className="text-center">
          <h3 className="text-base font-bold text-[#3b4a7c] mb-3">{step.title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
        </div>
      </div>
    </>
  );

  return (
    <section className="relative py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-14">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3b4a7c] mb-4">
              Where to Start?
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Getting started with Zambeel's 3PL service is easy. Follow these
              <br className="hidden sm:block" />
              simple steps to begin your journey with Zambeel.
            </p>
          </div>
          <div className="text-center mb-12">
            <button className="inline-flex items-center px-8 py-3.5 bg-[#3d4a7c] text-white text-base font-semibold rounded-full hover:bg-[#2d3a6c] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              <span>Get Started with Zambeel 360</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <div className="md:hidden">
              {steps.map((step, index) => (
                <StepItem key={step.number} step={step} isLast={index === steps.length - 1} />
              ))}
            </div>
            <div className="hidden md:block">
              <div className="relative flex items-start justify-between mb-12 px-4">
                <div className="absolute top-7 left-0 right-0 flex items-center px-4">
                  <div className="w-full flex items-center justify-between">
                    {steps.map((_, index) => (
                      <div key={index}>
                        {index < steps.length - 1 && (
                          <div className="flex-1 border-t-2 border-dashed border-gray-300" style={{ marginLeft: index === 0 ? '28px' : '-28px', marginRight: '-28px' }} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                {steps.map((step, index) => (
                  <div key={step.number} className="flex-1 relative z-10">
                    <StepItem step={step} isLast={index === steps.length - 1} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereToStart;

