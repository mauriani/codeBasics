import React, { createContext, ReactNode, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { api } from "../services/api";

interface UserContextProviderProps {
  children: ReactNode;
}

interface User {
  id: string;
  nome: string;
  email: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface UserContextType {
  user: User[];
  authentication: (credenciais: SignInCredentials) => Promise<void>;
  loading: boolean;
  logout: () => void;
}

export const UserContext = createContext({} as UserContextType);

export function UserContextProvider({ children }: UserContextProviderProps) {
  const key = "@codebasics:user-01";
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  async function authentication({ email, password }: SignInCredentials) {
    try {
      setLoading(true);

      const response = await api.post("/sign-in", {
        email: email,
        senha: password,
      });

      const { status, message, usuario } = response.data;

      localStorage.setItem(key, JSON.stringify(usuario));

      if (status == 200) {
        toast.success(message, {
          position: toast.POSITION.TOP_RIGHT,
        });

        navigate("/dashboard");
        loadDadosUser();
      } else {
        toast.error(message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  function loadDadosUser() {
    const dados = localStorage.getItem(key);

    if (dados != undefined) {
      setData(JSON.parse(dados));
    } else {
      setData([]);
    }
  }

  function logout() {
    try {
      setLoading(true);
      localStorage.removeItem(key);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
      navigate("/");
    }
  }

  return (
    <UserContext.Provider
      value={{
        user: data,
        authentication,
        logout,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
