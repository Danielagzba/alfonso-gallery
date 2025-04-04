"use client"

import type React from "react"

import { useState } from "react"
import { Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle the newsletter signup here
    setSubscribed(true)
  }

  return (
    <section className="py-16 px-4 md:px-6 bg-primary/5">
      <div className="max-w-3xl mx-auto text-center">
        <Mail className="h-12 w-12 mx-auto mb-4 text-primary" />
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Subscribe to receive updates about new works, upcoming exhibitions, and special events.
        </p>

        {subscribed ? (
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 max-w-md mx-auto">
            <h3 className="text-xl font-medium mb-2">Thank You for Subscribing!</h3>
            <p className="text-muted-foreground">
              You'll now receive updates about new works, exhibitions, and events.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="flex-1">
              <Label htmlFor="email" className="sr-only">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button type="submit">Subscribe</Button>
          </form>
        )}
      </div>
    </section>
  )
}

