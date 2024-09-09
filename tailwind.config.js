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
                                          "0 0 10px 5px rgba(39, 142, 255, 0.7)",
                              },
                              "50%": {
                                    opacity: "0.5",
                                    boxShadow:
                                          "0 0 20px 10px rgba(39, 142, 255, 0.5)",
                              },
                        },
                  },
                  animation: {
                        glow: "glow 3s infinite",
                  },
            },
      },
      plugins: [
            require("tailwindcss-filters"), // For backdrop-filter support
      ],
};
