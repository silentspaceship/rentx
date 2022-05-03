import React from "react";
import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

import { Feather } from "@expo/vector-icons";

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
  Accessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from "./styles";
import { Button } from "../../components/Button";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";

export function ScheduleDetails() {
  const theme = useTheme();

  const navigation = useNavigation<any>();

  function handleConfirmRental() {
    navigation.navigate("ScheduleComplete");
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

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>02/05/22</DateValue>
          </DateInfo>

          <Feather
            name="chevron-right"
            size={RFValue(16)}
            color={theme.colors.text}
          />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>05/05/22</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 580 x 3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 1740</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button
          title="Alugar agora"
          color={theme.colors.success}
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
}
