import { useCallback, useEffect, useState } from "react";
import { PostCard } from "./components/PostCard/index.tsx";
import { Profile } from "./components/Profile.tsx";
import { HomeContainer, HomeContent, PostsContent } from "./styles";
import { api } from "../../lib/axios.ts";
import { SearchFormComponent } from "./components/SearchForm/index.tsx";

export interface PostsProps {
  id: number;
  title: string;
  body: string;
  created_at: string;
  number: number;
}

export function Home() {
  const [posts, setPosts] = useState<PostsProps[]>([] as PostsProps[]);
  const [postsCount, setPostsCount] = useState(0);
  const [filteredPosts, setFilteredPosts] = useState<PostsProps[]>([]); // Para manejar posts filtrados

  const fetchPosts = async () => {
    // https://api.github.com/search/issues?q=is:issue%20is:open%20repo:higorrocha10/GitHub-Blog
    const { data } = await api.get(
      `/search/issues?q=is:issue%20is:open%20repo:higorrocha10/GitHub-Blog`
    );

    setPosts(data.items);
    setPostsCount(data.total_count);
  };

  // Función para manejar la búsqueda de publicaciones
  // Memorizar handleSearchPosts para evitar recreaciones innecesarias
  const handleSearchPosts = useCallback(
    (query: string) => {
      const lowerCaseQuery = query.toLowerCase();

      const filtered = posts.filter((post) =>
        post.title.toLowerCase().includes(lowerCaseQuery)
      );

      setFilteredPosts(filtered);
      setPostsCount(filtered.length);
    },
    [posts] // Solo se recreará si cambia la dependencia `posts`
  );

  useEffect(() => {
    fetchPosts();
  }, []);

  // Sincronizar filteredPosts con posts cuando posts cambie
  // Solo se actualiza después de que los datos en posts estén disponibles.
  useEffect(() => {
    setFilteredPosts(posts);
  }, [posts]);

  return (
    <HomeContainer>
      <Profile />

      <HomeContent>
        <SearchFormComponent
          postsCount={postsCount}
          onSearch={handleSearchPosts}
        />
        <PostsContent>
          {/* {posts && posts.map((post) => <PostCard key={post.id} post={post} />)} */}

          {filteredPosts &&
            filteredPosts.map((post) => <PostCard key={post.id} post={post} />)}
        </PostsContent>
      </HomeContent>
    </HomeContainer>
  );
}
