/**
 * @file layout.tsx
 * @brief Plantilla principal de la aplicacion
 * @details Estructura base compartida por todas las paginas (Color de fondo, Fuentes, Iconos, Metadata)
 * @author Juan Ante
 * @date 2025
 */

import "./globals.css";
import { Tangerine, Roboto_Flex } from 'next/font/google';
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "./components/navbar";
import ShoppingCart from "./components/shoppingCart";
import { CartProvider } from './context/CartContext';

const tangerine = Tangerine({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-tangerine',
  display: 'swap',
});

const roboto_flex = Roboto_Flex({
  weight: ['400','700'],
  subsets: ['latin-ext'],
  variable: '--font-roboto_flex',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Mas que letras - Store",
  description: "Made with love ❤️",
  icons: {
    icon: "/icons/storefront.svg",
  },
};

export default function RootLayout({children,}: {children: React.ReactNode;}) {

  return (
    <html lang="es" className={`${tangerine.variable} ${roboto_flex.variable}`}>
      <body>
        <CartProvider>
          <header className="sticky bg-[var(--color-bg)] top-0 z-50 shadow-md py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-center text-6xl pb-3">
                <Link href="/">
                  <h1>Mas que letras</h1>
                </Link>
              </div>
              <div className="flex items-center justify-between">
                <Navbar></Navbar>
                <ShoppingCart></ShoppingCart>
              </div>
            </div>
          </header>
          <main className="max-w-6xl mx-auto px-5 py-5">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
