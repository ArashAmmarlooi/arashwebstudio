/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // light surfaces
        paper: "#f7f3ea",
        card: "#ffffff",
        // dark surfaces
        night: "#131a17",
        nightcard: "#1c2521",
        // brand
        teal: "#4f837b",
        tealdeep: "#335f58",
        sage: "#9caf88",
        clay: "#d08c68",
        creamtxt: "#ece7db",
        inktxt: "#22302c",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
