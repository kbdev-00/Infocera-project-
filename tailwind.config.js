/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#8B5CF6',
                    50: '#FAF5FF',
                    100: '#F3E8FF',
                    200: '#E9D5FF',
                    300: '#D8B4FE',
                    400: '#C084FC',
                    500: '#A855F7',
                    600: '#9333EA',
                    700: '#7E22CE',
                    800: '#6B21A8',
                    900: '#581C87',
                },
                secondary: {
                    DEFAULT: '#EC4899',
                    50: '#FDF2F8',
                    100: '#FCE7F3',
                    200: '#FBCFE8',
                    300: '#F9A8D4',
                    400: '#F472B6',
                    500: '#EC4899',
                    600: '#DB2777',
                    700: '#BE185D',
                    800: '#9D174D',
                    900: '#831843',
                },
            },
            fontFamily: {
                orbitron: ['Orbitron', 'sans-serif'],
                exo: ['Exo', 'sans-serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'fade-in': 'fade-in 0.6s ease-out',
                'gradient-shift': 'gradient-shift 8s ease infinite',
                'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
                'bounce-float': 'bounce-float 2.8s cubic-bezier(0.4, 0, 0.2, 1) infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0) rotate(0)' },
                    '33%': { transform: 'translateY(-10px) rotate(1deg)' },
                    '66%': { transform: 'translateY(5px) rotate(-1deg)' },
                },
                'fade-in': {
                    '0%': { opacity: '0', transform: 'translateY(30px) scale(0.95)' },
                    '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
                },
                'gradient-shift': {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                },
                'pulse-glow': {
                    '0%, 100%': { boxShadow: '0 0 5px rgba(139, 92, 246, 0.3), 0 0 10px rgba(139, 92, 246, 0.2)' },
                    '50%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.5), 0 0 30px rgba(139, 92, 246, 0.3)' },
                },
                'bounce-float': {
                    '0%, 100%': { transform: 'translateY(0) scale(1)' },
                    '20%': { transform: 'translateY(-8px) scale(1.04)' },
                    '50%': { transform: 'translateY(2px) scale(1.01)' },
                    '80%': { transform: 'translateY(-4px) scale(1.03)' },
                },
            },
        },
    },
    plugins: [],
}
