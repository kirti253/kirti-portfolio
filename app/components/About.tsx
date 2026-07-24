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
                Open to Work
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
      <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 font-medium max-w-4xl leading-relaxed">
        Full Stack Developer • Building{" "}
        <a
          href="https://www.baatcheetai.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-300 underline underline-offset-4 transition-colors"
        >
          BaatcheetAI
        </a>
        , a voice-first AI companion that makes conversations more human.
      </p>

      {/* About Section */}
      <div className="space-y-4 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          About
        </h2>

        <div className="space-y-5">
          <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
            Hi, I&apos;m Kirti, a Full Stack Developer and Computer Science
            Engineering student passionate about building products that solve
            meaningful real-world problems. I enjoy architecting scalable
            backend systems, designing clean APIs, and creating seamless user
            experiences using Node.js, TypeScript, PostgreSQL, MongoDB, React,
            and Next.js.
          </p>

          <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
            I&apos;m currently building{" "}
            <a
              href="https://www.baatcheetai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-purple-400 hover:text-purple-300 underline underline-offset-4 transition-colors"
            >
              BaatcheetAI
            </a>
            , a voice-first AI companion designed to help people express their
            thoughts freely through natural conversations. It combines
            conversational AI, voice interactions, and emotion-aware experiences
            to create a companion that listens, understands, and responds like a
            trusted friend. I&apos;m building the entire product from the ground
            up—from backend architecture and databases to AI integrations,
            authentication, and deployment.
          </p>

          <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
            Along the way, I&apos;ve built college management systems, admin
            dashboards, business websites, and full-stack web applications,
            always focusing on clean architecture, scalability, performance, and
            developer experience. I love turning ambitious ideas into products
            that people genuinely enjoy using.
          </p>

          <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
            Beyond coding, I&apos;m a state-level basketball player and team
            captain. Basketball has taught me discipline, leadership,
            resilience, and teamwork—qualities that influence how I build
            products, collaborate with teams, and tackle challenging engineering
            problems.
          </p>
        </div>
      </div>
    </section>
  );
}
