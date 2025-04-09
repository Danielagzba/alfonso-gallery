"use client";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import FeaturedWorks from "@/components/featured-works";
import NewsletterSignup from "@/components/newsletter-signup";

export default function Home() {
  const carouselItems = [
    {
      image: "/obra.jpeg",
      title: "Manual para no repetirlo",
      subtitle: "Exposición Individual",
      date: "22 de mayo - 09 de junio, 2025",
      location: "Galería Espacio Libre",
      description: "Autobiografía parcial de mi colapso y redención",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section Carousel - Modern Creative Version */}
      <section className="relative h-[85vh] w-full overflow-hidden bg-black">
        {/* Carousel implementation */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={carouselItems[0].image || "/placeholder.svg"}
              alt={carouselItems[0].title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          </div>

          <div className="absolute inset-0 flex flex-col justify-center p-4 md:p-16">
            <div className="max-w-xl">
              <div className="h-1 w-20 bg-primary mb-6" />
              <span className="inline-block text-white/80 text-xl mb-2 font-medium">
                Próxima Exposición
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
                {carouselItems[0].title}
              </h1>
              <div className="flex items-center gap-2 text-primary mb-4">
                <Calendar className="h-5 w-5" />
                <span className="text-white/90">{carouselItems[0].date}</span>
              </div>
              <div className="flex items-center gap-2 text-primary mb-6">
                <MapPin className="h-5 w-5" />
                <span className="text-white/90">
                  {carouselItems[0].location}
                </span>
              </div>
              <p className="text-xl md:text-2xl text-white/80 max-w-md mb-8">
                {carouselItems[0].description}
              </p>
              <div className="flex gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-white hover:bg-primary/90 rounded-none px-8"
                >
                  <Link href="/exhibition">Detalles de la Exposición</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 rounded-none px-8"
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Exhibition */}
      <section className="py-16 px-4 md:px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Próxima Exposición
              </h2>
              <h3 className="text-2xl font-medium mb-4">
                "Manual para no repetirlo"
              </h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>22 de mayo - 09 de junio, 2025</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Galería Espacio Libre</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Inauguración: 22 de mayo, 6:00 PM - 10:00 PM</span>
                </div>
              </div>
              <p className="text-white/80 mb-6">
                Puertas & Ventanas es una exposición autobiográfica que reúne
                obras creadas entre 2023 y 2025. A través de una narrativa
                cronológica, refleja cómo he afrontado mi diagnóstico de VIH y
                los cambios que han definido mi vida en los últimos años.
              </p>
              <Button
                asChild
                variant="outline"
                className="border-white text-black hover:bg-white hover:text-black"
              >
                <Link href="/exhibition">
                  Detalles de la Exposición{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="md:w-1/2">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                <Image
                  src="/flyer.png"
                  alt="Vista previa de la exposición"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <FeaturedWorks />

      {/* Artist Statement */}
      <section className="py-16 px-4 md:px-6 bg-muted/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Declaración del Artista</h2>
          <p className="text-lg text-muted-foreground mb-4">
            Este proyecto traza mi camino como artista y como persona. Explora
            de dónde vengo, los desafíos que he enfrentado y hacia dónde me
            dirijo. Se centra principalmente en los últimos cinco años, un
            periodo de transformación, introspección y crecimiento.
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            Cada capítulo refleja una parte de mi historia: mi pasado, mis
            luchas, mis descubrimientos y la manera en que he usado el arte para
            expresarme, sanar y conectar.
          </p>
          <Button asChild variant="outline">
            <Link href="/about">Sobre el Artista</Link>
          </Button>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />
    </main>
  );
}
