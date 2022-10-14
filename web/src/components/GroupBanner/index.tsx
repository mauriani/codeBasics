import { Star } from "phosphor-react";
import { theme } from "../../styles/theme";
import { Container } from "./styles";

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
  return (
    <Container>
      <header>
        <h1>
          Ranking 5 <Star size={16} weight="fill" color={theme.colors.yellow} />
        </h1>
        <img src={bannerUrl} />
      </header>

      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">{title}</strong>
        <span className="text-zinc-300 text-sm block">{description}</span>
      </div>
    </Container>
  );
}
