import { Stack } from "phosphor-react";

import { Container, Trigger } from "./styles";
export function CreateBanner() {
  return (
    <Container className="bg-nlw-gradient pt-1 w-full self-strech mt-8 rounded-lg overflow-hidden">
      <div className="bg-[#2a2634] px-8 py-6 flex justify-between items-center">
        <div>
          <strong className="text-2xl text-white font-black block">
            Gostaria de encontrar pessoas para compartilhar conhecimento?
          </strong>
          <span className="text-zinc-400 block">
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
