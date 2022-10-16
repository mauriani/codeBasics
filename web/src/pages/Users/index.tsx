import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { UserCard } from "../../components/UserCard";
import { Container, Content } from "./styles";

interface UserProps {
  name: string;
  email: string;
  password: string;
}

export function Users() {
  const [users, setUsers] = useState<UserProps[]>([]);

  async function loadUsers() {
    const user = await localStorage.getItem("users");

    setUsers(JSON.parse(user || ""));
  }

  useEffect(() => {
    loadUsers();
  }, [users]);
  return (
    <Container>
      <Header />
      <Content>
        {users.map((user) => (
          <UserCard
            name={user.name}
            email={user.email}
            bannerUrl={`https://ui-avatars.com/api/?name=${user.name}`}
          />
        ))}
      </Content>
    </Container>
  );
}
