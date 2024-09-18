import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Overview from "./views/Overview"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className="main-content">
        <Overview />
      </main>
    </>
  )
}

export default App
