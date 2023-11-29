import React from 'react'
import "../../style/NavBar.css" 
import Search from '/Search.png'
import Close from '/Close.png'
import Bars from '/Bars.png'
import { useState } from 'react' 
import AddTask from '../AddTask'

const Navbar = () => {
    const [search, setSearch] = useState(true);
    const [bars, setBars] = useState(true);
    const [task, setTask] = useState(true);
  return (
    <div className='nav1'>
        <nav className="nav1 navbar navbar-expand-md bg-body-tertiary">
            <div className="container-fluid p-0 ps-3">
                <div className="brand collapse navbar-collapse" id="navbarSupportedContent">
                    Task Management
                </div> 
                <div className='d-flex'>
                    <div className="task" onClick={()=>{setTask(false)}} style={{ color:"black", marginRight:"3px", fontWeight:"bold", cursor:"pointer"}}>AddTask</div>
                    <img src={Search} className='searchlogo me-3 mt-1' alt="Search logo" onClick={()=>{setSearch(false)}}/>
                    <div className="bardiv m-0 p-0 pe-3">
                        <img src={Bars} className='barslogo' alt="bars logo" onClick={()=>{setBars(false)}}/>
                    </div>
                </div>
            </div>
            {
                bars? (<></>):(<div  className='ham bg-light ps-3' style={{ position: "absolute", right: "0%", top: "0" }}>
                    <ul className="oxygen navbar-nav w-100 mb-2 mb-lg-0 d-flex justify-content-center">
                        
                    </ul>
               </div>)
            } 
        </nav>
        {
                        search? (<></>):(
                            <div className='searchfl bg-light pb-2 pe-2' style={{ position: "absolute", right: "2%", zIndex:"5"}}>
                                <div className='d-flex justify-content-end'>
                                    <img className='closelogo' src={Close} alt="close logo" onClick={()=>{setSearch(true)}} /> 
                                </div> 
                                <div className='d-flex flex-row pe-3 px-3 pb-3 pt-2 ms-2 oxygenfont'>
                                    <input className="search me-1" type="search" aria-label="Search" />
                                    <button className="searchbtn " type="submit">SEARCH</button> 
                                </div>
                            </div>
                        )
                    }
                    {
                        task? (<></>):(
                            <div className='add-task' style={{ position: "absolute", right: "37%", top: "20%", width:"380px", zIndex:"5"}}>
                                <div className='d-flex justify-content-end'>
                                    <img className='closelogo' src={Close} alt="close logo" onClick={()=>{setTask(true)}} /> 
                                </div> 
                            <AddTask/>
                            </div>
                        )
                    }

    </div>

  )
}

export default Navbar;