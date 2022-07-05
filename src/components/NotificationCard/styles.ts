import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.primary_medium};
  border-radius: 16px;
  margin-vertical: 5px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 5px;
`;

export const Message = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`;

export const MessageTime = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.detail};
  margin-top: 5px;
  align-self: flex-end;
`;
