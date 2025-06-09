import { Dimensions, Image, Text, View } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import Carousel, { Pagination } from 'react-native-reanimated-carousel';

const data = [
    'https://www.sabornamesa.com.br/media/k2/items/cache/bf1e20a4462b71e3cc4cece2a8c96ac8_XL.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-6JPmjjj7OV7D1i3fGZaH1LT7jHWGgfSWlw&s',
];
const width = Dimensions.get('window').width;

export const ProductDetailsScreen = () => {
    const progress = useSharedValue<number>(0);

    return (
        <View className="min-h-full flex">
            <View className="w-full h-[25rem] relative">
                <Carousel
                    width={width}
                    data={data}
                    onProgressChange={progress}
                    loop={false}
                    renderItem={(imagePath) => (
                        <View>
                            <Image src={imagePath.item} className="w-full h-full" />
                            <View className="absolute w-full h-full bg-black/30" />
                        </View>
                    )}
                />

                <Pagination.Basic
                    progress={progress}
                    data={data}
                    dotStyle={{ backgroundColor: 'rgba(0,0,0,0.1)', borderRadius: 50 }}
                    activeDotStyle={{ backgroundColor: '#fff', borderRadius: 50 }}
                    containerStyle={{
                        gap: 5,
                        marginTop: -55,
                        paddingHorizontal: 10,
                        paddingVertical: 7,
                        borderRadius: 50,
                        backgroundColor: 'rgba(255, 255, 255, 0.543)',
                    }}
                />
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
