import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { AppointmentCard } from "../../components/AppointmentCard";
import { DateCard } from "../../components/DateCard";
import {
  Container,
  Header,
  Avatar,
  Greeting,
  GreetingContent,
  GreetingDate,
  GreetingText,
  WeekdaysMenu,
} from "./styles";

const data = [
  { id: 1, number: "6", title: "Seg" },
  { id: 2, number: "7", title: "Ter" },
  { id: 3, number: "8", title: "Qua" },
  { id: 4, number: "9", title: "Qui" },
  { id: 5, number: "10", title: "Sex" },
  { id: 6, number: "11", title: "Sab" },
  { id: 7, number: "12", title: "Dom" },
];

export function Home() {
  return (
    <Container>
      <StatusBar style="dark" />
      <Header>
        <Greeting>
          <Avatar source={{ uri: "https://github.com/rodlemos.png" }} />
          <GreetingContent>
            <GreetingDate>Sexta-feira,10/06/2022</GreetingDate>
            <GreetingText>Olá, Rodrigo.</GreetingText>
          </GreetingContent>
        </Greeting>

        <AntDesign name="logout" size={30} />
      </Header>

      <WeekdaysMenu>
        {data.map((item) => (
          <DateCard
            key={item.id}
            number={item.number}
            title={item.title}
            active={item.id === 2}
          />
        ))}
      </WeekdaysMenu>

      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        renderItem={({ item }) => <AppointmentCard active={item === 1} />}
        style={{ marginTop: 20 }}
      />
    </Container>
  );
}
