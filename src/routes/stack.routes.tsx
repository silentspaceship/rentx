import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { CarDetails } from "../screens/CarDetails";
import { Schedule } from "../screens/Schedule";
import { ScheduleDetails } from "../screens/ScheduleDetails";
import { ScheduleComplete } from "../screens/ScheduleComplete";

const Stack = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CarDetails" component={CarDetails} />
      <Stack.Screen name="Schedule" component={Schedule} />
      <Stack.Screen name="ScheduleDetails" component={ScheduleDetails} />
      <Stack.Screen name="ScheduleComplete" component={ScheduleComplete} />
    </Stack.Navigator>
  );
}
