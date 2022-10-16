import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";

import { UserContextProvider } from "./hooks/UserContext";

export function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Router />
      </UserContextProvider>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </BrowserRouter>
  );
}
