// File: ProfileScreen.js
import React from 'react';
import {
    Background,
    Button,
    ButtonText,
    Container,
    ProfileDetails,
    ProfilePicture,
    ProfileText,
    Title,
} from './styles';

export function ProfileScreen({ navigation }) {
    return (
        <Background>
            <Container contentContainerStyle={{ alignItems: 'center' }}>
                <ProfilePicture source={{ uri: 'https://via.placeholder.com/150' }} />
                
                <Title>John Doe</Title>
                
                <ProfileDetails>
                    <ProfileText>Email: john.doe@example.com</ProfileText>
                    <ProfileText>Phone: +1234567890</ProfileText>
                </ProfileDetails>
                
                <Button onPress={() => navigation.navigate('SettingsTab')}>
                    <ButtonText>Go to Settings</ButtonText>
                </Button>

                <Button onPress={() => navigation.navigate('LoginScreen')}>
                    <ButtonText>Logout</ButtonText>
                </Button>
            </Container>
        </Background>
    );
}
