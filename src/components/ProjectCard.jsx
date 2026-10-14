import { ArrowUpRight, Github } from 'lucide-react'

// gsap: card is animated by a parent GSAP timeline instead of the CSS fade-in
const ProjectCard = ({ proj, idx = 0, gsap = false }) => (
  <div
    className={`group glass rounded-2xl overflow-hidden md:row-span-1 ${gsap ? '' : 'animate-fade-in'}`}
    style={gsap ? undefined : { animationDelay: `${(idx + 1) * 100}ms` }}
    data-all-card={gsap ? '' : undefined}
  >
    <div className='relative overflow-hidden aspect-video'>
      <img
        src={proj.image}
        alt={proj.title}
        className='w-full h-full object-contain transition-transform duration-700 group-hover:scale-110'
      />
      <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />

      {/* Overlay Links */}
      <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <a href={proj.link} className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all'>
          <ArrowUpRight className='w-5 h-5' />
        </a>
        <a href={proj.github} className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all'>
          <Github className='w-5 h-5' />
        </a>
      </div>
    </div>

    <div className='p-6 space-y-4'>
      <div className='flex items-start justify-between'>
        <h3 className='text-xl font-semibold group-hover:text-primary'>{proj.title}</h3>
        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
      </div>
      <p className='text-muted-foreground text-sm'>{proj.description}</p>
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
)

export default ProjectCard
