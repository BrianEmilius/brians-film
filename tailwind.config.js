/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      "boxShadow": {
        "upper": "0 -5px 10px 1px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
