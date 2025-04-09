import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  return (
    <main className="py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Sobre el Artista</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-6">Alfonso Alfaro</h2>

            <div className="prose max-w-none">
              <p className="text-lg mb-4">
                Alfonso Alfaro es un artista nacido en la Ciudad de México en
                1990, su vida tomó, por un tiempo, un rumbo aparentemente ajeno
                al arte. Se adentró en el mundo de las finanzas, una carrera
                segura, pero que nunca terminó de alinearse con lo que realmente
                lo movía. En retrospectiva, el arte siempre estuvo ahí,
                esperando. Su camino no comenzó con la pintura, sino con el
                cine. Fue el cine el que le enseñó a expresar emociones, a
                contar historias, a construir un lenguaje visual. Hoy, cada una
                de sus pinturas forma parte de algo más grande, como una escena
                dentro de una película: una invitación a presenciar un momento
                de transformación.
              </p>

              <p className="text-lg mb-4">
                El punto de quiebre llegó en 2018, cuando fue diagnosticado con
                VIH. En ese momento, todo se rompió, pero al mismo tiempo, todo
                se volvió más claro. Tuvo que enfrentar sus miedos y su
                vergüenza, dejar de huir de su propia verdad. El arte se
                convirtió en su forma de reconstruirse, cada lienzo reflejando
                su viaje de la oscuridad hacia la luz. Su próxima exposición,
                Manual para no repetirlo, es una invitación a mirar esos
                momentos a través de sus ojos, a sentir lo que él ha sentido y a
                reflexionar sobre temas universales como la identidad, la
                resiliencia y la vulnerabilidad.
              </p>

              <p className="text-lg mb-4">
                Cree que el arte debe ser honesto. No se trata de perfección ni
                de hacer algo “bonito”, sino de conectar. En un mundo donde el
                pensamiento crítico y la educación visual suelen descuidarse,
                busca que su obra provoque, que incomode. Pero también recurre
                al humor, a la narrativa visual y a la intertextualidad para
                hacer su trabajo más accesible.
              </p>

              <p className="text-lg mb-4">
                Su intención es abrir un diálogo, no solo sobre su experiencia
                personal, sino sobre lo que significa vivir, luchar y,
                eventualmente, sanar. El arte es su manera de decir la verdad
                —su verdad—, y si logra conectar con alguien a nivel emocional o
                intelectual, entonces sentirá que ha cumplido con su propósito.
              </p>
            </div>

            <Separator className="my-8" />
          </div>

          <div className="order-1 lg:order-2">
            <div className="sticky top-6">
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg mb-6">
                <Image
                  src="/alfonso.jpg"
                  alt="Alfonso Alfaro"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-muted/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Declaración de la Artista
                </h3>
                <p className="text-muted-foreground italic mb-4">
                  Mi trabajo explora la tensión entre la composición
                  estructurada y la expresión espontánea. Me fascinan las formas
                  en que el color, la forma y la textura pueden evocar
                  respuestas emocionales y crear narrativas visuales que
                  trascienden el lenguaje.
                </p>
                <p className="text-muted-foreground italic">
                  A través de mis pinturas, invito a los espectadores a
                  involucrarse con sus propias percepciones e interpretaciones,
                  encontrando un significado personal dentro de los paisajes
                  abstractos que creo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
