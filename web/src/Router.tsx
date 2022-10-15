import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Users } from "./pages/Users";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}
