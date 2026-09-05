import { useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


const articles = [
    {
        title: "JWTs are Like Stamped Letters",
        excerpt: "A deep dive into how JSON Web Tokens work under the hood.",
        link: "https://dev.to/nenedoesfrontend/jwts-are-like-stamped-letters-c96",
    },
    {
        title: "React has Two Kinds of Data",
        excerpt: "Notes on how React's state and props work under the hood.",
        link: "https://dev.to/nenedoesfrontend/react-has-two-kinds-of-data-121o",
    },
]

const Article = () => {
    const sectionRef = useRef(null)

    useGSAP(() => {
    gsap.set("[data-card='0']", { x: 40, y: 16, rotate: -8, zIndex: 2 })
    gsap.set("[data-card='1']", { x: -40, y: -16, rotate: 8, zIndex: 1 })

    gsap.timeline({
        scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=800",
            scrub: 1,
            pin: true,
        },
    })
    .to("[data-card='0']", { x: 0, y: 0, rotate: 0, ease: "none" })
    .to("[data-card='1']", { x: 0, y: 0, rotate: 0, ease: "none" }, "<")
}, { scope: sectionRef })



    return (
        <section ref={sectionRef} id="articles" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                    Writing
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                    Notes from <span className="font-serif italic font-normal text-white">the field.</span>
                </h2>
                <p className="text-muted-foreground animate-fade-in animation-delay-200">
                    Occasional write-ups on what I'm building and what I'm learning along the way.
                </p>
            </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {articles.map((article, idx) => (
                        <a
                            key={idx}
                            href={article.link}
                            data-card={idx}
                            className="glass rounded-2xl p-8 space-y-4 block"
                        >
                            <h3 className="text-xl font-semibold">{article.title}</h3>
                            <p className="text-muted-foreground text-sm">{article.excerpt}</p>
                            <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                                Read article <ArrowUpRight className="w-4 h-4" />
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Article
