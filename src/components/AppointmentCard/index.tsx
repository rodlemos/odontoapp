import React from "react";
import { Container, Details, Hour, Patient, Photo, Procedure } from "./styles";

type AppointmentCardProps = {
  date: Date;
  hour: string;
  patient: string;
  avatar?: string;
  procedure: string;
  active?: boolean;
};

export function AppointmentCard({
  date,
  hour,
  patient,
  avatar,
  procedure,
  active = false,
}: AppointmentCardProps) {
  return (
    <Container active={active}>
      <Photo
        source={{
          uri: avatar,
        }}
      />
      <Details>
        <Hour>{hour}</Hour>
        <Patient active={active}>{patient}</Patient>
        <Procedure active={active}>{procedure}</Procedure>
      </Details>
    </Container>
  );
}
