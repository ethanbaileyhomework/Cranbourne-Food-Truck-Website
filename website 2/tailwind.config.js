/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C3423F", // Warm muted red
        charcoal: "#222326", // Deep charcoal
        neutralBg: "#F9F6F3",
        accent: "#C3423F"
      },
      fontFamily: {
        sans: [
          "system-ui", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"
        ]
      },
      borderRadius: {
        xl: "1rem"
      },
      boxShadow: {
        subtle: "0 2px 8px rgba(34,35,38,0.08)"
      }
    },
  },
  plugins: [],
}