import React from "react";
import { Container } from "./styles";

type TagsProps = {
  title: string;
};

export function Tags({ title }: TagsProps) {
  return <Container>{title}</Container>;
}
