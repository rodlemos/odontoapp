import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { useTheme } from "styled-components";
import { NotificationCard } from "../../components/NotificationCard";
import { notifications } from "../../utils/fakeData";

export function Notifications() {
  const { colors } = useTheme();

  return (
    <FlatList
      data={notifications}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <NotificationCard
          date={item.date}
          message={item.message}
          title={item.title}
        />
      )}
      style={{ backgroundColor: colors.background }}
      contentContainerStyle={{
        paddingTop: getStatusBarHeight() + 15,
        paddingBottom: useBottomTabBarHeight() + 10,
        paddingHorizontal: 24,
      }}
    />
  );
}
