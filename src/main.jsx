import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { UptaskProvider } from './components/context/upcomingTask.jsx'
import { DuetaskProvider } from './components/context/overdueTask.jsx'
import { ComptaskProvider } from './components/context/completedTask.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UptaskProvider>
    <DuetaskProvider> 
      <ComptaskProvider>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </ComptaskProvider>
    </DuetaskProvider>
  </UptaskProvider>
)
