import { Feather } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { BorderlessButton, FlatList } from "react-native-gesture-handler";
import { useTheme } from "styled-components/native";
import { BackButton } from "../../components/BackButton";
import { HistoryItem } from "../../components/HistoryItem";
import { Separator } from "../../components/Separator";
import { history } from "../../utils/fakeData";
import {
  Age,
  Buttons,
  Container,
  Date,
  Header,
  Hour,
  Name,
  NextAppointment,
  PatientData,
  PatientInfo,
  Summary,
  Title,
} from "./styles";

export function Patient() {
  const { colors } = useTheme();
  const route = useRoute();
  const { appointment } = route.params;
  console.log(appointment);

  return (
    <Container>
      <StatusBar style="light" />
      <Header>
        <Buttons>
          <BackButton color="light" />
          <BorderlessButton>
            <Feather
              name="more-horizontal"
              size={30}
              color={colors.text_light}
            />
          </BorderlessButton>
        </Buttons>

        <PatientInfo>
          <Name>{appointment.patient}</Name>
          <Age>26 anos</Age>
        </PatientInfo>
      </Header>

      <Summary>
        <Title>Próxima consulta</Title>
        <NextAppointment>
          <Date>14/07/2022 às</Date>
          <Hour>14:30</Hour>
        </NextAppointment>
      </Summary>

      <PatientData>
        <Title>Histórico do Paciente</Title>
        <FlatList
          data={history}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <HistoryItem date={item.date} tag={item.procedure} />
          )}
          ItemSeparatorComponent={() => <Separator />}
          contentContainerStyle={{ paddingBottom: 5 }}
        />
      </PatientData>
    </Container>
  );
}
