import styled from "styled-components/native";

export const Container = styled.Text`
  background-color: ${({ theme }) => theme.colors.primary_dark};
  padding: 2px 8px;
  border-radius: 40px;
  color: white;
`;
