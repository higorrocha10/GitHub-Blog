import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";
import {
  PostDetailsContainer,
  PostDetailsContent,
  PostDetailsHeader,
} from "./styles";
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";

interface PostProps {
  title: string;
  login: string;
  html_url: string;
  comments: number;
  created_at: string;
  body: string;
}

export function PostDetails() {
  const [posts, setPosts] = useState<PostProps>({} as PostProps);
  const { id } = useParams();

  // const fetchPosts = async () => {
  //   const response = await api.get("/repos/higorrocha10/GitHub-Blog/issues/1");

  //   const { title, comments, created_at, body, user } = data;

  //   const newPost: any = {
  //     title: title,
  //     html_url: user.html_url,
  //     comments: comments,
  //     created_at: created_at,
  //     body: body,
  //   };

  //   setPosts(newPost);
  // };

  const fetchPosts = async () => {
    const { data } = await api.get(
      `/repos/higorrocha10/GitHub-Blog/issues/${id}`
    );

    // Extraer datos de la respuesta
    const { title, comments, created_at, user, html_url, body } = data;

    // Crear objeto del post
    const newPosts: PostProps = {
      title,
      login: user.login,
      comments,
      created_at: formatDistanceToNow(new Date(created_at), {
        locale: es,
        addSuffix: true,
      }),
      html_url,
      body,
    };

    // Actualizar el estado con los datos formateados
    setPosts(newPosts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <PostDetailsContainer>
      <PostDetailsHeader>
        <header>
          <nav>
            <NavLink to="/">
              <FontAwesomeIcon icon={faChevronLeft} />
              Volver
            </NavLink>

            <a href={posts.html_url} target="_blank">
              Ver en GitHub
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </nav>
        </header>

        <section>
          <h1>{posts.title}</h1>
        </section>

        <footer>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {posts.login}
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendarDay} />
            {posts.created_at}
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} />
            {posts.comments} comentarios
          </span>
        </footer>
      </PostDetailsHeader>

      <PostDetailsContent>
        <div>
          <Markdown remarkPlugins={[remarkGfm]}>{posts.body}</Markdown>
          {/* <p>{posts.body}</p> */}
        </div>
      </PostDetailsContent>
    </PostDetailsContainer>
  );
}
