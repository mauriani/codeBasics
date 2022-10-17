import { FormEvent, useEffect, useState } from "react";
import { Check, GameController } from "phosphor-react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../Input";
import axios from "axios";

import {
  Container,
  Overlay,
  ModalContent,
  Subject,
  Description,
  Discord,
  DaysOfWeek,
  Days,
  Hours,
  Butttons,
  Title,
  ButtonContainer,
  Button,
  CheckBox,
  CheckBoxIndicator,
  CloseModal,
} from "./styles";
import { theme } from "../../styles/theme";
import { api } from "../../services/api";

interface GroupProps {
  id: string;
  title: string;
  description: string;
  ranking: number;
  discord: string;
  hourStart: number;
  hourEnd: number;
}

export function CreateAdModal() {
  const [games, setGames] = useState<GroupProps[]>([]);
  const [weekDays, setWeekDays] = useState<string[]>([""]);

  const { handleSubmit, register } = useForm<GroupProps>();

  async function handleCreateAd(data: GroupProps) {
    // try {
    //   await api.post("/grupo", {
    //     id: 1,
    //     title: data.title,
    //     descricao: data.description,
    //     minUserRanking: data.ranking,
    //     daysOfWeek: weekDays.map(Number),
    //     horaInicio: data.hourStart,
    //     horaFim: data.hourEnd,
    //     discordLink: data.discord,
    //     dataCriacao: new Date(),
    //     user_id: 1,
    //   });
    //   alert("Grupo criado com sucesso!");
    // } catch {
    //   alert("Erro ao criar grupo!");
    // }
  }

  useEffect(() => {
    // api.post("/").then((response) => {
    //   setGames(response.data);
    // });
  }, []);

  console.log(weekDays);
  return (
    <Container>
      <Overlay />

      <ModalContent>
        <Title>Criar grupo</Title>

        <form onSubmit={handleSubmit(handleCreateAd)}>
          <Subject>
            <label htmlFor="subject">
              Qual sera o assunto chave dessa sala?
            </label>
            <Input placeholder="Titulo do anuncio" {...register("title")} />
          </Subject>

          <Description>
            <label htmlFor="description">Descricao</label>
            <textarea
              placeholder="Descreva o assunto"
              {...register("description")}
            />
          </Description>

          <Discord>
            <div>
              <label htmlFor="ranking">Qual ranking pode acessar?</label>
              <Input
                type="number"
                placeholder="Ranking"
                {...register("ranking")}
              />
            </div>
            <div>
              <label htmlFor="discord">Qual discord de acesso?</label>
              <Input
                id="discord"
                placeholder="Link do grupo aqui"
                {...register("discord")}
              />
            </div>
          </Discord>

          <DaysOfWeek>
            <Days>
              <label htmlFor="weekDays">Quando costuma estudar?</label>

              <ButtonContainer
                type="multiple"
                className="grid grid-cols-4 gap-1"
                value={weekDays}
                onValueChange={setWeekDays}
              >
                <Button
                  value="0"
                  title="Domingo"
                  style={{
                    background: weekDays.includes("0")
                      ? theme.colors.base_input
                      : theme.colors.purple,

                    color: weekDays.includes("0")
                      ? theme.colors.base_text
                      : theme.colors.white,
                  }}
                >
                  D
                </Button>
                <Button
                  value="1"
                  style={{
                    background: weekDays.includes("1")
                      ? theme.colors.base_input
                      : theme.colors.purple,

                    color: weekDays.includes("1")
                      ? theme.colors.base_text
                      : theme.colors.white,
                  }}
                  title="Segunda"
                >
                  S
                </Button>

                <Button
                  value="2"
                  style={{
                    background: weekDays.includes("2")
                      ? theme.colors.base_input
                      : theme.colors.purple,

                    color: weekDays.includes("2")
                      ? theme.colors.base_text
                      : theme.colors.white,
                  }}
                  title="Terca"
                >
                  T
                </Button>
                <Button
                  value="3"
                  style={{
                    background: weekDays.includes("3")
                      ? theme.colors.base_input
                      : theme.colors.purple,

                    color: weekDays.includes("3")
                      ? theme.colors.base_text
                      : theme.colors.white,
                  }}
                  title="Quarta"
                >
                  Q
                </Button>
                <Button
                  value="4"
                  style={{
                    background: weekDays.includes("4")
                      ? theme.colors.base_input
                      : theme.colors.purple,

                    color: weekDays.includes("4")
                      ? theme.colors.base_text
                      : theme.colors.white,
                  }}
                  title="Quinta"
                >
                  Q
                </Button>
                <Button
                  value="5"
                  style={{
                    background: weekDays.includes("5")
                      ? theme.colors.base_input
                      : theme.colors.purple,

                    color: weekDays.includes("5")
                      ? theme.colors.base_text
                      : theme.colors.white,
                  }}
                  title="Sexta"
                >
                  S
                </Button>
                <Button
                  value="6"
                  style={{
                    background: weekDays.includes("6")
                      ? theme.colors.base_input
                      : theme.colors.purple,

                    color: weekDays.includes("6")
                      ? theme.colors.base_text
                      : theme.colors.white,
                  }}
                  title="Sabado"
                >
                  S
                </Button>
              </ButtonContainer>
            </Days>
            <Hours>
              <label htmlFor="hourStart">Qual horario do dia?</label>
              <div>
                <Input
                  type="time"
                  placeholder="De"
                  {...register("hourStart")}
                />
                <Input type="time" placeholder="Ate" {...register("hourEnd")} />
              </div>
            </Hours>
          </DaysOfWeek>

          <Butttons>
            <CloseModal type="button">Cancelar</CloseModal>
            <button type="submit">
              {/* <GameController size={24} /> */}
              Salvar
            </button>
          </Butttons>
        </form>
      </ModalContent>
    </Container>
  );
}
