import { Header } from '@/components/Header';
import { PostInfo } from '@/components/PostInfo';
import { useGithub } from '@/contexts/useGithub';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import remarkGfm from 'remark-gfm';
import styled from 'styled-components';

const Container = styled.div`
  width: 864px; 
  margin: 0 auto;
  margin-bottom: 50px; 
  white-space: pre-wrap;
  font-size: ${({theme}) => theme.fontSize.textM};

  a {
    ${({theme}) => theme.link};
  }
`

export const PostPage = () => {
  const { postId } = useParams();
  const { githubPostDataFn, githubPost } = useGithub();
  
  useEffect(()=> {
      if (postId) {
      githubPostDataFn(Number(postId));
    }
  }, [])

  return (
    <>
      <Helmet title="Post Page" />
      <Header />
      <PostInfo />
      <Container>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          children={githubPost?.body}
        >
          {/* { githubPost?.body} */}
        </ReactMarkdown>
      </Container>
    </>
  )
}
