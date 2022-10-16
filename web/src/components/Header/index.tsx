import { SignOut } from "phosphor-react";
import { theme } from "../../styles/theme";

import { Container, Logo, Routing, Link } from "./styles";

export function Header() {
  return (
    <Container>
      <Logo>
        <h1>codeBasics</h1>
      </Logo>

      <Routing>
        <Link
          to="/dashboard"
          style={({ isActive }) =>
            isActive
              ? {
                  borderBottom: `2px solid ${theme.colors.purple_dark}`,
                }
              : {
                  borderBottom: `2px solid ${theme.colors.background}`,
                }
          }
        >
          Salas
        </Link>
        <Link to="/users">Usuarios</Link>
        <button>
          Sair
          <SignOut size={28} color={theme.colors.purple} />
        </button>
      </Routing>
    </Container>
  );
}
