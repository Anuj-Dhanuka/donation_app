import {createStackNavigator} from '@react-navigation/stack';
import { useSelector} from 'react-redux';

//routes
import Routes from './Routes'; 

//screens
import Home from '../screens/HomeScreen';
import SingleDonationItemScreen from '../screens/SingleDonationItemScreen';
import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import PaymentScreen from '../screens/PaymentScreen';

const Stack = createStackNavigator();

const AuthenticatedRoute = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Home}
      screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen
        name={Routes.SingleDonationItem}
        component={SingleDonationItemScreen}
      />
      <Stack.Screen name={Routes.Payment} component={PaymentScreen} />
    </Stack.Navigator>
  );
};

const NonAuthenticatedRoute = () => {
  return (
  <Stack.Navigator
    initialRouteName={Routes.Login}
    screenOptions={{header: () => null, headerShown: false}}>
    <Stack.Screen name={Routes.Login} component={LoginScreen} />
    <Stack.Screen name={Routes.Registration} component={RegistrationScreen} />
  </Stack.Navigator>)
};

const Navigation = () => {
  const user = useSelector(state => state.user);
  
  return user.isLoggedIn ? <AuthenticatedRoute /> : <NonAuthenticatedRoute />;
};

export default Navigation;
