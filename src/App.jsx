import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Shop from './Components/Shop/Shop'
import { Outlet } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
   
    <div className="App">
      
  
      <Header></Header>
       <Shop></Shop>

    </div>

  )
}

export default App
