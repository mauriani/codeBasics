import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-shrink: 1;
  flex-direction: column;
  padding: 1rem;
  width: 20rem;
  height: auto;
  gap: 12px;
  background: ${theme.colors.base_card};
  border: 2px solid ${theme.colors.base_card};
  border-radius: 6px;
  transition: all ease-in-out 0.2s;
  cursor: pointer;

  &:hover {
    border: 2px solid ${theme.colors.purple};
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    h1 {
      font-size: 1rem;
      color: ${theme.colors.base_title};
    }

    img {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
    }
    strong {
      font-size: 1.2rem;
      color: ${theme.colors.base_title};
    }

    span {
      font-size: 1rem;
      color: ${theme.colors.base_text};
    }
  }
`;
