import React from "react";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { BorderlessButtonProps } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Container } from "./styles";

type BackButtonProps = BorderlessButtonProps & {
  color?: "light" | "dark";
};

export function BackButton({ color = "dark", ...rest }: BackButtonProps) {
  const { colors } = useTheme();
  const { goBack } = useNavigation();

  function handleBack() {
    goBack();
  }

  return (
    <Container onPress={handleBack} {...rest}>
      <Feather
        name="chevron-left"
        size={25}
        color={color === "dark" ? colors.text : colors.text_light}
      />
    </Container>
  );
}
