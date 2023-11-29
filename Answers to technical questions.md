# Answers to Technical Questions

## Q1: How long did you spend on the coding test?

**Ans1:**
I spent approximately 6 hours on the coding test. This includes time for understanding the requirements, planning, coding, testing, and documentation.

## Q2: What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

**Ans2:**
The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. The Context API was introduced in React v. 16.3, allowing us to pass data through our component trees, giving our components the ability to communicate and share data at different levels.

There are two options for getting the context object. We can get the context object from Context Consumer or useContext Hook. `useContext` Hook is an exquisite, more excellent way to get the context object with less code.

The Context API works basically in a two-way approach. You wrap all components that share similar data within the context provider as a parent component and access the data in the context via a Consumer or `useContext` hook.

```javascript
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
```



## Q3: How would you track down a performance issue in production? Have you ever had to do this?

**Ans3:**
To track down a performance issue in production, I would follow these steps:

1. **Monitoring**: Set up monitoring tools to collect relevant metrics such as response time, CPU usage, memory usage, and database queries.
2. **Logging**: Implement detailed logging to capture information about the application's behavior, especially during peak times or when performance issues occur.
3. **Profiling**: Use profiling tools to analyze the performance of specific components or functions in the code.
4. **A/B Testing**: If applicable, conduct A/B testing to compare the performance of different versions of the application.
5. **Code Review**: Perform a thorough code review to identify any inefficient algorithms, database queries, or resource-intensive operations.

Yes, I have experience in tracking down performance issues in production. During a hackathon, I encountered a performance issue in our web application. The application was designed to analyze and visualize real-time data from multiple sources, and it started exhibiting slow response times as the data load increased.

To address this, I took the following steps:

- **Monitoring**: Utilized monitoring tools to identify the specific areas of the application that were experiencing performance degradation.
- **Caching Strategy**: Implemented a caching strategy to store frequently accessed data temporarily. This significantly reduced the number of redundant computations and database queries.
- **Asynchronous Processing**: Moved heavy computational tasks to asynchronous processes, preventing them from blocking the main application thread and improving overall responsiveness.
- **Database Optimization**: Analyzed and optimized database queries to reduce the time taken for data retrieval.
- **Load Testing**: Conducted load testing to simulate conditions with a high volume of concurrent users and identified bottlenecks in the system.

## Q4: If you had more time, what additional features or improvements would you consider adding to the task management application?

**Ans4:**
If given more time, I would consider implementing the following additional features or improvements to the task management application:

1. **User Authentication**: Implement a user authentication system to allow multiple users to have personalized task lists.
2. **Task Prioritization**: Add the ability for users to prioritize tasks and display them in order of importance.
3. **Reminders and Notifications**: Integrate a notification system to remind users of upcoming tasks or deadlines.
4. **Collaboration**: Enable users to collaborate on tasks, share task lists, and communicate within the application.
5. **Data Synchronization**: Implement data synchronization across devices to ensure users can access their tasks from different platforms.

These additions would enhance the functionality and user experience of the task management application.