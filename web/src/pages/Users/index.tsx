import { Header } from "../../components/Header";
import { UserCard } from "../../components/UserCard";
import { Container, Content } from "./styles";

export function Users() {
  return (
    <Container>
      <Header />
      <Content>
        <UserCard
          name="Othavio Rubim"
          email="orubim37@gmail.com"
          bannerUrl="https://avatars.githubusercontent.com/u/59673868?v=4"
        />
        <UserCard
          name="Othavio Rubim"
          email="orubim37@gmail.com"
          bannerUrl="https://avatars.githubusercontent.com/u/59673868?v=4"
        />
        <UserCard
          name="Othavio Rubim"
          email="orubim37@gmail.com"
          bannerUrl="https://avatars.githubusercontent.com/u/59673868?v=4"
        />
        <UserCard
          name="Othavio Rubim"
          email="orubim37@gmail.com"
          bannerUrl="https://avatars.githubusercontent.com/u/59673868?v=4"
        />
        <UserCard
          name="Othavio Rubim"
          email="orubim37@gmail.com"
          bannerUrl="https://avatars.githubusercontent.com/u/59673868?v=4"
        />
        <UserCard
          name="Othavio Rubim"
          email="orubim37@gmail.com"
          bannerUrl="https://avatars.githubusercontent.com/u/59673868?v=4"
        />
      </Content>
    </Container>
  );
}
