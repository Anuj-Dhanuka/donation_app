import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import Toast from "react-native-simple-toast"

//components
import Input from '../../components/Input';
import Header from '../../components/Header';
import Button from '../../components/Button';

//dimension utils
import {normalize, scaleVertical} from '../../utils/dimensionUtils';

//api utils
import {loginUser} from '../../utils/ApiUtils/User';

//Navigations
import Routes from '../../Navigation/Routes';
import { logIn, resetUserToInitialState } from '../../redux/reducers/UserReducer';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch()
  //dispatch(resetUserToInitialState())

  const handleEmail = value => {
    setEmail(value);
  };

  const handlePassword = value => {
    setPassword(value);
  };

  const handleLogin = async () => {
    const user = await loginUser(email, password);
    if(!user.status) {
      Toast.show(user.error, Toast.LONG)
    }else {
      Toast.show("Logged in successfully", Toast.LONG)
      dispatch(logIn(user.data))
      navigation.navigate(Routes.Home)
    }
  };

  const handleRegistrationButton = () => {
    navigation.navigate(Routes.Registration);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.marginBottom24}>
          <Header type={1} title="Welcome Back" />
        </View>
        <View style={styles.marginBottom24}>
          <Input
            label="Email"
            placeholder="Enter your email..."
            onChangeText={handleEmail}
            keyboardType="email-address"
            secureTextEntry={false}
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
               email.length <= 5 || password.length <= 8
            }
            title="Login"
            onPress={handleLogin}
          />
        </View>
        <Pressable
          style={styles.registrationButton}
          onPress={handleRegistrationButton}>
          <Header title="Don't have an account?" type={3} color="#156CF7" />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  container: {
    marginHorizontal: normalize(24),
    flex: 1,
    justifyContent: 'center',
  },
  marginBottom24: {
    marginBottom: scaleVertical(24),
  },
  registrationButton: {
    alignItems: 'center',
  },
});
