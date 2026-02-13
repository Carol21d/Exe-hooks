import TaskItem from "./TaskItem" 

function TaskList({listTasks,toggleTask}) {
    return (
        <ul>
            {listTasks.map((tarea)=>(
                <TaskItem
                key={tarea.id}
                tarea={tarea}
                toggleTask={toggleTask} />
            ))}
        </ul>
    )
    
}
export default TaskList