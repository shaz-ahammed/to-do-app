import Task from "./Task"

const Tasks = ({tasks, onToggle}) => {
    return (
        <div>
        { tasks.map(
            (task) => (<Task  key = {task.id} task ={task} 
                onToggle = {onToggle}
            />)
        )}
        </div>
    )
}

export default Tasks