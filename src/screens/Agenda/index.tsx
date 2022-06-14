import React from "react";
import { Agenda as CustomAgenda, LocaleConfig } from "react-native-calendars";
import { ptBr } from "./localeConfig";
import { Container } from "./styles";

LocaleConfig.locales["pt-br"] = ptBr;
LocaleConfig.defaultLocale = "pt-br";

export function Agenda() {
  return (
    <Container>
      <CustomAgenda />
    </Container>
  );
}
