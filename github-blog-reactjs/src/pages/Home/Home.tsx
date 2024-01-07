import { ArrowUp, Github } from '@/components/Icons'
import { Helmet } from 'react-helmet-async'

export const HomePage = () => {
  return (
    <>
      <Helmet title="Home Page" />
      <h1>Home Page</h1>
      <Github />
      <ArrowUp />
    </>
  )
}
