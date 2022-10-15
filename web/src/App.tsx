import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <BrowserRouter>
      <ToastContainer autoClose={3000} />
      <Router />
      <GlobalStyle />
    </BrowserRouter>
  );
}
