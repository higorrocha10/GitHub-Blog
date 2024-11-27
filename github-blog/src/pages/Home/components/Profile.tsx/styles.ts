import styled from "styled-components";

export const ProfileContainer = styled.section`
  margin: 0 auto;
  padding: 2rem;
  background: ${(props) => props.theme.colors["base-profile"]};
  border-radius: 10px;
  box-shadow: 0 2px 28px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  gap: 2rem;

  img {
    display: block;
    width: 148px;
    height: 148px;
    border-radius: 10px;
  }
`;

export const ProfileInfo = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  h1 {
    color: ${(props) => props.theme.colors["base-title"]};
    line-height: 130%;
  }

  a {
    text-decoration: none;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.75rem;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.blue};
    border-bottom: 2px solid transparent;
    cursor: pointer;

    &:hover {
      border-bottom: 2px solid ${(props) => props.theme.colors.blue};
      transition: all 0.5s;
    }

    svg {
      font-size: 12px;
    }
  }
`;

export const ProfileBio = styled.p`
  margin-top: 1rem;
  line-height: 160%;
`;

export const ProfileFooter = styled.footer`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  gap: 24px;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;
