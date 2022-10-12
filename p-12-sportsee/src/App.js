import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import Dashboard from './pages/dashboard/dashboard'

/**
  * This fuction will setup url for navigation  
  * @return {ReactElement} 
  */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/user/:id" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
