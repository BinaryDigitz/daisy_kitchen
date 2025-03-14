import React from 'react'
import { Login, Signup } from './exportcom'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div>
      <header>
        header
      </header>
      <main>
        <ToastContainer />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>

      </main>
      <footer>

      </footer>
    </div>
  )
}

export default App
