import Image from "next/image";
export default function About() {
  return (
    <section className="space-y-6 md:space-y-8">
      {/* Greeting, Badge, and Avatar Section */}
      <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-3">
        <div className="flex-1 max-w-2xl">
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 flex-wrap">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-foreground">Hey, I&apos;m </span>
              <span className="text-purple-400 md:text-purple-500">Kirti</span>
            </h1>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/30 w-fit">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-sm font-medium text-green-400">
                Open to work
              </span>
            </div>
          </div>
        </div>
        <div className="md:ml-2">
          <div className="w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden border-2 border-foreground/10 shadow-lg">
            <Image
              src="/kirti.png"
              alt="Kirti"
              width={176}
              height={176}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Tagline */}
      <p className="text-xl md:text-2xl text-foreground/80 font-medium max-w-3xl">
        Backend-oriented Full Stack Developer and Computer Science Engineering
        student
      </p>

      {/* About Section */}
      <div className="space-y-4 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          About
        </h2>
        <div className="space-y-4">
          <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
            Hi, I&apos;m Kirti, a backend-oriented full-stack developer and
            Computer Science Engineering student. I love turning ideas into
            functional, scalable applications using Node.js, TypeScript,
            PostgreSQL, MongoDB, and React/Next.js.
          </p>
          <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
            I&apos;ve built projects ranging from college management systems and
            admin panels to real-world business websites, with a strong focus on
            clean architecture and reliable APIs.
          </p>
          <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
            Beyond coding, I&apos;m a state-level basketball player and team
            captain, which has taught me discipline, leadership, and
            teamwork—skills I bring into my development work as well.
          </p>
        </div>
      </div>
    </section>
  );
}
