/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#1510AB",
        darkBlue: "#0A0068",
        grey: "#52588A",
        blueOpacity: "rgba(21,16,171, 0.2)",
      },
    },
  },
  plugins: [],
};
