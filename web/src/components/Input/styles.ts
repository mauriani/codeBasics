import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.input`
  background: ${theme.colors.base_input};
  padding: 12px 16px;
  border-radius: 6px;
  font-size: 1rem;
  width: 100%;

  border: 1px solid ${theme.colors.base_input};
  transition: all ease-in-out 0.2s;

  margin-bottom: 8px;

  &:focus {
    border: 1px solid ${theme.colors.purple_dark};
  }

  &::placeholder {
    color: ${theme.colors.base_label};
  }
`;
