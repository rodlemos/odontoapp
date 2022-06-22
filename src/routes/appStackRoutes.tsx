import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Patient } from "../screens/Patient";
import { AppTabRoutes } from "./appTab.routes";

export function AppStackRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="AppTabRoutes" component={AppTabRoutes} />
      <Screen name="Patient" component={Patient} />
    </Navigator>
  );
}
