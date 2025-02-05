import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from 'next/font/google'
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
const inter = Inter({
  subsets: ["latin"], // Choose subsets based on your needs
  // Optional custom variable
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(inter.className, "w-full h-screen")} suppressHydrationWarning={true}>
      <body
        className=" w-full h-screen"
      >
        <Navbar />
        {children}
        <Footer />

      </body>
    </html>
  );
}

