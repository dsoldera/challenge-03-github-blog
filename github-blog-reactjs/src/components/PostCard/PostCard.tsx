import { formatDistanceToNow } from "date-fns";
import { Body, Card, Title } from "./styles";

export interface CardProps {
  id: number | undefined
  title: string | undefined
  state?: string
  created_at?: string
  body?: string
  number: number | undefined
}

export const PostCard = ({ id, title, body, number, created_at}: CardProps) => {
  const cuttedText = body?.substring(0, 183);

  return (
    <Card key={id}>
      <a href={`/post/${number}`}>
        <Title>{title}</Title>
        <span>
          {formatDistanceToNow(String(created_at), {
            addSuffix: true
          })}
        </span>
        <Body>
          { cuttedText }...
        </Body>
      </a>
    </Card>
  )
}
