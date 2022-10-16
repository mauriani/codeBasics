import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Content = styled.div`
  width: 70rem;
  height: auto;
  margin-top: 20px;
  margin-bottom: 40px;
  border: 1px solid ${theme.colors.base_input};
  border-radius: 8px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;

    div {
      display: flex;
      align-items: center;
      gap: 12px;

      h2 {
        display: flex;
        gap: 6px;
      }
    }

    img {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
    }
  }

  main {
    height: 40rem;
    background: ${theme.colors.base_card};
  }

  div {
    display: flex;
    gap: 12px;
    padding: 12px 16px;

    button {
      padding: 12px 16px;
      background: ${theme.colors.purple};
      border: 1px solid ${theme.colors.purple};
      color: ${theme.colors.white};
      border-radius: 6px;
      display: flex;
      align-items: center;
      gap: 12px;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      &:hover {
        background: ${theme.colors.purple_dark};
        border: 1px solid ${theme.colors.purple_dark};
      }
    }
  }
`;
