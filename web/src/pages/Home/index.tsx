import { useEffect, useState } from "react";

import axios from "axios";

import * as Dialog from "@radix-ui/react-dialog";

import { GroupBanner } from "../../components/GroupBanner";
import { CreateBanner } from "../../components/CreateBanner";
import { CreateAdModal } from "../../components/CreateAdModal";

import { Container } from "./styles";

interface GameProps {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

export function Home() {
  const [games, setGames] = useState<GameProps[]>([]);

  useEffect(() => {
    axios("http://localhost:3333/games").then((response) => {
      setGames(response.data);
    });
  }, []);

  return (
    <Container>
      <img src="" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{" "}
        esta aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <GroupBanner
          title="React native com typescript"
          description="Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor sit amet, consectetur adip,"
          bannerUrl="https://avatars.githubusercontent.com/u/59673868?v=4"
        />
      </div>
      <Dialog.Root>
        <CreateBanner />

        <CreateAdModal />
      </Dialog.Root>
    </Container>
  );
}
