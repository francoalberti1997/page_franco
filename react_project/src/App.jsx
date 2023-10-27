import React from 'react'
import Nav from "../src/components/nav/Nav"
import AboutMe from "../src/components/About Me/AboutMe"
import Footer from './components/footer/Footer'
import Projects from './components/projects/projects'
import Cards from './components/cards/Cards'

const App = () => {
  return (
    <div>
        <Nav/>
        {/* <Body/> */}        
        <AboutMe/>
        <Cards/>
        <Projects/>
        <Footer/>
    </div>
  )
  
}

export default App
