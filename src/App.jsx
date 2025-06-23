import React, {useEffect} from 'react'
import './App.css'
import 'aos/dist/aos.css'
import AOS from 'aos'
import Header from './components/headers/Header'
import Home from './components/home/Home'
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services'
import Qualification from './components/qualification/Qualification'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import ScrollUp from './components/scrollup/ScrollUp'

function App() {
  useEffect(() => {
    AOS.init();
    document.body.classList.remove('no-theme-transition');
  }, []);
      
  return (
    <>
      <Header></Header>
      
      <main className='main'>
        <Home></Home>
        <About></About>
        <Skills></Skills>
        <Services></Services>
        <Qualification></Qualification>
        {/* <Portfolio></Portfolio> */}
        <Contact></Contact>
      </main>

      <Footer></Footer>
      <ScrollUp></ScrollUp>
    </>
  )
}

export default App
