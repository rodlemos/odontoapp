import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  padding-vertical: 4px;
  align-items: center;
`;

export const Date = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.text};
`;
