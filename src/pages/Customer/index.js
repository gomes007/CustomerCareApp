import axios from 'axios';
import React, { useState } from 'react';
import { Alert, Button, ScrollView, Text, TextInput } from 'react-native';
import { styles } from './styles'; // Import styles

export function CustomerScreen({ navigation }) {
  const [contractNumber, setContractNumber] = useState('');
  const [contractDate, setContractDate] = useState('');
  const [corporateEmail, setCorporateEmail] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [tradeName, setTradeName] = useState('');
  const [situation, setSituation] = useState('ACTIVE');
  const [customerType, setCustomerType] = useState('CORPORATE');

  const handleSubmit = async () => {
    const customer = {
      contractNumber,
      contractDate,
      corporateEmail,
      cnpj,
      tradeName,
      situation,
      customerType,
    };

    try {
      // Fazendo a requisição POST usando axios
      const response = await axios.post('http://192.168.0.236:8080/api/customers', customer, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200 || response.status === 201) {
        const data = response.data;
        Alert.alert('Success', `Customer ${data.tradeName} saved successfully!`);
        // Reset form fields after successful submission
        setContractNumber('');
        setContractDate('');
        setCorporateEmail('');
        setCnpj('');
        setTradeName('');
        setSituation('ACTIVE');
        setCustomerType('');
      } else {
        Alert.alert('Error', 'Failed to save customer');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'An error occurred while saving the customer');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Add New Customer</Text>

      <TextInput
        style={styles.input}
        placeholder="Contract Number"
        value={contractNumber}
        onChangeText={setContractNumber}
      />

      <TextInput
        style={styles.input}
        placeholder="Contract Date (YYYY-MM-DD)"
        value={contractDate}
        onChangeText={setContractDate}
      />

      <TextInput
        style={styles.input}
        placeholder="Corporate Email"
        value={corporateEmail}
        onChangeText={setCorporateEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="CNPJ"
        value={cnpj}
        onChangeText={setCnpj}
      />

      <TextInput
        style={styles.input}
        placeholder="Trade Name"
        value={tradeName}
        onChangeText={setTradeName}
      />

      <TextInput
        style={styles.input}
        placeholder="Situation (ACTIVE/INACTIVE)"
        value={situation}
        onChangeText={setSituation}
      />

      <TextInput
        style={styles.input}
        placeholder="Customer Type (REGULAR/VIP)"
        value={customerType}
        onChangeText={setCustomerType}
      />

      <Button title="Save Customer" onPress={handleSubmit} />
    </ScrollView>
  );
}
