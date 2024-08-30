import React from 'react';
import {
    Background,
    Button,
    ButtonText,
    Container,
    TicketItem,
    TicketStatus,
    TicketTitle,
    Title,
} from './styles';

export function TicketScreen({ navigation }) {
    // Example list of tickets
    const tickets = [
        { id: 1, title: 'Issue with login', status: 'Open' },
        { id: 2, title: 'Payment not processed', status: 'In Progress' },
        { id: 3, title: 'Unable to update profile', status: 'Closed' },
    ];

    return (
        <Background>
            <Container>
                <Title>Support Tickets</Title>

                {tickets.map(ticket => (
                    <TicketItem key={ticket.id}>
                        <TicketTitle>{ticket.title}</TicketTitle>
                        <TicketStatus>{ticket.status}</TicketStatus>
                    </TicketItem>
                ))}

                <Button onPress={() => navigation.navigate('HomeTab')}>
                    <ButtonText>Back to Home</ButtonText>
                </Button>
            </Container>
        </Background>
    );
}
