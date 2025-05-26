import { AppTabNavigator } from '@/navigators/app-tab-navigator';
import '@/styles/global.css';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <AppTabNavigator />
            </NavigationContainer>

            <StatusBar style="auto" />
        </SafeAreaProvider>
    );
}
