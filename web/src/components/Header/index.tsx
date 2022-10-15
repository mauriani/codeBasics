import { SignOut } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { theme } from "../../styles/theme";

import { Container, Logo, Routing } from "./styles";

export function Header() {
  return (
    <Container>
      <Logo>
        <h1>codeBasics</h1>
      </Logo>

      <Routing>
        <NavLink to="/">Salas</NavLink>
        <NavLink to="users">Usuarios</NavLink>
        <button>
          Sair
          <SignOut size={28} color={theme.colors.purple} />
        </button>
      </Routing>
    </Container>
  );
}
