import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type HomeStackParamList = {
    HomeScreen: undefined;
    RestaurantMenuScreen: undefined;
    ProductDetailsScreen: undefined;
    // ProductDetailsScreen: { productId: string };
};

export type Navigation = NativeStackNavigationProp<HomeStackParamList>;
