import styled from "styled-components/native";
import { ActivityIndicator } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Platform } from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker"; // Importação do DateTimePicker para uso direto

import { theme } from "../navigation/theme";

// Background padrão para views seguras
export const Background = styled.SafeAreaView`
  flex: 1;
  background-color: ${theme.colors.background};
`;

// Container padrão com ScrollView
export const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    padding: 20,
  },
}))`
  flex: 1;
  background-color: ${theme.colors.mutedBackground};
`;

// Botão padrão
export const Button = styled.TouchableOpacity`
  background-color: ${theme.colors.primary};
  width: 100%;
  height: 45px;
  border-radius: 7px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  color: ${theme.colors.card};
  font-size: 18px;
  font-weight: bold;
`;

export const SecondaryButton = styled.TouchableOpacity`
  background-color: ${theme.colors.secondary};
  width: 100%;
  height: 45px;
  border-radius: 7px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${theme.colors.text};
  margin-bottom: 20px;
`;

// Componente de Label
export const Label = styled.Text`
  font-size: 16px;
  color: ${theme.colors.text};
  margin-bottom: 5px;
`;

// Componente de Input
export const Input = styled.TextInput`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  background-color: ${theme.colors.card};
  color: ${theme.colors.text};
  border: 1px solid ${theme.colors.border};
`;

// TextArea padrão
export const TextArea = styled.TextInput`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  background-color: ${theme.colors.card};
  color: ${theme.colors.text};
  border: 1px solid ${theme.colors.border};
  height: 100px;
  text-align-vertical: top;
`;

export const Loader = styled(ActivityIndicator).attrs(() => ({
  size: "large",
  color: theme.colors.primary,
}))`
  margin: 20px 0;
`;

export const InfoText = styled.Text`
  font-size: 16px;
  color: ${theme.colors.info};
  margin-bottom: 20px;
`;

export const ErrorMessage = styled.Text`
  color: ${theme.colors.error};
  font-size: 14px;
  margin-bottom: 10px;
`;

export const Card = styled.View`
  background-color: ${theme.colors.card};
  padding: 15px;
  border-radius: 8px;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 6px;
  elevation: 3;
  margin-bottom: 20px;
`;

export const SettingItem = styled.View`
  background-color: ${theme.colors.card};
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${Platform.OS === "ios" &&
  `
    shadow-color: #000;
    shadow-offset: 0px 1px;
    shadow-opacity: 0.22;
    shadow-radius: 2.22px;
  `}
  elevation: 3;
`;

export const SettingLabel = styled.Text`
  font-size: 16px;
  color: ${theme.colors.text};
`;

export const Switch = styled.Switch``;

export const IconButton = styled.TouchableOpacity`
  background-color: ${theme.colors.primary};
  width: 50px;
  height: 50px;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  margin: 5px;
`;

export const Icon = styled(MaterialIcons)`
  color: ${theme.colors.card};
  font-size: 24px;
`;

export const Divider = styled.View`
  height: 1px;
  background-color: ${theme.colors.border};
  margin: 10px 0;
`;

// Definição do Select corrigida para uso com Picker diretamente
export const SelectContainer = styled.View`
  width: 100%;
  margin-bottom: 15px;
  border-radius: 5px;
  background-color: ${theme.colors.card};
  border: 1px solid ${theme.colors.border};
`;

export const Select = Picker; // Usando Picker diretamente, sem estilização

export const RadioContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const RadioButton = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 2px solid ${theme.colors.primary};
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

export const RadioSelected = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: ${theme.colors.primary};
`;

export const RadioLabel = styled.Text`
  font-size: 16px;
  color: ${theme.colors.text};
`;

export const CheckboxContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const CheckboxButton = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  border-radius: 3px;
  border: 2px solid ${theme.colors.primary};
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

export const CheckboxSelected = styled(MaterialIcons).attrs(() => ({
  name: "check",
  size: 16,
  color: theme.colors.primary,
}))``;

export const CheckboxLabel = styled.Text`
  font-size: 16px;
  color: ${theme.colors.text};
`;

export const DatePickerContainer = styled.View`
  margin-bottom: 15px;
`;

export const DatePickerButton = styled.TouchableOpacity`
  padding: 10px;
  border-radius: 5px;
  background-color: ${theme.colors.card};
  border: 1px solid ${theme.colors.border};
  width: 100%;
`;

export const DatePickerText = styled.Text`
  font-size: 16px;
  color: ${theme.colors.text};
`;
