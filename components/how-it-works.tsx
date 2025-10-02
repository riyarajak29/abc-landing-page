"use client"

import { Card } from "@/components/ui/card"
import { MessageSquareIcon, TargetIcon, TrendingUpIcon } from "./icons"
import { useEffect, useRef, useState } from "react"

const steps = [
  {
    icon: MessageSquareIcon,
    title: "Ask Your Doubt",
    description: "Snap a photo or type your JEE question in Physics, Chemistry, or Math",
  },
  {
    icon: TargetIcon,
    title: "Get Instant Solution",
    description: "AI analyzes and provides step-by-step explanations tailored to your level",
  },
  {
    icon: TrendingUpIcon,
    title: "Track Progress",
    description: "Monitor your improvement with detailed analytics and personalized recommendations",
  },
]

function StepCard({ step, index }: { step: (typeof steps)[0]; index: number }) {
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
      <Card className="p-8 text-center space-y-4 h-full hover:shadow-lg transition-shadow">
        <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
          <step.icon className="w-8 h-8 text-primary" />
        </div>
        <div className="space-y-2">
          <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent/20 text-accent font-bold text-sm mb-2">
            {index + 1}
          </div>
          <h3 className="text-xl font-semibold">{step.title}</h3>
          <p className="text-muted-foreground leading-relaxed">{step.description}</p>
        </div>
      </Card>
    </div>
  )
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Get started in 3 simple steps and transform your JEE preparation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
