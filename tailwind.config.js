/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#FCB63D',
        secondary: '#201E49',
        secondaryLight: '#2B2D58',
        red: '#EA1D2C',
        gray: '#A4A3A3',
        grayLight: '#F3F3F3',
        purpleLight: '#CECCFF',
      },
      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        'extra-bold': '800',
        black: '900',
      },
    },
  },
  plugins: [],
}

