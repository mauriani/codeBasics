import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  height: auto;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 40px;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;

    div {
      text-align: center;
      strong {
        font-size: 1.5rem;
      }
    }
  }
`;

export const Trigger = styled(Dialog.Trigger)`
  padding: 12px 16px;
  background: ${theme.colors.purple};
  border: 1px solid ${theme.colors.purple};
  color: ${theme.colors.white};
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;

  &:hover {
    background: ${theme.colors.purple};
    border: 1px solid ${theme.colors.purple};
  }
`;
