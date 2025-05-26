import { Navigation } from '@/navigators/types';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { FlatList, Image, Pressable, Text, View } from 'react-native';

export const HomeScreen = () => {
    const navigation = useNavigation<Navigation>();
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetch('https://fakerestaurantapi.runasp.net/api/Restaurant')
            .then((res) => res.json())
            .then((json) => setRestaurants(json));
    }, []);

    return (
        <View className="pt-10 px-5 flex gap-[2rem]">
            <View className="border bg-white shadow-sm border-gray-200 rounded-2xl px-2 pt-3 pb-4">
                <Text className="text-gray-700 font-semibold text-3xl mb-5 px-3">Mais novos</Text>

                <View className="h-[120px] ps-3">
                    {!!restaurants.length && (
                        <FlatList
                            data={restaurants}
                            renderItem={({ item }) => (
                                <Pressable
                                    onPress={() => navigation.navigate('RestaurantMenuScreen')}
                                    className="me-3 flex items-center max-w-[90px] active:opacity-50"
                                >
                                    <Image
                                        src="https://picsum.photos/seed/696/3000/2000"
                                        className="w-[75px] h-[75px] rounded-full mb-2"
                                    />

                                    <Text className="text-center max-w-[95%]">
                                        {item.restaurantName}
                                    </Text>
                                </Pressable>
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
                    {!!restaurants.length && (
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
    );
};
