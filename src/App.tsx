import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Overview from "./views/Overview"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main className="main-content bg-off-white">
        <Overview />
        <section className="">
          <p>
            HELLO DESC
            <br />A
            <br />B
            <br />C
            <br />D
            <br />A
            <br />B
            <br />C
            <br />D
            <br />A
            <br />B
            <br />C
            <br />D
          </p>
        </section>
      </main>
    </>
  )
}

export default App
