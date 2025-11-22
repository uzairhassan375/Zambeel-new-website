// --- Pricing Plans Data ---
export const pricingPlans = [
  {
    tag: "Basic",
    name: "Launch Pack",
    monthlyPrice: "$32",
    yearlyPrice: "$29",
    description: "Essential tools to kickstart your marketing presence and grow online.",
    features: [
      { text: "Full Access Portfolio", included: true },
      { text: "Social Media Campaign Integration", included: true },
      { text: "Basic SEO Tools & Analytics", included: true },
      { text: "Dedicated Account Manager", included: false },
      { text: "Advanced Reporting & APIs", included: false },
    ],
  },
  {
    tag: "Premium",
    name: "Pro Pack",
    monthlyPrice: "$86",
    yearlyPrice: "$79",
    description: "Advanced features to scale campaigns and for wider audiences, including priority support.",
    features: [
      { text: "Full Access Portfolio", included: true },
      { text: "Social Media Campaign Integration", included: true },
      { text: "Advanced SEO Tools & Analytics", included: true },
      { text: "Dedicated Account Manager", included: true },
      { text: "Advanced Reporting & APIs", included: true },
    ],
  },
  {
    tag: "Advanced",
    name: "Growth Pack",
    monthlyPrice: "$49",
    yearlyPrice: "$45",
    description: "Perfect for growing brands looking for support and smart automation and scaling.",
    features: [
      { text: "Full Access Portfolio", included: true },
      { text: "Social Media Campaign Integration", included: true },
      { text: "Advanced SEO Tools & Analytics", included: true },
      { text: "Dedicated Account Manager", included: true },
      { text: "Advanced Reporting & APIs", included: false },
    ],
  },
];

