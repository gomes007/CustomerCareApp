import React, { useState } from "react";
import { Alert, Text, Platform, View } from "react-native"; // Adicionado Platform e View
import DateTimePicker from "@react-native-community/datetimepicker"; // Correção: Importar diretamente aqui
import {
  Background,
  Button,
  ButtonText,
  Container,
  Title,
  IconButton,
  Card,
  Label,
  Icon,
  Select,
  RadioContainer,
  RadioButton,
  RadioSelected,
  RadioLabel,
  CheckboxContainer,
  CheckboxButton,
  CheckboxSelected,
  CheckboxLabel,
  DatePickerContainer,
  DatePickerButton,
  DatePickerText,
} from "../../components/components";

export function HomeScreen({ navigation }) {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedRadio, setSelectedRadio] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === "ios");
    setDate(currentDate);
  };

  return (
    <Background>
      <Container>
        <Title>Formulário de Exemplo</Title>

        {/* Select Component */}
        <Select
          selectedValue={selectedOption}
          onValueChange={(itemValue) => setSelectedOption(itemValue)}
        >
          <Select.Item label="Option 1" value="option1" />
          <Select.Item label="Option 2" value="option2" />
        </Select>

        {/* Radio Component */}
        <RadioContainer>
          <RadioButton onPress={() => setSelectedRadio("option1")}>
            {selectedRadio === "option1" && <RadioSelected />}
          </RadioButton>
          <RadioLabel onPress={() => setSelectedRadio("option1")}>
            Opção 1
          </RadioLabel>
        </RadioContainer>
        <RadioContainer>
          <RadioButton onPress={() => setSelectedRadio("option2")}>
            {selectedRadio === "option2" && <RadioSelected />}
          </RadioButton>
          <RadioLabel onPress={() => setSelectedRadio("option2")}>
            Opção 2
          </RadioLabel>
        </RadioContainer>

        {/* Checkbox Component */}
        <CheckboxContainer>
          <CheckboxButton onPress={() => setIsChecked(!isChecked)}>
            {isChecked && <CheckboxSelected />}
          </CheckboxButton>
          <CheckboxLabel onPress={() => setIsChecked(!isChecked)}>
            Marcar opção
          </CheckboxLabel>
        </CheckboxContainer>

        {/* DatePicker Component */}
        <DatePickerContainer>
          <DatePickerButton onPress={() => setShowDatePicker(true)}>
            <DatePickerText>{date.toDateString()}</DatePickerText>
          </DatePickerButton>
          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}
        </DatePickerContainer>
      </Container>
    </Background>
  );
}
