import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: ${RFValue(100)}px;
  height: ${RFValue(80)}px;

  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background_primary};

  padding: ${RFValue(10)}px;
  margin-bottom: 6px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(12)}px;
`;
