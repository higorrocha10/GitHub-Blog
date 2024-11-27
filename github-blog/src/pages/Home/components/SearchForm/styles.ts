import styled from "styled-components";

export const SearchContainer = styled.form`
  margin-top: 4.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      color: ${(props) => props.theme.colors["base-subtitle"]};
      font-size: 1.125rem;
    }

    span {
      color: ${(props) => props.theme.colors["base-span"]};
      font-size: 0.875rem;
    }
  }

  input {
    background: ${(props) => props.theme.colors["base-input"]};
    color: ${(props) => props.theme.colors["base-text"]};
    padding: 0.75rem 1rem;
    border-radius: 6px;
    border: 2px solid ${(props) => props.theme.colors["base-border"]};
    font-size: 1rem;

    &::placeholder {
      color: ${(props) => props.theme.colors["base-label"]};
      font-weight: bold;
    }
  }
`;
