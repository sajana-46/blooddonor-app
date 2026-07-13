import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Homepage from './components/Homepage'
import Adddonour from './components/Adddonour'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Homepage/>
      <Adddonour/>
    </>
  )
}

export default App
