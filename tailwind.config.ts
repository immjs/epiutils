import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg": "var(--bg)",
        "fg": "var(--fg)",
        "green": "var(--green)",
        "done": "var(--done)",
        "done-flipped": "var(--done-flipped)",
        "orange": "var(--orange)",
        "red": "var(--red)",
        "mauve": "var(--mauve)",
        "blue": "var(--blue)",
        "surface-i": "var(--surface-i)",
        "surface-ii": "var(--surface-ii)",

        "half-orange": "var(--half-orange)",
        "half-fg": "var(--half-fg)",
      },
      fontFamily: {
        para: ['var(--font-hanken-grotesk)'],
        head: ['var(--font-silkscreen)'],
      },
    },
  },
  plugins: [],
} satisfies Config;
