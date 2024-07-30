import React from 'react'
import './App.css'
import Login from './Components/Login/Login'
import Homepage from './Components/Home/Homepage'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/homepage' element={<Homepage/>}></Route>

      </Routes>
    </BrowserRouter>

  )
}

export default App
