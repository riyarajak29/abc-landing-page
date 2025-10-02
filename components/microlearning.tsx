"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useRef, useEffect } from "react"

const lessons = [
  {
    id: 1,
    subject: "Physics",
    title: "Newton's Third Law Trick",
    description: "Master action-reaction pairs in 3 minutes with this simple visualization technique.",
    duration: "3 min",
    difficulty: "Easy",
    color: "bg-blue-500",
  },
  {
    id: 2,
    subject: "Chemistry",
    title: "Periodic Table Patterns",
    description: "Learn the atomic radius trend across periods and groups in just 2 minutes.",
    duration: "2 min",
    difficulty: "Easy",
    color: "bg-green-500",
  },
  {
    id: 3,
    subject: "Math",
    title: "Integration by Parts",
    description: "Quick formula breakdown with a memorable mnemonic: LIATE rule explained.",
    duration: "4 min",
    difficulty: "Medium",
    color: "bg-purple-500",
  },
  {
    id: 4,
    subject: "Physics",
    title: "Projectile Motion Shortcut",
    description: "Calculate maximum height and range faster with these derived formulas.",
    duration: "5 min",
    difficulty: "Medium",
    color: "bg-blue-500",
  },
  {
    id: 5,
    subject: "Chemistry",
    title: "Balancing Redox Reactions",
    description: "Master the half-reaction method in 4 minutes with step-by-step examples.",
    duration: "4 min",
    difficulty: "Hard",
    color: "bg-green-500",
  },
  {
    id: 6,
    subject: "Math",
    title: "Trigonometric Identities",
    description: "Remember all major identities with visual patterns and symmetry tricks.",
    duration: "3 min",
    difficulty: "Medium",
    color: "bg-purple-500",
  },
]

export function Microlearning() {
  const [isVisible, setIsVisible] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount)
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })
    }
  }

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">Quick Lessons</Badge>
          <h2 className="text-4xl font-bold mb-4 text-balance">
            Learn Something New in <span className="text-primary">5 Minutes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Bite-sized lessons designed for busy JEE students. Master key concepts during short breaks.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border rounded-full p-2 shadow-lg hover:bg-background transition-all hover:scale-110 hidden md:block"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border rounded-full p-2 shadow-lg hover:bg-background transition-all hover:scale-110 hidden md:block"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrollable Cards Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide px-4 md:px-12"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {lessons.map((lesson, index) => (
              <Card
                key={lesson.id}
                className={`flex-shrink-0 w-[280px] p-6 snap-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <Badge className={`${lesson.color} text-white`}>{lesson.subject}</Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{lesson.duration}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-balance">{lesson.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 text-pretty">{lesson.description}</p>

                <div className="flex items-center justify-between pt-4 border-t">
                  <Badge variant="outline" className="text-xs">
                    {lesson.difficulty}
                  </Badge>
                  <span className="text-sm font-medium text-primary hover:underline">Start Lesson →</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Mobile Scroll Indicator */}
        <div className="text-center mt-6 text-sm text-muted-foreground md:hidden">Swipe to explore more lessons →</div>
      </div>
    </section>
  )
}
