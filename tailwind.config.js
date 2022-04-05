module.exports = {
    content: ["./js/*.{html,js}","./*.{html,js}"],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/forms'),
    ],
}