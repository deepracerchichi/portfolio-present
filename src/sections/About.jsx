import { Code2, Rocket, Users, Lightbulb } from 'lucide-react'
import React from 'react'

export default function About  ()  {

  const Highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time."
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing for speed and delivering lightning-fast user experiences.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with teams to bring ideas to life.",
    },
    {
       icon: Lightbulb,
       title: "Innovation",
       description: "Staying ahead with the latest technologies and best practices.",
    }
  ]
  return (
        <section id="about" className='py-2 relative overflow-hidden'>
          <div className='container mx-auto px-6 relative z-10'>
            <div className='grid lg:grid-cols-2 gap-16 items-center'>

              {/* Left Column */}
              <div className='space-y-6'>
                <div className='animate-fade-in'>
                  <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase'>About Me</span>
                </div>
                
              

              <h2 className='text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground'>
                I don't just write code, 
                <span className='font-serif italic font-normal text-white'> 
                  { " " }I engineer experiences that actually work.
                  </span>
              </h2>

              <div className='space-y-4 text-muted-foreground animate-fade-in animation-delay-200'>
                <p>
                  I'm a frontend-leaning full-stack engineer with hands-on experience
                  building production-ready web and mobile applications. My journey
                  started with a curiosity for how the web works — and it's grown into
                  a solid foundation across the entire stack.
                </p>

                <p>
                  I specialize in React, Next.js, and TypeScript, with backend experience
                  in Node.js and Express. From multi-tenant SaaS platforms to cross-platform
                  mobile apps, I focus on writing clean, maintainable code that actually
                  scales.
                </p>

                <p>
                  When I'm not coding, I'm probably tinkering with a side project,
                  leveling up on something new, or figuring out how to make the last
                  thing I built even better.
                </p>
              </div>

              <div className='glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300'>
                <p className='text-lg font-medium italic text-foreground'>
                  "I care about building things that work well, 
                  look good, and don't become a nightmare to maintain six months later."
                </p>
              </div>

              </div>

              {/* Right Column: Highlights */}

              <div className='grid sm:grid-cols-2 gap-6'>
                {Highlights.map((item, idx) => (
                  <div 
                    key={idx} 
                    className='glass p-6 rounded-2xl animate-fade-in'
                    style={{animationDelay: `${(idx + 1) * 100}ms`}}
                    >
                    <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 '>
                      <item.icon className='w-6 h-6 text-primary'/>
                    </div>
                    <h3 className='text-lg font-semibold mb-2'>
                      {item.title}
                    </h3>
                    <p className='text-sm text-muted-foreground'>
                      {item.description}
                    </p>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </section>
         );
};

