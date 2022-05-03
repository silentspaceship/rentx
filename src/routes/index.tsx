import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { StackRoutes } from "./stack.routes";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export function Routes() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
