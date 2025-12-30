import React, { useState } from "react";
import { Play, X } from "lucide-react";

interface VideoCategory {
  id: number;
  title: string;
  category: string;
  description: string;
  youtubeId: string;
}

// Helper to get thumbnail (tries maxres first, falls back to hq via onError)
const getThumbnail = (id: string) =>
  `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

const videoServices: VideoCategory[] = [
  {
    id: 1,
    title: "Luxe Party Highlight",
    category: "Events & Nightlife",
    description:
      "Capturing the glamour and electric atmosphere of high-end events. Dynamic editing that showcases the venue, the people, and the vibe.",
    youtubeId: "BblfwViyRYY",
  },
  {
    id: 2,
    title: "Good Time Reels",
    category: "Lifestyle",
    description:
      "Capturing the energy of the moment. Fast cuts, beat-syncing, and vibrant color grading that highlights the best memories.",
    youtubeId: "CE8E3ssZ-DE",
  },
  {
    id: 3,
    title: "Travel Vlog",
    category: "Travel",
    description:
      "Cinematic travel diaries that transport the viewer. Immersive soundscapes and scenic storytelling that documents the journey.",
    youtubeId: "LBWMKHrOSrs",
  },
];

const VideoPortfolioSection: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const handleCloseVideo = () => {
    setActiveVideo(null);
  };

  return (
    <section className="min-h-screen bg-[#0e0e0e] text-white flex items-center justify-center p-6 sm:p-12 relative">
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-2">Selected Works</h2>
          <p className="text-gray-500">
            Cinematic editing for creators and businesses.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videoServices.map((item) => (
            <div
              key={item.id}
              className="flex flex-col group cursor-pointer"
              onClick={() => setActiveVideo(item.youtubeId)}
            >
              {/* Thumbnail Container */}
              <div className="relative overflow-hidden rounded-lg mb-6 aspect-[9/16] md:aspect-video bg-gray-900 border border-gray-800">
                {/* Image with Fallback */}
                <img
                  src={getThumbnail(item.youtubeId)}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-80 transition-transform duration-500 ease-out group-hover:scale-105 group-hover:opacity-60"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    // Fallback to High Quality if Max Res doesn't exist
                    target.src = `https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`;
                  }}
                />

                {/* Play Button Overlay */}
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

              {/* Text Info */}
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

      {/* --- VIDEO MODAL (Lightbox) --- */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-12 animate-in fade-in duration-300">
          {/* Close Button */}
          <button
            onClick={handleCloseVideo}
            className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
          >
            <X className="w-8 h-8 text-white" />
          </button>

          {/* Click Background to Close */}
          <div className="absolute inset-0" onClick={handleCloseVideo}></div>

          {/* YouTube Player */}
          <div className="relative w-full h-full max-w-6xl flex items-center justify-center pointer-events-none">
            <div className="w-full h-full pointer-events-auto rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-black">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0&modestbranding=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoPortfolioSection;
