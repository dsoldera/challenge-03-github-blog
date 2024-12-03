import { useGithub } from "@/contexts/useGithub";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useNavigate } from "react-router-dom";
import { BoxLinks, Link, Post, SocialLinks, Title } from "./styles";

export const PostInfo = ()  =>{
  const { githubPost, githubUser } = useGithub();
  const postDate = githubPost?.updated_at ? githubPost.updated_at : githubPost?.created_at;
  let navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  }

  return (
    <>
      <Post>
        <BoxLinks>
          <Link onClick={handleGoBack}> 
            <FontAwesomeIcon icon={faChevronLeft} />
              <span>Voltar</span>
            </Link>
          <Link href={ githubPost?.html_url} target="_blank">
            <span> Ver no Github</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />  
          </Link>
        </BoxLinks>
        <Title>{ githubPost?.title }</Title>
        <SocialLinks>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            { githubUser?.login }
          </span>
          {postDate && (
          <span>
            <FontAwesomeIcon icon={faCalendarDay} />
            {formatDistanceToNow(new Date(postDate), {
                  addSuffix: true,
                  locale: ptBR,
              })}
          </span>
          )}
          <span>
            <FontAwesomeIcon icon={faComment} />
            { githubPost?.comments === 0 ? (
              <span>{ githubPost?.comments } Comentário</span>
            ): (
              <span>{ githubPost?.comments } Comentários</span>
            )}
          </span>
        </SocialLinks>
      </Post>
    </>
  )
}
