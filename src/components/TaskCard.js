

function ToDo({task, onDeleteTask}){
    // const {name, onDeleteTask} = props

    function handleComplete(e){
        console.log("You completed me!")
    }


    //Handles the delete function for tasks
    function handleDelete(){
        fetch(`http://localhost:9292/tasks/${task.id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then(() => onDeleteTask(task.id))
            console.log(task.id)
    }
    /******************************************** */

    return (
        <div>
            <li class="task-list-item">{task.name}</li>
            <button class="complete-btn" onClick={handleComplete}>Complete</button>
            <button class="delete-btn" onClick={handleDelete}>Delete</button>
            <hr></hr>
        </div>
    )
}

export default ToDo;