import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { AppStackRoutes } from "./appStackRoutes";

export function Routes() {
  return (
    <NavigationContainer>
      <AppStackRoutes />
    </NavigationContainer>
  );
}
