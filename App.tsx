import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import './src/styles/global.css';

export default function App() {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetch('https://fakerestaurantapi.runasp.net/api/Restaurant')
            .then((res) => res.json())
            .then((json) => setRestaurants(json));
    }, []);

    return (
        <SafeAreaProvider>
            <SafeAreaView className="h-full bg-white text-gray-700">
                <View className="pt-10 px-5 flex gap-[2rem]">
                    <View className="border bg-white shadow-sm border-gray-200 rounded-2xl px-2 pt-3 pb-4">
                        <Text className="text-gray-700 font-semibold text-3xl mb-5 px-3">
                            Mais novos
                        </Text>

                        <View className="h-[120px] ps-3">
                            {restaurants.length && (
                                <FlatList
                                    data={restaurants}
                                    renderItem={({ item }) => (
                                        <View className="me-3 flex items-center max-w-[90px]">
                                            <Image
                                                src="https://picsum.photos/seed/696/3000/2000"
                                                className="w-[75px] h-[75px] rounded-full mb-2"
                                            />

                                            <Text className="text-center max-w-[95%]">
                                                {item.restaurantName}
                                            </Text>
                                        </View>
                                    )}
                                    keyExtractor={(item) => String(item.restaurantID)}
                                    horizontal
                                />
                            )}
                        </View>
                    </View>

                    <View className="border bg-white shadow-slate-500 shadow-sm border-gray-200 rounded-2xl px-2 py-4">
                        <Text className="text-gray-700 font-semibold text-3xl mb-5 px-3">
                            Melhores avaliações
                        </Text>

                        <View className="h-[120px] ps-3">
                            {restaurants.length && (
                                <FlatList
                                    data={restaurants}
                                    renderItem={({ item }) => (
                                        <View className="me-3 flex items-center max-w-[90px]">
                                            <Image
                                                src="https://picsum.photos/seed/696/3000/2000"
                                                className="w-[75px] h-[75px] rounded-full mb-2"
                                            />

                                            <Text className="text-center max-w-[95%]">
                                                {item.restaurantName}
                                            </Text>
                                        </View>
                                    )}
                                    keyExtractor={(item) => String(item.restaurantID)}
                                    horizontal
                                />
                            )}
                        </View>
                    </View>
                </View>

                <StatusBar style="auto" />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
