import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled(LinearGradient).attrs(({ theme }) => ({
  colors: theme.colors.gradient_light,
  start: { x: 0, y: 1 },
  end: { x: 0.5, y: 0.5 },
}))`
  height: 300px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  justify-content: center;
`;

export const Buttons = styled.View`
  margin-horizontal: 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PatientInfo = styled.View`
  align-items: center;
`;

export const Photo = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 60px;
`;

export const Name = styled.Text`
  margin-top: 10px;
  font-size: 26px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: #f8f7ff;
`;

export const Age = styled.Text`
  padding: 4px 8px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  margin-top: 10px;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.detail};
`;

export const PatientData = styled.View`
  height: 200px;
  margin: 20px 24px;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 16px;
  padding: 10px;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 10px;
`;

export const Summary = styled.View`
  background-color: ${({ theme }) => theme.colors.primary_medium};
  margin-top: 20px;
  margin-horizontal: 24px;
  border-radius: 16px;
  padding: 10px;
`;

export const NextAppointment = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Date = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 18px;
`;

export const Hour = styled.Text`
  margin-left: 5px;
  padding: 2px 8px;
  border-radius: 60px;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 18px;
  background-color: ${({ theme }) => theme.colors.primary_dark};
  color: ${({ theme }) => theme.colors.text_light};
`;
