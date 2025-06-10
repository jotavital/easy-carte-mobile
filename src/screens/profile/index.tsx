import AntDesign from '@expo/vector-icons/AntDesign';
import { Image, Pressable, Text, View } from 'react-native';

export const ProfileScreen = () => {
    return (
        <View className="p-5 flex gap-5">
            <View className="items-center">
                <View className="w-[9rem] h-[9rem]">
                    <Image
                        src="https://picsum.photos/seed/696/3000/2000"
                        className="w-full h-full  rounded-full"
                    />

                    <Pressable
                        onPress={() => null}
                        className="bg-white p-3 rounded-full absolute right-0 bottom-0"
                    >
                        <AntDesign name="edit" size={20} />
                    </Pressable>
                </View>
            </View>

            <View>
                <Text className="text-3xl text-center max-w-[100%] font-semibold mb-1 text-slate-800">
                    Nome de Usuário
                </Text>
            </View>
        </View>
    );
};
