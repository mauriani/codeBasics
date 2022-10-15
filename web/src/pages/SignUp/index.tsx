import { useState, useEffect, FormEvent } from "react";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

import { Input } from "../../components/Input";
import { Container, Content, Logo } from "./styles";

import { api } from "../../services/api";

interface Iuser {
  id: number;
  nome: string;
  email: string;
  senha: string;
}

export function SignUp() {
  const navigate = useNavigate();

  const [users, setUsers] = useState<Iuser[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignUp(e: FormEvent) {
    e.preventDefault();
    try {
      console.log("opa");
      const schema = Yup.object().shape({
        name: Yup.string()
          .required("E-mail obrigatório")
          .email("Digite um e-mail válido"),
        email: Yup.string()
          .required("E-mail obrigatório")
          .email("Digite um e-mail válido"),
        password: Yup.string().min(8, "Mínimo seis caracteres"),
      });

      await schema.validate({ email, password });

      const response = await api.post("/sign-up", {
        email: email,
        senha: password,
        nome: name,
      });

      navigate("/");

      // console.log(response.data);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        toast.error(error.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        toast.error(
          "Ocorreu um erro ao fazer login, verifique as credenciais",
          {
            position: toast.POSITION.TOP_RIGHT,
          }
        );
      }
    }
  }

  return (
    <Container>
      <img
        src="https://cdn.dribbble.com/users/1206328/screenshots/7943649/_____4x.png"
        alt=""
      />
      <Content>
        <div>
          <Logo>
            <h1>
              <span>codeBasics</span>
            </h1>
          </Logo>
          <form onSubmit={handleSignUp}>
            <h1>Cadastra-se</h1>

            <Input
              name="name"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              name="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              name="password"
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </Content>
    </Container>
  );
}
