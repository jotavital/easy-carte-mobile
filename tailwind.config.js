/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', 'App.tsx'],
    presets: [require('nativewind/preset')],
    theme: {
        extend: {
            fontFamily: {
                'roboto-thin': 'Roboto_100Thin',
                'roboto-light': 'Roboto_300Light',
                roboto: 'Roboto_400Regular',
                'roboto-medium': 'Roboto_500Medium',
                'roboto-bold': 'Roboto_700Bold',
                'roboto-black': 'Roboto_900Black',
            },
        },
    },
    plugins: [],
};
