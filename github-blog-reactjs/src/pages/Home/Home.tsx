
import { Header } from '@/components/Header'
import { UserCard } from '@/components/UserCard'
import { useGithub } from '@/contexts/useGithub'
import { Helmet } from 'react-helmet-async'

export const HomePage = () => {
  const { githubRepo } = useGithub()
  return (
    <>
      <Helmet title="Home Page" />
      <Header />
      <UserCard />
      <div>
        <h2>Publicações</h2>
        <p>{ githubRepo?.open_issues_count} publicações</p>
      </div>
    </>
  )
}
