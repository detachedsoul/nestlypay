import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const circularSTD = localFont({
    src: [
        {
            path: "../assets/fonts/Circular Std Book.woff2",
            weight: "400",
            style: "normal"
        },
        {
            path: "../assets/fonts/Circular Std Medium.woff2",
            weight: "500",
            style: "normal"
        },
        {
            path: "../assets/fonts/Circular Std Bold.woff2",
            weight: "800",
            style: "normal"
        }
    ],
    display: 'swap',
});

export const metadata: Metadata = {
    title: "NestlyPay | Home",
    description: "NestlyPay - Connecting business for simplified payments"
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
            </head>

            <body className={`antialiased scroll-smooth text-base font-normal text-black/70 selection:bg-brand-blue selection:text-white break-words [word-break:break-word] [word-wrap:break-word] ${circularSTD.className}`}>
                {children}
            </body>
        </html>
    );
}
