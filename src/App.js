import { useState } from "react";
import "./styles.css";
import Header from "./components/Header"
import Tasks from "./components/Tasks";
import Delete from "./components/Delete";

export default function App() {
  const deleteAllTask = () => {
    setTask(tasks.filter(task => !task.reminder))
  }
  const [tasks, setTask] = useState([
    {id : 1,
      task : "Read SpringBoot",
  completed: false},
  {id : 2,
    task : "Complete assignments",
  completed: false}, 
  {id : 3,
    task : "Prepare breakfast",
  completed: false}, 
  {id : 4,
    task : "Sleep for 2 hours",
  completed: false}, 
  {id : 5,
    task : "Take a shower",
  completed: false},
])

const toggleReminder = (id) =>{
  setTask(
    tasks.map((task) => 
    task.id === id ? {...task, reminder : !(task.reminder)} : task))
    
}
  return (
    <div>
    <Header/>
    {tasks.length > 0 ?<Tasks tasks ={tasks} 
    onToggle = {toggleReminder}
    
      /> : <h3>Nothing to do buddy. Sleep!!</h3>}
      <Delete onPress = {deleteAllTask}></Delete>
    </div>
  
      
 
  );
}
