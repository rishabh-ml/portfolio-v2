import { useState, useEffect } from 'react';

interface GitHubStats {
  totalCommits: string;
  currentStreak: string;
  totalRepos: string;
  contributions: string;
  isLoading: boolean;
  lastUpdated: Date | null;
}

export function useGitHubStats(username: string = 'rishabh-ml'): GitHubStats {
  const [stats, setStats] = useState<GitHubStats>({
    totalCommits: '---',
    currentStreak: '---',
    totalRepos: '---',
    contributions: '---',
    isLoading: true,
    lastUpdated: null
  });

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        setStats(prev => ({ ...prev, isLoading: true }));

        // 1. Fetch contribution data (real streak, total commits, etc.)
        const contribRes = await fetch(`https://github-contributions-api.deno.dev/${username}.json`);
        const contribData = await contribRes.json();

        // 2. Fetch public repo count
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        const userData = await userRes.json();

        const totalRepos = userData.public_repos.toString();
        const totalContributions = contribData.totalContributions;
        const streakDays = contribData.currentStreak || 0;

        const currentStreak =
          streakDays > 1 ? `${streakDays} day${streakDays > 1 ? 's' : ''} in a row` : 'Today';

        setStats({
          totalCommits: `${totalContributions}+`,
          currentStreak,
          totalRepos: `${totalRepos}+`,
          contributions: `${totalContributions}`,
          isLoading: false,
          lastUpdated: new Date()
        });
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        setStats({
          totalCommits: '500+',
          currentStreak: 'Unknown',
          totalRepos: '---',
          contributions: '---',
          isLoading: false,
          lastUpdated: null
        });
      }
    };

    fetchGitHubStats();

    // Refresh every 10 minutes
    const interval = setInterval(fetchGitHubStats, 10 * 60 * 1000);
    return () => clearInterval(interval);
  }, [username]);

  return stats;
}
