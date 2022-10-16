import { Star, Chat, Trash } from "phosphor-react";
import { theme } from "../../styles/theme";
import { Container, JoinButton, DeleteButton, ButtonContainer } from "./styles";
import { GroupContext } from "../../context/GroupContext";
import { useContext } from "react";

interface GroupBannerProps {
  title: string;
  description: string;
  bannerUrl: string;
}

export function GroupBanner({
  title,
  description,
  bannerUrl,
}: GroupBannerProps) {
  const { joinGroup } = useContext(GroupContext);

  function join() {
    joinGroup();
  }
  return (
    <Container>
      <header>
        <h1>
          Ranking 5 <Star size={16} weight="fill" color={theme.colors.yellow} />
        </h1>
        <img src={bannerUrl} />
      </header>

      <main>
        <strong>{title}</strong>
        <span>{description}</span>
      </main>
      <ButtonContainer>
        <JoinButton onClick={join}>
          Ingressar
          <Chat weight="fill" />
        </JoinButton>
        <DeleteButton>
          <Trash />
          Deletar Grupo
        </DeleteButton>
      </ButtonContainer>
    </Container>
  );
}
