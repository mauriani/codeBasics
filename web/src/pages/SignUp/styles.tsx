import styled from "styled-components";
import { theme } from "../../styles/theme";
import { shade } from "polished";

export const Container = styled.main`
  height: 100vh;
  display: flex;
  align-items: stretch;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const Logo = styled.div`
  h1 {
    font-size: 3rem;
    font-weight: bold;

    span {
      background: -webkit-linear-gradient(#eee, #8047f8);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form {
      margin: 80px 0;
      width: 340px;
      text-align: center;

      h1 {
        margin-bottom: 24px;
      }

      button {
        background: ${theme.colors.purple_dark};
        border-radius: 10px;
        border: 0;
        padding: 0 16px;
        color: ${theme.colors.white};
        height: 56px;
        width: 100%;
        font-weight: 500;
        margin-top: 16px;
        transition: background-color 0.2s;

        &:hover {
          background: ${shade(0.2, theme.colors.purple_dark)};
        }
      }
    }
  }
`;
