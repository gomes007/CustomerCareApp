import React from 'react';
import {
    Background,
    Container,
    HighlightedContainer,
    InfoText,
    Title
} from './styles';

export function AboutScreen({ navigation }) {
    return (
        <Background>
            <Container>
                <Title>About Us</Title>
                <InfoText>
                    Welcome to the About Screen! Here you can find more information about our application and its features.
                </InfoText>

                <HighlightedContainer>
                    <InfoText>Our mission is to provide the best customer care experience.</InfoText>
                </HighlightedContainer>


            </Container>
        </Background>
    );
}
