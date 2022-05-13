

function ToDo({name, onDeleteTask}){
    // const {name, onDeleteTask} = props

    function handleComplete(e){
        console.log("You completed me!")
    }

    function handleDelete(){
        fetch("http://localhost:9292/tasks/:id", {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((deletedTask) => onDeleteTask(deletedTask))
    }

    return (
        <div>
            <li class="task-list-item">{name}</li>
            <button class="complete-btn" onClick={handleComplete}>Complete</button>
            <button class="delete-btn" onClick={handleDelete}>Delete</button>
            <hr></hr>
        </div>
    )
}

export default ToDo;