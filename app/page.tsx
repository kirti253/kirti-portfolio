export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-4xl w-full text-center space-y-8">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          Kirti&apos;s Portfolio
        </h1>
        <p className="text-xl md:text-2xl text-foreground/70">
          Software Engineer
        </p>
        <div className="pt-8">
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Welcome to my portfolio. I build modern web applications and digital
            experiences.
          </p>
        </div>
      </div>
    </main>
  );
}
