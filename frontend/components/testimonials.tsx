"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Small Business Owner",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "FinX has completely transformed how I manage my business finances. The AI recommendations have helped me increase my savings by 30% in just three months!",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Investment Analyst",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "As a professional in the finance industry, I'm impressed by the accuracy and depth of FinX's AI analysis. It's like having a team of analysts working for you 24/7.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Freelance Designer",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4,
    text: "Managing irregular income was always a challenge until I found FinX. Now I have clear insights into my finances and can plan for the future with confidence.",
  },
  {
    id: 4,
    name: "David Thompson",
    position: "Retirement Planner",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "I recommend FinX to all my clients. The AI-powered retirement planning tools provide detailed projections that help people visualize and achieve their goals.",
  },
]

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const itemsPerPage = 2
  const pageCount = Math.ceil(testimonials.length / itemsPerPage)

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === pageCount - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? pageCount - 1 : prev - 1))
  }

  return (
    <section id="testimonials" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how Budget Bridge has helped individuals and businesses transform their financial management.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {Array.from({ length: pageCount }).map((_, pageIndex) => (
                <div key={pageIndex} className="w-full flex-shrink-0 flex flex-col md:flex-row gap-8">
                  {testimonials.slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage).map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="flex-1 bg-gray-800 rounded-xl p-8 transition-all hover:translate-y-[-5px]"
                      style={{
                        boxShadow: "0 4px 20px -5px rgba(236, 72, 153, 0.3), 0 4px 20px -5px rgba(249, 115, 22, 0.3)",
                      }}
                    >
                      <div className="flex items-center mb-6">
                        <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                          <p className="text-gray-400">{testimonial.position}</p>
                        </div>
                      </div>

                      <div className="flex mb-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={cn(
                              "h-5 w-5",
                              i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600",
                            )}
                          />
                        ))}
                      </div>

                      <p className="text-gray-300">"{testimonial.text}"</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {pageCount > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute -left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-all"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute -right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-all"
                aria-label="Next testimonials"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
        </div>

        {pageCount > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: pageCount }).map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all",
                  index === activeIndex
                    ? "bg-gradient-to-r from-pink-500 to-orange-500 w-6"
                    : "bg-gray-600 hover:bg-gray-500",
                )}
                aria-label={`Go to testimonial page ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Testimonials
