import { ProjectCard } from "./ProjectCard";

interface Project {
  name: string;
  src: string;
  url: string;
  logo?: string;
  description?: string;
  isPlaceholder: boolean;
}

const legacyProjects: Project[] = [
  {
    name: "TriMet",
    src: "/trimet/v1/trimet-front.jpg",
    url: "/trimet",
    logo: "/logos/rosette.svg",
    isPlaceholder: false,
  },
  {
    name: "Hop FastPass",
    src: "/hop/hop-tap.jpg",
    url: "/hop",
    logo: "/logos/hop-fastpass-circle.svg",
    isPlaceholder: false,
  },
  {
    name: "Arrivals Case Study",
    src: "/arrivals/arrivals-xd-screenshot.jpg",
    url: "/trimet/arrivals",
    logo: "/logos/rosette-inner.svg",
    isPlaceholder: false,
  },
];

const newProjects: Project[] = [
  {
    name: "LineageBuilder",
    src: "/logos/rosette.svg", // Placeholder image
    url: "#",
    description: "An interactive genealogy and family tree builder. Map your ancestry with a modern interface.",
    isPlaceholder: true,
  },
  {
    name: "AgileStart",
    src: "/logos/rosette.svg", // Placeholder image
    url: "#",
    description: "A comprehensive project management tool designed to bootstrap agile teams effortlessly.",
    isPlaceholder: true,
  },
  {
    name: "Habitualize",
    src: "/logos/rosette.svg", // Placeholder image
    url: "#",
    description: "A habit tracking application focused on building consistent routines through gamification.",
    isPlaceholder: true,
  },
  {
    name: "TrulyWritten",
    src: "/logos/rosette.svg", // Placeholder image
    url: "#",
    description: "A platform for authentic story sharing, helping writers publish verified, human-written content.",
    isPlaceholder: true,
  },
];

const allProjects = [...legacyProjects, ...newProjects];

export function ProjectGrid() {
  return (
    <div className="py-8">
      <h2 className="mb-8 text-2xl font-bold tracking-tight">Selected Work</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {allProjects.map((project, idx) => (
          <ProjectCard
            key={idx}
            name={project.name}
            imageSrc={project.src}
            url={project.url}
            logoSrc={project.logo}
            description={project.description}
            isPlaceholder={project.isPlaceholder}
          />
        ))}
      </div>
    </div>
  );
}
