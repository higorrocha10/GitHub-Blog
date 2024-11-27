import styled from "styled-components";

export const PostDetailsContainer = styled.main`
  width: 100%;
  max-width: 56rem;
  margin: -7rem auto;
`;

export const PostDetailsHeader = styled.section`
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);
  background: ${(props) => props.theme.colors["base-profile"]};

  header nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 20px;

    a {
      text-decoration: none;
      font-weight: bold;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.75rem;
      text-transform: uppercase;
      color: ${(props) => props.theme.colors.blue};
      cursor: pointer;
      border-bottom: 2px solid transparent;

      &:hover {
        border-bottom: 2px solid ${(props) => props.theme.colors.blue};
        transition: all 0.5s;
      }

      svg {
        font-size: 12px;
      }
    }
  }

  section h1 {
    color: ${(props) => props.theme.colors["base-title"]};
    margin-bottom: 1rem;
    font-size: 2rem;
    line-height: 130%;
  }

  footer {
    display: flex;

    align-items: center;
    gap: 2rem;
    color: ${(props) => props.theme.colors["base-span"]};

    span {
      display: flex;
      align-items: center;

      svg {
        margin-right: 0.5rem;
      }
    }
  }
`;

export const PostDetailsContent = styled.section`
  padding: 2rem;
  margin-top: 2.5rem;
  line-height: 160%;

  img {
    width: 100%;
    margin-top: 2rem;
  }

  div {
    img {
      display: block;
      margin: 2rem auto;
      width: 70%;
      border-radius: 10px;
    }
  }
`;
