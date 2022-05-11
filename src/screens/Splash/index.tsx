import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import BrandSvg from "../../assets/brand.svg";
import LogoSvg from "../../assets/logo.svg";

import { Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  runOnJS,
} from "react-native-reanimated";

const WIDTH = Dimensions.get("window").width;

import { Container } from "./styles";

export function Splash() {
  const navigation = useNavigation<any>();

  const splashAnimation = useSharedValue(0);

  const brandStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 20, 50], [1, 0, 0]),
    };
  });

  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value, [0, 20, 50], [0, 0, 1]),
    };
  });

  function startApp() {
    navigation.navigate("Home");
  }

  useEffect(() => {
    splashAnimation.value = withTiming(
      50,
      {
        duration: 1000,
      },
      () => {
        "worklet";
        runOnJS(startApp)();
      }
    );
  }, []);

  return (
    <Container>
      <Animated.View style={[brandStyle, { position: "absolute" }]}>
        <BrandSvg width={80} height={50} />
      </Animated.View>

      <Animated.View style={[logoStyle, { position: "absolute" }]}>
        <LogoSvg width={180} height={20} />
      </Animated.View>
    </Container>
  );
}
