import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
    <Navbar/>
    <Home/>
    </div>
  )
}

export default App
