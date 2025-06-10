import { Navigation } from '@/navigators/types';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Image, Modal, Pressable, Text, View } from 'react-native';

export const RestaurantMenuScreen = () => {
    const navigation = useNavigation<Navigation>();
    const [visible, setVisible] = useState(false);

    return (
        <View className="p-5 flex gap-5 bg-white min-h-full">
            <View className="items-center">
                <View className="w-[9rem] h-[9rem]">
                    <Image
                        src="https://picsum.photos/seed/696/3000/2000"
                        className="w-full h-full  rounded-full"
                    />

                    <Pressable
                        onPress={() => setVisible(true)}
                        className="bg-white p-3 rounded-full absolute right-0 bottom-0"
                    >
                        <AntDesign name="hearto" size={24} color="#ff2056" />
                    </Pressable>
                </View>
            </View>

            <View>
                <Text className="text-3xl text-center max-w-[100%] font-semibold mb-1 text-slate-800">
                    Restaurante do Vitas
                </Text>

                <View className="flex-row gap-5 justify-center items-center">
                    <View className="flex-row gap-4">
                        <View className="flex-row items-center gap-1">
                            <AntDesign name="star" size={20} color="#fd9a00" />
                            <Text className="text-md font-medium">4.8</Text>
                        </View>
                    </View>

                    <Text className="text-md font-medium text-green-700">Aberto até 23:00</Text>
                </View>
            </View>

            <View>
                <Pressable
                    onPress={() => navigation.navigate('ProductDetailsScreen')}
                    className="flex-row gap-5 p-3 w-full mt-5 pb-5 border-b border-gray-200 active:opacity-50 active:bg-slate-300"
                >
                    <Image
                        src="https://cdn.pixabay.com/photo/2024/02/26/19/39/monochrome-image-8598798_640.jpg"
                        className="w-[20%] h-auto rounded-lg"
                    />

                    <View className="flex gap-1 w-[80%]">
                        <Text className="text-xl font-medium text-slate-800">
                            Escondidinho de Caine
                        </Text>

                        <Text className="text-md w-[95%]">
                            Escondidinho de Caine pra comer bem e encher a pansa
                        </Text>
                    </View>
                </Pressable>

                <Pressable
                    onPress={() => navigation.navigate('ProductDetailsScreen')}
                    className="flex-row gap-5 p-3 w-full mt-5 pb-5 border-b border-gray-200 active:opacity-50 active:bg-slate-300"
                >
                    <Image
                        src="https://cdn.pixabay.com/photo/2024/02/26/19/39/monochrome-image-8598798_640.jpg"
                        className="w-[20%] h-auto rounded-lg"
                    />

                    <View className="flex gap-1 w-[80%]">
                        <Text className="text-xl font-medium text-slate-800">
                            Escondidinho de Caine
                        </Text>

                        <Text className="text-md w-[95%]">
                            Escondidinho de Caine pra comer bem e encher a pansa
                        </Text>
                    </View>
                </Pressable>
            </View>

            <Modal
                animationType="fade"
                transparent={true}
                visible={visible}
                onRequestClose={() => setVisible(false)}
            >
                <View className="flex-1 justify-center items-center bg-black/50 px-4">
                    <View className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
                        <Text className="text-xl font-semibold mb-4">This is a modal!</Text>
                        <Pressable
                            onPress={() => setVisible(false)}
                            className="bg-red-500 px-4 py-2 rounded-md self-end"
                        >
                            <Text className="text-white font-semibold">Close</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
};
