import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 50rem;
  height: 14rem;
  background: ${theme.colors.base_card};
  border: 2px solid ${theme.colors.base_card};
  border-radius: 6px;
  transition: all ease-in-out 0.2s;
  cursor: pointer;

  &:hover {
    border: 2px solid ${theme.colors.purple};
  }
  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;

    h1 {
      font-size: 1rem;
      color: ${theme.colors.base_title};
    }

    img {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
    strong {
      font-size: 1.25rem;
      color: ${theme.colors.base_title};
    }

    span {
      text-align: left;
    }
  }
`;
