function TaskItem({tarea, toggleTask}) {
    return(
        <li   
        onClick={() => toggleTask(tarea.id)}
        style = {{
        textDecoration:tarea.completed ? 'line-through' : 'none',
        cursor: 'pointer'
            }}>
          
            {tarea.text}
        </li>
    )
    
}
export default TaskItem