

function ToDo(props){
    const {name} = props

    function handleComplete(e){
        console.log("You completed me!")
    }

    function handleDelete(e){
        console.log("You deleted me!")
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