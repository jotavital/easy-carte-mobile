import { HomeStackParamList } from '@/navigators/types';
import { HomeScreen } from '@/screens/home';
import { RestaurantMenuScreen } from '@/screens/restaurants/menu';
import { ProductDetailsScreen } from '@/screens/restaurants/menu/product/details';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const HomeStackNavigator = () => {
    const Stack = createNativeStackNavigator<HomeStackParamList>();

    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="ProductDetailsScreen"
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="RestaurantMenuScreen" component={RestaurantMenuScreen} />
            <Stack.Screen name="ProductDetailsScreen" component={ProductDetailsScreen} />
        </Stack.Navigator>
    );
};
