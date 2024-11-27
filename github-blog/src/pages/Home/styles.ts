import styled from "styled-components";

export const HomeContainer = styled.main`
  width: 100%;
  max-width: 56rem;
  margin: -7rem auto;
  padding: 1rem;
`;

export const HomeContent = styled.section`
  width: 100%;
`;

export const PostsContent = styled.section`
  margin-top: 3rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;
