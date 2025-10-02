"use client"

import { useEffect, useState, useRef } from "react"
import { Card } from "@/components/ui/card"

export function ProgressTracking() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({
    points: 0,
    streak: 0,
    exercises: 0,
  })
  const [masteryProgress, setMasteryProgress] = useState({
    physics: 0,
    chemistry: 0,
    math: 0,
  })

  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          // Start count-up animations
          animateCount("points", 120, 1500)
          animateCount("streak", 7, 1000)
          animateCount("exercises", 45, 1200)
          animateMastery("physics", 85, 1500)
          animateMastery("chemistry", 75, 1500)
          animateMastery("math", 90, 1500)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  const animateCount = (key: keyof typeof counts, target: number, duration: number) => {
    const startTime = Date.now()
    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const current = Math.floor(easeOutQuart * target)

      setCounts((prev) => ({ ...prev, [key]: current }))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }

  const animateMastery = (key: keyof typeof masteryProgress, target: number, duration: number) => {
    const startTime = Date.now()
    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const current = Math.floor(easeOutQuart * target)

      setMasteryProgress((prev) => ({ ...prev, [key]: current }))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }

  const stats = [
    {
      label: "Points Earned",
      value: counts.points,
      suffix: "",
    },
    {
      label: "Login Streaks",
      value: counts.streak,
      suffix: " days",
    },
    {
      label: "Completed Exercises",
      value: counts.exercises,
      suffix: "",
    },
  ]

  const masteryData = [
    { subject: "Physics", percentage: masteryProgress.physics, color: "bg-blue-500" },
    { subject: "Chemistry", percentage: masteryProgress.chemistry, color: "bg-green-500" },
    { subject: "Math", percentage: masteryProgress.math, color: "bg-purple-500" },
  ]

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl font-bold mb-4 text-balance text-gray-900">Track Your Progress</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            Watch your skills grow with detailed analytics and personalized insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              className={`p-8 text-center bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105 border border-gray-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-3">
                {stat.value}
                <span className="text-4xl md:text-5xl">{stat.suffix}</span>
              </div>
              <div className="text-base md:text-lg text-gray-600 font-medium">{stat.label}</div>
            </Card>
          ))}

          <Card
            className={`p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105 border border-gray-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">PCM Mastery Tracker</h3>
            <div className="space-y-5">
              {masteryData.map((item) => (
                <div key={item.subject}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">{item.subject}</span>
                    <span className="text-sm font-bold text-gray-900">{item.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full ${item.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
