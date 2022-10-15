import { useState, useEffect } from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";

import { Input } from "../../components/Input";
import { Container, Content, Logo } from "./styles";

import { api } from "../../services/api";

interface Iuser {
  id: number;
  nome: string;
  email: string;
  senha: string;
}

export function SignIn() {
  const [users, setUsers] = useState<Iuser[]>([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signIn() {
    try {
      const schema = Yup.object().shape({
        password: Yup.string().required("A senha é obrigatória"),
        email: Yup.string()
          .required("E-mail obrigatório")
          .email("Digite um e-mail válido"),
      });

      await schema.validate({ email, password });

      response = await api.post("/api/");
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        toast.error(error.message);
      } else {
        toast.error("Ocorreu um erro ao fazer login, verifique as credenciais");
      }
    }
  }

  return (
    <Container>
      <Content>
        <div>
          <Logo>
            <h1>
              <span>codeBasics</span>
            </h1>
          </Logo>
          <form action="">
            <h1>Faça seu logon</h1>
            <Input name="email" placeholder="E-mail" />
            <Input name="password" type="password" placeholder="Senha" />

            <button type="submit">Entrar</button>
          </form>
        </div>
      </Content>

      <img
        src="https://cdn.dribbble.com/userupload/3512197/file/original-dd8e590e4245ba420453f432c7880787.jpg?compress=1&resize=752x"
        alt=""
      />
    </Container>
  );
}
