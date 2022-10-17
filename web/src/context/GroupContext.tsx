import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

interface GroupContextProviderProps {
  children: React.ReactNode;
}

export interface GroupProps {
  id: number;
  titulo: string;
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
  loading: boolean;
}

export const GroupContext = createContext({} as GroupContextProps);

export function GroupContextProvider({ children }: GroupContextProviderProps) {
  const [group, setGroup] = useState<GroupProps[]>([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  async function loadGroups() {
    try {
      setLoading(true);
      const response = await api.get("/grupos");
      const { grupos } = response.data;
      setGroup(grupos);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  function joinGroup() {
    navigate("/chat");
  }

  async function deleteGroup(id: number) {
    try {
      setLoading(true);
      await api.delete("/grupo", {
        data: { grupo_id: id },
      });

      loadGroups();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadGroups();
  }, []);

  return (
    <GroupContext.Provider
      value={{ group, loadGroups, joinGroup, deleteGroup, loading }}
    >
      {children}
    </GroupContext.Provider>
  );
}
