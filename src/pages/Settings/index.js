import React, { useState } from 'react';
import {
    Background,
    Button,
    ButtonText,
    Container,
    SettingItem,
    SettingLabel,
    Switch,
    Title,
} from './styles';

export function SettingsScreen({ navigation }) {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);

    return (
        <Background>
            <Container>
                <Title>Settings</Title>

                <SettingItem>
                    <SettingLabel>Dark Mode</SettingLabel>
                    <Switch
                        value={isDarkMode}
                        onValueChange={(value) => setIsDarkMode(value)}
                    />
                </SettingItem>

                <SettingItem>
                    <SettingLabel>Enable Notifications</SettingLabel>
                    <Switch
                        value={notificationsEnabled}
                        onValueChange={(value) => setNotificationsEnabled(value)}
                    />
                </SettingItem>

                <Button onPress={() => navigation.navigate('ProfileTab')}>
                    <ButtonText>Go to Profile</ButtonText>
                </Button>
            </Container>
        </Background>
    );
}
