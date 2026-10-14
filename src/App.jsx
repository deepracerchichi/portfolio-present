import React, { useEffect, useState } from 'react'
import NavBar from "@/layout/NavBar"
import Hero from "@/sections/Hero"
import  About from "./sections/About"
import Projects from './sections/Projects'
import Exp from './sections/Exp'
import { Contact } from './sections/Contact'
import Testmonials from './sections/Test'
import Footer from './layout/Footer'
import Article from './sections/Article'
import TechStack from './sections/TechStack'
import AllProjects from './sections/AllProjects'


const isAllProjects = () => window.location.hash === '#/projects'

const App = () => {
  const [showAll, setShowAll] = useState(isAllProjects)

  useEffect(() => {
    const onHash = () => setShowAll(isAllProjects())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  // Leaving the all-projects page: the home sections remount, then jump to the clicked anchor
  useEffect(() => {
    if (showAll) return
    const id = window.location.hash.slice(1)
    if (id && !id.startsWith('/')) {
      requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView())
    }
  }, [showAll])

  if (showAll) {
    return (
      <div className='min-h-screen overflow-x-hidden'>
        <NavBar />
        <main><AllProjects /></main>
        <Footer />
      </div>
    )
  }

  return (
    <div className='min-h-screen overflow-x-hidden'>
      <NavBar />
      <main>
        <Hero />
        <TechStack />
        <About />
        <Projects />
        <Exp />
        
        <Testmonials />
        <Article />
        <Contact />
        

       
      </main>
      <Footer />
     
    </div>
  )
}

export default App