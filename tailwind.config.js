/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,svelte,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      },
      colors: {
        primary: "#6138FF",
        onPrimary: "#6138FF40",
        primaryBg: "#FAFAFA"
      },
      fontSize: {
        xxs: "9px"
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg, #A57D24 0%, #D8BE62 21.35%, #F1DD80 32.81%, #FBF2A8 52.08%, #F1DD80 74.48%, rgba(165, 125, 36, 1) 100%)"
      }
    },
  },
  plugins: [],
}

