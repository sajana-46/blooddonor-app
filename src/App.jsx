import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Homepage from './components/Homepage'
import Adddonour from './components/Adddonour'
import Viewdonour from './components/Viewdonour'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
            <Route path='/' element={<Homepage/>} />


      <Route path='/add' element={<Adddonour/>} />
      <Route path='/view' element={<Viewdonour/>} />

    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
