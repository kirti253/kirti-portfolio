export default function About() {
  return (
    <section className="space-y-6 md:space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:gap-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          <span className="text-foreground">👋 Hey, I&apos;m </span>
          <span className="text-yellow-400 md:text-yellow-500">Kirti</span>
        </h1>
        <div className="mt-2 md:mt-0 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/30 w-fit">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          <span className="text-sm font-medium text-green-400">
            Available for freelance
          </span>
        </div>
      </div>

      <p className="text-xl md:text-2xl text-foreground/80 font-medium max-w-3xl">
        Full Stack Developer focused on clean design, solid performance, and
        user-first thinking.
      </p>

      <div className="space-y-4 max-w-3xl">
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
    </section>
  );
}
