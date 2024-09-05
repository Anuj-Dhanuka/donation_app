import { useEffect } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';

//routes
import Routes from './Routes'; 

//screens
import Home from '../screens/HomeScreen';
import SingleDonationItemScreen from '../screens/SingleDonationItemScreen';
import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import { resetUserToInitialState } from '../redux/reducers/UserReducer';
import { logOut } from '../utils/ApiUtils/User';

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
