import { UserGithub } from "@/contexts/GithubUserContext"
import api from "@/lib/axios"
import { useQuery } from "@tanstack/react-query"

export const getUser = async ( login: string) => {

  const fetchUser = async () => {
    const response = await api.get<UserGithub>(`/users/${login}`)
    return response.data
  }

  const { data } = await useQuery({
    queryKey: ['user'],
    queryFn: fetchUser
  })
  
  return { data }
}
