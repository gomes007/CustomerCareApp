import React from 'react';
import {
    Background,
    ButtonText,
    Container,
    HighlightedContainer,
    InfoText,
    SecondaryButton,
    Title
} from './styles';

export function HomeScreen({ navigation }) {
    return (
        <Background>

            <Container>
                <Title>Welcome to the Home Screen</Title>
                <InfoText>Your app's main page</InfoText>

                <HighlightedContainer>
                    <InfoText>Special Announcement: Check out the new features!</InfoText>
                </HighlightedContainer>

                <SecondaryButton onPress={() => navigation.navigate('ProfileTab')}>
                    <ButtonText>Go to Profile</ButtonText>
                </SecondaryButton>
            </Container>
        </Background>
    );
}
