import React from "react";
import { Container, Message, MessageTime, Title } from "./styles";
import { getDayDate } from "../../utils/date-fns";

type NotificationCardProps = {
  title: string;
  message: string;
  date: string;
};

export function NotificationCard({
  date,
  message,
  title,
}: NotificationCardProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Message>{message}</Message>
      <MessageTime>{date}</MessageTime>
    </Container>
  );
}
