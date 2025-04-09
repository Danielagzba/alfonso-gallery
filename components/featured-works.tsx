"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

// Sample featured works data
const featuredWorks = [
  {
    id: 1,
    title: "Body ART",
    year: 2023,
    medium: "Óleo sobre tela",
    dimensions: "60 x 80 cms",
    image: "/bodyart.jpg",
  },
  {
    id: 5,
    title: "Invitación",
    year: 2022,
    medium: "Óleo sobre tela",
    dimensions: "20 × 20 cms",
    image: "/invitacion.jpg",
  },
  {
    id: 3,
    title: "Regresión",
    year: 2023,
    medium: "Óleo sobre tela",
    dimensions: "60 × 90 cms",
    image: "/regresion.jpg",
  },
  {
    id: 6,
    title: "Fantasma del Pasado",
    year: 2023,
    medium: "Óleo sobre tela",
    dimensions: "50 × 70 cms",
    image: "/devil.jpg",
  },
];

export default function FeaturedWorks() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(featuredWorks.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= featuredWorks.length
        ? 0
        : prevIndex + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerPage < 0
        ? Math.max(0, featuredWorks.length - itemsPerPage)
        : prevIndex - itemsPerPage
    );
  };

  const currentWorks = featuredWorks.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <section className="py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Obras Destacadas</h2>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={featuredWorks.length <= itemsPerPage}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={featuredWorks.length <= itemsPerPage}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentWorks.map((artwork) => (
            <Link
              key={artwork.id}
              href={`/gallery/${artwork.id}`}
              className="group"
            >
              <div className="overflow-hidden rounded-lg border bg-background transition-all hover:shadow-md">
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src={artwork.image || "/placeholder.svg"}
                    alt={artwork.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-medium">{artwork.title}</h3>
                  <p className="text-muted-foreground">{artwork.year}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {artwork.medium}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button asChild variant="outline">
            <Link href="/gallery">Ver Todas las Obras</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
