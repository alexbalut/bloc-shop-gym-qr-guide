import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bloc Shop — Machine guides",
    template: "%s · Bloc Shop",
  },
  description:
    "Scan a machine QR or browse guides at Bloc Shop Chabanel. Bilingual EN/FR how-tos. Unofficial demo mockup — not affiliated with Bloc Shop.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sourceSans.variable} h-full antialiased`}>
      <body
        className="min-h-full flex flex-col font-sans"
        style={{ fontFamily: "var(--font-source-sans), var(--font-sans)" }}
      >
        {children}
      </body>
    </html>
  );
}
