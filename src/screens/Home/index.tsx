import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { getDate, getDay } from "date-fns";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import { AppointmentCard } from "../../components/AppointmentCard";
import { DateCard } from "../../components/DateCard";
import {
  formatDateToDayFirst,
  getDayDate,
  getDayName,
  getWeekDays,
} from "../../utils/date-fns";
import { appointments } from "../../utils/fakeData";
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

export function Home() {
  const [todayName, setTodayName] = useState("");
  const [weekDays, setWeekDays] = useState([]);
  const [selectedDate, setSelectedDate] = useState(getDayDate(new Date()));

  const scrollRef = useRef(null);
  const { navigate } = useNavigation();

  function handleDaySelect(date: Date) {
    setSelectedDate(getDayDate(date));
  }

  function handleOpenAppointment(appointment) {
    navigate("Patient", { appointment });
  }

  useEffect(() => {
    const todayDate = new Date();

    setTodayName(getDayName(todayDate, true));
    setWeekDays(getWeekDays());
  }, []);

  return (
    <Container>
      <StatusBar style="dark" />
      <Header>
        <Greeting>
          <Avatar source={{ uri: "https://github.com/rodlemos.png" }} />
          <GreetingContent>
            <GreetingDate>{`${todayName}, ${formatDateToDayFirst(
              new Date()
            )}`}</GreetingDate>
            <GreetingText>Olá, Rodrigo.</GreetingText>
          </GreetingContent>
        </Greeting>

        <AntDesign name="logout" size={30} />
      </Header>

      <WeekdaysMenu
        ref={scrollRef}
        onLayout={() => {
          const todayWeekDay = getDay(new Date());

          if (todayWeekDay === 0 || todayWeekDay >= 4) {
            scrollRef.current.scrollTo({ x: 455, y: 0, animated: false });
          }
        }}
      >
        {weekDays?.map((item) => (
          <DateCard
            key={item}
            number={String(getDate(item))}
            title={getDayName(item)}
            active={getDayDate(item) === selectedDate}
            onPress={() => handleDaySelect(item)}
            itemKey={item}
          />
        ))}
      </WeekdaysMenu>

      <FlatList
        data={appointments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
          item.date === selectedDate && (
            <AppointmentCard
              hour={item.hour}
              patient={item.patient}
              procedure={item.procedure}
              active={item.id === "1"}
              onPress={() => handleOpenAppointment(item)}
            />
          )
        }
        style={{ marginTop: 20 }}
        contentContainerStyle={{ paddingBottom: 90 }}
      />
    </Container>
  );
}
