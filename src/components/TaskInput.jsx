// este componente agrega las tareas
function TaskInput({task, setTask, addTask}){
    return(
        <div>
            <input type="text"
             placeholder="Escribe aqui tu tarea"
             value={task}
             onChange={(e) => setTask(e.target.value)} />
             <button onClick={addTask}>AGREGAR</button>
        </div>
    )
}

export default TaskInput