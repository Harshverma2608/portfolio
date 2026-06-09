import { useEffect, useState } from "react";
import axios from "axios";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./Icons";
import { SectionLabel } from "./About";

const STATIC_PROJECTS = [
  {
    _id: "1",
    title: "Foodster",
    subtitle: "Location-Based Food Delivery App",
    description:
      "Discover local home chefs, subscribe to healthy daily meals, and get hot food delivered straight to your desk or home. Real-time tiffin search with location-based filtering.",
    tech: ["React.js", "Tailwind CSS", "Node.js"],
    liveUrl: "https://foodster-app.vercel.app/visit",
    githubUrl: "https://github.com/Harshverma2608/foodster",
    image: "/projects/foodster.png",
    featured: true,
  },
  {
    _id: "2",
    title: "ContentBroadcast",
    subtitle: "Educational Broadcasting Platform",
    description:
      "A streamlined system for teachers to share content and principals to keep quality in check. Features upload & schedule, principal approval workflow, and live broadcast.",
    tech: ["Node.js", "JavaScript", "Express.js", "React.js"],
    liveUrl: "https://content-broadcasting-system-seven.vercel.app/login",
    githubUrl: "https://github.com/Harshverma2608/content-broadcasting",
    image: "/projects/contentbroadcast.png",
    featured: true,
  },
  {
    _id: "3",
    title: "A&A Movies",
    subtitle: "Event Photography Website",
    description:
      "Traditional portraiture and cinematic event coverage for life's most sacred transitions. Gallery, services, packages, albums, and session booking — all in one place.",
    tech: ["React.js", "CSS3", "Vercel"],
    liveUrl: "https://aamovies.vercel.app",
    githubUrl: "https://github.com/Harshverma2608/aa-movies",
    image: "/projects/aamovies.png",
    featured: false,
  },
];

export default function Projects() {
  const [projects, setProjects] = useState(STATIC_PROJECTS);

  useEffect(() => {
    axios.get("/api/projects")
      .then((res) => { if (res.data?.length) setProjects(res.data); })
      .catch(() => {});
  }, []);

  return (
    <section id="projects" className="py-28 px-8 bg-[#f5f4f0]">
      <div className="max-w-7xl mx-auto">
        <SectionLabel eyebrow="What I've Built">Projects</SectionLabel>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => <ProjectCard key={p._id} project={p} />)}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const { title, subtitle, description, tech, liveUrl, githubUrl, image, featured } = project;
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group flex flex-col bg-white border border-stone-100 card-shadow hover:shadow-xl hover:-translate-y-1.5 transition-all duration-250 overflow-hidden rounded-sm">
      {/* Image */}
      <div className="relative h-48 bg-stone-100 overflow-hidden">
        {image && !imgError ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-stone-300">
            <ExternalLink size={28} />
          </div>
        )}
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-[#1a1a2e]/0 group-hover:bg-[#1a1a2e]/40 transition-all duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
          {liveUrl && liveUrl !== "#" && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white hover:bg-emerald-400 transition-colors shadow-lg"
              onClick={(e) => e.stopPropagation()}>
              <ExternalLink size={16} />
            </a>
          )}
          {githubUrl && githubUrl !== "#" && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1a1a2e] hover:bg-stone-100 transition-colors shadow-lg"
              onClick={(e) => e.stopPropagation()}>
              <GithubIcon size={16} />
            </a>
          )}
        </div>
        {featured && (
          <span
            className="absolute top-3 left-3 px-3 py-1 text-[10px] font-bold tracking-widest uppercase bg-emerald-500 text-white"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            Featured
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6 gap-3">
        <div>
          <h3
            className="text-[#1a1a2e] font-bold text-lg leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {title}
          </h3>
          <p
            className="text-emerald-600 text-xs font-semibold mt-0.5 tracking-wider uppercase"
            style={{ fontFamily: "var(--font-oswald)" }}
          >
            {subtitle}
          </p>
        </div>
        <p className="text-stone-400 text-sm leading-relaxed flex-1" style={{ fontFamily: "var(--font-geist)" }}>
          {description}
        </p>
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-stone-100">
          {tech.map((t) => (
            <span key={t} className="px-2.5 py-0.5 rounded-sm text-[11px] font-medium tag-green" style={{ fontFamily: "var(--font-geist)" }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
