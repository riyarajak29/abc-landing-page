"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { TargetIcon, SparklesIcon, TrophyIcon, CheckCircleIcon } from "./icons"

const tips = [
  "Physics Tip: Always draw free body diagrams for mechanics problems - it helps visualize forces clearly!",
  "Chemistry Tip: Remember PANS - Paramagnetic, Antiferromagnetic, Nonmagnetic, Superparamagnetic for magnetic properties.",
  "Math Tip: Practice integration by parts using ILATE rule - Inverse, Logarithmic, Algebraic, Trigonometric, Exponential.",
  "Physics Tip: For rotational motion, remember τ = Iα is analogous to F = ma in linear motion.",
  "Chemistry Tip: Use the diagonal rule for electronic configuration - it saves time in exams!",
  "Math Tip: For complex numbers, visualize them on the Argand plane to understand geometric interpretations better.",
]

const dailyQuestions = [
  {
    question: "What is the SI unit of electric field intensity?",
    options: ["N/C", "V/m", "Both A and B", "J/C"],
    correct: 2,
    subject: "Physics",
  },
  {
    question: "Which element has the highest electronegativity?",
    options: ["Oxygen", "Fluorine", "Chlorine", "Nitrogen"],
    correct: 1,
    subject: "Chemistry",
  },
  {
    question: "What is the derivative of sin(x)?",
    options: ["cos(x)", "-cos(x)", "tan(x)", "-sin(x)"],
    correct: 0,
    subject: "Math",
  },
]

export function DailyRewards() {
  const [points, setPoints] = useState(0)
  const [streak, setStreak] = useState(0)
  const [tipOfDay, setTipOfDay] = useState("")
  const [showPoints, setShowPoints] = useState(false)
  const [showTip, setShowTip] = useState(false)
  const [dailyQuestion, setDailyQuestion] = useState<(typeof dailyQuestions)[0] | null>(null)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)

  useEffect(() => {
    // Simulate fetching user data
    const todayPoints = Math.floor(Math.random() * 20) + 5
    const currentStreak = Math.floor(Math.random() * 15) + 1
    const randomTip = tips[Math.floor(Math.random() * tips.length)]
    const randomQuestion = dailyQuestions[Math.floor(Math.random() * dailyQuestions.length)]

    // Animate points
    setTimeout(() => {
      setPoints(todayPoints)
      setShowPoints(true)
    }, 300)

    // Animate streak
    setTimeout(() => {
      setStreak(currentStreak)
    }, 500)

    // Animate tip
    setTimeout(() => {
      setTipOfDay(randomTip)
      setShowTip(true)
    }, 700)

    // Set daily question
    setDailyQuestion(randomQuestion)
  }, [])

  const handleAnswerSelect = (index: number) => {
    if (showResult) return
    setSelectedAnswer(index)
    setShowResult(true)
  }

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Points Card */}
          <Card className="p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
            <div className="relative space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-muted-foreground">Welcome back!</h3>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-4xl font-bold text-accent">+{points}</span>
                    <span className="text-lg text-muted-foreground">points today</span>
                  </div>
                </div>
                <div
                  className={`transition-all duration-500 ${showPoints ? "scale-100 rotate-0" : "scale-0 rotate-180"}`}
                >
                  <TargetIcon className="w-16 h-16 text-accent" />
                </div>
              </div>

              {/* Streak Counter */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <TrophyIcon className="w-8 h-8 text-orange-500" />
                  <div>
                    <p className="text-sm text-muted-foreground">Current Streak</p>
                    <p className="text-xl font-bold text-primary">{streak} days</p>
                  </div>
                </div>
                <div className="flex-1" />
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Total Points</p>
                  <p className="text-xl font-bold text-foreground">{points * streak}</p>
                </div>
              </div>
            </div>

            {/* Floating Points Animation */}
            {showPoints && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute text-accent font-bold text-xl animate-float-up"
                    style={{
                      left: `${(i - 1) * 30}px`,
                      animationDelay: `${i * 0.2}s`,
                    }}
                  >
                    +{Math.floor(points / 3)}
                  </div>
                ))}
              </div>
            )}
          </Card>

          {/* Tip of the Day Card */}
          <Card
            className={`p-6 relative overflow-hidden transition-all duration-700 ${showTip ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="relative space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <SparklesIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Tip of the Day</h3>
                  <p className="text-sm text-muted-foreground">Your daily JEE insight</p>
                </div>
              </div>

              <p className="text-foreground leading-relaxed bg-secondary/50 p-4 rounded-lg border border-border">
                {tipOfDay}
              </p>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircleIcon className="w-4 h-4" />
                <span>Come back tomorrow for a new tip!</span>
              </div>
            </div>
          </Card>
        </div>

        {dailyQuestion && (
          <Card className="mt-6 p-6 relative overflow-hidden animate-fade-in-up [animation-delay:900ms]">
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
            <div className="relative space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <TargetIcon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Daily Challenge</h3>
                    <p className="text-sm text-muted-foreground">Test your {dailyQuestion.subject} knowledge</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-accent/10 text-accent text-sm font-semibold rounded-full">+5 Points</span>
              </div>

              <div className="space-y-3">
                <p className="text-foreground font-medium leading-relaxed">{dailyQuestion.question}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {dailyQuestion.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={showResult}
                      className={`p-3 rounded-lg border-2 text-left transition-all duration-300 ${
                        showResult
                          ? index === dailyQuestion.correct
                            ? "border-green-500 bg-green-50 dark:bg-green-950/20"
                            : index === selectedAnswer
                              ? "border-red-500 bg-red-50 dark:bg-red-950/20"
                              : "border-border bg-secondary/50"
                          : "border-border bg-secondary/50 hover:border-accent hover:bg-accent/5 cursor-pointer"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {showResult && index === dailyQuestion.correct && (
                          <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0" />
                        )}
                        <span className="text-sm font-medium">{option}</span>
                      </div>
                    </button>
                  ))}
                </div>

                {showResult && (
                  <div
                    className={`p-4 rounded-lg animate-fade-in ${
                      selectedAnswer === dailyQuestion.correct
                        ? "bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800"
                        : "bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800"
                    }`}
                  >
                    <p
                      className={`font-semibold ${selectedAnswer === dailyQuestion.correct ? "text-green-700 dark:text-green-400" : "text-red-700 dark:text-red-400"}`}
                    >
                      {selectedAnswer === dailyQuestion.correct
                        ? "Correct! Well done!"
                        : "Not quite right. Keep practicing!"}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </Card>
        )}
      </div>
    </section>
  )
}
