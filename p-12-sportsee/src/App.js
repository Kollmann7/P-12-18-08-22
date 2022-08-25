import React from 'react'
import {BrowserRouter,Routes,Route,} from "react-router-dom"
import Home from './pages/home'
import Dashboard from './pages/dasboard'

function App() {
  return(
    <BrowserRouter>
      <Routes>
        {/* <Route path="*" element={<Error />} /> */}
        <Route path='/' element={<Home />}></Route>
        <Route path='/user/:id' element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
