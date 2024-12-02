
import api from '@/lib/axios'
import { useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'

export interface UserGithub {
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
interface ChallengeRepo {
  id: number
  name: string
  full_name: string
  private: boolean
  html_url: string
  has_issues: boolean
  open_issues_count: number
}

interface GithubContextType {
  userGit?: UserGithub;
  repoChallenge?: ChallengeRepo;
  // getUserFn: (login: string) => Promise<void>;
  // getRepoFn: (repo: string, login: string) => Promise<void>;
}

interface GithubProviderProps {
  children: React.ReactNode;  
}

export const GithubContext = createContext({} as GithubContextType);
 
export const GithubProvider = ({ children }: GithubProviderProps) => {
  const [userGit, setUserGit] = useState<UserGithub>();
  const [repoChallenge, setRepoChallenge] = useState<ChallengeRepo>();
  
  const getUserFn = useCallback(
    async (login: string) => {
      const response = await api.get<UserGithub>(`/users/${login}`)
      //console.log('login', response.data)
      setUserGit(response.data)
    },[],
  )

  const getRepoFn = useCallback(
    async (repo: string, login: string) => {
      const response = await api.get<ChallengeRepo>(`/repos/${login}/${repo}`)
      //console.log('repo', response.data)
      setRepoChallenge(response.data)
    },[],
  )
  
  useEffect(() => {
    const login = 'dsoldera'
    const repo = 'challenge-03-github-blog'
    getUserFn(login)
    getRepoFn(repo, login)
  }, [getUserFn, getRepoFn]);

  return(
    <GithubContext.Provider 
      value={{ 
        userGit,
        repoChallenge
      }}>
      {children}
    </GithubContext.Provider>
  )
}
