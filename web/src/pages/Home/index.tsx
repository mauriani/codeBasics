import { useEffect, useState, useContext } from "react";

import axios from "axios";

import * as Dialog from "@radix-ui/react-dialog";

import { GroupBanner } from "../../components/GroupBanner";
import { CreateBanner } from "../../components/CreateBanner";
import { CreateAdModal } from "../../components/CreateAdModal";
import { Header } from "../../components/Header";
import { Container } from "./styles";

import { GroupContext, GroupProps } from "../../context/GroupContext";
import { Loading } from "../../components/Loading";

export function Home() {
  const { group, loading } = useContext(GroupContext);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <Header />

          <Dialog.Root>
            <CreateBanner />

            <CreateAdModal />
          </Dialog.Root>

          <footer>
            {Object.values(group).map((item, key) => {
              return (
                <div key={key}>
                  <GroupBanner
                    title={item?.titulo}
                    description={item?.descricao}
                    id={item?.id}
                    bannerUrl="https://avatars.githubusercontent.com/u/59673868?v=4"
                  />
                </div>
              );
            })}
          </footer>
        </Container>
      )}
    </>
  );
}
