import { useRef } from 'react'
import { ArrowLeft } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const AllProjects = () => {
  const ref = useRef(null)

  useGSAP(() => {
    window.scrollTo(0, 0)
    // CSS fade-in is replaced by a GSAP stagger so cards animate as one sequence
    gsap.from('[data-all-card]', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.1,
      delay: 0.3,
    })
  }, { scope: ref })

  return (
    <section ref={ref} id="all-projects" className="pt-40 pb-32 relative overflow-hidden min-h-screen">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-10 animate-fade-in"
        >
          <ArrowLeft className="w-4 h-4" /> Back to portfolio
        </a>

        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Archive
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Everything I've
            <span className="font-serif italic font-normal text-white"> built.</span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            {projects.length} projects and counting.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <ProjectCard key={idx} proj={proj} gsap />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AllProjects
