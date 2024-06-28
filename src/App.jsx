import { BrowserRouter } from "react-router-dom";
import {Navbar, Hero, About, Experience, Tech, Contact, StarsCanvas } from "./components";



function App() {
  return (
    <BrowserRouter>
    
    <div className = "relative z-0 bg-primary">
      <div className = "bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar/>
        <Hero/>
      </div>
      <div>
        <About/>
        <Experience/>
        <Tech/>
      </div>
      <div className="relative z-0">
        <Contact/>
        <StarsCanvas/>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
