import React from 'react'
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


const App = () => {
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