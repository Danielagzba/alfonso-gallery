import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function ExhibitionPage() {
  return (
    <main className="py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden rounded-xl mb-12">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Exhibition banner"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Fragments of Reality
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              A solo exhibition by Alfonso Alfaro
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">About the Exhibition</h2>
            <p className="text-lg text-muted-foreground mb-6">
              "Fragments of Reality" is a comprehensive solo exhibition
              featuring over 25 new works created over the past two years. This
              collection represents a significant evolution in Alfosno Alfaro's
              artistic practice, exploring themes of memory, perception, and the
              fragmented nature of human experience.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Through a diverse range of abstract compositions, Johnson invites
              viewers to engage with the tension between structure and
              spontaneity, order and chaos. Each piece serves as a visual
              meditation on how we construct meaning from the fragments of our
              lived experiences.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              The exhibition is organized into three thematic sections: "Memory
              Landscapes," "Structural Harmonies," and "Chromatic Dialogues,"
              each highlighting different aspects of Johnson's artistic
              exploration.
            </p>

            <Separator className="my-8" />

            <h2 className="text-3xl font-bold mb-6">Special Events</h2>

            <div className="space-y-8">
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">
                  Opening Reception
                </h3>
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>June 15, 2025</span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>6:00 PM - 9:00 PM</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  Join us for the opening night celebration with the artist in
                  attendance. Enjoy refreshments and a special guided tour of
                  the exhibition.
                </p>
                <Button>RSVP for Opening Reception</Button>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">
                  Artist Talk & Discussion
                </h3>
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>June 22, 2025</span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>2:00 PM - 3:30 PM</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  Alfonso Alfaro will discuss her creative process, influences,
                  and the themes explored in "Fragments of Reality," followed by
                  a Q&A session.
                </p>
                <Button>Reserve a Seat</Button>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">
                  Workshop: Abstract Techniques
                </h3>
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>July 6, 2025</span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>1:00 PM - 4:00 PM</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  A hands-on workshop led by Alfonso Alfaro, exploring the
                  techniques and approaches used in her abstract compositions.
                  All materials provided. Limited to 15 participants.
                </p>
                <Button>Register for Workshop</Button>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-muted/20 p-6 rounded-lg sticky top-6">
              <h3 className="text-xl font-bold mb-6">Exhibition Details</h3>

              <div className="space-y-6 mb-6">
                <div>
                  <h4 className="font-medium mb-2">Dates</h4>
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-primary mt-0.5" />
                    <span>June 15 - July 30, 2025</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Location</h4>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p>Modern Art Gallery</p>
                      <p>123 Art Street</p>
                      <p>New York, NY 10001</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Gallery Hours</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>Tuesday - Friday: 10:00 AM - 6:00 PM</li>
                    <li>Saturday: 11:00 AM - 5:00 PM</li>
                    <li>Sunday: 12:00 PM - 4:00 PM</li>
                    <li>Monday: Closed</li>
                  </ul>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="space-y-4">
                <Button className="w-full">Plan Your Visit</Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/contact">Contact for Private Viewing</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
