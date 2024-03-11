/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      protestRevolution: ["Protest Revolution"],
      roboto: ["Roboto"],
    },
    extend: {
      colors: {
        "dark-blue": "#0c115f",
        "nore-blue": "#0a1d3d",
        "hightlight-yellow": " #feff4b",
      },
    },
  },
  plugins: [],
};
