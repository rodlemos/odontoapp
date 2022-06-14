import React from "react";
import { Container, Number, Title } from "./styles";

type DateCardProps = {
  number: string;
  title: string;
  active?: boolean;
};

export function DateCard({ number, title, active = false }: DateCardProps) {
  return (
    <Container active={active}>
      <Number active={active}>{number}</Number>
      <Title active={active}>{title}</Title>
    </Container>
  );
}
