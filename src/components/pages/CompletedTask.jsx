import React from 'react'
import Homepage from './Homepage'
import { useComptask } from '../context/completedTask'
import "../../style/Card.css"

const CompletedTask = () => {
    const [comptask, setComptask] = useComptask();
    const deleteTask = (index)=>{
        console.log(index)
        const existingTasks = JSON.parse(localStorage.getItem('completedtask')) || [];

        if (index >= 0 && index < existingTasks.length) {
            existingTasks.splice(index, 1);
            localStorage.setItem('completedtask', JSON.stringify(existingTasks));
            let existingUpTask = localStorage.getItem("completedtask");
            if(existingUpTask) setComptask(JSON.parse(existingUpTask));
        } 
    }
  return (
    <Homepage>
        <div className="">
        <div style={{color:"black", marginLeft:"50px", marginBottom:"15px", fontSize:"30px", fontWeight:"bold"}}>Completed Tasks</div>
            <div className="row">
                <div className="col-md-12">
                    {
                        comptask?.map((p, i)=>(
                        <div key={i} className="card card-body mb-2">
                                <div className="card-statistic-3 p-4">
                                <div className="card-content">
                                    <h5 className="date mb-0">{p.dueDate}</h5> 
                                    <div className="title">Title: {p.title}</div>    
                                    <div className="title">Description: {p.description} </div> 
                                    <div className='priority'>
                                    <span>Priority:  </span>
                                        <select name="priority"  defaultValue={p.priority} className='text-dark'>
                                            <option value="High" className='text-dark'>High</option>
                                            <option value="Medium" className='text-dark'>Medium</option>
                                            <option value="Low" className='text-dark'>Low</option>
                                        </select>
                                    </div>
                                    <button className='btn btn-danger' onClick={()=>deleteTask(i)}>delete</button>
                                </div>
                            </div>
                        </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </Homepage>
  )
}

export default CompletedTask