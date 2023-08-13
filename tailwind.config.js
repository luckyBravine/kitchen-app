/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
  "./public/index.html",
  "./public/index.js"
];
export const theme = {
  extend: {
    fontFamily: {'roboto':'Roboto'},
  },
  // 
};
export const plugins = [];