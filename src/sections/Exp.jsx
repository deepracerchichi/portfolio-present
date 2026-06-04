

const experiences = [
  {
    period: "2025-Present",
    role: "Frontend Developer",
    company: "Aerosub Solutions Ltd.",
    description: "Spearheaded the development of a cutting-edge web application using Next.js, resulting in a 40% increase in user engagement.",
    technologies: ["Next.js", "Three.js", "Zustand", "Tailwind CSS"],
    current: true
  },
  {
    period: "2024-2025",
    role: "Frontend Developer",
    company: "Octo Technologies",
    description: "Led the development of a responsive e-commerce mobile app using React Native and Redux, resulting in a 30% increase in user engagement and a 25% boost in sales.",
    technologies: ["React Native", "Redux"],
    current: false
  },
  {
    period: "2023-2024",
    role: "Software Engineer Intern",
    company: "i-Space Technologies",
    description: "Developed and maintained web applications using React and Node.js, improving user experience and reducing load times by 20%.",
    technologies: ["React", "Node.js"],
    current: false
  },
  {
    period: "2022 - 2023",
    role: "Data Analyst Intern",
    company: "Ashtah Beauty",
    description: "Analyzed sales and customer data to identify trends and insights, contributing to a 15% increase in sales through targeted marketing strategies.",
    technologies: ["Power BI", "SQL", "Excel"],
    current: false
  }
]

const Exp = () => {
  

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2  "
       />

       <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Career Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            From curiosity <span className="font-serif italic font-normal text-white">  to code.</span>
          </h2>
          <p
            className="text-muted-foreground animate-fade-in animation-delay-200"
          >
            Following a path from learning the fundamentals 
            to building modern web applications and preparing 
            for a career in software engineering.
          </p>
          

        </div>

        {/* Timeline */}

        <div className="relative ">
          <div
            className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]"
           />

           {/* Experience Items */}

           <div className='space-y-10'>
            {experiences.map((exp, idx)=> (
              <div 
              key={idx}
              className='relative grid md:grid-cols-2 gap-8 animate-fade-in'
              style={{animationDelay: `${(idx + 1) * 150}ms` }}
              >

                {/* Timeline Dots */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />}
                </div>

                {/* Content */}

                <div className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                  <div 
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">{exp.period}</span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground ">{exp.company}</p>
                    <p className='text-sm mt-4 text-muted-foreground'>{exp.description}</p>
                    <div className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : "" }`}>{exp.technologies.map((tech, techIdx) => (
                      <span 
                      key={techIdx}
                      className='px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground'>
                        {tech}
                      </span>
                    ))}</div>
                  </div>
                </div>

              </div>
            ))}
           </div>
        </div>
       </div>
    </section>
  )
}

export default Exp