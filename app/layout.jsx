import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alex's website",
  description: "Get to know me better",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
