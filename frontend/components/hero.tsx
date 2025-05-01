"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import cimage1 from "../public/cimage1.jpg"
import cimage2 from "../public/cimage2.jpg"
import cimage3 from "../public/cimage3.jpg"

const carouselItems = [
  {
    id: 1,
    title: "AI-Powered Financial Management",
    description: "Let our advanced AI algorithms optimize your finances and investments for maximum returns.",
    image: cimage1,
    cta: "Get Started",
  },
  {
    id: 2,
    title: "Smart Investment Strategies",
    description: "Our AI analyzes market trends to provide personalized investment recommendations.",
    image: cimage2,
    cta: "Learn More",
  },
  {
    id: 3,
    title: "Secure Financial Planning",
    description: "Plan your financial future with confidence using our secure and intelligent platform.",
    image: cimage3,
    cta: "Start Planning",
  },
]

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative pt-16 overflow-hidden" id="hero">
      <div className="relative h-[600px] w-full">
        {carouselItems.map((item, index) => (
          <div
            key={item.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out",
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0",
            )}
          >
            <div className="absolute inset-0 bg-black/60 z-10" />
            <div className="relative h-full w-full">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="text-center max-w-4xl px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
                  {item.title}
                </h1>
                <p className="text-xl sm:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">{item.description}</p>
                <button className="px-8 py-3 rounded-md font-medium bg-gradient-to-r from-pink-500 to-orange-500 text-white hover:opacity-90 transition-all">
                  {item.cta}
                </button>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all",
                index === currentSlide
                  ? "bg-gradient-to-r from-pink-500 to-orange-500 w-6"
                  : "bg-white/50 hover:bg-white/80",
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
