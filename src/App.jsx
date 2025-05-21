import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen bg-neutral-100">
      <Navbar />
      <main className="container mx-auto px-4 py-3">
        <Outlet /> {/* ✅ This renders child routes like <SkillPage /> */}
      </main>
    </div>
  )
}

export default App;
