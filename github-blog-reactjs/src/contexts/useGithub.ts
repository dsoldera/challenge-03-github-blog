import { useContextSelector } from 'use-context-selector'
import { GithubContext } from './GithubContext'

export function useGithub() {
  const githubUser = useContextSelector(
    GithubContext,
    (context) => {
      return context.userGit
  })

  const githubRepo = useContextSelector(
    GithubContext,
    (context) => {
      return context.repoChallenge
  })
  return { githubUser, githubRepo }
}
