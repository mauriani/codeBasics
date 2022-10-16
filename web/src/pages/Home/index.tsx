import { useEffect, useState } from "react";

import axios from "axios";

import * as Dialog from "@radix-ui/react-dialog";

import { GroupBanner } from "../../components/GroupBanner";
import { CreateBanner } from "../../components/CreateBanner";
import { CreateAdModal } from "../../components/CreateAdModal";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import { api } from "../../services/api";

export function Home() {
  return (
    <Container>
      <Header />

      <Dialog.Root>
        <CreateBanner />

        <CreateAdModal />
      </Dialog.Root>

      <footer>
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
      </footer>
    </Container>
  );
}
