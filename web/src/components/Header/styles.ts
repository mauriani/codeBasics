import styled from "styled-components";
import { theme } from "../../styles/theme";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 100px;
  height: 80px;
`;

export const Logo = styled.div`
  h1 {
    font-size: 2rem;
    font-weight: bold;
  }
`;

export const Routing = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 4px;
    border-radius: 4px;
    border: 1px solid ${theme.colors.background};
    background: ${theme.colors.background};
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    color: ${theme.colors.purple};
    font-size: 1rem;
    font-weight: bold;

    &:hover {
      border: 1px solid ${theme.colors.purple_dark};
      background: ${theme.colors.purple_light};
    }
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 1.5rem;
  color: ${theme.colors.base_text};
  transition: all ease-in-out 0.2s;
  border-bottom: 2px solid ${theme.colors.background};
`;
export const Button = styled.button``;
