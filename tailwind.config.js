/** @type {import('tailwindcss').Config} */
module.exports = {
      content: [
            "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
            "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
            "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      ],
      theme: {
            extend: {
                  colors: {
                        primary: {
                              DEFAULT: "#fefffe",
                              light: "#000000",
                              dark: "#fefffe",
                        },
                        secondary: {
                              DEFAULT: "#151514",
                              light: "#151514",
                              dark: "#151514",
                        },
                        buttonPrimary: {
                              DEFAULT: "#278eff",
                              light: "#278eff",
                              dark: "#278eff",
                        },
                        buttonSecondary: {
                              DEFAULT: "#091d33",
                              light: "#091d33",
                              dark: "#091d33",
                        },
                        background: {
                              light: "#F3F4F6",
                              dark: "#000000",
                        },
                  },
            },
      },
      plugins: [],
};
