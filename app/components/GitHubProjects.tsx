"use client";

import { useState, useEffect } from "react";
import { GITHUB_USERNAME } from "@/app/lib/content";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  fork: boolean;
}

export function GitHubProjects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
      { signal: controller.signal }
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data: GitHubRepo[]) => {
        const filtered = data
          .filter((repo) => !repo.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count);
        setRepos(filtered);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError("Could not load GitHub projects.");
        }
      })
      .finally(() => setIsLoading(false));

    return () => controller.abort();
  }, []);

  if (isLoading) {
    return (
      <div className="text-ink-muted text-sm py-8">
        Loading projects from GitHub...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-ink-muted text-sm py-8">
        {error}{" "}
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-accent-hover underline"
        >
          View on GitHub &rarr;
        </a>
      </div>
    );
  }

  if (repos.length === 0) return null;

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {repos.map((repo) => (
        <a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block p-4 rounded-lg border border-edge hover:border-accent/40 bg-surface-dim transition-colors"
        >
          <div className="flex items-start justify-between gap-2">
            <h4 className="text-sm font-medium text-ink group-hover:text-accent transition-colors truncate">
              {repo.name}
            </h4>
            {repo.language && (
              <span className="text-xs text-ink-muted shrink-0">
                {repo.language}
              </span>
            )}
          </div>
          {repo.description && (
            <p className="mt-1.5 text-xs text-ink-muted line-clamp-2 leading-relaxed">
              {repo.description}
            </p>
          )}
          {repo.stargazers_count > 0 && (
            <div className="mt-2 text-xs text-ink-muted">
              ★ {repo.stargazers_count}
            </div>
          )}
        </a>
      ))}
    </div>
  );
}
