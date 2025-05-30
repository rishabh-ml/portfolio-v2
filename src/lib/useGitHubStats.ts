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

        // 1. Get real-time contribution data from 3rd party API
        const contributionsResponse = await fetch(`https://github-contributions-api.deno.dev/${username}.json`);
        const contributionData = await contributionsResponse.json();

        // 2. Get user profile info for repo count
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        const userData = await userResponse.json();

        const totalRepos = userData.public_repos.toString();
        const totalContributions = contributionData.totalContributions;
        const currentStreak = contributionData.currentStreak || 0;

        setStats({
          totalCommits: `${totalContributions}+`,
          currentStreak: currentStreak === 0 ? 'Today' : `${currentStreak}d`,
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

    // Optionally refresh every 10 minutes
    const interval = setInterval(fetchGitHubStats, 10 * 60 * 1000);
    return () => clearInterval(interval);
  }, [username]);

  return stats;
}
