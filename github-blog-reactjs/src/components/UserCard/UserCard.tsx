import { useGithub } from "@/contexts/useGithub"
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, UserCardBio, UserCardImage, UserCardInfo, UserCardName, UserCardSocial, UserGithubLink } from "./styles"

export const UserCard = () => {
  const { githubUser} = useGithub()
  return (
    <Container>
       <UserCardImage>
        <img src={githubUser?.avatar_url} />
       </UserCardImage>
       <UserCardInfo>
        <UserCardName>
          { githubUser?.name}
          <UserGithubLink href={githubUser?.html_url} target="_blank">
            <span>GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />  
          </UserGithubLink>
        </UserCardName>
        <UserCardBio>
          { githubUser?.bio}
        </UserCardBio>
        <UserCardSocial>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            { githubUser?.login }
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} />
            { githubUser?.company }
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            { githubUser?.followers} seguidores
          </span>
        </UserCardSocial>
       </UserCardInfo>
    </Container>
  )
}
