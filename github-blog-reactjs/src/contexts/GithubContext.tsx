
import api from '@/lib/axios'
import { useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'

export interface UserGithubProps {
  login: string
  id: number
  type: string
  user_view_type: string
  site_admin: boolean,
  name: string,
  company: string | null
  location: string
  bio: string
  node_id: string
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  updated_at: string
  avatar_url: string
  repos_url: string
  html_url: string
}

interface ChallengeRepoProps {
  id: number
  name: string
  full_name: string
  private: boolean
  html_url: string
  has_issues: boolean
  open_issues_count: number
}

interface IssuesProps {
  total_count: number;
  incomplete_results: boolean;
  items: IssueItemProps[];
}

interface IssueItemProps {
  title: string
  id: number
  body: string
  html_url: string
  created_at: string
  number: number
  comments: number
}

interface GithubContextType {
  userGit?: UserGithubProps
  repoChallenge?: ChallengeRepoProps
  issue?: IssueItemProps
  issues?: IssuesProps
  getIssueDataFn: (number: number) => Promise<void>
  getAllIssuesFn: () => Promise<void>
  searchIssueDataFn: (query?: string ) => Promise<void>
}


interface GithubProviderProps {
  children: React.ReactNode;  
}

export const GithubContext = createContext({} as GithubContextType);
 
export const GithubProvider = ({ children }: GithubProviderProps) => {
  const [userGit, setUserGit] = useState<UserGithubProps>();
  const [repoChallenge, setRepoChallenge] = useState<ChallengeRepoProps>();
  const [issue, setIssue] = useState<IssueItemProps>();
  const [issues, setIssues] = useState<IssuesProps>();
  const login: string = 'dsoldera';
  const repo: string = 'challenge-03-github-blog';
  
  const getUserFn = useCallback(
    async () => {
      const response = await api.get(`/users/${login}`)
      //console.log('login', response.data)
      setUserGit(response.data)
    },[],
  )

  const getRepoFn = useCallback(
    async () => {
      const response = await api.get(`/repos/${login}/${repo}`)
      //console.log('repo', response.data)
      setRepoChallenge(response.data)
    },[],
  )

  const getAllIssuesFn = useCallback(
    async () => {
    const response = await api.get('search/issues', {
      params: {
        q: `repo:${login}/${repo}`,
      },
    });
    //console.log('issues', response.data)
    setIssues(response.data);
  }, []);

  const getIssueDataFn = useCallback(
    async (number: number) => {
      const response = await api
        .get(`/repos/${login}/${repo}/issues/${number}`)
        console.log('post', response.data)
        setIssue(response.data)
    }, [],
  )

  const searchIssueDataFn = useCallback(
    async(query?: string) => {
      const response = await api
      .get(`/search/issues?q=${query}%20repo:${login}/${repo}`);
      console.log('search', response.data)
      setIssues(response.data);
    }, [],
  )
  
  useEffect(() => {
    getUserFn();
    getRepoFn();
    getAllIssuesFn();
  }, [getUserFn, getRepoFn]);

  return(
    <GithubContext.Provider 
      value={{ 
        userGit,
        issue,
        repoChallenge,
        getIssueDataFn,
        searchIssueDataFn,
        getAllIssuesFn,
        issues
      }}>
      {children}
    </GithubContext.Provider>
  )
}
