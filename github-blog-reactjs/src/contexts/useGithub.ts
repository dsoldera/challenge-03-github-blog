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

  const githubPostDataFn = useContextSelector(
    GithubContext,
    (context) => {
      return context.getIssueDataFn
  })

  const githubPosts = useContextSelector(
    GithubContext,
    (context) => {
      return context.issues
  })

  const githubPost = useContextSelector(
    GithubContext,
    (context) => {
      return context.issue
  })

  const githubSearchPost = useContextSelector(
    GithubContext,
    (context) => {
      return context.searchIssueDataFn
    }
  )

  return {
    githubPost,
    githubUser, 
    githubRepo,
    githubSearchPost,
    githubPostDataFn, 
    githubPosts
  }
}
