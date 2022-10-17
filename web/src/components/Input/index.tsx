import { InputHTMLAttributes } from "react";
import { useForm } from "react-hook-form";

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProps) {
  const { register } = useForm();

  return <Container {...props} />;
}
