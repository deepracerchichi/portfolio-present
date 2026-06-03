import React from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useState } from "react";


const testimonials = [
  {
    quote:
      "Chinyere is one of the most talented engineers I've worked with. Her attention to detail and ability to translate complex requirements into elegant solutions is remarkable.",
    author: "Joy Ogukah",
    role: "Software Engineer, Tech Innovators Inc.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Working with Chinyere was a game-changer for our project. She delivered ahead of schedule with code quality that set a new standard for our team.",
    author: "Jerry Igho",
    role: "Project Manager, Aerosub Solutions Ltd.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Chinyere's expertise in React and TypeScript helped us rebuild our entire frontend in record time. Her architectural decisions continue to pay dividends.",
    author: "Emily Watson",
    role: "Engineering Lead, StartUp Labs",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    quote:
      "Not only is Chinyere technically brilliant, but she's also a fantastic communicator and team player. She elevated everyone around her.",
    author: "David Kim",
    role: "CEO, Innovation Hub",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
]
const Testmonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    // 0, 1, 2, 3
  }

  const previous = () => {
    setActiveIndex((prev) => (prev -1 + testimonials.length) % testimonials.length);
  }

  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2
          w-200 h-200 bg-primary/5
          rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        />

        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div
          className="text-center max-w-3xl 
        mx-auto mb-16"
        >
          <span
            className="text-secondary-foreground 
          text-sm font-medium tracking-wider 
          uppercase animate-fade-in"
          >
            What People Say
          </span>
          <h2
            className="text-4xl md:text-5xl 
          font-bold mt-4 mb-6 animate-fade-in 
          animation-delay-100 text-secondary-foreground"
          >
            What it's like{" "}
            <span
              className="font-serif italic 
            font-normal text-white"
            >
              to work with me.
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200 ">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className='w-6 h-6 text-primary-foreground'/>
              </div>

              <blockquote className='text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4'>
                "{testimonials[activeIndex].quote}"
              </blockquote>

              <div className="">
                <img 
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].author}
                  className="w-14 h-14 rounded-full object-cover mb-4 ring-2 ring-primary/50 "
                />

                <div>
                  <div className="font-semibold ">
                    {testimonials[activeIndex].author}
                  </div>

                  <div className="text-sm text-muted-foreground">
                    {testimonials[activeIndex].role}
                  </div>
                </div>

              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all" onClick={previous}>
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button className={`w-2 h-2 rounded-full transition-all duration-200 ${i === activeIndex ? "w-8 bg-primary": "bg-muted-foreground/30 hover:bg-muted-foreground/50 "} `}/>
                ))}
              </div>

              <button className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all" onClick={next}>
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
        </div>
    </section>
  )
}

export default Testmonials