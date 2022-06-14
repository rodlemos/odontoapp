import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { BorderlessButton, FlatList } from "react-native-gesture-handler";
import { useTheme } from "styled-components/native";
import { BackButton } from "../../components/BackButton";
import { HistoryItem } from "../../components/HistoryItem";
import { Separator } from "../../components/Separator";
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
  Photo,
  Summary,
  Title,
} from "./styles";

const data = [
  {
    id: "1",
    date: "12/06/2021",
    procedure: "Cirurgia",
  },
  {
    id: "2",
    date: "27/08/2021",
    procedure: "Limpeza",
  },
  {
    id: "3",
    date: "06/09/2021",
    procedure: "Clareamento",
  },
  {
    id: "4",
    date: "13/09/2021",
    procedure: "Clareamento",
  },
  {
    id: "5",
    date: "24/09/2021",
    procedure: "Clareamento",
  },
  {
    id: "6",
    date: "15/03/2022",
    procedure: "Limpeza",
  },
];

export function Patient() {
  const { colors } = useTheme();
  return (
    <Container nestedScrollEnabled>
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
          <Photo
            source={{
              uri: "https://image.shutterstock.com/mosaic_250/2780032/1606121245/stock-photo-happy-young-indian-woman-blogger-applicant-teacher-sit-at-home-office-look-at-camera-doing-online-1606121245.jpg",
            }}
          />
          <Name>Angela Moraes</Name>
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
          data={data}
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
