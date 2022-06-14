import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import styled from "styled-components/native";

type Props = {
  active: boolean;
};

export const Container = styled(RectButton)<Props & RectButtonProps>`
  flex-direction: row;
  justify-content: space-between;
  margin: 4px 24px;
  padding: 20px;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.primary_dark : theme.colors.primary_medium};
  border-radius: 24px;
`;

export const Photo = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const Details = styled.View`
  flex: 1;
  margin-left: 20px;
`;

export const Hour = styled.Text`
  text-align: center;
  padding-vertical: 2px;
  font-size: 16px;
  font-weight: 600;
  width: 70px;
  background-color: white;
  border-radius: 40px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
`;

export const Patient = styled.Text<Props>`
  margin-top: 5px;
  font-size: 22px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme, active }) =>
    active ? theme.colors.text_light : theme.colors.text};
`;

export const Procedure = styled.Text<Props>`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.light};
  color: ${({ theme, active }) =>
    active ? theme.colors.text_light : theme.colors.text};
`;
