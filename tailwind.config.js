/** @type {import('tailwindcss').Config} */
export const mode = "jit";
export const purge = {
  enabled: process.env.NODE_ENV === "production",
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
};
export const darkMode = "class";
export const theme = {
  extend: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      primary: {
        blue: "#007bff",
        indigo: "#6610f2",
        purple: "#6f42c1",
        pink: "#e83e8c",
        red: "#dc3545",
        orange: "#fd7e14",
        yellow: "#ffc107",
        green: "#28a745",
        teal: "#20c997",
        cyan: "#17a2b8",
        white: "#fff",
        gray: "#6c757d",
        grayDark: "#343a40",
        primary: "#007bff",
        secondary: "#6c757d",
        success: "#28a745",
        info: "#17a2b8",
        warning: "#ffc107",
        danger: "#dc3545",
      },
      zinc: {
        300: "#d1d5db",
        200: "#e5e7eb",
      },
    },
    boxShadow: {
      price: "0 1px 20px 0 rgba(17, 30, 79, 0.07)",
      num: "0 1px 20px 0 rgba(17, 30, 79, 0.1)",
    },
    transitionProperty: {
      width: "width",
      spacing: "margin, padding",
    },
    transitionDuration: {
      300: "300ms",
    },
    transitionTimingFunction: {
      "in-out": "ease-in-out",
    },
    screens: {
      xs: "430px", 
      sm: "640px", 
      md: "768px", 
      lg: "1024px", 
      xl: "1280px", 
      "2xl": "1536px", 
    },
  },
};
export const plugins = [require("@tailwindcss/forms")];
