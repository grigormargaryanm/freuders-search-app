import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Specialists from './pages/Specialists'
import './index.css'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Specialists />} />
    </Routes>
  </BrowserRouter>,
)

reportWebVitals()
