import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header"
import Home from "./components/Home"

function App() {
  return(
    <div className="App">
      <Header />
      <Home />
    </div>
  )
}

export default App
