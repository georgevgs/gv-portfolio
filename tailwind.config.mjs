/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "linkedin-blue": "#0072b1",
        "github-black": "#24292e",
        "neon-orange": "#ff7900",
        "neon-pink": "#ff3885",
        "neon-blue": "#b3c5d2",
        "neon-green": "#00cc00",
      },
      scale: {
        103: "1.03",
      },
      rotate: {
        '315': '315deg',
      }
    },
  },
  plugins: [],
};
