interface Technology {
  name: string;
  icon: string;
  iconBg: string;
  iconTextColor?: string;
}

const technologies: Technology[] = [
  {
    name: "TypeScript",
    icon: "TS",
    iconBg: "bg-blue-600",
    iconTextColor: "text-white",
  },
  {
    name: "JavaScript",
    icon: "JS",
    iconBg: "bg-yellow-400",
    iconTextColor: "text-black",
  },
  {
    name: "Tailwind CSS",
    icon: "TW",
    iconBg: "bg-cyan-500",
    iconTextColor: "text-white",
  },
  {
    name: "Node.js",
    icon: "N",
    iconBg: "bg-green-600",
    iconTextColor: "text-white",
  },
  {
    name: "React",
    icon: "R",
    iconBg: "bg-cyan-400",
    iconTextColor: "text-white",
  },
  {
    name: "Next.js",
    icon: "N",
    iconBg: "bg-black",
    iconTextColor: "text-white",
  },
  {
    name: "PostgreSQL",
    icon: "PG",
    iconBg: "bg-blue-700",
    iconTextColor: "text-white",
  },
  {
    name: "MongoDB",
    icon: "M",
    iconBg: "bg-green-500",
    iconTextColor: "text-white",
  },
  {
    name: "Docker",
    icon: "🐳",
    iconBg: "bg-blue-500",
    iconTextColor: "text-white",
  },
  {
    name: "Express",
    icon: "E",
    iconBg: "bg-gray-800",
    iconTextColor: "text-white",
  },

  {
    name: "FastAPI",
    icon: "FA",
    iconBg: "bg-teal-600",
    iconTextColor: "text-white",
  },
];

export default function Technologies() {
  // Duplicate technologies for seamless loop
  const duplicatedTechnologies = [...technologies, ...technologies];

  return (
    <section className="space-y-4 md:space-y-6">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
        Technologies that I have used
      </h1>

      <div className="relative overflow-hidden">
        <div className="flex gap-3 md:gap-4 animate-scroll">
          {duplicatedTechnologies.map((tech, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 hover:border-foreground/20 transition-colors flex-shrink-0"
            >
              <div
                className={`w-8 h-8 rounded-md ${tech.iconBg} ${
                  tech.iconTextColor || "text-white"
                } flex items-center justify-center text-xs font-bold`}
              >
                {tech.icon}
              </div>
              <span className="text-sm md:text-base font-medium text-foreground whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
