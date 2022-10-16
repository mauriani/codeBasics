import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  flex-shrink: 1;
  flex-direction: column;
  padding: 1rem;
  max-width: 50rem;
  height: auto;
  background: ${theme.colors.base_card};
  border: 2px solid ${theme.colors.base_card};
  border-radius: 6px;
  transition: all ease-in-out 0.2s;

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

  main {
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

export const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const JoinButton = styled.button`
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
`;

export const DeleteButton = styled.button`
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
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.red};
    color: ${theme.colors.red};
  }
`;
