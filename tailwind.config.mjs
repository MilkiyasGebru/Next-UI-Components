/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lamaSky:"#C3EBFA",
        lamaSkyLight:"#EDF9FD",
        lamaYellow: "#FAE27C",
        lamaYellowLight:"#FEFCE8",
        lamaPurple: "#CFCEFF",
        lamaPurpleLight: "#F1F0FF",
      },
    },
  },
  plugins: [],
};
