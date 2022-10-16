import { Stack } from "phosphor-react";

import { Container, Trigger } from "./styles";
export function CreateBanner() {
  return (
    <Container>
      <div>
        <div>
          <strong>
            Gostaria de encontrar pessoas para compartilhar conhecimento?
          </strong>
          <span>
            Entao seu grupo de estudos e comece a interagir, bons estudos!!
          </span>
        </div>

        <Trigger className="">
          <Stack size={24} />
          Criar Grupo
        </Trigger>
      </div>
    </Container>
  );
}
