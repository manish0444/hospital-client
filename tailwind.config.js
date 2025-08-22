module.exports = {
  theme: {
    extend: {
      animation: {
        float: "float 15s ease-in-out infinite",
        drift: "drift 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0) rotate(0deg)",
          },
          "50%": {
            transform: "translateY(-20px) rotate(5deg)",
          },
        },
        drift: {
          "0%": {
            transform: "translateY(0) translateX(0)",
          },
          "100%": {
            transform: "translateY(-100vh) translateX(20px)",
          },
        },
      },
    },
  },
  plugins: [],
}
