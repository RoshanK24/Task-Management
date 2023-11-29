import { useState,  useContext, createContext, useEffect } from "react";

const DuetaskContext = createContext();

const DuetaskProvider = ({children}) => {
    const [duetask, setDuetask] = useState([]);

    useEffect(()=>{
        let existingDueTask = localStorage.getItem("overduetasks");
        if(existingDueTask) setDuetask(JSON.parse(existingDueTask));
    },[])
    return (
        <DuetaskContext.Provider value = {[duetask, setDuetask]}>
            {children}
        </DuetaskContext.Provider>
    )
} 

//custom hook
const useDuetask = () => useContext(DuetaskContext);

export {useDuetask,DuetaskProvider};