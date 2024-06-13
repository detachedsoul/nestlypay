import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                "brand-blue": "rgba(12, 70, 211, 1)",
                "brand-red": "rgba(255, 0, 0, 0.7)",
                "brand-green": "rgba(39, 174, 96, 0.7)",
                "brand-yellow": "rgba(225, 152, 27, 1)"
            },
            backgroundImage: {
                "dashboard-navlink": "linear-gradient(90deg, rgba(12, 70, 211, 0.1) 0%, rgba(12, 70, 211, 0) 99.99%, rgba(217, 217, 217, 0) 100%)"
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms')({
            strategy: 'class'
        })
    ],
};
export default config;
