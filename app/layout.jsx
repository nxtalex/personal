import "./globals.css";
import Header from "@/components/header/header.jsx";

export const metadata = {
  title: "Alex's website",
  description: "Get to know me better",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="body">
        <Header />
        <section id="page">{children}</section>
      </body>
    </html>
  );
}
