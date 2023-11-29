import React, { useEffect } from 'react'
import Layout from '../layout/Layout';  
import UpcomingTask from './UpcomingTask';
import { useUptask } from '../context/upcomingTask';
import { useDuetask } from '../context/overdueTask'; 
import Sidebar from '../layout/Sidebar';
import "../../style/Homepage.css"

const Homepage = ({ children }) => {
    const [uptask, setUptask] = useUptask();
    const [duetask, setDuetask] = useDuetask();
    const checkDueDates = () => {
        const today = new Date();
        const todayTimestamp = today.getTime();
       
        const upcomingTasks = JSON.parse(localStorage.getItem('upcomingtask')) || [];
        let overDueTasks = JSON.parse(localStorage.getItem('overduetasks')) || [];
       
        const updatedUpcomingTasks = upcomingTasks.filter(task => {
        const dueDateTimestamp = new Date(task.dueDate).getTime();
      
          if (dueDateTimestamp < todayTimestamp) { 
            overDueTasks = [task, ...overDueTasks];
            return false;
          }
          return true;
        });
      
        localStorage.setItem('upcomingtask', JSON.stringify(updatedUpcomingTasks));
        localStorage.setItem('overduetasks', JSON.stringify(overDueTasks));
      };

      useEffect(()=>{
        checkDueDates();
        let existingUpTask = localStorage.getItem("upcomingtask");
        if(existingUpTask) setUptask(JSON.parse(existingUpTask));
        let existingdueTask = localStorage.getItem("overduetasks");
        if(existingdueTask) setDuetask(JSON.parse(existingdueTask));
      }, [])

  return (
    <Layout>  
        <div className="container-fluid home">
            <div className="row"> 
                <Sidebar/>
                <div className="main-content col-sm-7"> 
                <main style={{ minHeight: "80vh"}}>
                    {children}
                </main>
                </div>
            </div> 
        </div>
    </Layout>
  )
}

export default Homepage;