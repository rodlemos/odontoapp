import React from "react";
import { Tags } from "../Tags";
import { Container, Date } from "./styles";

type HistoryItemProps = {
  date: string;
  tag: string;
};

export function HistoryItem({ date, tag }: HistoryItemProps) {
  return (
    <Container>
      <Date>{date}</Date>
      <Tags title={tag} />
    </Container>
  );
}
