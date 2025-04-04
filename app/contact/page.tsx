"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle the form submission here
    setFormSubmitted(true)
  }

  return (
    <main className="py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Contact</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <p className="text-muted-foreground mb-8">
              Interested in a particular artwork? Have questions about the upcoming exhibition? Or perhaps you're
              interested in commissioning a piece? Fill out the form below, and I'll get back to you as soon as
              possible.
            </p>

            {formSubmitted ? (
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-center">
                <h3 className="text-xl font-medium mb-4">Thank You for Your Message</h3>
                <p className="mb-6">Your inquiry has been received. I'll get back to you within 48 hours.</p>
                <Button onClick={() => setFormSubmitted(false)}>Send Another Message</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Your email" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select>
                    <SelectTrigger id="subject">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="artwork">Inquiry about an artwork</SelectItem>
                      <SelectItem value="exhibition">Exhibition information</SelectItem>
                      <SelectItem value="commission">Commission request</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message" rows={6} required />
                </div>

                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            )}
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">sarah.johnson@example.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-muted-foreground">(123) 456-7890</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Studio Address</h3>
                  <p className="text-muted-foreground">456 Studio Lane</p>
                  <p className="text-muted-foreground">Brooklyn, NY 10002</p>
                </div>
              </div>
            </div>

            <Separator className="my-8" />

            <div>
              <h2 className="text-2xl font-semibold mb-6">Gallery Representation</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-medium">Modern Art Gallery</h3>
                  <p className="text-muted-foreground">123 Art Street</p>
                  <p className="text-muted-foreground">New York, NY 10001</p>
                  <p className="text-muted-foreground mt-2">gallery@example.com</p>
                  <p className="text-muted-foreground">(987) 654-3210</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

