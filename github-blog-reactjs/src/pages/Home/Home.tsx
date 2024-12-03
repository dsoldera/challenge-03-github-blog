
import { Header } from '@/components/Header'
import { Input } from '@/components/Input'
import { PostCard } from '@/components/PostCard'
import { PostList } from '@/components/PostList'
import { UserCard } from '@/components/UserCard'
import { useGithub } from '@/contexts/useGithub'
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from "react-hook-form"
import { z } from 'zod'

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInput = z.infer<typeof searchFormSchema>;

export const HomePage = () => {
  const { githubSearchPost } = useGithub()
  const { githubPosts } = useGithub()

  const inputRef = useRef<HTMLInputElement | null>(null);

  const { register, handleSubmit, reset } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  });

  const handleSearchPosts = (data: SearchFormInput) => {
    githubSearchPost(data.query);
    reset();

    if (inputRef.current) {
      inputRef.current.blur();
    }
  }
  
  useEffect(()=> {}, [])
  
  return (
    <>
      <Helmet title="Home Page" />
      <Header />
      <UserCard />
      <div style={{ width: '864px', margin: '0 auto'}}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
          <h2>Publicações</h2>
          <p>{ githubPosts?.total_count} publicações</p>
        </div>

        <form onSubmit={handleSubmit(handleSearchPosts)}>
          <Input 
            {...register("query")}
            placeholder='Buscar conteudo'
            ref={(e) => {
              register("query").ref(e);
              inputRef.current = e;
            }}
             />
        </form>

        <PostList>
          { githubPosts?.items.map((githubPost) => {
            return (
              <PostCard
                key={ githubPost?.id }
                created_at={ githubPost.created_at}
                id={ githubPost?.id}
                title={ githubPost?.title}
                body={ githubPost?.body }
                number={ githubPost.number }
              />
            )
          })}
        </PostList>
          
      </div>
    </>
  )
}
