import { useState,  useContext, createContext, useEffect } from "react";

const ComptaskContext = createContext();

const ComptaskProvider = ({children}) => {
    const [comptask, setComptask] = useState([]);

    useEffect(()=>{
        let existingCompTask = localStorage.getItem("completedtask");
        if(existingCompTask) setComptask(JSON.parse(existingCompTask));
    },[])
    return (
        <ComptaskContext.Provider value = {[comptask, setComptask]}>
            {children}
        </ComptaskContext.Provider>
    )
} 

//custom hook
const useComptask = () => useContext(ComptaskContext);

export {useComptask,ComptaskProvider};