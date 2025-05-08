import { HomeStackNavigator } from '@/navigators/home-stack';
import { ProfileScreen } from '@/screens/profile';
import '@/styles/global.css';
import AntDesign from '@expo/vector-icons/AntDesign';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

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
                        name="HomeStackNavigatorScreen"
                        component={HomeStackNavigator}
                        options={{
                            tabBarIcon: () => <AntDesign name="home" size={24} />,
                            tabBarLabel: 'Início',
                            headerTitle: 'Início',
                        }}
                    />

                    <Tab.Screen
                        name="ProfileScreen"
                        component={ProfileScreen}
                        options={{
                            tabBarIcon: () => <AntDesign name="user" size={24} />,
                            tabBarLabel: 'Perfil',
                            headerTitle: 'Perfil',
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>

            <StatusBar style="auto" />
        </SafeAreaProvider>
    );
}
