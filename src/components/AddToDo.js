

function AddToDo() {
    return (
        <div id="add-todo">
            <form>
                <label for="new-task">Add a New Task:</label>
                <input id="new-task" type="text" value="Enter a task..."></input>
                <input id="submit-task" type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default AddToDo