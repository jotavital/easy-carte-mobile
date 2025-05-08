import { HomeScreen } from '@/screens/home';
import { RestaurantMenuScreen } from '@/screens/restaurants/menu';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const HomeStackNavigator = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="RestaurantMenuScreen"
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="RestaurantMenuScreen" component={RestaurantMenuScreen} />
        </Stack.Navigator>
    );
};
