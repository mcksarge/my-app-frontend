import {useState} from "react";

function AddToDo() {
    const [newToDo, setNewToDo] = useState("")

    function handleSubmit(e){
        e.preventDefault();
    }

    function handleChange(e) {
        setNewToDo(e.target.value)
    }

    return (
        <div id="add-todo">
            <form onSubmit={handleSubmit}>
                <label id="new-task-title" for="new-task"><strong>Add a New Task:</strong></label>
                <input id="new-task" type="text" placeholder="Enter a task..." value={newToDo} onChange={handleChange}></input>
                <input id="submit-task" type="submit" value="Submit" ></input>
            </form>
        </div>
    )
}

export default AddToDo