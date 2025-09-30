import React, { useState, useEffect } from "react";
import { ExternalLink } from "lucide-react";
import { personalProjects, teamProjects } from "../components/common/constants";

interface Project {
  id: number;
  title: string;
  role: string;
  image: string;
  websiteUrl?: string;
  githubUrl?: string;
  technologies: string[];
  description: string;
  highlights: string[];
}

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"team" | "personal">("team");
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const projects: Project[] =
    activeTab === "team" ? teamProjects : personalProjects;

  // Preload all images when component mounts
  useEffect(() => {
    const allProjects = [...teamProjects, ...personalProjects];
    const imagePromises = allProjects.map((project) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = project.image;
        img.onload = resolve;
        img.onerror = resolve; // Resolve even on error to not block the UI
      });
    });

    Promise.all(imagePromises).then(() => {
      setImagesLoaded(true);
    });
  }, []);

  return (
    <section
      id="projects"
      title="Projects"
      className="pb-[40px] md:py-24 px-6 bg-black min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center font-heading text-4xl md:text-5xl text-white mb-12">
          // Projects
        </h2>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex rounded-full border border-gray-800 bg-gray-900/50 p-1">
            <button
              onClick={() => setActiveTab("team")}
              className={`px-5 md:px-8 py-2 md:py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "team"
                  ? "bg-white text-black"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Team Project
            </button>
            <button
              onClick={() => setActiveTab("personal")}
              className={`px-5 md:px-8 py-2 md:py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "personal"
                  ? "bg-white text-black"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Personal Project
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, projectIndex) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900/90 to-gray-950 hover:border-gray-700 transition-all duration-500 backdrop-blur-sm hover:scale-[1.02] animate-fadeIn"
              style={{
                animationDelay: `${projectIndex * 100}ms`,
                animationFillMode: "backwards",
              }}
            >
              {/* Image Section */}
              <div className="relative h-56 lg:h-[333px] overflow-hidden bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-red-900/20">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover bg-top transition-transform duration-700 group-hover:scale-110"
                  loading="eager" // Force eager loading
                  onLoad={(e) => {
                    // Image loaded successfully
                    const target = e.target as HTMLImageElement;
                    target.classList.add("opacity-100");
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    target.parentElement?.classList.add(
                      "flex",
                      "items-center",
                      "justify-center"
                    );
                  }}
                  style={{
                    opacity: imagesLoaded ? 1 : 0,
                    transition: "opacity 0.3s ease-in",
                  }}
                />
                {/* Gradient overlay that appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Loading skeleton */}
                {!imagesLoaded && (
                  <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
                    <div className="text-gray-500">Loading...</div>
                  </div>
                )}
              </div>

              {/* Rest of your content remains the same */}
              <div className="relative bg-black/40 backdrop-blur-md border border-white/5 rounded-[24px] -mt-8 p-6">
                {/* Header with View Website Button */}
                <div className="flex flex-col md:flex-row gap-3 md:gap-1 items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 transition-colors duration-300 group-hover:text-gray-100">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400">{project.role}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {project.websiteUrl && (
                      <a
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-tl-2xl rounded-br-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 text-sm text-white whitespace-nowrap hover:gap-3"
                      >
                        <span>View Website</span>
                        <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-12" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-tl-2xl rounded-br-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 text-sm text-white whitespace-nowrap hover:gap-3"
                      >
                        <span>View Code</span>
                        <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-12" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 rounded-tr-2xl rounded-bl-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 text-sm text-white whitespace-nowrap hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4 transition-colors duration-300 group-hover:text-gray-300">
                  {project.description}
                </p>

                {/* Highlights */}
                <div>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, index) => (
                      <li
                        key={index}
                        className="flex items-start text-sm text-gray-400 transition-all duration-300 hover:text-gray-300 hover:translate-x-1"
                      >
                        <span className="text-green-400 mr-2 mt-0.5">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Projects;
