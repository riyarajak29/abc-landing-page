"use client"

import { Card } from "@/components/ui/card"
import { StarIcon } from "./icons"
import { useEffect, useRef, useState } from "react"

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "IIT Delhi, AIR 247",
    content:
      "The AI tutor helped me identify my weak areas and provided personalized practice. The doubt solving feature is incredible - I got instant explanations whenever I was stuck.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "IIT Bombay, AIR 189",
    content:
      "Best investment I made for my JEE preparation. The adaptive tests really helped me improve my speed and accuracy. Highly recommend to all JEE aspirants!",
    rating: 5,
  },
  {
    name: "Arjun Reddy",
    role: "IIT Madras, AIR 512",
    content:
      "The performance analytics showed me exactly where I needed to focus. Within 3 months, my mock test scores improved by 40%. Thank you JEE AI Tutor!",
    rating: 5,
  },
]

function TestimonialCard({ testimonial, index }: { testimonial: (typeof testimonials)[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Card className="p-6 space-y-4 h-full">
        <div className="flex gap-1">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <StarIcon key={i} className="w-5 h-5 text-accent" />
          ))}
        </div>

        <p className="text-muted-foreground leading-relaxed">"{testimonial.content}"</p>

        <div className="flex items-center gap-4 pt-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-2xl">
            {testimonial.name.charAt(0)}
          </div>
          <div>
            <p className="font-semibold">{testimonial.name}</p>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          </div>
        </div>
      </Card>
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">Success Stories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Hear from students who cracked JEE with our AI-powered platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
