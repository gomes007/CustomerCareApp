import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../navigation/theme';

export const Background = styled.SafeAreaView`
  flex: 1;
  background-color: ${theme.colors.background};
`;

export const Container = styled.ScrollView`
  flex: 1;
  padding: 20px;
  background-color: ${theme.colors.mutedBackground};
`;

export const NotificationItem = styled.View`
  background-color: ${theme.colors.card};
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 15px;
  ${Platform.OS === 'ios' && `
    shadow-color: #000;
    shadow-offset: 0px 1px;
    shadow-opacity: 0.22;
    shadow-radius: 2.22px;
  `}
  elevation: 3; /* Elevation for Android */
`;

export const NotificationTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${theme.colors.text};
  margin-bottom: 5px;
`;

export const NotificationDescription = styled.Text`
  font-size: 14px;
  color: ${theme.colors.textSecondary};
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
  font-size: 28px;
  font-weight: bold;
  color: ${theme.colors.text};
  margin-bottom: 20px;
`;
