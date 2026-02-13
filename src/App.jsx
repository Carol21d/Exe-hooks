import { useState } from "react"
import TaskInput from "./components/TaskInput"
import TaskList from "./components/TaskList"


function App() {
  const [task, setTask] = useState('')
  const [listTasks, setTasks] = useState([])


  const addTask = () => {
    if (task.trim() === '') return // evita tareas vacias
  
    setTasks([...listTasks,{
      id:Date.now(),
      text: task,
      completed:false
    }
    ])
    setTask('')
   }

   const toggleTask = (id) =>{
      setTasks(
        listTasks.map((tarea) =>
          tarea.id === id ? { ...tarea, completed: !tarea.completed } : tarea
      )
    )
   }

  return (
    <>
      <div>
        <h1>Mi lista de tareas</h1>
         
         <TaskInput
           task={task}
           setTask={setTask}
           addTask={addTask}
          />
         <TaskList
          listTasks={listTasks}
          toggleTask={toggleTask}
          />

       !"
      </div>
      
    </>
  )
}

export default App
