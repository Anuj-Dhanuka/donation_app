import { createStackNavigator } from "@react-navigation/stack";

//routes
import Routes from "./Routes";

//screens
import Home from "../screens/HomeScreen";
import SingleDonationItemScreen from "../screens/SingleDonationItemScreen";

const Stack = createStackNavigator()

const Navigation = () => {
    return(
        <Stack.Navigator screenOptions={{header: () => null, headerShown: false}}>
            <Stack.Screen name={Routes.Home} component={Home} />
            <Stack.Screen name={Routes.SingleDonationItem} component={SingleDonationItemScreen} />
        </Stack.Navigator>
    )
}

export default Navigation
