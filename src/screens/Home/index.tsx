import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Logo from "../../assets/logo.svg";

import { Car } from "../../components/Car";

import {
  Container,
  Header,
  HeaderContent,
  TotalCars,
  CarsList,
} from "./styles";

export function Home() {
  const navigation = useNavigation<any>();

  const carData = {
    brand: "Audi",
    name: "R8",
    rent: {
      period: "Ao dia",
      price: 120,
    },
    thumbnail:
      "https://www.webmotors.com.br/imagens/prod/348374/AUDI_R8_5.2_V10_FSI_GASOLINA_COUPE_QUATTRO_S_TRONIC_34837414435717230.webp?s=fill&w=236&h=135&q=70&t=true",
  };

  function handleCarDetails() {
    navigation.navigate("CarDetails");
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      <CarsList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => (
          <Car data={carData} onPress={handleCarDetails} />
        )}
      />
    </Container>
  );
}
