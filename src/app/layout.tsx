import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from 'next/font/google'
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import ReactQueryProvider from "@/providers/QueryProvider";
const inter = Inter({
  subsets: ["latin"], // Choose subsets based on your needs
  // Optional custom variable
});
const queryClient = new QueryClient()
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
            <ReactQueryProvider>
        <Navbar />
        <Toaster />

        {children}
        <Footer />
        </ReactQueryProvider>

      </body>
    </html>
  );
}

