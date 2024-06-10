import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({ subsets: ["latin"] });

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
            <body className={`antialiased scroll-smooth tracking-wider text-base text-black/70 ${urbanist.className}`}>
                {children}
            </body>
        </html>
    );
}
