import { Header } from '@/components/Header'
import { Helmet } from 'react-helmet-async'

export const HomePage = () => {
  return (
    <>
      <Helmet title="Home Page" />
      <Header />
      <h1>Home Page</h1>
    </>
  )
}
