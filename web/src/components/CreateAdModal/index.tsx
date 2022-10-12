import { FormEvent, useEffect, useState } from "react";
import { Check, GameController } from "phosphor-react";
import { useForm } from "react-hook-form";
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

interface GameProps {
  id: string;
  title: string;
}

export function CreateAdModal() {
  const [games, setGames] = useState<GameProps[]>([]);
  const [weekDays, setWeekDays] = useState<string[]>([""]);
  const [useVoiceChannel, setUseVoiceChannel] = useState(false);

  const { handleSubmit, register } = useForm();

  async function handleCreateAd(e: FormEvent) {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    if (!data.name) {
      return;
    }

    try {
      await axios.post(`http://localhost:3333/games/${data.game}/ads`, {
        name: data.name,
        yearsPlaying: Number(data.yearsPlaying),
        discord: data.discord,
        weekDays: weekDays.map(Number),
        hourStart: data.hourStart,
        hourEnd: data.hourEnd,
        useVoiceChannel: useVoiceChannel,
      });
      alert("Anuncio criado com sucesso!");
    } catch {
      alert("Erro ao criar anuncio!");
    }
  }

  useEffect(() => {
    axios("http://localhost:3333/games").then((response) => {
      setGames(response.data);
    });
  }, []);
  return (
    <Container>
      <Overlay />

      <ModalContent>
        <Title>Publique um anuncio</Title>

        <form onSubmit={handleSubmit(handleCreateAd)}>
          <Subject>
            <label htmlFor="subject">
              Qual sera o assunto chave dessa sala?
            </label>
            <Input placeholder="Titulo do anuncio" {...register("subject")} />
          </Subject>

          <Description>
            <label htmlFor="description">Descricao</label>
            <textarea
              placeholder="Descreva brevemente um pouco sobre o assunto"
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
              <label htmlFor="discord">Discord</label>
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
                  className={`w-8 h-8 rounded  ${
                    weekDays.includes("0") ? "bg-violet-500" : "bg-zinc-900"
                  }`}
                  title="Domingo"
                >
                  D
                </Button>
                <Button
                  value="1"
                  className={`w-8 h-8 rounded  ${
                    weekDays.includes("1") ? "bg-violet-500" : "bg-zinc-900"
                  }`}
                  title="Segunda"
                >
                  S
                </Button>
                <Button
                  value="2"
                  className={`w-8 h-8 rounded  ${
                    weekDays.includes("2") ? "bg-violet-500" : "bg-zinc-900"
                  }`}
                  title="Terca"
                >
                  T
                </Button>
                <Button
                  value="3"
                  className={`w-8 h-8 rounded  ${
                    weekDays.includes("3") ? "bg-violet-500" : "bg-zinc-900"
                  }`}
                  title="Quarta"
                >
                  Q
                </Button>
                <Button
                  value="4"
                  className={`w-8 h-8 rounded  ${
                    weekDays.includes("4") ? "bg-violet-500" : "bg-zinc-900"
                  }`}
                  title="Quinta"
                >
                  Q
                </Button>
                <Button
                  value="5"
                  className={`w-8 h-8 rounded  ${
                    weekDays.includes("5") ? "bg-violet-500" : "bg-zinc-900"
                  }`}
                  title="Sexta"
                >
                  S
                </Button>
                <Button
                  value="6"
                  className={`w-8 h-8 rounded  ${
                    weekDays.includes("6") ? "bg-violet-500" : "bg-zinc-900"
                  }`}
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

          <label>
            <CheckBox
              checked={useVoiceChannel}
              onCheckedChange={(checked) =>
                checked ? setUseVoiceChannel(true) : setUseVoiceChannel(false)
              }
            >
              <CheckBoxIndicator>
                <Check size={16} color={theme.colors.yellow} />
              </CheckBoxIndicator>
            </CheckBox>
            Costumo me conectar no chat de voz
          </label>

          <Butttons>
            <CloseModal
              type="button"
              className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600"
            >
              Cancelar
            </CloseModal>
            <button
              type="submit"
              className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600"
            >
              <GameController size={24} />
              Encontrar Duo
            </button>
          </Butttons>
        </form>
      </ModalContent>
    </Container>
  );
}
