import React, { useEffect, useState } from "react";
import { FlatList, StatusBar } from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { useTheme } from "styled-components";
import api from "../../services/api";

import { format, parseISO } from "date-fns";

import { AntDesign } from "@expo/vector-icons";

import { BackButton } from "../../components/BackButton";
import { Load } from "../../components/Load";
import { Car } from "../../components/Car";

import { Car as ModelCar } from "../../database/model/Car";

import {
  Container,
  Header,
  Title,
  Subtitle,
  Content,
  Appointments,
  AppointmentsTitle,
  AppointmentsAmount,
  CarWrapper,
  CarFooter,
  CarFooterTitle,
  CarFooterPeriod,
  CarFooterDate,
} from "./styles";

interface DataProps {
  id: string;
  car: ModelCar;
  start_date: string;
  end_date: string;
}

export function MyCars() {
  const [cars, setCars] = useState<DataProps[]>([]);
  const [loading, setLoading] = useState(true);
  const screenisFocus = useIsFocused();

  const theme = useTheme();

  const navigation = useNavigation<any>();

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get("/rentals");
        const dataFormatted = response.data.map((data: DataProps) => {
          return {
            id: data.id,
            car: data.car,
            start_date: format(parseISO(data.start_date), "dd/MM/yyyy"),
            end_date: format(parseISO(data.end_date), "dd/MM/yyyy"),
          };
        });
        setCars(dataFormatted);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, [screenisFocus]);

  function handleBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <BackButton onPress={handleBack} color={theme.colors.shape} />
        <Title>Suas locações {"\n"}estão aqui</Title>

        <Subtitle>Conforto, praticidade e segurança.</Subtitle>
      </Header>
      {loading ? (
        <Load />
      ) : (
        <Content>
          <Appointments>
            <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
            <AppointmentsAmount>{cars.length}</AppointmentsAmount>
          </Appointments>

          <FlatList
            data={cars}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <CarWrapper>
                <Car data={item.car} />
                <CarFooter>
                  <CarFooterTitle>Período</CarFooterTitle>
                  <CarFooterPeriod>
                    <CarFooterDate>{item.start_date}</CarFooterDate>
                    <AntDesign
                      name="arrowright"
                      size={16}
                      color={theme.colors.title}
                      style={{ marginHorizontal: 10 }}
                    />
                    <CarFooterDate>{item.end_date}</CarFooterDate>
                  </CarFooterPeriod>
                </CarFooter>
              </CarWrapper>
            )}
          />
        </Content>
      )}
    </Container>
  );
}
