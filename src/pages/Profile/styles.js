// File: styles.js
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

export const ProfilePicture = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  margin-bottom: 20px;
  ${Platform.OS === 'ios' && `
    shadow-color: #000;
    shadow-offset: 0px 1px;
    shadow-opacity: 0.22;
    shadow-radius: 2.22px;
  `}
  elevation: 3; /* Elevation for Android */
`;

export const ProfileDetails = styled.View`
  width: 100%;
  background-color: ${theme.colors.card};
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  align-items: flex-start;
  ${Platform.OS === 'ios' && `
    shadow-color: #000;
    shadow-offset: 0px 1px;
    shadow-opacity: 0.22;
    shadow-radius: 2.22px;
  `}
  elevation: 3; /* Elevation for Android */
`;

export const ProfileText = styled.Text`
  font-size: 16px;
  color: ${theme.colors.text};
  margin-bottom: 10px;
`;

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

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${theme.colors.text};
  margin-bottom: 20px;
`;
