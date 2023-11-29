import { useState,  useContext, createContext, useEffect } from "react";

const UptaskContext = createContext();

const UptaskProvider = ({children}) => {
    const [uptask, setUptask] = useState([]);

    useEffect(()=>{
        let existingUpTask = localStorage.getItem("upcomingtask");
        if(existingUpTask) setUptask(JSON.parse(existingUpTask));
    },[])
    return (
        <UptaskContext.Provider value = {[uptask, setUptask]}>
            {children}
        </UptaskContext.Provider>
    )
} 

//custom hook
const useUptask = () => useContext(UptaskContext);

export {useUptask,UptaskProvider};