module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-img": "url('./assets/Image.png')",
      },

      scrollbar: {
        hide: "hidden",
      },
    },
  },
  plugins: [],
};
