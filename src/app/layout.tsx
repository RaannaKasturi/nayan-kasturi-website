import type { Metadata } from "next";
import { Poppins, Syne } from "next/font/google";
import "./globals.css";

// Poppins for body text
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // adjust as needed
});

// Syne for headings
const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Nayan Kasturi",
  description: "Personal website of Nayan Kasturi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${syne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
