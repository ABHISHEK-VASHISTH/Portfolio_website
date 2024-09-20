import React from 'react'
import Navbar from './components/Navbar';
import Abhi from './components/Abhi';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';






const App = () => {
  return (
    <div className="text-neutral-300 antialiased  
    selection:bg-purple-300 selection:bg-purple-900  ">
        <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 
        [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
        </div>
        
        
        <div className="container mx-auto px-8">
      <Navbar/>
      <Abhi/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>


      </div>
    </div>
  )
}

export default App;
