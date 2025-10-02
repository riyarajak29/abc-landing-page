"use client"

import { Card } from "@/components/ui/card"
import { BrainIcon, ClockIcon, LineChartIcon, BookOpenIcon, ZapIcon, UsersIcon } from "./icons"
import { useEffect, useRef, useState } from "react"

const features = [
  {
    icon: BrainIcon,
    title: "AI-Powered Doubt Solving",
    description: "Get instant, detailed explanations for any JEE question with step-by-step solutions",
  },
  {
    icon: ClockIcon,
    title: "24/7 Availability",
    description: "Study at your own pace, anytime. Your AI tutor never sleeps",
  },
  {
    icon: LineChartIcon,
    title: "Performance Analytics",
    description: "Track your progress with detailed insights and identify areas for improvement",
  },
  {
    icon: BookOpenIcon,
    title: "Comprehensive Coverage",
    description: "Complete syllabus coverage for JEE Main & Advanced across all subjects",
  },
  {
    icon: ZapIcon,
    title: "Adaptive Learning",
    description: "Personalized study plans that adapt to your strengths and weaknesses",
  },
  {
    icon: UsersIcon,
    title: "Practice Tests",
    description: "Unlimited mock tests with real-time evaluation and detailed analysis",
  },
]

function FeatureCard({ feature, index }: { feature: (typeof features)[0]; index: number }) {
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
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Card className="p-6 space-y-4 h-full hover:shadow-2xl hover:border-primary/50 hover:-translate-y-2 hover:scale-105 transition-all duration-300 group">
        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
          <feature.icon className="w-6 h-6 text-primary" />
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">{feature.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
        </div>
      </Card>
    </div>
  )
}

export function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Everything You Need to Ace JEE
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Powerful features designed to help you master every concept and boost your rank
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
