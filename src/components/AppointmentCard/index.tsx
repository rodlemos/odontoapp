import React from "react";
import { Container, Details, Hour, Patient, Photo, Procedure } from "./styles";

type AppointmentCardProps = {
  // date: Date;
  // patient: string;
  // procedure: string;
  active?: boolean;
};

export function AppointmentCard({ active = false }: AppointmentCardProps) {
  return (
    <Container active={active}>
      <Photo
        source={{
          uri: "https://t4.ftcdn.net/jpg/02/97/24/51/360_F_297245133_gBPfK0h10UM3y7vfoEiBC3ZXt559KZar.jpg",
        }}
      />
      <Details>
        <Hour>18:30</Hour>
        <Patient active={active}>Henrique Martins</Patient>
        <Procedure active={active}>Clareamento</Procedure>
      </Details>
    </Container>
  );
}
