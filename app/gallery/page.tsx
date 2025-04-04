"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample artwork data
const artworks = [
  {
    id: 1,
    title: "Convergence of Light",
    year: 2023,
    medium: "Oil on canvas",
    dimensions: "36 × 48 inches",
    category: "abstract",
    image: "/placeholder.svg?height=800&width=600",
  },
  {
    id: 2,
    title: "Echoes of Blue",
    year: 2022,
    medium: "Acrylic on canvas",
    dimensions: "24 × 36 inches",
    category: "abstract",
    image: "/placeholder.svg?height=800&width=600",
  },
  {
    id: 3,
    title: "Urban Fragments",
    year: 2023,
    medium: "Mixed media",
    dimensions: "30 × 40 inches",
    category: "landscape",
    image: "/placeholder.svg?height=800&width=600",
  },
  {
    id: 4,
    title: "Whispers of Nature",
    year: 2021,
    medium: "Watercolor on paper",
    dimensions: "18 × 24 inches",
    category: "landscape",
    image: "/placeholder.svg?height=800&width=600",
  },
  {
    id: 5,
    title: "Structural Harmony",
    year: 2022,
    medium: "Oil on canvas",
    dimensions: "40 × 40 inches",
    category: "geometric",
    image: "/placeholder.svg?height=800&width=600",
  },
  {
    id: 6,
    title: "Chromatic Journey",
    year: 2023,
    medium: "Acrylic on canvas",
    dimensions: "36 × 48 inches",
    category: "abstract",
    image: "/placeholder.svg?height=800&width=600",
  },
  {
    id: 7,
    title: "Geometric Reflections",
    year: 2021,
    medium: "Mixed media",
    dimensions: "24 × 24 inches",
    category: "geometric",
    image: "/placeholder.svg?height=800&width=600",
  },
  {
    id: 8,
    title: "Coastal Memories",
    year: 2022,
    medium: "Oil on canvas",
    dimensions: "30 × 40 inches",
    category: "landscape",
    image: "/placeholder.svg?height=800&width=600",
  },
]

export default function GalleryPage() {
  const [sortOption, setSortOption] = useState("newest")
  const [activeCategory, setActiveCategory] = useState("all")

  // Filter artworks based on active category
  const filteredArtworks =
    activeCategory === "all" ? artworks : artworks.filter((artwork) => artwork.category === activeCategory)

  // Sort artworks based on selected option
  const sortedArtworks = [...filteredArtworks].sort((a, b) => {
    if (sortOption === "newest") return b.year - a.year
    if (sortOption === "oldest") return a.year - b.year
    if (sortOption === "title-asc") return a.title.localeCompare(b.title)
    if (sortOption === "title-desc") return b.title.localeCompare(a.title)
    return 0
  })

  return (
    <main className="py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Gallery</h1>

        {/* Filters and Sorting */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <Tabs
            defaultValue="all"
            value={activeCategory}
            onValueChange={setActiveCategory}
            className="w-full sm:w-auto"
          >
            <TabsList className="grid grid-cols-4 w-full sm:w-auto">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="abstract">Abstract</TabsTrigger>
              <TabsTrigger value="landscape">Landscape</TabsTrigger>
              <TabsTrigger value="geometric">Geometric</TabsTrigger>
            </TabsList>
          </Tabs>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full sm:w-auto">
                <Filter className="mr-2 h-4 w-4" />
                Sort by
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuRadioGroup value={sortOption} onValueChange={setSortOption}>
                <DropdownMenuRadioItem value="newest">Newest First</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="oldest">Oldest First</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="title-asc">Title (A-Z)</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="title-desc">Title (Z-A)</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedArtworks.map((artwork) => (
            <Link key={artwork.id} href={`/gallery/${artwork.id}`} className="group">
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
                  <p className="text-sm text-muted-foreground mt-1">{artwork.medium}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

