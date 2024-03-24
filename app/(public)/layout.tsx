'use client'
import { Header } from "@/components/Header/Header";
import { CartProvider } from "../contexts/cartContaxt";
import { Toaster } from "@/components/ui/sonner";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <CartProvider>
          <Header/>
          {children}
          <Toaster richColors/>
        </CartProvider>
      </body>
    </html>
  );
}
