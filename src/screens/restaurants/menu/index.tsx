import AntDesign from '@expo/vector-icons/AntDesign';
import { Image, Text, View } from 'react-native';

export const RestaurantMenuScreen = () => {
    return (
        <View className="p-5 flex gap-3 flex-row items-center">
            <Image
                src="https://picsum.photos/seed/696/3000/2000"
                className="w-[9rem] h-[9rem] rounded-lg mb-2"
            />

            <View className="h-[100%]">
                <Text className="text-3xl max-w-[200px] font-semibold mb-3">
                    Restaurante do Vitas
                </Text>

                <View className="flex flex-row justify-between absolute bottom-3 left-0 right-0">
                    <View className="flex flex-row items-center gap-1">
                        <AntDesign name="star" size={24} color="#fd9a00" />
                        <Text className="text-lg font-semibold">4.8</Text>
                    </View>

                    <View>
                        <AntDesign name="hearto" size={24} color="#ff2056" />
                    </View>
                </View>
            </View>
        </View>
    );
};
