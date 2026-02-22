import { config } from "zod/v4/core"

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
        screens: {
            'xs': '475px',
        },
        theme: {
            extend: {
                colors: {
                    primary: {
                        50: '#fef4f2',
                        100: '#fde8e3',
                        200: '#fcd5cb',
                        300: '#f9b5a6',
                        400: '#f48b72',
                        500: '#ea6645',
                        600: '#d64a28',
                        700: '#b43c1e',
                        800: '#95351d',
                        900: '#7c311e',
                        950: '#43160c',
                    },
                    neutral: {
                        50: '#fafafa',
                        100: '#f5f5f5',
                        200: '#e5e5e5',
                        300: '#d4d4d4',
                        400: '#a3a3a3',
                        500: '#737373',
                        600: '#525252',
                        700: '#404040',
                        800: '#262626',
                        900: '#171717',
                        950: '#0a0a0a',
                    },
                },
                fontFamily: {
                    display: ['var(--font-display)', 'system-ui', 'sans-serif'],
                    sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
                },
                animation: {
                    'fade-in': 'fadeIn 0.6s ease-out',
                    'slide-up': 'slideUp 0.5s ease-out',
                    'slide-in': 'slideIn 0.4s ease-out',
                    'scale-in': 'scaleIn 0.3s ease-out',
                    'shimmer': 'shimmer 2s infinite',
                },
                keyframes: {
                    fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                    },
                    slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                    },
                    slideIn: {
                    '0%': { transform: 'translateX(-20px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                    },
                    scaleIn: {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                    },
                    shimmer: {
                    '0%': { backgroundPosition: '-1000px 0' },
                    '100%': { backgroundPosition: '1000px 0' },
                    },
                },
            },
        },

    
    plugins: [],
}

export default config;