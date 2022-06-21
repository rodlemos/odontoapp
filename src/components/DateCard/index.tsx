import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { Container, Number, Title } from "./styles";

type DateCardProps = RectButtonProps & {
  number: string;
  title: string;
  active?: boolean;
};

export function DateCard({
  number,
  title,
  active = false,
  ...rest
}: DateCardProps) {
  return (
    <Container active={active} {...rest}>
      <Number active={active}>{number}</Number>
      <Title active={active}>{title}</Title>
    </Container>
  );
}
