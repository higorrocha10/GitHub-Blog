import { PostsProps } from "../..";
import { PostContainer } from "./styles";

import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale"; // Opcional: para traducir al español u otros idiomas

interface PostCardProp {
  post: PostsProps;
}

export function PostCard({ post }: PostCardProp) {
  const { title, created_at, body, number } = post;

  return (
    <PostContainer to={`/${number}`}>
      <header>
        <h1>{title}</h1>

        <span>
          {formatDistanceToNow(new Date(created_at), {
            locale: es,
            addSuffix: true,
          })}
        </span>
      </header>

      <div>
        <p>{body}</p>
      </div>
    </PostContainer>
  );
}
