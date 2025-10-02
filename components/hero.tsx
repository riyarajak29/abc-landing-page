"use client"

import { Button } from "@/components/ui/button"
import { SparklesIcon, TargetIcon, BrainIcon, LineChartIcon } from "./icons"
import { useState, useEffect } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-green-50/30">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 text-center lg:text-left">
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-bold transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <SparklesIcon className="w-4 h-4" />
              <span>AI-Powered Learning</span>
            </div>

            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-balance text-gray-900 leading-tight transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Conquer Physics, Chemistry & Math with{" "}
              <span className="block mt-2 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Always-On AI Guidance
              </span>
            </h1>

            <p
              className={`text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 text-pretty leading-relaxed transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Every Question Deserves an Answer — Get Yours Instantly.
            </p>

            <div
              className={`flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Button
                size="lg"
                className="text-base px-8 bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 font-semibold"
              >
                Try Free Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 bg-transparent border-2 border-green-600 text-green-700 hover:bg-green-50 transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 font-semibold"
              >
                Start Learning
              </Button>
            </div>
          </div>

          {/* Right side - Student interacting with AI illustration */}
          <div
            className={`relative hidden md:block transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Student silhouette */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-64 h-64" viewBox="0 0 200 200" fill="none">
                  {/* Student head */}
                  <circle cx="100" cy="60" r="25" fill="#3B82F6" opacity="0.2" className="animate-float-gentle" />
                  {/* Student body */}
                  <rect
                    x="80"
                    y="85"
                    width="40"
                    height="60"
                    rx="8"
                    fill="#3B82F6"
                    opacity="0.2"
                    className="animate-float-gentle"
                  />
                  {/* Laptop */}
                  <rect
                    x="60"
                    y="130"
                    width="80"
                    height="50"
                    rx="4"
                    fill="#10B981"
                    opacity="0.3"
                    className="animate-float-reverse"
                  />
                  <rect x="65" y="135" width="70" height="35" rx="2" fill="#E5E7EB" className="animate-float-reverse" />
                </svg>
              </div>

              {/* AI Chat bubbles */}
              <div className="absolute top-12 right-8 p-4 bg-white rounded-2xl shadow-lg border border-blue-100 max-w-[180px] animate-float-gentle">
                <div className="flex items-start gap-2">
                  <SparklesIcon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-700 leading-relaxed">How do I solve this physics problem?</p>
                </div>
              </div>

              <div className="absolute top-32 left-4 p-4 bg-white rounded-2xl shadow-lg border border-green-100 max-w-[200px] animate-float-reverse">
                <div className="flex items-start gap-2">
                  <BrainIcon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-700 leading-relaxed">Let me break it down step by step for you!</p>
                </div>
              </div>

              {/* Floating subject icons */}
              <div className="absolute top-20 left-12 p-3 bg-white rounded-xl shadow-md border border-gray-100 animate-bounce-slow">
                <TargetIcon className="w-6 h-6 text-blue-600" />
              </div>

              <div className="absolute bottom-24 right-12 p-3 bg-white rounded-xl shadow-md border border-gray-100 animate-float-gentle">
                <LineChartIcon className="w-6 h-6 text-green-600" />
              </div>

              {/* Decorative elements */}
              <div className="absolute top-8 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-float-gentle" />
              <div className="absolute bottom-16 left-1/3 w-2 h-2 bg-green-400 rounded-full animate-float-reverse" />
              <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-300 rounded-full animate-bounce-slow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
