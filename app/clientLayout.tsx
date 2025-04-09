"use client";

import type React from "react";

import { useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Menu } from "lucide-react";

import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const inter = Inter({ subsets: ["latin"] });

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/gallery", label: "Galería" },
  { href: "/exhibition", label: "Exposición" },
  { href: "/about", label: "Sobre" },
  { href: "/contact", label: "Contacto" },
];

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <html lang="es">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <header className="border-b sticky top-0 bg-background z-40">
              <div className="flex h-16 items-center px-4 md:px-6">
                <Link href="/" className="font-semibold text-lg">
                  Alfonso Alfaro
                </Link>

                {/* Desktop Navigation */}
                <nav className="ml-auto hidden md:flex gap-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-sm font-medium hover:underline underline-offset-4"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                {/* Mobile Navigation */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild className="md:hidden ml-auto">
                    <Button variant="ghost" size="icon" aria-label="Menu">
                      <Menu className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[240px] sm:w-[300px]">
                    <div className="flex flex-col gap-6 mt-8">
                      {navItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="text-lg font-medium hover:underline underline-offset-4"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </SheetContent>
                </Sheet>
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
