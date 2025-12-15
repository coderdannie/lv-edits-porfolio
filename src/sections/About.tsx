import React, { useState } from "react";
import { Video, Film, Camera, Sparkles, Play, ArrowRight } from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  image: string;
  price: string;
}

const ServicesSection: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const services: Service[] = [
    {
      id: "1",
      title: "WEDDING FILMS",
      description:
        "Cinematic storytelling that captures every precious moment of your special day",
      features: [
        "Full day coverage",
        "Multiple camera angles",
        "Drone footage",
        "Highlight reel + full ceremony",
      ],
      icon: <Sparkles className="w-5 h-5" />,
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
      price: "FROM $2,500",
    },
    {
      id: "2",
      title: "CORPORATE VIDEOS",
      description:
        "Professional brand stories that engage audiences and drive results",
      features: [
        "Brand documentaries",
        "Product launches",
        "Team interviews",
        "Social media content",
      ],
      icon: <Video className="w-5 h-5" />,
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      price: "FROM $1,800",
    },
    {
      id: "3",
      title: "MUSIC VIDEOS",
      description: "Creative visual experiences that bring your music to life",
      features: [
        "Concept development",
        "Location scouting",
        "Color grading",
        "Performance footage",
      ],
      icon: <Film className="w-5 h-5" />,
      image:
        "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80",
      price: "FROM $3,000",
    },
    {
      id: "4",
      title: "COMMERCIAL PRODUCTION",
      description:
        "High-impact advertisements that convert viewers into customers",
      features: [
        "30-60 second spots",
        "Storyboarding",
        "Professional actors",
        "Multi-platform delivery",
      ],
      icon: <Camera className="w-5 h-5" />,
      image:
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
      price: "FROM $4,000",
    },
    {
      id: "5",
      title: "EVENT COVERAGE",
      description:
        "Dynamic documentation of conferences, concerts, and celebrations",
      features: [
        "Live streaming options",
        "Multi-cam setups",
        "Same-day highlights",
        "Full event edit",
      ],
      icon: <Play className="w-5 h-5" />,
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      price: "FROM $1,500",
    },
    {
      id: "6",
      title: "DOCUMENTARY FILMS",
      description:
        "Compelling narratives that inform, inspire, and create lasting impact",
      features: [
        "Research & planning",
        "Interview setup",
        "Archival footage",
        "Long-form storytelling",
      ],
      icon: <Film className="w-5 h-5" />,
      image:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
      price: "CUSTOM QUOTE",
    },
  ];

  return (
    <section className="min-h-screen bg-black py-16 md:py-20 px-6 md:px-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12 md:mb-16">
        <p className="text-[#FF6B5A] text-xs md:text-sm font-semibold tracking-[0.2em] mb-4 uppercase">
          What We Offer
        </p>
        {/* Scaled down Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 uppercase tracking-tight">
          OUR SERVICES
        </h2>
        {/* Scaled down Description */}
        <p className="text-sm md:text-base text-gray-400 max-w-2xl">
          Professional videography solutions crafted for your vision
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="group relative overflow-hidden bg-zinc-900 transition-all duration-500 hover:bg-zinc-800 border border-white/5"
            onMouseEnter={() => setHoveredService(service.id)}
            onMouseLeave={() => setHoveredService(null)}
          >
            {/* Image Background - Height Reduced */}
            <div className="relative h-56 md:h-64 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

              {/* Icon - Size Reduced */}
              <div className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 bg-white/5 backdrop-blur-sm flex items-center justify-center border border-white/10 transition-all duration-300 group-hover:border-[#FF6B5A] group-hover:bg-[#FF6B5A]/10">
                <div className="text-white group-hover:text-[#FF6B5A] transition-colors duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Price Tag - Font Reduced */}
              {/* <div className="absolute top-4 left-4 md:top-6 md:left-6 px-3 py-1.5 bg-black/80 backdrop-blur-sm border border-white/10">
                <span className="text-white font-bold text-[10px] md:text-xs tracking-wider">
                  {service.price}
                </span>
              </div> */}
            </div>

            {/* Content - Padding Reduced */}
            <div className="p-5 md:p-6">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 uppercase tracking-tight group-hover:text-[#FF6B5A] transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-gray-400 mb-6 leading-relaxed text-xs md:text-sm">
                {service.description}
              </p>

              {/* Features - Text Reduced */}
              <ul className="space-y-2.5 mb-8">
                {service.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start text-gray-300 transition-all duration-300"
                    style={{
                      opacity: hoveredService === service.id ? 1 : 0.6,
                      transform:
                        hoveredService === service.id
                          ? "translateX(4px)"
                          : "translateX(0)",
                      transitionDelay: `${index * 40}ms`,
                    }}
                  >
                    <div className="w-1 h-1 bg-[#FF6B5A] mt-1.5 mr-3 flex-shrink-0" />
                    <span className="text-xs md:text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button - Size Reduced */}
              <button className="w-full py-3.5 bg-[#FF6B5A] hover:bg-[#ff5544] text-white font-bold uppercase text-xs tracking-wider transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#FF6B5A]/30 flex items-center justify-center gap-2">
                Learn More
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Bottom Border Effect */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#FF6B5A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </div>
        ))}
      </div>

      {/* Bottom CTA - Scaled Down */}
      <div className="max-w-4xl mx-auto mt-16 md:mt-24 text-center border border-white/10 bg-zinc-900 p-8 md:p-10">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 uppercase tracking-tight">
          DON'T SEE WHAT YOU NEED?
        </h3>
        <p className="text-sm md:text-base text-gray-400 mb-6 max-w-xl mx-auto">
          We create custom video solutions tailored to your unique vision
        </p>
        <button className="px-8 py-4 bg-[#FF6B5A] hover:bg-[#ff5544] text-white font-bold uppercase text-xs md:text-sm tracking-wider transition-all duration-300 hover:shadow-xl hover:shadow-[#FF6B5A]/30">
          Get a Custom Quote
        </button>
      </div>
    </section>
  );
};

export default ServicesSection;
