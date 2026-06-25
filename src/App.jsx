import { useState } from 'react'
import heroImg from './assets/images/tokoh/fotoku.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section id="center">
      <div className="hero">
        <img src={heroImg} className="base" alt="" />
      </div>

      <h1>Get started</h1>

      <button onClick={() => setCount(count + 1)}>
        Count is {count}
      </button>
    </section>
  )
}

export default App