import { Image, Text, View } from 'react-native';

export const ProductDetailsScreen = () => {
    return (
        <View className="min-h-full flex">
            <View className="w-full h-[25rem] relative">
                <Image
                    src="https://www.sabornamesa.com.br/media/k2/items/cache/bf1e20a4462b71e3cc4cece2a8c96ac8_XL.jpg"
                    className="w-full h-full "
                />
                <View className="absolute w-full h-full bg-black/30" />
            </View>

            <View className="h-full bg-white mt-[-1rem] rounded-t-3xl p-5 shadow-slate-800 shadow-2xl">
                <Text className="text-2xl font-semibold text-slate-800">Podrón de qualidade</Text>

                <Text className="text-lg font-medium mb-1 text-slate-500">
                    Hambúrguer suculento com queijo, bacon e molho especial.
                </Text>

                <Text className="text-3xl font-semibold text-green-700 mt-2">R$ 19,90</Text>
            </View>
        </View>
    );
};
