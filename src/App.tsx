import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Overview from "./views/Overview"
import IntroWhoAmI from './views/IntroWhoAmI' 
import AppsShowcase from "./views/AppsShowcase"
import ArtShowcase from "./views/ArtShowcase"
import CourseworkShowcase from './views/CourseworkShowcase/CourseworkShowcase'

function App() {


  return (
    <>
      <main className="main-content bg-light-gray">
        <Overview />
        <IntroWhoAmI />
        <AppsShowcase/>
        <ArtShowcase/>
        <CourseworkShowcase />
      </main>
    </>
  )
}

export default App
