// File: styles.js
import styled from 'styled-components/native';
import { theme } from '../../navigation/theme';
import { Platform } from 'react-native';

export const Background = styled.SafeAreaView`
  flex: 1;
  background-color: ${theme.colors.background};
`;

export const Container = styled.ScrollView`
  flex: 1;
  padding: 20px;
  background-color: ${theme.colors.mutedBackground};
`;

export const Input = styled.TextInput`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 5px;
  background-color: ${theme.colors.card};
  color: ${theme.colors.text};
  border: 1px solid ${theme.colors.border};
`;

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

export const Button = styled.TouchableOpacity`
  background-color: ${theme.colors.primary};
  width: 100%;
  height: 45px;
  border-radius: 7px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const ButtonText = styled.Text`
  color: ${theme.colors.card};
  font-size: 18px;
  font-weight: bold;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${theme.colors.text};
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  font-size: 16px;
  color: ${theme.colors.text};
  margin-bottom: 5px;
`;
