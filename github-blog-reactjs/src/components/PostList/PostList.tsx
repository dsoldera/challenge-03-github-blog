import { ReactNode } from "react";
import { Container } from "./styles";

interface PostListProps {
  children: ReactNode
}

export const PostList = ({ children }: PostListProps) => {
  return (
    <Container>
      { children}
    </Container>
  )

}
