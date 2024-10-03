import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
	subsets: ["latin"],
	variable: "--font-DM_Sans",
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
				<link
					rel="shortcut icon"
					href="/favicon.png"
					type="image/x-icon"
				/>
			</head>

			<body
				className={`antialiased scroll-smooth text-base font-normal text-black/70 selection:bg-brand-blue selection:text-white break-words [word-break:break-word] [word-wrap:break-word] ${dmSans.className}`}
			>
				{children}
			</body>
		</html>
	);
}
