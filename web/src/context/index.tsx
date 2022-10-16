import React, { ReactNode } from "react";
import { UserContextProvider } from "./UserContext";
import { GroupContextProvider } from "./GroupContext";

interface AuthProviderProps {
  children: ReactNode;
}

function AppProvider({ children }: AuthProviderProps) {
  return (
    <UserContextProvider>
      <GroupContextProvider>{children}</GroupContextProvider>
    </UserContextProvider>
  );
}

export { AppProvider };
