/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-50": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--primary-50-color), ${opacityValue})`;
          }
          if (opacityVariable !== undefined) {
            return `rgba(var(--primary-50-color), var(${opacityVariable}, 1))`;
          }
          return `rgb(var(--primary-50-color))`;
        },
        "primary-100": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--primary-100-color), ${opacityValue})`;
          }
          if (opacityVariable !== undefined) {
            return `rgba(var(--primary-100-color), var(${opacityVariable}, 1))`;
          }
          return `rgb(var(--primary-100-color))`;
        },
        "primary-200": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--primary-200-color), ${opacityValue})`;
          }
          if (opacityVariable !== undefined) {
            return `rgba(var(--primary-200-color), var(${opacityVariable}, 1))`;
          }
          return `rgb(var(--primary-200-color))`;
        },
        "primary-300": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--primary-300-color), ${opacityValue})`;
          }
          if (opacityVariable !== undefined) {
            return `rgba(var(--primary-300-color), var(${opacityVariable}, 1))`;
          }
          return `rgb(var(--primary-300-color))`;
        },
        "primary-400": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--primary-400-color), ${opacityValue})`;
          }
          if (opacityVariable !== undefined) {
            return `rgba(var(--primary-400-color), var(${opacityVariable}, 1))`;
          }
          return `rgb(var(--primary-400-color))`;
        },
        "primary-500": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--primary-500-color), ${opacityValue})`;
          }
          if (opacityVariable !== undefined) {
            return `rgba(var(--primary-500-color), var(${opacityVariable}, 1))`;
          }
          return `rgb(var(--primary-500-color))`;
        },
        "primary-600": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--primary-600-color), ${opacityValue})`;
          }
          if (opacityVariable !== undefined) {
            return `rgba(var(--primary-600-color), var(${opacityVariable}, 1))`;
          }
          return `rgb(var(--primary-600-color))`;
        },
        "primary-700": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--primary-700-color), ${opacityValue})`;
          }
          if (opacityVariable !== undefined) {
            return `rgba(var(--primary-700-color), var(${opacityVariable}, 1))`;
          }
          return `rgb(var(--primary-700-color))`;
        },
        "primary-800": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--primary-800-color), ${opacityValue})`;
          }
          if (opacityVariable !== undefined) {
            return `rgba(var(--primary-800-color), var(${opacityVariable}, 1))`;
          }
          return `rgb(var(--primary-800-color))`;
        },
        "primary-900": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--primary-900-color), ${opacityValue})`;
          }
          if (opacityVariable !== undefined) {
            return `rgba(var(--primary-900-color), var(${opacityVariable}, 1))`;
          }
          return `rgb(var(--primary-900-color))`;
        },
        "primary-950": ({ opacityVariable, opacityValue }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--primary-950-color), ${opacityValue})`;
          }
          if (opacityVariable !== undefined) {
            return `rgba(var(--primary-950-color), var(${opacityVariable}, 1))`;
          }
          return `rgb(var(--primary-950-color))`;
        }
      },
    },
  },
  plugins: [],
}