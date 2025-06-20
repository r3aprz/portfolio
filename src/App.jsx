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

function App() {
  useEffect(() => {
        AOS.init();
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
      </main>
    </>
  )
}

export default App
