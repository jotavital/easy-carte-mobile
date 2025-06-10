import { HomeStackParamList } from '@/navigators/types';
import { HomeScreen } from '@/screens/home';
import { RestaurantMenuScreen } from '@/screens/restaurants/menu';
import { ProductDetailsScreen } from '@/screens/restaurants/menu/product/details';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const HomeStackNavigator = () => {
    const Stack = createNativeStackNavigator<HomeStackParamList>();

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTitleStyle: {
                    color: 'white',
                },
                headerShown: true,
                headerBackButtonDisplayMode: 'minimal',
                headerTintColor: '#fff',
            }}
            // initialRouteName="ProductDetailsScreen"
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'Início' }} />
            <Stack.Screen
                name="RestaurantMenuScreen"
                component={RestaurantMenuScreen}
                options={{ title: 'Restaurante' }}
            />
            <Stack.Screen
                name="ProductDetailsScreen"
                component={ProductDetailsScreen}
                options={{ title: 'Detalhes' }}
            />
        </Stack.Navigator>
    );
};
