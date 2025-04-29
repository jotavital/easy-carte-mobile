import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import './src/styles/global.css';

export default function App() {
    return (
        <View style={styles.container}>
            <View className="w-10 h-10 bg-blue-500" />
            <Text className="bg-blue-500 text-blue-500">
                Open up App.tsx to start working on your app!
            </Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
