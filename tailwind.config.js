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
                              DEFAULT: "#00FFE6  ",
                              light: "#00FFE6  ",
                              dark: "#00FFE6  ",
                        },
                        buttonSecondary: {
                              DEFAULT: "#214444",
                              light: "#214444",
                              dark: "#214444",
                        },
                        background: {
                              light: "#F3F4F6",
                              dark: "#000000",
                        },
                        customBg: "rgba(34, 34, 34, 0.44)", // Add custom background color
                  },
                  boxShadow: {
                        custom: "0 4px 30px rgba(0, 0, 0, 0.1)", // Add custom box-shadow
                  },
                  borderRadius: {
                        custom: "16px", // Add custom border-radius
                  },
                  backdropFilter: {
                        blur: "blur(5.6px)", // Add custom backdrop-filter
                  },
                  keyframes: {
                        glow: {
                              "0%, 100%": {
                                    opacity: "1",
                                    boxShadow:
                                          "0 0 10px 5px rgba(103,185,182, 0.7)",
                              },
                              "50%": {
                                    opacity: "0.5",
                                    boxShadow:
                                          "0 0 20px 10px rgba(103,185,182, 0.5)",
                              },
                        },
                  },
                  animation: {
                        glow: "glow 3s infinite",
                  },
                  screens: {
                        1440: "1440px", // Custom breakpoint for 1440px
                        1360: "1360px", // Custom breakpoint for 1360px
                  },
            },
      },
      plugins: [
            require("tailwindcss-filters"), // For backdrop-filter support
      ],
};
