import "react"
import Button from "../components/Button"
import { ArrowRight, ChevronDown, Github, GithubIcon, Linkedin,Download } from "lucide-react"
import resume from "/public/pdf/ChinyereUkpong.pdf"

import AnimatedBorderButton  from "../components/AnimatedBorderButton"
import { FaReact } from "react-icons/fa6"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { SiAppwrite, SiGreensock, SiRedis, SiRender } from "react-icons/si"
import { BsJavascript, BsTypescript } from "react-icons/bs"
import { BiLogoMongodb, BiLogoNodejs, BiLogoPostgresql } from "react-icons/bi"
import { TbBrandDocker, TbBrandVercel } from "react-icons/tb"

const Hero = () => {
    const skills = [
        {icon: FaReact, color: "#61DAFB"},
        {icon: RiNextjsFill, color: "#ffffff"},
        {icon: BsTypescript, color: "#3178C6"},
        {icon: BsJavascript, color: "#F7DF1E"},
        {icon: BiLogoNodejs, color: "#51b410"},
        {icon: BiLogoPostgresql, color: "#336791"},
        {icon: BiLogoMongodb, color: "#47A248"},
        {icon: SiRedis, color: "#D84949"},
        {icon: RiTailwindCssFill, color: "#06B6D4"},
        {icon: GithubIcon, color: "#841aa4"},
        {icon: SiGreensock, color: "#92ff58"},
        {icon: SiRender, color: "#19eace"},
        {icon: SiAppwrite, color: "#F02E65"},
        {icon: TbBrandVercel, color: "#ffffff"},
        {icon: TbBrandDocker, color: "#2451F7"},
        



    ]

    const gotocontact = () => {
        const section = document.getElementById("contact");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            {/*Background */}
            <div className="absolute inset-0">
                <img
                    src="/hero-8.jpg"
                    alt="hero image"
                    className="w-full h-full object-cover opacity-70"
                />

                <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/40 to-background"/>
            </div>

            {/* White Dots */}

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i)=> (
                    <div 
                        key={i}
                        className="absolute w-1 h-1 rounded-full opacity-60" 
                        style={{
                            backgroundColor:"#ffffff",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    />
                ))}
            </div>


            {/* Content */}

            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10 text-center">
                <div className="grid items-center">
                    {/* Left Column - Text*/}
                    <div className="space-y-5">

                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                                
                                Full Stack Developer <span className="w-2 h-2 rounded-full  bg-primary animate-pulse" />
                                 ReactJS | NextJS | Express
                            </span>
                            
                        </div>

                        {/* Headline */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                                Building <span className="text-primary glow-text">Practical</span> Solutions  
                               <br />
                               Through
                               <br />
                                <span className="font-serif italic font-normal text-white">
                                    Code and Design.
                                </span>
                                
                            </h1>

                            <p className="text-lg w-10/12 text-white  animate-fade-in animation-delay-200 mx-auto">
                                Hi, I'm Chinyere Ukpong. 
                                I build fast, scalable web applications with React and Next.js 
                                and I care deeply about the details that make them feel right.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex  justify-center flex-wrap gap-4 animate-fade-in animation-delay-300">
                            <Button size="lg" onClick={gotocontact}>
                                Contact Me <ArrowRight className="w-5 h-5"/>
                            </Button>

                            <AnimatedBorderButton>
                                <a href={resume} download="ChinyereUkpong" className="flex justify-between gap-2 items-center">
                                    <Download className="w-5 h-5"/>
                                    Download CV
                                </a>

                            </AnimatedBorderButton>
                        </div>

                        {/*Social Links */}
                        <div className="flex items-center justify-center gap-4 animate-fade-in animation-delay-400">
                            <span className="text-sm text-muted-foreground">Follow me: </span>
                            {[
                                {icon: Github, href: "https://github.com/deepracerchichi" },
                                {icon: Linkedin, href: "https://www.linkedin.com/in/chinyere-ukpong/"}
                            ].map((social, idx) => (
                                <a key={idx} href={social.href} className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                                    {<social.icon className="w-5 h-5"/>}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Image */}
                    <div>
                        <div>

                        </div>
                    </div>

                </div>

                {/* Skills */}
                <div className="mt-20 animate-fade-in animation-delay-600">
                    <p className="text-xl font-semibold text-foreground mb-6 text-center">
                        Technologies I build with: 
                    </p>
                    <div className="relative overflow-hidden">
                        <div className="flex animate-marquee">
                        {[...skills, ...skills].map((skill, idx) => (
                            <div key={idx} className="shrink-0 px-8 py-4">
                                <span>
                                    {<skill.icon className="w-15 h-15" style={{ color: skill.color }}/>}
                                </span>
                            </div>
                        ))}
                        
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800 mt-10"
            >
                <a
                href="#project"
                className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                >
                <span className="text-xs uppercase tracking-wider">Scroll</span>
                <ChevronDown className="w-6 h-6 animate-bounce" />
                </a>
            </div>
        </section>
    )
}

export default Hero