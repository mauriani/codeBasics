import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { theme } from "../../styles/theme";
import { shade } from "polished";

interface PropsWeeks {
  checkedWeeks: string[];
}

export const Container = styled(Dialog.Portal)``;

export const Overlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;

  inset: 0;
`;

export const ModalContent = styled(Dialog.Content)`
  background: ${theme.colors.background};
  border-radius: 8px;

  position: fixed;
  top: 50%;
  left: 50%;

  width: 90vw;
  max-width: 460px;
  max-height: 95vh;

  transform: translate(-50%, -50%);

  color: ${theme.colors.white};

  padding: 2rem 2.5rem;

  form {
    margin-top: 2rem;
    flex-direction: column;
    gap: 2rem;

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

  gap: 8px;

  label {
    font-size: 1rem;
    font-weight: bold;
    color: ${theme.colors.base_subtitle};
  }

  textarea {
    background: ${theme.colors.base_input};
    padding: 12px 16px;
    border-radius: 6px;
    font-size: 1rem;
    width: 100%;

    border: 1px solid ${theme.colors.base_input};
    transition: all ease-in-out 0.2s;

    &:focus {
      border: 1px solid ${theme.colors.purple_dark};
    }
  }
`;

export const Discord = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: 24px;

  padding: 3px;

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

  > button[type="submit"] {
    background-color: ${theme.colors.purple_dark};
    color: ${theme.colors.white};
    align-items: center;
    border: 0;

    border-radius: 8px;
    padding: 0px 20px;

    svg {
      margin-right: 8px;
      align-items: center;
    }

    &:hover {
      background: ${shade(0.2, theme.colors.purple_dark)};
    }
  }
`;

export const ButtonContainer = styled(ToggleGroup.Root)`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 4px;

  padding: 3px;
`;

export const Button = styled(ToggleGroup.Item)`
  width: 2rem;
  height: 2rem;
  border-radius: 4px;
  border: 0;

  &:focus {
    background: ${theme.colors.purple};
    color: ${theme.colors.white};
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

export const CloseModal = styled(Dialog.Close)`
  height: 48px;
  padding: 0px 20px;
  border: 0;
  border-radius: 10px;

  align-items: center;
  justify-content: center;

  background-color: #ef2a2f;
  color: ${theme.colors.white};

  &:hover {
    background: ${shade(0.2, "#ef2a2f")};
  }
`;
