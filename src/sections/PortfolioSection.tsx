import React from "react";
import { Play } from "lucide-react"; // Make sure to install lucide-react or use an SVG

interface VideoCategory {
  id: number;
  title: string;
  category: string;
  description: string;
  thumbnailUrl: string;
}

const videoServices: VideoCategory[] = [
  {
    id: 1,
    title: "Commercial & Ads",
    category: "Business",
    description:
      "High-impact visuals designed to convert. We turn brand messages into sleek, professional ad campaigns.",
    // Image: Professional Camera/Set
    thumbnailUrl:
      "https://images.unsplash.com/photo-1535016120720-40c6874c3b1c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Short-Form Content",
    category: "Creators",
    description:
      "Fast-paced edits for TikTok, Reels, and Shorts. Optimized for retention with dynamic captions and transitions.",
    // Image: Urban/Dynamic
    thumbnailUrl:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Cinematic Storytelling",
    category: "Documentary",
    description:
      "Immersive narrative editing. Professional color grading and sound design that brings your raw footage to life.",
    // Image: Cinematic Landscape
    thumbnailUrl:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
  },
];

const VideoPortfolioSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-[#0e0e0e]  text-white flex items-center justify-center p-6 sm:p-12">
      <div className="max-w-7xl w-full">
        {/* Optional Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2">Selected Works</h2>
          <p className="text-gray-500">
            Cinematic editing for creators and businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videoServices.map((item) => (
            <div key={item.id} className="flex flex-col group cursor-pointer">
              {/* Video Thumbnail Container */}
              <div className="relative overflow-hidden rounded-lg mb-6 aspect-video bg-gray-900">
                {/* Background Image */}
                <img
                  src={item.thumbnailUrl}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-80 transition-transform duration-500 ease-out group-hover:scale-105 group-hover:opacity-60"
                />

                {/* Play Button Overlay - Appears on Hover */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#FF6B5A] group-hover:scale-110">
                    <Play className="w-6 h-6 text-white fill-current ml-1" />
                  </div>
                </div>

                {/* Category Tag */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded text-xs uppercase tracking-wider font-semibold text-gray-300">
                  {item.category}
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-bold mb-3 tracking-wide text-white group-hover:text-[#FF6B5A] transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoPortfolioSection;
