import { Urbanist } from "next/font/google";

import Footer from "@/app/components/footer";
import Navbar from "@/app/components/navbar";
import ModalProvider from "@/app/providers/modal-provider";
import ToastProvider from "@/app/providers/toast-provider";

import "./globals.css";

const font = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Store",
  description: "Store - The place for all your purchases.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
