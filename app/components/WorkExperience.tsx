interface WorkExperience {
  role: string;
  company: string;
  location: string;
  dates: string;
  responsibilities: string[];
}

const experiences: WorkExperience[] = [
  {
    role: "Backend Developer",
    company: "The Asian Kid",
    location: "Chandigarh",
    dates: "Aug 2025 – Nov 2025",
    responsibilities: [
      "Designed RESTful APIs to facilitate data exchange between systems.",
      "Implemented database schemas and managed SQL data storage solutions.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "MyCCET Project",
    location: "Chandigarh",
    dates: "Feb 2025 – May 2025",
    responsibilities: [
      "Developed a student management website featuring user dashboards for enhanced navigation.",
      "Integrated APIs for seamless data exchange.",
      "Managed data flow to ensure accuracy and efficiency in operations.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Jalshakti Project",
    location: "Chandigarh",
    dates: "Oct 2024 – Oct 2024",
    responsibilities: [
      "Designed UI for a water conservation blog website.",
      "Created interactive layouts to promote awareness and user engagement.",
    ],
  },
  {
    role: "Backend Developer",
    company: "TaskTracker",
    location: "Chandigarh",
    dates: "Jan 2025 – Jan 2025",
    responsibilities: [
      "Developed REST APIs for efficient user data management.",
      "Managed databases and NoSQL systems ensuring data integrity and accessibility.",
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
                        {experience.role} | {experience.company}, {experience.location}
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
