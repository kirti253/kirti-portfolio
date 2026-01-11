import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  technologies: string;
  description: string;
  liveUrl: string;
  repoUrl: string;
}

// Function to generate screenshot URL from website URL
const getScreenshotUrl = (url: string): string => {
  // Using a screenshot service to fetch website images
  // You can use services like image.thum.io, screenshotapi.net, etc.
  // This example uses image.thum.io (free tier available)
  const encodedUrl = encodeURIComponent(url);
  return `https://image.thum.io/get/width/800/crop/600/${encodedUrl}`;
};

const projects: Project[] = [
  {
    title: "The Asian Kid",
    technologies: "Next.js / Tailwind / postgreSQL / Node.js",
    description:
      "A full-featured coaching website that connects students and teachers, creating a smooth, engaging learning environment. It has multiple user interfaces, a guest website, student dashboard, teacher dashboard and admin panel.",
    liveUrl: "https://theasiankid.com",
    repoUrl: "https://github.com",
  },
  {
    title: "MyCCET",
    technologies: "Next.js / Tailwind / postgreSQL / Node.js",
    description:
      "MyCCET was a college management system made for college staff for maintaining students digitally. Myccet has record of all enrolled students, their results, semesters and batches. They can create Provisional Certificate.",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    title: "Project Jalshakti",
    technologies: "EJS / MongoDB / Javascript / Node.js",
    description:
      "Project jalshakti was blogging website made for SIH. It was a website made to share knowledge related to water. It was just like wikipedia but for water related knowledge.",
    liveUrl: "https://jalshakti.infyfix.com",
    repoUrl: "https://github.com",
  },
  {
    title: "Time Tracker",
    technologies: "React / TypeScript / Tailwind / nodejs / mongDB",
    description:
      "Track the time and note down the tasks done during that time.",
    liveUrl: "https://timetrackerr.vercel.app",
    repoUrl: "https://github.com",
  },
  {
    title: "Raj Bihari",
    technologies: "Liquid / HTML / CSS / MySQL",
    description:
      "A clothing business based in Delhi, India sells premium ethnic women clothing",
    liveUrl: "https://rajbihari.in",
    repoUrl: "https://github.com",
  },
];

export default function Projects() {
  return (
    <section className="space-y-4 md:space-y-6">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
        Featured Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group flex flex-col bg-foreground/5 border border-foreground/10 rounded-lg overflow-hidden hover:border-foreground/20 transition-colors"
          >
            {/* Project Screenshot */}
            <div className="relative w-full aspect-video bg-foreground/5 overflow-hidden">
              <Image
                src={getScreenshotUrl(project.liveUrl)}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>

            {/* Project Details */}
            <div className="flex flex-col gap-1.5 p-2.5">
              <div className="space-y-0.5">
                <h2 className="text-sm md:text-base font-bold text-foreground">
                  {project.title}
                </h2>
                <p className="text-[10px] md:text-xs text-foreground/60 font-medium">
                  {project.technologies}
                </p>
                <p className="text-[10px] md:text-xs text-foreground/70 leading-tight line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Links */}
              <div className="flex items-center gap-2 pt-0.5">
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  <span>Live Preview</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-external-link"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </Link>
                <Link
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  <span>Repo Url</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-github"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
