import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import './src/styles/global.css';

export default function App() {
    return (
        <View className="flex-1 justify-center items-center bg-white">
            <Text>NICE!</Text>
            <StatusBar style="auto" />
        </View>
    );
}
