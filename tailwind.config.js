/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts}"],
    theme: {
        extend: {
            fontFamily: {
                custom: ["Nunito, sans-serif"],
            },
        },
    },
    plugins: [],
}

