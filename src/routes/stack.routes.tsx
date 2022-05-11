import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { CarDetails } from "../screens/CarDetails";
import { Schedule } from "../screens/Schedule";
import { ScheduleDetails } from "../screens/ScheduleDetails";
import { Confirmation } from "../screens/Confirmation";
import { MyCars } from "../screens/MyCars";
import { Splash } from "../screens/Splash";
import { SignIn } from "../screens/SignIn";
import { SignUpFirstStep } from "../screens/SignUp/SignUpFirstStep";
import { SignUpSecondStep } from "../screens/SignUp/SignUpSecondStep";

const Stack = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="SignIn"
    >
      {/* <Stack.Screen name="Splash" component={Splash} /> */}
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUpFirstStep" component={SignUpFirstStep} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CarDetails" component={CarDetails} />
      <Stack.Screen name="Schedule" component={Schedule} />
      <Stack.Screen name="ScheduleDetails" component={ScheduleDetails} />
      <Stack.Screen name="Confirmation" component={Confirmation} />
      <Stack.Screen name="MyCars" component={MyCars} />
    </Stack.Navigator>
  );
}
