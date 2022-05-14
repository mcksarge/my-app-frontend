import {useState} from "react";

function AddToDo({onAddTask}) {
    const [formData, setFormData] = useState({name: ""})

    //Handles the add task functionality
    function handleSubmit(e){
        e.preventDefault();
        
        fetch("http://localhost:9292/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: formData.name
            })
        })
            .then((res) => res.json())
            .then((newTask) => {
                onAddTask(newTask)
                setFormData({name: ""})
            })
    }
    /***************************************** */

    //Handles changes to input form
    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    /******************************** */

    return (
        <div id="add-todo">
            <form onSubmit={handleSubmit}>
                <label id="new-task-title" for="new-task"><strong>Add a New Task:</strong></label>
                <input id="new-task" type="text" name="name" placeholder="Enter a task..." value={formData.name} onChange={handleChange}></input>
                <input id="submit-task" type="submit" value="Submit" ></input>
            </form>
        </div>
    )
}

export default AddToDo