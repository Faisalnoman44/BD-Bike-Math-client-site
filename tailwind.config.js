/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#696fc6",

          "secondary": "#85d6f2",

          "accent": "#55ed94",

          "neutral": "#1F2128",

          "base-100": "#E1E5EA",

          "info": "#5CAACC",

          "success": "#78E8BD",

          "warning": "#F5B719",

          "error": "#EA2A3D",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
