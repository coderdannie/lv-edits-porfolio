import React, { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  provider?: "youtube" | "vimeo" | "html5";
  span?: string;
}

const VideoGallery: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const playerRef = useRef<any>(null);

  // Helper function to extract YouTube video ID
  const getYouTubeId = (url: string): string => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\?\/]+)/,
      /youtube\.com\/watch\?.*v=([^&]+)/,
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return "";
  };

  // Helper function to get YouTube thumbnail
  const getYouTubeThumbnail = (
    url: string,
    quality: "maxres" | "hq" | "mq" | "sd" = "maxres"
  ): string => {
    const videoId = getYouTubeId(url);
    if (!videoId) return "";

    // Try maxresdefault first (1920x1080), fallback to hqdefault (480x360) if not available
    const qualities = {
      maxres: "maxresdefault.jpg",
      hq: "hqdefault.jpg",
      mq: "mqdefault.jpg",
      sd: "sddefault.jpg",
    };

    return `https://img.youtube.com/vi/${videoId}/${qualities[quality]}`;
  };

  const videos: Video[] = [
    {
      id: "1",
      title: "A TIMELESS LOVE STORY",
      thumbnail: getYouTubeThumbnail(
        "https://youtu.be/iwPM7C38sGk?si=yccNX9yZxbcbRlXQ"
      ),
      videoUrl: "https://youtu.be/iwPM7C38sGk?si=yccNX9yZxbcbRlXQ",
      provider: "youtube",
      span: "col-span-1",
    },
    {
      id: "2",
      title: "COOPERATE EVENT HIGHLIGHT",
      thumbnail: getYouTubeThumbnail(
        "https://youtu.be/ygdtoQgco9I?si=MV34-ergSHv_eWr5"
      ),
      videoUrl: "https://youtu.be/ygdtoQgco9I?si=MV34-ergSHv_eWr5",
      provider: "youtube",
      span: "col-span-1",
    },
    {
      id: "3",
      title: "GROOM & BRIDE FIRST DANCE",
      thumbnail: getYouTubeThumbnail(
        "https://youtu.be/aRmftlic15w?si=13dDZrvw1JqbTEzX"
      ),
      videoUrl: "https://youtu.be/aRmftlic15w?si=13dDZrvw1JqbTEzX",
      provider: "youtube",
      span: "col-span-2",
    },
    {
      id: "4",
      title: "LUXURY WEDDING TRAILER",
      thumbnail: getYouTubeThumbnail(
        "https://youtu.be/dUoIrOXESw8?si=xdisoG65em6oVpqh"
      ),
      videoUrl: "https://youtu.be/dUoIrOXESw8?si=xdisoG65em6oVpqh",
      provider: "youtube",
      span: "col-span-1",
    },
    {
      id: "5",
      title: "EXCLUSIVE WEDDING TRAILER",
      thumbnail: getYouTubeThumbnail(
        "https://youtu.be/d0afMBZKUr0?si=P3NntERvPYRhRPyM"
      ),
      videoUrl: "https://youtu.be/d0afMBZKUr0?si=P3NntERvPYRhRPyM",
      provider: "youtube",
      span: "col-span-1",
    },
    {
      id: "6",
      title: "OPULENT WEDDING TRAILER",
      thumbnail: getYouTubeThumbnail(
        "https://youtu.be/IsetOq3d-WE?si=P2qFVkk0FmoXHTmi"
      ),
      videoUrl: "https://youtu.be/IsetOq3d-WE?si=P2qFVkk0FmoXHTmi",
      provider: "youtube",
      span: "col-span-2",
    },
    {
      id: "7",
      title: "BIRTHDAY EVENT HIGHLIGHT",
      thumbnail: getYouTubeThumbnail(
        "https://youtu.be/SwbdRLAMQ9U?si=Ex-fZJJJhXna9N_G"
      ),
      videoUrl: "https://youtu.be/SwbdRLAMQ9U?si=Ex-fZJJJhXna9N_G",
      provider: "youtube",
      span: "col-span-2",
    },
  ];

  // Initialize Plyr when video is selected
  useEffect(() => {
    const initPlyr = async () => {
      if (selectedVideo) {
        const Plyr = (await import("plyr")).default;

        const videoElement = document.querySelector(".plyr-video") as
          | HTMLVideoElement
          | HTMLDivElement;

        if (videoElement && !playerRef.current) {
          playerRef.current = new Plyr(videoElement, {
            controls: [
              "play-large",
              "play",
              "progress",
              "current-time",
              "mute",
              "volume",
              "captions",
              "settings",
              "pip",
              "airplay",
              "fullscreen",
            ],
            youtube: { noCookie: true },
            vimeo: { byline: false, portrait: false, title: false },
            autoplay: true,
          });
        }
      }
    };

    initPlyr();

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [selectedVideo]);

  // Load Plyr CSS
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdnjs.cloudflare.com/ajax/libs/plyr/3.7.8/plyr.min.css";
    document.head.appendChild(link);

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  return (
    <div id="portfolio" className="min-h-screen bg-black">
      {/* Header */}
      <div className="w-full py-16 md:py-20 px-6 md:px-12 text-left max-w-7xl mx-auto">
        <p className="text-[#FF6B5A] text-xs md:text-sm font-semibold tracking-[0.2em] mb-4 uppercase">
          Our Portfolio
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 uppercase tracking-tight">
          VIDEO GALLERY
        </h1>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl">
          Cinematic stories that inspire and captivate
        </p>
      </div>

      {/* Grid Gallery */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[250px] sm:auto-rows-[300px] md:auto-rows-[350px]">
          {videos.map((video) => (
            <div
              key={video.id}
              className={`${
                video.span || "col-span-1"
              } group relative overflow-hidden cursor-pointer bg-zinc-900`}
              onClick={() => setSelectedVideo(video)}
            >
              {/* Thumbnail with fallback */}
              <img
                src={video.thumbnail}
                alt={video.title}
                onError={(e) => {
                  // Fallback to hqdefault if maxres fails
                  const target = e.currentTarget;
                  if (target.src.includes("maxresdefault")) {
                    target.src = getYouTubeThumbnail(video.videoUrl, "hq");
                  }
                }}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-[#FF6B5A] hover:bg-[#ff5544] rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 shadow-2xl">
                  <svg
                    className="w-6 h-6 md:w-7 md:h-7 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Provider Badge */}
              {video.provider && (
                <div className="absolute top-4 right-4 md:top-6 md:right-6 px-3 py-1.5 bg-black/80 backdrop-blur-sm border border-white/10">
                  <span className="text-white font-bold text-[10px] md:text-xs tracking-wider">
                    {video.provider.toUpperCase()}
                  </span>
                </div>
              )}

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white uppercase tracking-tight group-hover:text-[#FF6B5A] transition-colors duration-300">
                  {video.title}
                </h3>
                <p className="text-gray-300 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase tracking-wider">
                  Click to Play
                </p>
              </div>

              {/* Bottom Border Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#FF6B5A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>

      {/* Plyr Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 w-10 h-10 bg-white/10 hover:bg-[#FF6B5A] border border-white/10 hover:border-[#FF6B5A] flex items-center justify-center transition-all duration-200 group"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Video Player Container */}
            <div className="bg-zinc-900 overflow-hidden border border-white/10">
              {/* Plyr Video Player */}
              <div className="aspect-video bg-black">
                {selectedVideo.provider === "youtube" ? (
                  <div
                    className="plyr-video plyr__video-embed w-full h-full"
                    data-plyr-provider="youtube"
                    data-plyr-embed-id={
                      selectedVideo.videoUrl.split("v=")[1]?.split("&")[0] ||
                      selectedVideo.videoUrl.split("/").pop()?.split("?")[0]
                    }
                  ></div>
                ) : selectedVideo.provider === "vimeo" ? (
                  <div
                    className="plyr-video plyr__video-embed w-full h-full"
                    data-plyr-provider="vimeo"
                    data-plyr-embed-id={selectedVideo.videoUrl.split("/").pop()}
                  ></div>
                ) : (
                  <video className="plyr-video w-full h-full" playsInline>
                    <source src={selectedVideo.videoUrl} type="video/mp4" />
                  </video>
                )}
              </div>

              {/* Video Info */}
              <div className="p-5 md:p-6 bg-black border-t border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-1 uppercase tracking-tight">
                      {selectedVideo.title}
                    </h2>
                    <p className="text-gray-400 text-xs uppercase tracking-wider">
                      Powered by Plyr
                    </p>
                  </div>
                  {selectedVideo.provider && (
                    <div className="px-3 py-1.5 bg-[#FF6B5A]/20 border border-[#FF6B5A]/30">
                      <span className="text-[#FF6B5A] font-bold text-[10px] tracking-wider">
                        {selectedVideo.provider.toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;
