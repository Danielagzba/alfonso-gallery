"use client";

import type React from "react";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle the form submission here
    setFormSubmitted(true);
  };

  return (
    <main className="py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Contacto</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Póngase en Contacto</h2>
            <p className="text-muted-foreground mb-8">
              ¿Estás interesado en una obra en particular? ¿Tienes preguntas
              sobre la próxima exposición? ¿O tal vez te interesa encargar una
              pieza? Rellena el formulario a continuación y te responderé lo
              antes posible.
            </p>

            {formSubmitted ? (
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-center">
                <h3 className="text-xl font-medium mb-4">
                  Gracias por tu mensaje
                </h3>
                <p className="mb-6">
                  Tu consulta ha sido recibida. Me pondré en contacto contigo
                  dentro de las próximas 48 horas.
                </p>
                <Button onClick={() => setFormSubmitted(false)}>
                  Enviar otro mensaje
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre</Label>
                    <Input id="name" placeholder="Nombre" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="email"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Asunto</Label>
                  <Select>
                    <SelectTrigger id="subject">
                      <SelectValue placeholder="Selecciona un asunto" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="artwork">
                        Consulta sobre una obra de arte
                      </SelectItem>
                      <SelectItem value="exhibition">
                        Información sobre la exposición
                      </SelectItem>
                      <SelectItem value="commission">
                        Solicitud de encargo
                      </SelectItem>
                      <SelectItem value="other">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    placeholder="Tu mensaje"
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Enviar mensaje
                </Button>
              </form>
            )}
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">
              Información de contacto
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">
                    aalfaro90@gpofinalpa.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Teléfono</h3>
                  <p className="text-muted-foreground">+52 1 55 3433 4589</p>
                </div>
              </div>
            </div>

            <Separator className="my-8" />

            {/* <div>
              <h2 className="text-2xl font-semibold mb-6">
                Gallery Representation
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-medium">Modern Art Gallery</h3>
                  <p className="text-muted-foreground">123 Art Street</p>
                  <p className="text-muted-foreground">New York, NY 10001</p>
                  <p className="text-muted-foreground mt-2">
                    gallery@example.com
                  </p>
                  <p className="text-muted-foreground">(987) 654-3210</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </main>
  );
}
