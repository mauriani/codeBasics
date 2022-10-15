import { useEffect, useState } from "react";

import axios from "axios";

import * as Dialog from "@radix-ui/react-dialog";

import { GroupBanner } from "../../components/GroupBanner";
import { CreateBanner } from "../../components/CreateBanner";
import { CreateAdModal } from "../../components/CreateAdModal";
import { Header } from "../../components/Header";
import { Container } from "./styles";

// interface GameProps {
//   id: string;
//   title: string;
//   bannerUrl: string;
//   _count: {
//     ads: number;
//   };
// }

export function Home() {
  const [games, setGames] = useState<[]>([]);

  // useEffect(() => {
  //   axios("http://localhost:3333/games").then((response) => {
  //     setGames(response.data);
  //   });
  // }, []);

  return (
    <Container>
      <Header />

      <Dialog.Root>
        <CreateBanner />

        <CreateAdModal />
      </Dialog.Root>

      <div>
        <GroupBanner
          title="React native com typescript"
          description="Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor sit amet, consectetur adip,"
          bannerUrl="https://avatars.githubusercontent.com/u/59673868?v=4"
        />
        <GroupBanner
          title="React native com typescript"
          description="Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor sit amet, consectetur adip,"
          bannerUrl="https://avatars.githubusercontent.com/u/59673868?v=4"
        />
      </div>
    </Container>
  );
}
