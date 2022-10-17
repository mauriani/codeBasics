import { Star } from "phosphor-react";
import { theme } from "../../styles/theme";
import { Container } from "./styles";

interface UserCardProps {
  name: string;
  email: string;
  bannerUrl: string;
  ranking: number;
}

export function UserCard({ name, email, ranking, bannerUrl }: UserCardProps) {
  return (
    <Container>
      <div>
        <strong>{name}</strong>
        <span>{email}</span>
      </div>
      <div>
        <h1>
          Ranking {ranking}{" "}
          <Star size={16} weight="fill" color={theme.colors.yellow} />
        </h1>
        <img src={bannerUrl} />
      </div>
    </Container>
  );
}
