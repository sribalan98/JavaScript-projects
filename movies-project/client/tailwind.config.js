/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      protestRevolution: ["Protest Revolution"],
    },
    extend: {
      colors: {
        "dark-blue": "#0c115f",
        "hightlight-yellow": " #feff4b",
      },
    },
  },
  plugins: [],
};
