import styled from 'styled-components/native';
import { theme } from '../../navigation/theme';

export const Background = styled.SafeAreaView`
  flex: 1;
  background-color: ${theme.colors.background};
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: ${theme.colors.mutedBackground};
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

export const SecondaryButton = styled.TouchableOpacity`
  background-color: ${theme.colors.secondary};
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
  font-size: 28px;
  font-weight: bold;
  color: ${theme.colors.text};
  margin-bottom: 10px;
`;

export const InfoText = styled.Text`
  font-size: 16px;
  color: ${theme.colors.info};
  margin-bottom: 20px;
`;

export const HighlightedContainer = styled.View`
  width: 90%;
  padding: 15px;
  background-color: ${theme.colors.highlight};
  border-radius: 10px;
  margin: 20px 0;
  align-items: center;
`;

export const Overlay = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${theme.colors.overlay};
  justify-content: center;
  align-items: center;
  z-index: 1;
`;
