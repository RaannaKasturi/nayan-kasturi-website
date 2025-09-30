import type { Metadata } from "next";
import { Poppins, Syne } from "next/font/google";
import "./globals.css";
import { FloatingHeader } from "@/components/floating-header";

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
      <body className={`${poppins.variable} ${syne.variable} antialiased`}>
        <div className="fixed inset-x-0 top-0 flex justify-center px-4 sm:px-6 md:px-10 z-50">
          <div className="w-full max-w-3xl rounded-lg border shadow bg-background/95 supports-[backdrop-filter]:bg-background/80 backdrop-blur-lg">
            <FloatingHeader />
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
