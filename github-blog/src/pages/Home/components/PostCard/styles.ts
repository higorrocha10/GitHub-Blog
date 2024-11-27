import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const PostContainer = styled(NavLink)`
  width: 100%;
  border: none;
  text-decoration: none;
  padding: 2rem;
  background: ${(props) => props.theme.colors["base-post"]};
  border-radius: 10px;
  border: 2px solid transparent;
  transition: border 0.3s, background 0.3s;
  cursor: pointer;

  &:hover {
    border: 2px solid ${(props) => props.theme.colors.blue};
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;

    margin-bottom: 1.25rem;

    h1 {
      color: ${(props) => props.theme.colors["base-title"]};
      font-size: 1.25rem;
      line-height: 160%;
    }

    span {
      color: ${(props) => props.theme.colors["base-span"]};
      font-size: 0.875rem;
      font-weight: bold;
      white-space: nowrap;
    }
  }

  div {
    display: -webkit-box; /* Define un contenedor flexible */
    -webkit-line-clamp: 5; /* Límite de líneas visibles */
    -webkit-box-orient: vertical; /* Define orientación vertical */
    overflow: hidden;

    p {
      color: ${(props) => props.theme.colors["base-text"]};
      line-height: 160%;
      text-align: justify;
    }
  }
`;
