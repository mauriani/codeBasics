import { useEffect, useState } from "react";
import { string } from "yup";
import { Header } from "../../components/Header";
import { UserCard } from "../../components/UserCard";
import { api } from "../../services/api";
import { Container, Content } from "./styles";

interface UserProps {
  id: number;
  nome: string;
  email: string;
  ranking: number;
}

export function Users() {
  const [users, setUsers] = useState<UserProps[]>([]);

  async function loadUsers() {
    const response = await api.get("/usuarios");

    const { users } = response.data;

    if (users) {
      setUsers(users);
    } else {
      setUsers([]);
    }
  }

  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <Container>
      <Header />
      <Content>
        {Object.values(users).map((user) => (
          <UserCard
            name={user.nome}
            email={user.email}
            ranking={user.ranking}
            bannerUrl={`https://ui-avatars.com/api/?name=${user.nome}`}
          />
        ))}
      </Content>
    </Container>
  );
}
