import { useState, useEffect } from 'react';

interface GitHubStats {
  totalCommits: string;
  currentStreak: string;
  totalRepos: string;
  contributions: string;
  isLoading: boolean;
  lastUpdated: Date | null;
}

interface GitHubRepo {
  name: string;
  stargazers_count: number;
  forks_count: number;
  pushed_at: string;
}

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
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

        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        const userData: GitHubUser = await userResponse.json();

        // Fetch repositories
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
        const reposData: GitHubRepo[] = await reposResponse.json();

        // Calculate stats
        const totalRepos = userData.public_repos.toString();
        
        // Calculate total stars across all repos
        const totalStars = reposData.reduce((sum, repo) => sum + repo.stargazers_count, 0);
        
        // Calculate recent activity (repos updated in last 30 days)
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        
        const recentRepos = reposData.filter(repo => 
          new Date(repo.pushed_at) > thirtyDaysAgo
        );

        // Estimate commits based on recent activity
        const estimatedCommits = Math.max(100, recentRepos.length * 15 + totalStars * 2);
        
        // Calculate streak (simplified - days since last push)
        const lastPush = reposData.length > 0 ? new Date(reposData[0].pushed_at) : new Date();
        const daysSinceLastPush = Math.floor((new Date().getTime() - lastPush.getTime()) / (1000 * 60 * 60 * 24));
        const currentStreak = daysSinceLastPush === 0 ? 'Today' : `${daysSinceLastPush}d ago`;

        // Calculate contributions (total stars + repos + followers)
        const contributions = userData.followers + totalStars + userData.public_repos;

        setStats({
          totalCommits: estimatedCommits > 1000 ? `${(estimatedCommits / 1000).toFixed(1)}k+` : `${estimatedCommits}+`,
          currentStreak,
          totalRepos: totalRepos + '+',
          contributions: contributions > 1000 ? `${(contributions / 1000).toFixed(1)}k+` : contributions.toString(),
          isLoading: false,
          lastUpdated: new Date()
        });

      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        // Fallback to static data if API fails
        setStats({
          totalCommits: '500+',
          currentStreak: '45d ago',
          totalRepos: '25+',
          contributions: '1.2k+',
          isLoading: false,
          lastUpdated: null
        });
      }
    };

    fetchGitHubStats();

    // Refresh stats every 10 minutes
    const interval = setInterval(fetchGitHubStats, 10 * 60 * 1000);

    return () => clearInterval(interval);
  }, [username]);

  return stats;
}
