import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";

import { AppProvider } from "./context/index";

export function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Router />
      </AppProvider>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
    </BrowserRouter>
  );
}
