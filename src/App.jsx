import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <section id="wrapper">
        <div className="column">   
          <div className='habit'></div>    
        </div>
        <div className="column">
          <div className='habit'></div> 
        </div>
        <div className="column">
          <div className='habit'></div> 
          <div className='habit'></div> 
          <div className='habit'></div> 
        </div>
        <div className="column">
          <div className='habit'></div> 
          <div className='habit'></div> 
        </div>
      </section>
      <section id="spacer"></section>
    </>
  )
}

export default App
