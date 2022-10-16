import { useContext } from "react";
import { SignOut } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../hooks/UserContext";
import { theme } from "../../styles/theme";

import { Container, Logo, Routing } from "./styles";

export function Header() {
  const { logout } = useContext(UserContext);

  function handleLogout() {
    logout();
  }
  return (
    <Container>
      <Logo>
        <h1>codeBasics</h1>
      </Logo>

      <Routing>
        <NavLink to="/">Salas</NavLink>
        <NavLink to="users">Usuarios</NavLink>
        <button onClick={handleLogout}>
          Sair
          <SignOut size={28} color={theme.colors.purple} />
        </button>
      </Routing>
    </Container>
  );
}
