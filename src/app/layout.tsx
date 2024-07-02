import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layouts/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NSFW Detector",
  description: "Local NSFW Detection in Google Photos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Sidebar />
        <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
          {children}
        </main>
      </body>
    </html>
  );
}
