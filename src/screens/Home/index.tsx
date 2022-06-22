import { AntDesign } from "@expo/vector-icons";
import { getDate } from "date-fns";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { AppointmentCard } from "../../components/AppointmentCard";
import { DateCard } from "../../components/DateCard";
import { getDayName, getDayDate, getWeekDays } from "../../utils/getWeekDay";
import {
  Avatar,
  Container,
  Greeting,
  GreetingContent,
  GreetingDate,
  GreetingText,
  Header,
  WeekdaysMenu,
} from "./styles";
import { appointments } from "../../utils/fakeData";

export function Home() {
  const [today, setToday] = useState("");
  const [todayName, setTodayName] = useState("");
  const [weekDays, setWeekDays] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");

  function handleDaySelect(date: Date) {
    setSelectedDate(getDayDate(date));
  }

  useEffect(() => {
    setToday(getDayDate(new Date()));
    setTodayName(getDayName(new Date(), true));
    setWeekDays(getWeekDays());
    setSelectedDate(today);
  }, [today]);

  return (
    <Container>
      <StatusBar style="dark" />
      <Header>
        <Greeting>
          <Avatar source={{ uri: "https://github.com/rodlemos.png" }} />
          <GreetingContent>
            <GreetingDate>{`${todayName}, ${today}`}</GreetingDate>
            <GreetingText>Olá, Rodrigo.</GreetingText>
          </GreetingContent>
        </Greeting>

        <AntDesign name="logout" size={30} />
      </Header>

      <WeekdaysMenu>
        {weekDays.map((item) => (
          <DateCard
            key={item}
            number={String(getDate(item))}
            title={getDayName(item)}
            active={getDayDate(item) === selectedDate}
            onPress={() => handleDaySelect(item)}
          />
        ))}
      </WeekdaysMenu>

      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          getDayDate(item.date) === selectedDate && (
            <AppointmentCard
              date={item.date}
              hour={item.hour}
              patient={item.patient}
              avatar={item.avatar}
              procedure={item.procedure}
              active={item.id === "1"}
            />
          )
        }
        style={{ marginTop: 20 }}
        contentContainerStyle={{ paddingBottom: 90 }}
      />
    </Container>
  );
}
