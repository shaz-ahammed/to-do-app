const Task = ({task, onToggle}) => {
    return (
        <div className = {`task ${task.reminder ? 'reminder': ''}`}
        onClick = {()=>onToggle(task.id)}
        style = {{ cursor: 'pointer'}}>
        <h5>{task.task}</h5>
        </div>
    )
}




export default Task