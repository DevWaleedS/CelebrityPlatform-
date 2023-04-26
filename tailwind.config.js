/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            container: {
                padding: "20px",
                center: true,
                max_width: "1180px",
            },

            colors: {
                "color-main-01": "#E468CA",
                "color-main-02": "#0AB3D0",
                "color-main-03": "#fff",
                "color-main-04": "#242424",
                "color-main-05": "#fcedf9",
                "color-main-06": "#FAFAFA",
            },
        },
    },
    plugins: [],
};