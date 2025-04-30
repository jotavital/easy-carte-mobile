// import {
//     Roboto_100Thin,
//     Roboto_100Thin_Italic,
//     Roboto_300Light,
//     Roboto_300Light_Italic,
//     Roboto_400Regular,
//     Roboto_400Regular_Italic,
//     Roboto_500Medium,
//     Roboto_500Medium_Italic,
//     Roboto_700Bold,
//     Roboto_700Bold_Italic,
//     Roboto_900Black,
//     Roboto_900Black_Italic,
//     useFonts,
// } from '@expo-google-fonts/roboto';
import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import './src/styles/global.css';

const restaurants = [
    {
        id: 1,
        name: 'Restaurant 1',
        image: 'https://picsum.photos/seed/696/3000/2000',
    },
    {
        id: 2,
        name: 'Restaurant 1',
        image: 'https://picsum.photos/seed/696/3000/2000',
    },
    {
        id: 3,
        name: 'Restaurant 1',
        image: 'https://picsum.photos/seed/696/3000/2000',
    },
    {
        id: 4,
        name: 'Restaurant 1',
        image: 'https://picsum.photos/seed/696/3000/2000',
    },
    {
        id: 5,
        name: 'Restaurant 1',
        image: 'https://picsum.photos/seed/696/3000/2000',
    },
];

export default function App() {
    // useFonts({
    //     Roboto_100Thin,
    //     Roboto_100Thin_Italic,
    //     Roboto_300Light,
    //     Roboto_300Light_Italic,
    //     Roboto_400Regular,
    //     Roboto_400Regular_Italic,
    //     Roboto_500Medium,
    //     Roboto_500Medium_Italic,
    //     Roboto_700Bold,
    //     Roboto_700Bold_Italic,
    //     Roboto_900Black,
    //     Roboto_900Black_Italic,
    // });

    return (
        <SafeAreaProvider>
            <SafeAreaView className="h-full bg-white">
                <View className="pt-10">
                    <View className="h-[120px]">
                        <FlatList
                            data={restaurants}
                            renderItem={({ item }) => (
                                <View className="mx-3">
                                    <Image
                                        src="https://picsum.photos/seed/696/3000/2000"
                                        className="w-[90px] h-[90px] rounded-full mb-2"
                                    />

                                    <Text className="text-center">Name nice</Text>
                                </View>
                            )}
                            keyExtractor={(item) => String(item.id)}
                            horizontal
                        />
                    </View>
                </View>

                <StatusBar style="auto" />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
