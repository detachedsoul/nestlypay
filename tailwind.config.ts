import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "brand-blue": "rgba(12, 70, 211, 1)",
            },
            backgroundImage: {
                "dashboard-navlink": "linear-gradient(90deg, rgba(12, 70, 211, 0.1) 0%, rgba(12, 70, 211, 0) 99.99%, rgba(217, 217, 217, 0) 100%)"
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms')({
            strategy: 'class'
        })
    ],
};
export default config;
