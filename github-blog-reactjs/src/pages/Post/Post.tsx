import { Header } from '@/components/Header'
import { Helmet } from 'react-helmet-async'

export const PostPage = () => {
  return (
    <>
      <Header />
      <Helmet title="Post Page" />
      <h1>Post</h1>
    </>
  )
}
