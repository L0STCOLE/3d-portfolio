module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#05070a",
        secondary: "#8b96a5",
        tertiary: "#0d1117",
        quaternary: "#39ff88",
        border: "#1c2530",
      },
      screens: {
        'xs': "450px",
        '3xl': "2160px",
      },
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
        sans: ["Inter", "sans-serif"],
      },
      keyframes: {
        textRotate1: {
          '0%, 40%': { transform: 'translate3d(0, 0%, 0) rotateX(0deg)' },
          '60%, 100%': { transform: 'translate3d(0, -100%, 0) rotateX(-90deg)' },
        },
        textRotate2: {
          '0%, 40%': { transform: 'translate3d(0, 100%, 0) rotateX(-90deg)' },
          '60%, 100%': { transform: 'translate3d(0, 0%, 0) rotateX(0deg)' },
        },
      },
      animation: {
        textRotate1: 'textRotate1 2.4s infinite alternate',
        textRotate2: 'textRotate2 2.4s infinite alternate',
      },
      fontSize: {
        title: '2rem',
        subtitle: '1.5rem',
      },
    },
  },
  plugins: [],
};
