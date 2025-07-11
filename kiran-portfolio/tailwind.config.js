/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Optional: Customize theme colors
        primary: "#0ff",
        secondary: "#f0f",
      },
      animation: {
        backgroundMove: "bgMove 10s infinite linear",
        glow: "glow 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        "spin-slow": "spin 10s linear infinite",
        "spin-reverse": "spin 10s linear infinite reverse",
        fadeInUp: "fadeInUp 1.2s ease-out",
        fadeInRight: "fadeInRight 1.2s ease-out",
      },
      keyframes: {
        bgMove: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        glow: {
          "0%, 100%": { textShadow: "0 0 10px #0ff, 0 0 20px #0ff" },
          "50%": { textShadow: "0 0 20px #f0f, 0 0 30px #ff0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        fadeInUp: {
          from: { opacity: 0, transform: "translateY(40px)" },
          to: { opacity: 1, transform: "translateY(0px)" },
        },
        fadeInRight: {
          from: { opacity: 0, transform: "translateX(40px)" },
          to: { opacity: 1, transform: "translateX(0px)" },
        },
      },
    },
  },
  plugins: [],
};
