import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alfonso Alfaro | Contemporary Abstract Artist",
  description:
    "Portfolio and exhibition information for contemporary abstract artist Alfonso Alfaro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <header className="border-b">
              <div className="flex h-16 items-center px-4 md:px-6">
                <Link href="/" className="font-semibold text-lg">
                  Alfonso Alfaro
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                  <Link
                    href="/"
                    className="text-sm font-medium hover:underline underline-offset-4"
                  >
                    Inicio
                  </Link>
                  <Link
                    href="/gallery"
                    className="text-sm font-medium hover:underline underline-offset-4"
                  >
                    Galería
                  </Link>
                  <Link
                    href="/exhibition"
                    className="text-sm font-medium hover:underline underline-offset-4"
                  >
                    Exposición
                  </Link>
                  <Link
                    href="/about"
                    className="text-sm font-medium hover:underline underline-offset-4"
                  >
                    Sobre
                  </Link>
                  <Link
                    href="/contact"
                    className="text-sm font-medium hover:underline underline-offset-4"
                  >
                    Contacto
                  </Link>
                </nav>
              </div>
            </header>
            {children}
            <footer className="border-t py-6 md:py-8">
              <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                  © 2025 Alfonso Alfaro. Todos los derechos reservados.
                </p>
                <div className="flex gap-4">
                  <Link
                    href="#"
                    className="text-sm font-medium hover:underline underline-offset-4"
                  >
                    Política de Privacidad
                  </Link>
                  <Link
                    href="#"
                    className="text-sm font-medium hover:underline underline-offset-4"
                  >
                    Términos de Servicio
                  </Link>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
