import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Overview from "./views/Overview"
import IntroWhoAmI from './views/IntroWhoAmI' 
import AppsShowcase from "./views/AppsShowcase"
import ArtShowcase from "./views/ArtShowcase"
import CourseworkShowcase from './views/CourseworkShowcase'
import RepeatingTextTicker from './components/RepeatingTextTicker'
import ContactMe from './views/ContactMe'
import { PopInText } from './components/PopInText'
import './components/GridBg.css'

function App() {


  return (
    <>
      <main className="main-content bg-light-gray">
        {/* <PopInText sentence={"hi my name is patrick"} /> */}
        <Overview />
        <div className='bg-black grid-bg-space' />
        <IntroWhoAmI />
        <AppsShowcase/>
        <div className='mobile:min-h-36 lg:min-h-32' />
        <ArtShowcase/>
        <CourseworkShowcase />
        <RepeatingTextTicker text="END OF SITE"/>
        <ContactMe/>
      </main>
    </>
  )
}

export default App
