import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { theme } from "../../styles/theme";

export const Container = styled(Dialog.Portal)`
  width: 100%;
  background: ${theme.colors.background};
`;

export const Overlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;

  inset: 0;
`;

export const ModalContent = styled(Dialog.Content)`
  position: fixed;
  background: ${theme.colors.background};
  border-radius: 8px;
  width: 480px;
  padding: 2rem 2.5rem;
  color: ${theme.colors.white};
  left: 50%;
  transform: translateX(-50%);
  transform: translateY(-50%);

  form {
    margin-top: 2rem;
    flex-direction: column;
    gap: 1rem;

    label {
      display: flex;
      align-items: center;
      margin-top: 8px;
      display: flex;
      gap: 8px;
      font-size: 1rem;
      font-weight: bold;
      color: ${theme.colors.base_subtitle};
    }
  }
`;

export const Title = styled(Dialog.Title)`
  font-size: 1.5rem;
  color: ${theme.colors.base_title};
`;

export const Subject = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 1rem;
    font-weight: bold;
    color: ${theme.colors.base_subtitle};
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  label {
    font-size: 1rem;
    font-weight: bold;
    color: ${theme.colors.base_subtitle};
  }
`;

export const Discord = styled.div`
  display: flex;
  gap: 24px;

  div {
    display: flex;
    flex-direction: column;
    gap: 8px;

    label {
      font-size: 1rem;
      font-weight: bold;
      color: ${theme.colors.base_subtitle};
    }
  }
`;

export const DaysOfWeek = styled.div`
  display: flex;
  gap: 24px;
`;

export const Days = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 1rem;
    font-weight: bold;
    color: ${theme.colors.base_subtitle};
  }
`;

export const Hours = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;

  div {
    display: flex;
    gap: 8px;
  }
`;

export const Butttons = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

export const ButtonContainer = styled(ToggleGroup.Root)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(8px, 4fr));
  gap: 4px;
`;

export const Button = styled(ToggleGroup.Item)`
  width: 2rem;
  height: 2rem;
  &:focus {
    background: ${theme.colors.purple};
  }
`;

export const CheckBox = styled(Checkbox.Root)`
  width: 24px;
  height: 24px;
  padding: 4px;
  border-radius: 6px;
  background: ${theme.colors.base_text};
`;

export const CheckBoxIndicator = styled(Checkbox.Indicator)``;

export const CloseModal = styled(Dialog.Close)``;
