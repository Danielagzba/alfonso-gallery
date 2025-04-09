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
            src="/obra.jpeg"
            alt="Exhibition banner"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Manual para no repetirlo
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Una exposición de Alfonso Alfaro
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Sobre la exposición</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Puertas & Ventanas es una exposición autobiográfica que reúne
              obras creadas entre 2023 y 2025. A través de una narrativa
              cronológica, refleja cómo he afrontado mi diagnóstico de VIH y los
              cambios que han definido mi vida en los últimos años. La
              exposición se divide en tres capítulos: Oscuridad, Sombra y Luz,
              cada uno representando una etapa emocional distinta dentro de este
              proceso.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Al usarme como protagonista y figura central en cada obra, la
              exposición adquiere una estructura de narrativa lineal. Esta
              elección me permite abrirme sin máscaras (confesar), invitar al
              espectador a entrar en mi mundo y presenciar momentos de absoluta
              vulnerabilidad.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Quiero demostrar que la especificidad es lo que vuelve una
              historia universal: al compartir mi experiencia, busco evocar
              emociones y vivencias que resuenen con quienes han lidiado con
              enfermedad, adicción o crisis de identidad.
            </p>

            <Separator className="my-8" />

            <h2 className="text-3xl font-bold mb-6">Eventos Especiales</h2>

            <div className="space-y-8">
              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">
                  Cóctel de Inauguración
                </h3>
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>22 de mayo, 2025</span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>6:00 PM - 10:00 PM</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  Únete a nosotros para la noche de inauguración con la
                  presencia de la artista.
                </p>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">
                  Recorrido con el Artista
                </h3>
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>31 de mayo, 2025</span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>12:00 PM - 3:30 PM</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  Alfonso Alfaro hablará sobre su proceso creativo, sus
                  influencias y los temas explorados en "Manual para no
                  repetirlo", seguido de una sesión de preguntas y respuestas.
                </p>
              </div>

              {/* <div className="bg-muted/30 p-6 rounded-lg">
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
              </div> */}
            </div>
          </div>

          <div>
            <div className="bg-muted/20 p-6 rounded-lg sticky top-6">
              <h3 className="text-xl font-bold mb-6">
                Detalles de la Exposición
              </h3>

              <div className="space-y-6 mb-6">
                <div>
                  <h4 className="font-medium mb-2">Fechas</h4>
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-primary mt-0.5" />
                    <span>22 de mayo - 09 de junio, 2025</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Ubicación</h4>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p>Galería Espacio Libre</p>
                      <p>Leibnitz 204, Anzures</p>
                      <p>Ciudad de México, CDMX</p>
                    </div>
                  </div>
                </div>

                {/* <div>
                  <h4 className="font-medium mb-2">Gallery Hours</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>Tuesday - Friday: 10:00 AM - 6:00 PM</li>
                    <li>Saturday: 11:00 AM - 5:00 PM</li>
                    <li>Sunday: 12:00 PM - 4:00 PM</li>
                    <li>Monday: Closed</li>
                  </ul>
                </div> */}
              </div>

              <Separator className="my-6" />

              {/* <div className="space-y-4">
                <Button className="w-full">Plan Your Visit</Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/contact">Contact for Private Viewing</Link>
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
