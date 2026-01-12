import Link from "next/link";

interface WorkExperience {
  role: string;
  company: string;
  location: string;
  dates: string;
  responsibilities: string[];
  companyUrl?: string;
}

const experiences: WorkExperience[] = [
  {
    role: "Backend Developer",
    company: "The Asian Kid",
    location: "Chandigarh",
    dates: "Aug 2025 – Dec 2025",
    companyUrl: "https://theasiankid.com",
    responsibilities: [
      "Designed RESTful APIs to facilitate data exchange between systems.",
      "Implemented database schemas and managed SQL data storage solutions.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Raj Bihari",
    location: "Delhi",
    dates: "Jun 2025 – Jul 2025",
    companyUrl: "https://rajbihari.in",
    responsibilities: [
      "Developed and maintained e-commerce website for premium ethnic women clothing business.",
      "Implemented responsive design and optimized user experience for online shopping.",
      "Managed database systems and integrated payment solutions.",
    ],
  },
];

export default function WorkExperience() {
  return (
    <section className="space-y-4 md:space-y-6">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
        Work Experience
      </h1>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-foreground/20"></div>

        <div className="space-y-8 md:space-y-10">
          {experiences.map((experience, index) => (
            <div key={index} className="relative flex gap-6 md:gap-8">
              {/* Timeline marker */}
              <div className="flex-shrink-0 relative z-10">
                <div className="w-8 h-8 rounded-full border-2 border-foreground bg-background flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-foreground"></div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pb-8 md:pb-10">
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-lg md:text-xl font-bold text-foreground">
                        {experience.role} |{" "}
                        {experience.companyUrl ? (
                          <Link
                            href={experience.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-foreground/80 transition-colors underline"
                          >
                            {experience.company}
                          </Link>
                        ) : (
                          experience.company
                        )}
                        , {experience.location}
                      </h2>
                    </div>
                    <p className="text-sm md:text-base text-foreground/60 font-medium whitespace-nowrap">
                      {experience.dates}
                    </p>
                  </div>
                  <ul className="space-y-1 list-disc list-inside text-sm md:text-base text-foreground/70 leading-relaxed">
                    {experience.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
