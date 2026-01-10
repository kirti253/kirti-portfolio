import Image from 'next/image';

export default function About() {
  return (
    <section className="space-y-6 md:space-y-8">
      {/* Greeting, Badge, and Avatar Section */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center md:gap-4 flex-wrap">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className="text-foreground">Hey, I&apos;m </span>
              <span className="text-purple-400 md:text-purple-500">Kirti</span>
            </h1>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/30 w-fit">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-sm font-medium text-green-400">
                Available for freelance
              </span>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 md:ml-8">
          <div className="w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full bg-yellow-50 overflow-hidden border-2 border-foreground/10 shadow-lg">
            {/* Placeholder for avatar - replace with your image */}
            <div className="w-full h-full flex items-center justify-center bg-yellow-100 text-foreground/30">
              <span className="text-5xl md:text-6xl lg:text-7xl">👤</span>
            </div>
            {/* Uncomment and use when you have an avatar image:
            <Image
              src="/avatar.png"
              alt="Kirti"
              width={176}
              height={176}
              className="w-full h-full object-cover"
              priority
            />
            */}
          </div>
        </div>
      </div>

      {/* Tagline */}
      <p className="text-xl md:text-2xl text-foreground/80 font-medium max-w-3xl">
        Full Stack Developer focused on clean design, solid performance, and
        user-first thinking.
      </p>

      {/* About Section */}
      <div className="space-y-4 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          About
        </h2>
        <div className="space-y-4">
          <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
            I am a Full Stack Developer who builds things that actually work, scale and people depend on. I handle backend development, write solid code for scalable applications, and pull off clean, professional frontends (no AI slop gradients, I know my way around modern tools and build UIs the right way).
          </p>
          <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
            I&apos;m a software developer who loves turning ideas into code.
            Evolving with intention, not perfection, I&apos;m all about
            learning, building, and getting better every day.
          </p>
          <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
            I&apos;m a Full Stack Web Developer with{" "}
            <strong className="text-foreground">5+ years of coding</strong>{" "}
            and{" "}
            <strong className="text-foreground">
              3+ years of professional experience
            </strong>
            , trying to make the internet a bit cooler one website at a time.
          </p>
        </div>
      </div>
    </section>
  );
}
