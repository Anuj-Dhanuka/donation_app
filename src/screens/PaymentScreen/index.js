import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View, TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';  // Update the import
import Header from '../../components/Header';
import {normalize, scaleVertical} from '../../utils/dimensionUtils';
import {useSelector} from 'react-redux';
import {getInterFont} from '../../utils/FontUtils/interFontHelper';
import Button from '../../components/Button';

const PaymentScreen = () => {
  const donationItemInformation = useSelector(
    state => state.donations.selectedDonationInformation,
  );
  
  const [cardNumber, setCardNumber] = React.useState('');
  const [expiryDate, setExpiryDate] = React.useState('');
  const [cvv, setCvv] = React.useState('');
  const [paymentMethod, setPaymentMethod] = React.useState('CreditCard');

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.paymentContainer}>
        <Header title="Making Donation" />
        <Text style={styles.donationAmountInformation}>
          We are about to donate {donationItemInformation.price}
        </Text>

        <Text style={styles.label}>Card Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter card number"
          value={cardNumber}
          onChangeText={setCardNumber}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Expiry Date</Text>
        <TextInput
          style={styles.input}
          placeholder="MM/YY"
          value={expiryDate}
          onChangeText={setExpiryDate}
          keyboardType="numeric"
        />

        <Text style={styles.label}>CVV</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter CVV"
          value={cvv}
          onChangeText={setCvv}
          secureTextEntry
          keyboardType="numeric"
        />

        <Text style={styles.label}>Payment Method</Text>
        <Picker
          selectedValue={paymentMethod}
          style={styles.picker}
          onValueChange={(itemValue) => setPaymentMethod(itemValue)}
        >
          <Picker.Item label="Credit Card" value="CreditCard" />
          <Picker.Item label="Debit Card" value="DebitCard" />
          <Picker.Item label="UPI" value="UPI" />
        </Picker>

      </ScrollView>

      <View style={styles.button}>
        <Button title="Donate" />
      </View>
    </SafeAreaView>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    marginVertical: scaleVertical(24),
  },
  paymentContainer: {
    marginHorizontal: normalize(24),
  },
  donationAmountInformation: {
    marginTop: scaleVertical(12),
    ...getInterFont(24, 'Medium'),
    color: '#000000',
    fontSize: normalize(16),
  },
  label: {
    marginTop: scaleVertical(12),
    ...getInterFont(18, 'Regular'),
    color: '#000000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    padding: normalize(12),
    marginTop: scaleVertical(8),
  },
  picker: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    marginTop: scaleVertical(8),
    padding: normalize(12),
  },
  button: {
    marginHorizontal: normalize(24),
    marginTop: scaleVertical(24),
  },
});
