/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#ffffff",
        "btn-active": "#2F79E9",
        "btn-disabled": "#90CAF9",
        "bg-secondary": "#F5F5F5",
        "bg-blue-transparent": "rgba(144,202,249,0.2)",
        "bg-red": "#E06C73",
        "black-transparent": "rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};
