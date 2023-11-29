import React, {useState} from 'react'
import "../style/AddTask.css"
import { useUptask } from './context/upcomingTask';


const AddTask = () => {
    const [uptask, setUptask] = useUptask();
    const [count, setCount] = useState(0);
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
        const updatedUTasks = [newTask, ...existingUTasks]; 
        localStorage.setItem('upcomingtask', JSON.stringify(updatedUTasks)); 
        setNewTask({title: '',
        description: '',
        dueDate: '',
        priority: 'high',
        _id:0,
        });
        setUptask([newTask, ...uptask]); 
    }
  return (
    <>
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
    </>
  )
}

export default AddTask