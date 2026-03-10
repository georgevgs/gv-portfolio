/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // iOS system colors
        "ios-blue":   "#0A84FF",
        "ios-green":  "#30D158",
        "ios-indigo": "#5E5CE6",
        "ios-orange": "#FF9F0A",
        "ios-pink":   "#FF375F",
        "ios-purple": "#BF5AF2",
        "ios-teal":   "#40CBE0",
        "ios-yellow": "#FFD60A",
        // legacy — kept for project/work pages
        "linkedin-blue": "#0072b1",
        "github-black":  "#24292e",
        "neon-orange":   "#ff7900",
        "neon-pink":     "#ff3885",
        "neon-green":    "#00cc00",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
    },
  },
  plugins: [],
};
