import { Header } from '@/components/Header';
import { useGithub } from '@/contexts/useGithub';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';

export const PostPage = () => {
  const { postId } = useParams();
  const { githubPostDataFn, githubPost } = useGithub();
  
  useEffect(()=> {
    //console.log(postId)
    if (postId) {
      githubPostDataFn(Number(postId));
    }
  }, [])

  return (
    <>
      <Helmet title="Post Page" />
      <Header />
      <p style={{ color: 'white'}}>
        { githubPost?.title}
      </p>
      <ReactMarkdown>
        { githubPost?.body}
      </ReactMarkdown>
    </>
  )
}
