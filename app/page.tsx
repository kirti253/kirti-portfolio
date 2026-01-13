import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Technologies from "./components/Technologies";
import GitHubContributions from "./components/GitHubContributions";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl space-y-16 md:space-y-24">
        <About />
        <WorkExperience />
        <Technologies />
        <GitHubContributions />
        <Contact />
      </div>
    </main>
  );
}
