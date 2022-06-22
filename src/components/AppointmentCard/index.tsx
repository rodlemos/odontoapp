import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { Container, Details, Hour, Name, Procedure } from "./styles";

type AppointmentCardProps = RectButtonProps & {
  hour: string;
  patient: string;
  procedure: string;
  active?: boolean;
};

export function AppointmentCard({
  hour,
  patient,
  procedure,
  active = false,
  ...rest
}: AppointmentCardProps) {
  return (
    <Container active={active} {...rest}>
      <Hour>{hour}</Hour>

      <Details>
        <Name active={active}>{patient}</Name>
        <Procedure active={active}>{procedure}</Procedure>
      </Details>
    </Container>
  );
}
