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
import {useRef} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {SplitText} from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin"

gsap.registerPlugin(ScrambleTextPlugin)

const Hero = () => {
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


    const gotocontact = () => {
        const section = document.getElementById("contact");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    


    const containerRef = useRef(null);

    useGSAP(()=> {
         //const split = SplitText.create("[data-hero-headline]", {type: "chars"})

        // FADE IN CHARACTERS
        // gsap.from(split.chars, {
        //     y: 40,
        //     opacity: 0,
        //     duration: 0.6,
        //     stagger: 0.03,
        //     ease: "power3.out",
        // })

        //FLIP IN ANIMATION
        // gsap.set("[data-hero-headline]", { perspective: 400 })

        // gsap.from(split.chars, {
        //     rotationX: -90,
        //     transformOrigin: "50% 50% -20px",
        //     opacity: 0,
        //     duration: 0.6,
        //     stagger: 0.03,
        //     ease: "back.out(2)",
        // })

        //SCRAMBLE TEXT ANIMATION
        // gsap.to("[data-hero-name]", {
        //     duration: 2.5,
        //     scrambleText: {
        //         text: "Chinyere",
        //         chars: "upperAndLowerCase",
        //         revealDelay: 0.5,
        //         speed: 0.3,
        //     },
        // })

        //LINE MASK REVEAL
        // SplitText.create("[data-hero-headline]", {
        //     type: "lines",
        //     mask: "lines",
        //     onSplit: (self) => {
        //         return gsap.from(self.lines, {
        //             yPercent: 100,
        //             duration: 2.0,
        //             stagger: 0.15,
        //             ease: "power4.out",
        //         })
        //     },
        // })

        //LINE MASK REVEAL + SCRAMBLE NAME
    // SplitText.create("[data-hero-headline]", {
    //     type: "lines",
    //     mask: "lines",
    //     onSplit: (self) => {
    //         const tl = gsap.timeline()

    //         tl.from(self.lines, {
    //             yPercent: 100,
    //             duration: 0.8,
    //             stagger: 0.15,
    //             ease: "power4.out",
    //         })
    //         .to("[data-hero-name]", {
    //             duration: 1.5,
    //             scrambleText: {
    //                 text: "Chinyere",
    //                 chars: "upperAndLowerCase",
    //                 revealDelay: 0.4,
    //                 speed: 0.3,
    //             },
    //         }, "-=0.4")

    //         return tl
    //     },
    // })

   //SCRAMBLE BOTH SENTENCES
const tl = gsap.timeline()

tl.to("[data-line1-prefix]", {
    duration: 1,
    scrambleText: { text: "Hi, I'm", chars: "upperAndLowerCase", revealDelay: 0.05, speed: 0.3 },
})
.to("[data-hero-name]", {
    duration: 1.2,
    scrambleText: { text: "Chinyere", chars: "upperAndLowerCase", revealDelay: 0.05, speed: 0.3 },
}, "<")
.to("[data-line1-suffix]", {
    duration: 0.3,
    scrambleText: { text: ".", chars: "upperAndLowerCase", revealDelay: 0.05, speed: 0.3 },
}, "<")
.to("[data-hero-line2]", {
    duration: 1.5,
    scrambleText: { text: "I build scalable web apps.", chars: "upperAndLowerCase", revealDelay: 0.05, speed: 0.3 },
}, "-=0.3")




    }, {scope: containerRef})
    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
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
                            <h1 data-hero-headline className="text-5xl md:text-6xl lg:text-7xl font-bold font-grot leading-tight ">
                                <span data-hero-line1>
                                    <span data-line1-prefix className="mr-2">Hi, I'm</span>

                                    <span data-hero-name className="text-primary glow-text">Chinyere</span>
                                    <span data-line1-suffix>.</span>
                                </span>
  
                               <br />
                               <span data-hero-line2>I build <span className=" italic text-white">scalable</span> web apps.</span>
                                
                            </h1>

                            <p className="text-lg w-10/12 text-white  animate-fade-in animation-delay-200 mx-auto">
                                Currently focused on React and Next.js — with a soft spot for the small
interaction details most people skip.

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
                {/* <div data-tech-section className="mt-24 py-10 animate-fade-in animation-delay-600 overflow-hidden">
                    <p className="text-xl font-semibold text-foreground mb-10 text-center">
                        Technologies I build with:
                    </p>
                    <div data-tech-strip className="flex gap-6 w-max">
                        {[...skills, ...skills].map((skill, idx) => (
                            <div
                                key={idx}
                                className="group relative glass rounded-2xl flex items-center justify-center p-6 shrink-0"
                            >
                                <skill.icon className="w-14 h-14" style={{ color: skill.color }} />
                                <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-surface border border-border/50 text-xs whitespace-nowrap opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none">
                                    {skill.name}
                                </span>
                            </div>

                        ))}
                    </div>
                </div> */}


            </div>

            <div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800 z-20"
            >
                <a
                href="#experience"
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