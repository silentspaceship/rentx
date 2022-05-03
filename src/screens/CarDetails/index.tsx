import React from "react";
import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

import speedSvg from "../../assets/speed.svg";
import acceleration from "../../assets/acceleration.svg";
import force from "../../assets/force.svg";
import gasoline from "../../assets/gasoline.svg";
import exchange from "../../assets/exchange.svg";
import people from "../../assets/people.svg";

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Accessories,
  Footer,
} from "./styles";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";

export function CarDetails() {
  const navigation = useNavigation<any>();

  function handleConfirmRental() {
    navigation.navigate("Schedule");
  }

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <CarImages>
        <ImageSlider
          imagesUrl={[
            "https://www.motortrend.com/uploads/sites/5/2020/06/2020-lamborghini-aventador.png",
          ]}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Aventador</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$580</Price>
          </Rent>
        </Details>

        <Accessories>
          <Accessory name={"360km/h"} icon={speedSvg} />
          <Accessory name={"2.5s"} icon={acceleration} />
          <Accessory name={"730 HP"} icon={force} />
          <Accessory name={"Gasolina"} icon={gasoline} />
          <Accessory name={"Auto"} icon={exchange} />
          <Accessory name={"2 pessoas"} icon={people} />
        </Accessories>

        <About>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus cumque
          dolor voluptatibus nesciunt ratione nemo alias placeat beatae, vitae
          error optio soluta?
        </About>
      </Content>

      <Footer>
        <Button
          title="Escolher período do aluguel"
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
}
