import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components/native";
import { Platform } from "react-native";
import { MaterialCommunityIcons, Ionicons, Feather } from "@expo/vector-icons";
import { Home } from "../screens/Home";
import { Patient } from "../screens/Patient";

export function AppTabRoutes() {
  const { colors } = useTheme();
  const { Navigator, Screen } = createBottomTabNavigator();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary_dark,
        tabBarInactiveTintColor: colors.detail,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          height: 60,
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
          elevation: 0,
          borderTopWidth: 0,
          backgroundColor: colors.shape,
        },
      }}
    >
      <Screen
        name="Calendar"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="calendar-month-outline"
              size={30}
              color={color}
            />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="users" size={40} color={color} />
          ),
        }}
      />
      <Screen
        name="Notifications"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications-outline" size={30} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
