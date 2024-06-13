/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["light", "dark", "cupcake", "retro","pastel"],
  },
  theme: {
    extend: {
      backgroundImage: {
        mahaveer: "url(./src/assets/bg.jpg)",
        savastik:
          "url(https://crystalpng.com/wp-content/uploads/2023/03/Swastik-Logo.png)",
      },
    },
  },
  plugins: [require("daisyui")],
};
