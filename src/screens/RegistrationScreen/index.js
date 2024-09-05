import React, {useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import Toast from 'react-native-simple-toast';

//components
import Input from '../../components/Input';
import Header from '../../components/Header';
import Button from '../../components/Button';
import BackButton from '../../components/BackButton';

//navigations
import Routes from '../../Navigation/Routes';

//dimension utils
import {normalize, scaleVertical} from '../../utils/dimensionUtils';

//api utils
import {createUser} from '../../utils/ApiUtils/User';

const RegistrationScreen = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  handleFullName = value => {
    setFullName(value);
  };

  const handleEmail = value => {
    setEmail(value);
  };

  const handlePassword = value => {
    setPassword(value);
  };

  const handleBackButton = () => {
    navigation.goBack();
  };

  const handleRegistration = async () => {
    let user = await createUser(fullName, email, password);
    if (user.error) {
      Toast.show(user.error, Toast.LONG);
    } else {
      Toast.show('You have successfully registered', Toast.LONG);
      setTimeout(() => {
        navigation.navigate(Routes.Login);
      }, 3000);
      setEmail('');
      setPassword('');
      setFullName('');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.backButton}>
        <BackButton onPress={handleBackButton} />
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.marginBottom24}>
          <Header type={1} title="Hello and Welcome !" />
        </View>

        <View style={styles.marginBottom24}>
          <Input
            label="First & Last Name"
            placeholder="Enter your full name..."
            onChangeText={handleFullName}
            secureTextEntry={false}
          />
        </View>

        <View style={styles.marginBottom24}>
          <Input
            label="Email"
            placeholder="Enter your email..."
            onChangeText={handleEmail}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.marginBottom24}>
          <Input
            label="Password"
            placeholder="******"
            onChangeText={handlePassword}
            secureTextEntry={true}
          />
        </View>

        <View style={styles.marginBottom24}>
          <Button
            isDisabled={
              fullName.length <= 2 || email.length <= 5 || password.length <= 8
            }
            title="Register"
            onPress={handleRegistration}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  backButton: {
    marginLeft: normalize(14),
    marginTop: scaleVertical(7),
  },
  container: {
    marginHorizontal: normalize(24),
    flex: 1,
    justifyContent: 'center',
  },
  marginBottom24: {
    marginBottom: scaleVertical(24),
  },
  loginButton: {
    alignItems: 'center',
  },
});
