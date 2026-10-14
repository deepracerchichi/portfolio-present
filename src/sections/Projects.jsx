import { ArrowUpRight } from 'lucide-react'

import AnimatedBorderButton from "../components/AnimatedBorderButton"
import ProjectCard from "../components/ProjectCard"
import { projects, FEATURED_COUNT } from "../data/projects"

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
          {projects.slice(0, FEATURED_COUNT).map((proj, idx) => (
            <ProjectCard key={idx} proj={proj} idx={idx} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton onClick={() => { window.location.hash = '/projects' }}>
            View All Projects
            <ArrowUpRight className="w-5 h-5"/>
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  )
}

export default Projects