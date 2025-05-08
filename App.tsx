import AntDesign from '@expo/vector-icons/AntDesign';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HomeScreen } from './src/screens/home';
import { ProfileScreen } from './src/screens/profile';
import { RestaurantMenuScreen } from './src/screens/restaurants/menu';
import './src/styles/global.css';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="RestaurantMenuScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="RestaurantMenuScreen" component={RestaurantMenuScreen} />
    </Stack.Navigator>
);

export default function App() {
    const Tab = createBottomTabNavigator();

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: '#f4511e',
                        },
                        headerTitleStyle: {
                            color: 'white',
                        },
                    }}
                >
                    <Tab.Screen
                        name="Início"
                        component={HomeStackNavigator}
                        options={{
                            tabBarIcon: () => <AntDesign name="home" size={24} />,
                        }}
                    />

                    <Tab.Screen
                        name="Perfil"
                        component={ProfileScreen}
                        options={{
                            tabBarIcon: () => <AntDesign name="user" size={24} />,
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>

            <StatusBar style="auto" />
        </SafeAreaProvider>
    );
}
