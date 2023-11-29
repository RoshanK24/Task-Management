import React, { useEffect, useState } from 'react'
import { useUptask } from '../context/upcomingTask'
import { useComptask } from '../context/completedTask';
import "../../style/Card.css"
import Homepage from './Homepage';
import Close from '/Close.png'
import "../../style/AddTask.css"

const UpcomingTask = () => {
    const [uptask, setUptask] = useUptask();
    const [comptask, setComptask] = useComptask();
    const [poptask, setPoptask] = useState(true);
    const [editI, setEditI] = useState(0);
    const deleteTask=(index)=>{
            const existingTasks = JSON.parse(localStorage.getItem('upcomingtask')) || [];

            if (index >= 0 && index < existingTasks.length) {
                existingTasks.splice(index, 1);
                localStorage.setItem('upcomingtask', JSON.stringify(existingTasks));
                let existingUpTask = localStorage.getItem("upcomingtask");
                if(existingUpTask) setUptask(JSON.parse(existingUpTask));
            } 
    }

    const completehandle = (index) => {
        const existingTasks = JSON.parse(localStorage.getItem('upcomingtask')) || [];
          setComptask(([existingTasks[index], ...comptask]));
        
        console.log(existingTasks[index], comptask)
        if (index >= 0 && index < existingTasks.length) { 
          localStorage.setItem('completedtask', JSON.stringify(comptask));
      
          existingTasks.splice(index, 1);
          localStorage.setItem('upcomingtask', JSON.stringify(existingTasks));
      
          let existingUpTask = localStorage.getItem('upcomingtask');
          if (existingUpTask) setUptask(JSON.parse(existingUpTask));
        }
        console.log(index, uptask, comptask); 
      };
      
    const [newTask, setNewTask] = useState({
        title: '',
        description: '',
        dueDate: '',
        priority: 'Low',
        _id:0,
      });

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        const existingUTasks = JSON.parse(localStorage.getItem('upcomingtask')) || []; 
        existingUTasks[editI] = newTask;
        localStorage.setItem('upcomingtask', JSON.stringify(existingUTasks)); 
        setNewTask({title: '',
        description: '',
        dueDate: '',
        priority: 'high',
        _id:0,
        });
        setUptask([...existingUTasks]); 
        setPoptask(true)
    }
    
  return (
    <Homepage>
    <div className="">
        <div style={{color:"black", marginLeft:"50px", marginBottom:"15px", fontSize:"30px", fontWeight:"bold"}}>Upcoming Tasks</div>
        <div className="row">
            <div className="col-md-12">
                {
                    uptask?.map((p, i)=>(
                    <div key={i} className="card card-body mb-2">
                            <div className="card-statistic-3 p-2">
                            <div className="card-content">
                                <h5 className="date mb-0">{p.dueDate}</h5> 
                                <div className="title">Title: {p.title}</div> 
                                <div className="title">Description: {p.description} </div> 
                                <div className='priority'>
                                    <span>Priority:  </span>
                                    <select name="priority"  defaultValue={p.priority} className='text-dark' 
                                    onChange={() => {const newPriority = event.target.value;
                                        const existingTasks = JSON.parse(localStorage.getItem('upcomingtask')) || [];
                                        if (i >= 0 && i < existingTasks.length) {
                                            existingTasks[i].priority = newPriority;
                                            localStorage.setItem('upcomingtask', JSON.stringify(existingTasks));
                                            let existingUpTask = localStorage.getItem('upcomingtask');
                                            if (existingUpTask) setUptask(JSON.parse(existingUpTask));
                                        }}}>
                                        <option value="High" className='text-dark'>High</option>
                                        <option value="Medium" className='text-dark'>Medium</option>
                                        <option value="Low" className='text-dark'>Low</option>
                                    </select>
                                </div>
                                <div><input type="checkbox" id="Completed" name="Completed" onChange={()=>completehandle(i)}></input><span> Completed</span></div>
                                <button className='btn1 btn btn-danger' onClick={()=>deleteTask(i)}>Delete</button>
                                <button className='btn btn-info' onClick={()=>{setPoptask(false); setEditI(i); console.log(i)}}>Edit</button>
                            </div>
                        </div>
                    </div>
                    ))
                }
            </div>
            {
                poptask?(<></>):(<>
                <div style={{ position: "absolute", right: "37%", top: "20%", width:"380px", zIndex:"5"}}>
                    <div className='d-flex justify-content-end'>
                        <img className='closelogo' src={Close} alt="close logo" onClick={()=>{setPoptask(true)}} /> 
                    </div>  
                    <div className='add-task'>
                        <div className='form-container'>
                            <form onSubmit={handleSubmit}>
                                <h4 className='title'> Add Task </h4>
                                <div className="mb-3">
                                    <input type="text"
                                        value={newTask.title}
                                        onChange={(e) => setNewTask({ ...newTask, title: e.target.value, })}
                                        className="form-control"
                                        id="exampleInputTitle"
                                        placeholder="Enter Title:"
                                        required />
                                </div>
                                <div className="mb-3">
                                    <input type="text"
                                        value={newTask.description}
                                        onChange={(e) => setNewTask({ ...newTask, description: e.target.value, })}
                                        className="form-control"
                                        id="exampleInputDescription"
                                        placeholder="Enter Description:"
                                        required />
                                </div>
                                <div className='mb-3'> 
                                    <input
                                    type="date"
                                    name="dueDate"
                                    className="form-control"
                                    value={newTask.dueDate}
                                    onChange={(e) => {  
                                        setNewTask({ ...newTask, dueDate: e.target.value, })}} 
                                    />
                                </div>
                                <div className="mb-3">
                                <label className="form-control" >
                                    <span className='text-dark'>Priority:  </span>
                                    <select name="priority" defaultValue={newTask.priority} onChange={(e) => setNewTask({ ...newTask, priority: e.target.value, })} style={{ color:"black"}}>
                                    <option value="High" className='text-dark'>High</option>
                                    <option value="Medium"className='text-dark'>Medium</option>
                                    <option value="Low" className='text-dark'>Low</option>
                                    </select>
                                </label>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                </>)
            }
        </div>
    </div>
    </Homepage>
  )
}

export default UpcomingTask