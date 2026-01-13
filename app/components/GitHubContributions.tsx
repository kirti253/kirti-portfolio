"use client";

export default function GitHubContributions() {
  const username = "kirti253";
  
  // Using GitHub contribution chart with custom colors
  // Colors: #0d1117 (dark bg), #161b22 (grid), #0e4429 (level 1), #006d32 (level 2), #26a641 (level 3), #39d353 (level 4)
  // Or use a simpler approach with GitHub's default green theme
  const contributionChartUrl = `https://ghchart.rshah.org/${username}?color=26a641`;

  return (
    <section className="space-y-4 md:space-y-6">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
        GitHub Contributions
      </h1>
      
      <div className="w-full overflow-hidden rounded-lg border border-foreground/10 bg-foreground/5 p-4 md:p-6">
        <div className="w-full overflow-x-auto">
          <img
            src={contributionChartUrl}
            alt={`GitHub Contribution Chart for ${username}`}
            className="w-full h-auto"
            style={{ imageRendering: "crisp-edges" }}
          />
        </div>
      </div>
    </section>
  );
}
