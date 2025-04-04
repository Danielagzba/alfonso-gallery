import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  return (
    <main className="py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About the Artist</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-6">Alfonso</h2>

            <div className="prose max-w-none">
              <p className="text-lg mb-4">
                Alfonso Alfaro is a contemporary abstract artist based in New
                York City. With over 15 years of experience, her work explores
                the intersection of color, form, and emotion through various
                mediums, primarily focusing on oil and acrylic painting.
              </p>

              <p className="text-lg mb-4">
                Johnson's artistic journey began at the Rhode Island School of
                Design, where she earned her BFA in Painting. She later
                completed her MFA at the School of Visual Arts in New York. Her
                work has been exhibited in galleries across the United States
                and Europe, with pieces in several private and public
                collections.
              </p>

              <p className="text-lg mb-4">
                Her artistic practice is characterized by a deep exploration of
                the tension between structured composition and spontaneous
                expression. Johnson is particularly interested in how color
                relationships and textural elements can evoke emotional
                responses and create visual narratives that transcend language.
              </p>

              <p className="text-lg mb-4">
                "I see my paintings as visual poems—each one an attempt to
                capture something ineffable about human experience," Johnson
                explains. "I'm fascinated by the ways in which abstract forms
                can communicate complex emotions and ideas more directly than
                representational imagery."
              </p>

              <p className="text-lg mb-4">
                In recent years, Johnson's work has evolved to incorporate more
                mixed media elements, including collage and digital techniques.
                This expansion reflects her ongoing interest in the
                fragmentation and reconstruction of visual experience—a theme
                that resonates throughout her body of work.
              </p>
            </div>

            <Separator className="my-8" />

            <h2 className="text-2xl font-bold mb-6">Education</h2>
            <ul className="space-y-4 mb-8">
              <li>
                <div className="font-medium">MFA in Fine Arts</div>
                <div className="text-muted-foreground">
                  School of Visual Arts, New York, NY
                </div>
                <div className="text-sm text-muted-foreground">2010</div>
              </li>
              <li>
                <div className="font-medium">BFA in Painting</div>
                <div className="text-muted-foreground">
                  Rhode Island School of Design, Providence, RI
                </div>
                <div className="text-sm text-muted-foreground">2007</div>
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-6">Selected Exhibitions</h2>
            <ul className="space-y-4 mb-8">
              <li>
                <div className="font-medium">
                  "Chromatic Dialogues" (Solo Exhibition)
                </div>
                <div className="text-muted-foreground">
                  Modern Art Gallery, New York, NY
                </div>
                <div className="text-sm text-muted-foreground">2023</div>
              </li>
              <li>
                <div className="font-medium">
                  "Abstractions in Context" (Group Exhibition)
                </div>
                <div className="text-muted-foreground">
                  Contemporary Arts Center, Chicago, IL
                </div>
                <div className="text-sm text-muted-foreground">2022</div>
              </li>
              <li>
                <div className="font-medium">
                  "New Perspectives" (Group Exhibition)
                </div>
                <div className="text-muted-foreground">
                  Gallery 456, London, UK
                </div>
                <div className="text-sm text-muted-foreground">2021</div>
              </li>
              <li>
                <div className="font-medium">
                  "Structural Harmonies" (Solo Exhibition)
                </div>
                <div className="text-muted-foreground">
                  Axis Contemporary Art, San Francisco, CA
                </div>
                <div className="text-sm text-muted-foreground">2020</div>
              </li>
            </ul>

            <Button asChild>
              <Link href="/contact">
                Contact the Artist <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="order-1 lg:order-2">
            <div className="sticky top-6">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg mb-6">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Alfonso Alfaro"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-muted/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Artist Statement</h3>
                <p className="text-muted-foreground italic mb-4">
                  "My work explores the tension between structured composition
                  and spontaneous expression. I am fascinated by the ways in
                  which color, form, and texture can evoke emotional responses
                  and create visual narratives that transcend language."
                </p>
                <p className="text-muted-foreground italic">
                  "Through my paintings, I invite viewers to engage with their
                  own perceptions and interpretations, finding personal meaning
                  within the abstract landscapes I create."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
