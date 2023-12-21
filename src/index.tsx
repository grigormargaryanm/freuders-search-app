import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { setupStore } from './redux/configureStore'
import Specialists from './pages/Specialists'
import './index.css'
import reportWebVitals from './reportWebVitals'

const store = setupStore()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Specialists />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
)

reportWebVitals()
