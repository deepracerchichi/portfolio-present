import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { FaReact } from "react-icons/fa6"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { SiAppwrite, SiGreensock, SiRedis, SiRender } from "react-icons/si"
import { BsJavascript, BsTypescript } from "react-icons/bs"
import { BiLogoMongodb, BiLogoNodejs, BiLogoPostgresql } from "react-icons/bi"
import { TbBrandDocker, TbBrandVercel } from "react-icons/tb"
import { GithubIcon } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const skills = [
    {icon: FaReact, color: "#61DAFB", name: "React"},
    {icon: RiNextjsFill, color: "#ffffff", name: "Next.js"},
    {icon: BsTypescript, color: "#3178C6", name: "TypeScript"},
    {icon: BsJavascript, color: "#F7DF1E", name: "JavaScript"},
    {icon: BiLogoNodejs, color: "#51b410", name: "Node.js"},
    {icon: BiLogoPostgresql, color: "#336791", name: "PostgreSQL"},
    {icon: BiLogoMongodb, color: "#47A248", name: "MongoDB"},
    {icon: SiRedis, color: "#D84949", name: "Redis"},
    {icon: RiTailwindCssFill, color: "#06B6D4", name: "Tailwind CSS"},
    {icon: GithubIcon, color: "#841aa4", name: "GitHub"},
    {icon: SiGreensock, color: "#92ff58", name: "GSAP"},
    {icon: SiRender, color: "#19eace", name: "Render"},
    {icon: SiAppwrite, color: "#F02E65", name: "Appwrite"},
    {icon: TbBrandVercel, color: "#ffffff", name: "Vercel"},
    {icon: TbBrandDocker, color: "#2451F7", name: "Docker"},
]

const TechStack = () => {
    const sectionRef = useRef(null)

    useGSAP(() => {
        gsap.to("[data-tech-strip]", {
            x: "-30%",
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "+=1000",
                scrub: 1,
                pin: true,
            },
        })
    }, { scope: sectionRef })

    return (
        <section ref={sectionRef} className="min-h-screen flex flex-col items-center justify-center overflow-hidden">
            <div className="text-center max-w-3xl mx-auto mb-16 px-6">
    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
        Toolbox
    </span>
    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
        Technologies I{" "}
        <span className="font-serif italic font-normal text-white">build with.</span>
    </h2>
    <p className="text-muted-foreground animate-fade-in animation-delay-200">
        The languages, frameworks, and tools I reach for most when shipping real products.
    </p>
</div>

            <div data-tech-strip className="flex gap-6 w-max">
                {[...skills, ...skills].map((skill, idx) => (
                    <div
    key={idx}
    className="group relative glass rounded-3xl flex items-center justify-center p-10 shrink-0 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
>
    <skill.icon className="w-20 h-20" style={{ color: skill.color }} />
    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-surface border border-border/50 text-xs whitespace-nowrap opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none">
        {skill.name}
    </span>
</div>

                ))}
            </div>
        </section>
    )
}

export default TechStack
