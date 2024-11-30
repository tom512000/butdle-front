/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.jsx"],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                lexend: ["Lexend", "sans-serif"],
            },
            colors: {
                "white-example": "#FFFFFF",
            },
            screens: {
                ssm: "320px",
                msm: "375px",
                lsm: "425px",
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                "2xl": "1536px",
                "3xl": "1600px",
            },
            fontSize: {
                xxxs: ["0.5rem", { lineHeight: "0.75rem" }],
                xxs: ["0.625rem", { lineHeight: "0.875rem" }],
                xs: ["0.75rem", { lineHeight: "1rem" }],
                sm: ["0.875rem", { lineHeight: "1.25rem" }],
                base: ["1rem", { lineHeight: "1.5rem" }],
                lg: ["1.125rem", { lineHeight: "1.75rem" }],
                xl: ["1.25rem", { lineHeight: "1.75rem" }],
                "2xl": ["1.5rem", { lineHeight: "2rem" }],
                "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
                "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
                "5xl": ["3rem", { lineHeight: "1rem" }],
            },
            fontWeight: {
                thin: "100",
                extralight: "200",
                light: "300",
                normal: "400",
                medium: "500",
                semibold: "600",
                bold: "700",
                extrabold: "800",
                black: "900",
            },
        },
    },
    variants: {},
    plugins: [],
};
