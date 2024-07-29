import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <button id="0">0</button>
    <button id=".">.</button>
    <button id="=">=</button>
    <button id="+">+</button><br></br>
    <button id="1">1</button>
    <button id="2">2</button>
    <button id="3">3</button>
    <button id="-">-</button><br></br>
    <button id="4">4</button>
    <button id="5">5</button>
    <button id="6">6</button>
    <button id="x">x</button><br></br>
    <button id="7">7</button>        
    <button id="8">8</button>
    <button id="9">9</button>
    <button id="÷">÷</button>
   
    
     
    </>
  )
}

export default App
