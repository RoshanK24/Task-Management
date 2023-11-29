import { useState } from 'react' 
import './App.css'
import { Routes, Route } from "react-router-dom"  
import Layout from './components/layout/Layout'
import Homepage from './components/pages/Homepage'
import UpcomingTask from './components/pages/UpcomingTask'
import OverdueTask from './components/pages/OverdueTask'
import CompletedTask from './components/pages/CompletedTask'

function App() {

  return ( 
      <>
      <Routes>
        <Route path="/" element={<UpcomingTask />}/> 
        <Route path="/upcomingtask" element={<UpcomingTask />} />
        <Route path="/overduetask" element={<OverdueTask />} />
        <Route path="/completedtask" element={<CompletedTask />} />
      </Routes>
    </> 
  )
}

export default App
