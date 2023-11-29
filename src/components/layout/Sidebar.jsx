import React from 'react'
import '../../style/Sidebar.css'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="sidebar text-light">
        <NavLink to="/upcomingtask" className="section text-light" >
            Upcoming Tasks
        </NavLink> 
        <NavLink to="/overduetask" className="section text-light active">
            Overdue Tasks
        </NavLink>  
        <NavLink to="/completedtask" className="section text-light">
            Completed Tasks
        </NavLink> 
    </div>
  )
}

export default Sidebar