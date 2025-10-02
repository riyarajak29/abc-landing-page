"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckIcon } from "./icons"
import { useEffect, useRef, useState } from "react"

const plans = [
  {
    name: "Student Plan",
    price: "₹999",
    period: "/month",
    description: "Perfect for getting started with AI-powered JEE prep",
    features: [
      "24/7 AI tutor access",
      "Physics, Chemistry & Math coverage",
      "5,000+ practice questions",
      "Basic performance analytics",
      "Mobile app access",
      "Weekly mock tests",
    ],
    cta: "Try Free Demo",
    popular: false,
  },
  {
    name: "Pro Plan",
    price: "₹1,999",
    period: "/month",
    description: "Complete package for serious JEE aspirants",
    features: [
      "Everything in Student Plan",
      "Unlimited AI doubt solving",
      "10,000+ practice questions",
      "Advanced analytics & insights",
      "Personalized study plans",
      "Daily adaptive mock tests",
      "Video solutions for all questions",
      "Priority support",
    ],
    cta: "Start Learning",
    popular: true,
  },
]

function PricingCard({ plan, index }: { plan: (typeof plans)[0]; index: number }) {
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
      className={`h-full transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Card
        className={`p-8 space-y-6 relative h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-3 hover:scale-105 group ${
          plan.popular ? "border-primary border-2 hover:border-primary/80" : "hover:border-primary/30"
        }`}
      >
        {plan.popular && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium animate-pulse-glow">
            Most Popular
          </div>
        )}

        <div className="space-y-2">
          <h3 className="text-2xl font-bold">{plan.name}</h3>
          <p className="text-muted-foreground text-sm">{plan.description}</p>
        </div>

        <div className="flex items-baseline gap-1 group-hover:scale-110 transition-transform duration-300">
          <span className="text-4xl font-bold">{plan.price}</span>
          <span className="text-muted-foreground">{plan.period}</span>
        </div>

        <Button
          className={`w-full transition-all duration-300 hover:scale-105 active:scale-95 ${
            plan.popular ? "hover:shadow-xl" : ""
          }`}
          variant={plan.popular ? "default" : "outline"}
        >
          {plan.cta}
        </Button>

        <ul className="space-y-4 pt-4">
          {plan.features.map((feature, featureIndex) => (
            <li
              key={featureIndex}
              className={`flex items-start gap-3 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
              style={{ transitionDelay: `${index * 150 + featureIndex * 50}ms` }}
            >
              <CheckIcon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5 group-hover:scale-125 transition-transform duration-300" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  )
}

export function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Simple, Affordable Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Choose the plan that fits your needs. Start with a free demo, no credit card required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} index={index} />
          ))}
        </div>

        <p className="text-center text-muted-foreground mt-8 text-sm">
          All plans include a 7-day free trial. No credit card required. Cancel anytime.
        </p>
      </div>
    </section>
  )
}
