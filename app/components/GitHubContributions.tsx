"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function GitHubContributions() {
  const username = "kirti253";
  const [contributionCount, setContributionCount] = useState<number | null>(
    null
  );

  // Using GitHub contribution calendar grid with custom darker green colors
  // Colors: #161b22 (dark), #0e4429 (level 1), #006d32 (level 2), #26a641 (level 3), #39d353 (level 4)
  const contributionChartUrl = `https://ghchart.rshah.org/${username}?color=26a641`;

  // Fetch contribution count (optional - won't break if it fails)
  useEffect(() => {
    const fetchContributionCount = async () => {
      try {
        // Using GitHub Readme Stats API to get contribution count
        const response = await fetch(
          `https://github-readme-stats.vercel.app/api?username=${username}&count_private=true&include_all_commits=true`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          // The API returns totalContributions in the response
          if (data.totalContributions) {
            setContributionCount(data.totalContributions);
          }
        }
      } catch (error) {
        // Silently fail - contribution count is optional
        // The graph will still display without the count
        console.warn("Contribution count unavailable:", error);
      }
    };

    // Only fetch on client side
    if (typeof window !== "undefined") {
      fetchContributionCount();
    }
  }, [username]);

  // Color gradient for legend (darker greens)
  const legendColors = [
    { color: "#161b22", label: "Less" },
    { color: "#0e4429", label: "" },
    { color: "#006d32", label: "" },
    { color: "#26a641", label: "" },
    { color: "#39d353", label: "More" },
  ];

  return (
    <section className="space-y-4 md:space-y-6">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
        GitHub Contributions
      </h1>

      <div className="w-full overflow-hidden rounded-lg border border-foreground/10 bg-foreground/5 p-3 sm:p-4 md:p-6">
        <div className="w-full overflow-x-auto -mx-3 sm:-mx-4 md:-mx-6 px-3 sm:px-4 md:px-6">
          <div
            className="relative w-full min-w-[600px] sm:min-w-0"
            style={{ minHeight: "150px", aspectRatio: "auto" }}
          >
            <Image
              src={contributionChartUrl}
              alt={`GitHub Contribution Chart for ${username}`}
              width={800}
              height={200}
              className="w-full h-auto object-contain"
              unoptimized
              style={{ imageRendering: "crisp-edges" }}
            />
          </div>
        </div>

        {/* Contribution Count and Legend */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 mt-4 sm:mt-6 pt-4 border-t border-foreground/10">
          {/* Contribution Count */}
          {contributionCount !== null && (
            <div className="text-xs sm:text-sm md:text-base text-foreground/70">
              <span>
                {contributionCount.toLocaleString()} contributions in the last
                year
              </span>
            </div>
          )}

          {/* Color Legend */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <span className="text-xs sm:text-sm text-foreground/60 mr-1 sm:mr-2 whitespace-nowrap">
              Less
            </span>
            <div className="flex gap-0.5 sm:gap-1">
              {legendColors.map((item, index) => (
                <div
                  key={index}
                  className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-sm"
                  style={{ backgroundColor: item.color }}
                  title={item.label}
                />
              ))}
            </div>
            <span className="text-xs sm:text-sm text-foreground/60 ml-1 sm:ml-2 whitespace-nowrap">
              More
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
