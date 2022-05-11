

function AddToDo() {
    return (
        <div id="add-todo">
            <form>
                <label id="new-task-title" for="new-task"><strong>Add a New Task:</strong></label>
                <input id="new-task" type="text" value="Enter a task..."></input>
                <input id="submit-task" type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default AddToDo