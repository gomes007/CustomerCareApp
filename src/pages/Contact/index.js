import React, { useState } from 'react';
import {
  Background,
  Button,
  ButtonText,
  Input,
  Label,
  Container,
  Title,
  TextArea,
} from "../../components/components";

export function ContactScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        console.log('Form submitted', { name, email, message });
    };

    return (
        <Background>
            <Container>
                <Title>Contact Us</Title>

                <Label>Name</Label>
                <Input 
                    placeholder="Enter your name"
                    value={name}
                    onChangeText={setName}
                />

                <Label>Email</Label>
                <Input 
                    placeholder="Enter your email"
                    value={email}
                    onChangeText={setEmail}
                />

                <Label>Message</Label>
                <TextArea 
                    placeholder="Enter your message"
                    value={message}
                    onChangeText={setMessage}
                    multiline={true}
                    numberOfLines={4}
                />

                <Button onPress={handleSubmit}>
                    <ButtonText>Submit</ButtonText>
                </Button>
            </Container>
        </Background>
    );
}
