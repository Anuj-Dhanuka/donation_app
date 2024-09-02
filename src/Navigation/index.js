import { createStackNavigator } from "@react-navigation/stack";

//routes
import Routes from "./Routes";

//screens
import Home from "../screens/HomeScreen";

const Stack = createStackNavigator()

const Navigation = () => {
    return(
        <Stack.Navigator screenOptions={{header: () => null, headerShown: false}}>
            <Stack.Screen name={Routes.Home} component={Home} />
        </Stack.Navigator>
    )
}

export default Navigation
