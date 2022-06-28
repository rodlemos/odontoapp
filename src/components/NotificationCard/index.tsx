import React from "react";
import { Container, Message, MessageTime } from "./styles";
import { getDayDate } from "../../utils/date-fns";

export function NotificationCard() {
  return (
    <Container>
      <Message>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio similique
        inventore voluptatibus nulla iste, cumque blanditiis autem tempora ab
        illo!
      </Message>
      <MessageTime>{getDayDate(new Date())}</MessageTime>
    </Container>
  );
}
