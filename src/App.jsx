import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './components/HeroSection'
import SideBar from './components/SideBar'

function App() {

  return (
    <div className="w-full min-h-screen">
      <HeroSection />
      <SideBar />
    </div>
  )
}

export default App
