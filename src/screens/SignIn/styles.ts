import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const Container = styled(LinearGradient).attrs({
  colors: ["#202c3b", "#274C77"],
  start: { x: 0, y: 1 },
  end: { x: 0.5, y: 0.5 },
})`
  flex: 1;
`;
