/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  resolve: {
    alias: {
      '@radix-ui/react-slot': '@radix-ui/react-slot/dist/index.mjs',
    },
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
        kaushan: "Kaushan Script",
      },
      backgroundImage: {
      },
    },
  },
  plugins: [],
};
