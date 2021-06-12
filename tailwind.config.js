module.exports = {
  purge: ["./src/**/*.css", "./public/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#0d6efd",
        secondary: "#6c757d",
        success: "#198754",
        danger: "#dc3545",
        info: "#0dcaf0",
        warning: "#ffc107",
        light: "#f8f9fa",
      },
      fontFamily: {
        nunito: ["Nunito"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
