import {BrowserRouter} from 'react-router-dom'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import About from './components/About'
import Tech from './components/Tech'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
 

  return (
    <BrowserRouter>
  <div className="bg-[#415FFF]" >
    <NavBar/>
   <Hero/>
   <About/>
   <Tech/>
   <Projects/>
   <Contact/>
    </div>


    </BrowserRouter>
   
  )
}

export default App
