import { useState, useEffect, FormEvent } from "react";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CaretLeft } from "phosphor-react";
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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignUp(e: FormEvent) {
    e.preventDefault();

    try {
      const schema = Yup.object().shape({
        password: Yup.string()
          .required("Senha é obrigatório")
          .min(8, "Mínimo seis caracteres"),
        email: Yup.string()
          .required("E-mail obrigatório")
          .email("Digite um e-mail válido"),
        name: Yup.string().required("Nome obrigatório"),
      });

      await schema.validate({ name, email, password });

      const response = await api.post("/sign-up", {
        nome: name,
        email: email,
        senha: password,
      });

      console.log(response.data);

      const { status, message } = response.data;
      if (status == 200) {
        toast.success(message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        navigate("/");
      } else {
        toast.error(message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        return;
      }
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
              placeholder="nome"
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

        <Link to="/">
          <CaretLeft size={32} />
          Voltar para Login
        </Link>
      </Content>
    </Container>
  );
}
