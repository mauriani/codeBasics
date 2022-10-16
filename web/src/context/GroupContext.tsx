import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

interface GroupContextProviderProps {
  children: React.ReactNode;
}

interface GroupProps {
  id: number;
  title: string;
  descricao: string;
  minUserRanking: number;
  daysOfWeek: string[];
  horaInicio: string;
  horaFim: string;
  discordLink: string;
}

interface GroupContextProps {
  group: GroupProps[];
  loadGroups: () => void;
  joinGroup: () => void;
  deleteGroup: (id: number) => void;
}

export const GroupContext = createContext({} as GroupContextProps);

export function GroupContextProvider({ children }: GroupContextProviderProps) {
  const [group, setGroup] = useState<GroupProps[]>([]);

  const navigate = useNavigate();

  async function loadGroups() {
    const group = await api.get("/grupos");

    setGroup(group);
  }

  function joinGroup(ranking: number) {
    group.map((group) => group.minUserRanking >= ranking && navigate("/chat"));
  }

  function deleteGroup(id: number) {
    const removeGroup = group.filter((group) => group.id !== id);

    setGroup([...group, removeGroup]);
  }

  useEffect(() => {
    loadGroups();
  }, [group]);

  return (
    <GroupContext.Provider
      value={{ group, loadGroups, joinGroup, deleteGroup }}
    >
      {children}
    </GroupContext.Provider>
  );
}
