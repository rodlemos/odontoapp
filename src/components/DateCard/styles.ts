import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import styled from "styled-components/native";

type Props = {
  active?: boolean;
};

export const Container = styled(RectButton)<Props & RectButtonProps>`
  width: 80px;
  height: 100px;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.primary_dark : theme.colors.shape};
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  margin-horizontal: 5px;
`;

export const Number = styled.Text<Props>`
  font-size: 30px;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme, active }) =>
    active ? theme.colors.text_light : theme.colors.text};
`;

export const Title = styled.Text<Props>`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme, active }) =>
    active ? theme.colors.text_light : theme.colors.detail};
`;
