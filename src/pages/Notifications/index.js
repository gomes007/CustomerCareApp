import React from 'react';
import {
    Background,
    Button,
    ButtonText,
    Container,
    NotificationDescription,
    NotificationItem,
    NotificationTitle,
    Title
} from './styles';

export function NotificationsScreen({ navigation }) {
    return (
        <Background>
            <Container>
                <Title>Notifications</Title>

                <NotificationItem>
                    <NotificationTitle>New Message</NotificationTitle>
                    <NotificationDescription>You have received a new message from John.</NotificationDescription>
                </NotificationItem>

                <NotificationItem>
                    <NotificationTitle>App Update</NotificationTitle>
                    <NotificationDescription>Version 2.0 is now available. Update for new features!</NotificationDescription>
                </NotificationItem>

                <NotificationItem>
                    <NotificationTitle>Promotion</NotificationTitle>
                    <NotificationDescription>Special discount available for our premium users.</NotificationDescription>
                </NotificationItem>

                <Button onPress={() => navigation.navigate('HomeTab')}>
                    <ButtonText>Back to Home</ButtonText>
                </Button>
            </Container>
        </Background>
    );
}
