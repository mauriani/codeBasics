import { PaperPlaneTilt } from "phosphor-react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Container, Content } from "./styles";

export function Chat() {
  return (
    <Container>
      <Header />
      <Content>
        <header>
          <div>
            <h1>Javascript</h1>
            <h2>
              Host<span>Othavio Rubim</span>
            </h2>
          </div>

          <img src="https://avatars.githubusercontent.com/u/59673868?v=4" />
        </header>
        <main></main>
        <div>
          <Input />
          <button>
            Enviar
            <PaperPlaneTilt weight="fill" size={20} />
          </button>
        </div>
      </Content>
    </Container>
  );
}
