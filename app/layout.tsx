import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import Navbar from "@/components/Global/Navbar";
import Footer from "@/components/Global/Footer";
import { PHProvider } from "./PostHog";
export const metadata: Metadata = {
  title: "Xposure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-poppins bg-background_black">
        <PHProvider>
          <AuthProvider>
            <Navbar />
            {children}
            <Footer />
          </AuthProvider>
        </PHProvider>
      </body>
    </html>
  );
}
