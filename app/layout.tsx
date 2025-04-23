import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Romance Vainilla 💖",
  description: "Con amor para mi esposa 💖",
  icons: {
    icon: "/bookIcon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-pink-50 text-gray-800`}>
        {/* Header global */}
        <header className="sticky top-0 z-50 bg-white shadow-md py-4">
          <div className="max-w-6xl mx-auto flex items-center justify-center px-4">
            <Link href="/">
              <h1 className="text-3xl font-bold text-pink-600 tracking-wide">
                Romance Vainilla 💖
              </h1>
              <h2 className="text-xl font-light text-pink-600 tracking-wide">
                ¿Porque conformarse con uno, cuando te preparé este catálogo?
              </h2>
            </Link>
          </div>
        </header>

        {/* Main content */}
        <main className="max-w-6xl mx-auto px-4 py-10">{children}</main>
      </body>
    </html>
  );
}
