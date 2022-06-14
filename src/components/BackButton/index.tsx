import React from "react";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { Container } from "./styles";

type BackButtonProps = {
  color?: "light" | "dark";
};

export function BackButton({ color = "dark" }: BackButtonProps) {
  const { colors } = useTheme();

  return (
    <Container>
      <Feather
        name="chevron-left"
        size={25}
        color={color === "dark" ? colors.text : colors.text_light}
      />
    </Container>
  );
}
