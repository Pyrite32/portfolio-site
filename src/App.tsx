import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Overview from "./views/Overview"
import IntroWhoAmI from './views/IntroWhoAmI' 
import AppsShowcase from "./views/AppsShowcase"
import ArtShowcase from "./views/ArtShowcase"
import Test from "./views/test"

function App() {


  return (
    <>
      <main className="main-content bg-off-white">
        <Overview />
        <IntroWhoAmI />
        <AppsShowcase/>
        <ArtShowcase/>
        {/* <Test /> */}
      </main>
    </>
  )
}

export default App
