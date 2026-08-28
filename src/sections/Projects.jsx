import { ArrowRight, ArrowUpRight, Github } from 'lucide-react'
import React from 'react'
import AnimatedBorderButton from "../components/AnimatedBorderButton"

const project = [

  {
    title: "nestFind",
    description: "A full-stack real estate listing platform with real-time buyer-seller messaging, JWT authentication, and moderator-reviewed listing verification",
    image: "/projects/nestFind.jpg",
    tags: ["Next.js", "Express", "MongoDB", "Socket.IO"],
    link: "https://nest-find-navy.vercel.app/",
    github: "https://github.com/deepracerchichi/nestFind",
  },


  {
    title: "Sheila",
    description: "A note taking web application with create delete and update functionalities and rate limiting",
    image: "/projects/project1.png",
    tags: [ "React", "Express", "Upstash", "MongoDB"],
    link: "https://sheila-mern-webapp.onrender.com/",
    github: "https://github.com/deepracerchichi/sheila-mern-webapp",
  },
  {
    title: "The Camel",
    description: "A Modern bar website built with GSAP. Features parallax scrolling, animated transitions, and dynamic content reveals",
    image: "/projects/project2.png",
    tags: [ "React", "GSAP", "Zustand", "Tailwind"],
    link: "https://thecamel-bar.vercel.app/",
    github: "https://github.com/deepracerchichi/thecamel-bar",
  },
  {
    title: "Listerr",
    description: "An application where companies can keep track of their employees and update status",
    image: "/projects/project3.png",
    tags: [ "React", "PostGreSQL", "Render", "Vercel"],
    link: "https://listerr-list.vercel.app/",
    github: "https://github.com/deepracerchichi/LISTERR-POSTGRES",
  },
  {
    title: "Altread",
    description: "A mobile application where users can log in to track and update info for books they have read",
    image: "/projects/project4.png",
    tags: ["React Native", "TypeScript", "Appwrite", "ContextAPI"],
    link: "https://github.com/deepracerchichi/altread",
    github: "https://github.com/deepracerchichi/altread",
  },

  {
    title: "Coupon Dash",
    description: "A one-tap endless runner built with vanilla HTML5 Canvas and JavaScript for Vouchermatic's Game Development Challenge — dodge gaps, collect coupons, and beat your best score.",
    image: "/projects/coup.jpg",
    tags: ["JavaScript", "HTML5 Canvas", "Web Audio API", "Game Dev"],
    link: "https://coupon-dash.vercel.app",
    github: "https://github.com/deepracerchichi/coupon-dash",
  },

]

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className='absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl' />
      
      <div className='container mx-auto px-6 relative z-10'>
        {/* Section Header */}

        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in'>Featured Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Building,

            <span className='font-serif italic font-normal text-white'> learning, improving.</span>
          </h2>

          <p className='text-muted-foreground animate-fade-in animation-delay-200'>
           Each project represents a new challenge, 
           an opportunity to learn, 
           and a step forward in my engineering journey.
          </p>
        </div>

        {/* Project Grid */}

        <div className="grid md:grid-cols-2 gap-8">
          {
            project.map((proj, idx) => (
              <div 
                key={idx} 
                className='group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1'
                style={{ animationDelay: `${(idx + 1) * 100}ms`}}
                >

                <div className='relative overflow-hidden aspect-video'>
                  <img 
                    src={proj.image} 
                    alt={proj.title}
                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                  />

                  <div 
                   className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60"
                  />

                  {/* Overlay Links */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={proj.link} className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all '>
                      <ArrowUpRight className='w-5 h-5'/>
                    </a>

                    <a href={proj.github} className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all '>
                      <Github className='w-5 h-5' />
                    </a>
                  </div>
                </div>
                
                {/*content */}
                <div className='p-6 space-y-4'>
                  <div className='flex items-start justify-between'>
                    <h3 className='text-xl font-semibold group-hover:text-primary '>
                      {proj.title}
                    </h3>
                    <ArrowUpRight 
                      className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    />
                  </div>
                  <p className='text-muted-foreground text-sm'>
                    {proj.description}
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    {proj.tags.map((tag, tagIdx) => (
                      <span 
                      key={tagIdx}
                      className='px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300'>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          }

        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5"/>
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  )
}

export default Projects