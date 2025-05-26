import { HomeStackNavigator } from '@/navigators/home-stack';
import { ProfileScreen } from '@/screens/profile';
import AntDesign from '@expo/vector-icons/AntDesign';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export const AppTabNavigator = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTitleStyle: {
                    color: 'white',
                },
                // headerTransparent: true,
            }}
            initialRouteName="ProfileScreen"
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
    );
};
