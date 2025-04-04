"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, MapPin, Clock, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import FeaturedWorks from "@/components/featured-works"
import NewsletterSignup from "@/components/newsletter-signup"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const carouselItems = [
    {
      image: "/placeholder.svg?height=1080&width=1920",
      title: "Sarah Johnson",
      description: "Contemporary abstract expressions exploring the boundaries between chaos and order",
    },
    {
      image: "/placeholder.svg?height=1080&width=1920",
      title: "Fragments of Reality",
      description: "A solo exhibition opening June 15, 2025",
    },
    {
      image: "/placeholder.svg?height=1080&width=1920",
      title: "Explore the Collection",
      description: "Discover a diverse portfolio of abstract and geometric works",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)
  }

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section Carousel */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        {/* Carousel implementation */}
        {(() => {
          return (
            <>
              {carouselItems.map((item, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{item.title}</h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-2xl">{item.description}</p>
                    <div className="mt-8">
                      <Button asChild size="lg" className="bg-white text-black hover:bg-white/90">
                        <Link href="/gallery">Explore Gallery</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Carousel Controls */}
              <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-black/30 border-none text-white hover:bg-black/50 pointer-events-auto"
                  onClick={goToPrevSlide}
                >
                  <ChevronLeft className="h-6 w-6" />
                  <span className="sr-only">Previous slide</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-black/30 border-none text-white hover:bg-black/50 pointer-events-auto"
                  onClick={goToNextSlide}
                >
                  <ChevronRight className="h-6 w-6" />
                  <span className="sr-only">Next slide</span>
                </Button>
              </div>

              {/* Carousel Indicators */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {carouselItems.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      index === currentSlide ? "bg-white" : "bg-white/50"
                    }`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )
        })()}
      </section>

      {/* Upcoming Exhibition */}
      <section className="py-16 px-4 md:px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Upcoming Exhibition</h2>
              <h3 className="text-2xl font-medium mb-4">"Fragments of Reality"</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>June 15 - July 30, 2025</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Modern Art Gallery, 123 Art Street, New York</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Opening Reception: June 15, 6:00 PM - 9:00 PM</span>
                </div>
              </div>
              <p className="text-white/80 mb-6">
                Join us for the opening reception of "Fragments of Reality," a solo exhibition featuring new works that
                explore the intersection of memory, perception, and abstract expression.
              </p>
              <Button asChild variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                <Link href="/exhibition">
                  Exhibition Details <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="md:w-1/2">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Exhibition preview"
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
          <h2 className="text-3xl font-bold mb-6">Artist Statement</h2>
          <p className="text-lg text-muted-foreground mb-4">
            "My work explores the tension between structured composition and spontaneous expression. I am fascinated by
            the ways in which color, form, and texture can evoke emotional responses and create visual narratives that
            transcend language."
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            "Through my paintings, I invite viewers to engage with their own perceptions and interpretations, finding
            personal meaning within the abstract landscapes I create."
          </p>
          <Button asChild variant="outline">
            <Link href="/about">About the Artist</Link>
          </Button>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />
    </main>
  )
}

