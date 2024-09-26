import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Overview from "./views/Overview"
import IntroWhoAmI from './views/IntroWhoAmI' 
import AppsShowcase from "./views/AppsShowcase"

function App() {


  return (
    <>
      <main className="main-content bg-off-white">
        <Overview />
        <div className='in-front relative z-10 h-screen'>
          <IntroWhoAmI />
        </div>
        <div className='h-screen'>
          <AppsShowcase/>

        </div>
      </main>
    </>
  )
}

export default App
