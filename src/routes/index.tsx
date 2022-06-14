import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { AppTabRoutes } from "./appTab.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <AppTabRoutes />
    </NavigationContainer>
  );
}
