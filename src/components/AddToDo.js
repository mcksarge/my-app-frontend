import {useState} from "react";

function AddToDo({onAddTask, categories, people}) {
    const [formData, setFormData] = useState({name: "", category: "", person: ""})

    //Handles the add task functionality
    function handleSubmit(e){
        e.preventDefault();
        
        fetch("http://localhost:9292/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: formData.name,
                category: formData.category,
                person: formData.person
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
        console.log(formData)
    }
    /******************************** */

    return (
        <div id="add-todo">
            <form onSubmit={handleSubmit}>
                <label id="new-task-title" for="new-task"><strong>Add a New Task:</strong></label>
                <input id="new-task" type="text" name="name" placeholder="Enter a task..." value={formData.name} onChange={handleChange}></input>
                <input id="submit-task" type="submit" value="Submit" ></input>
                <select name="category" class="category-select" onChange={handleChange}>
                    <option placeholder="Select a category">--- Select a category ---</option>
                    {categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}
                </select>
                <select name="person" class="person-select" onChange={handleChange}>
                    <option placeholder="Assign to">--- Assign to ---</option>
                    {people.map((person) => <option key={person.id} value={person.id}>{person.name}</option>)}
                </select>
            </form>
        </div>
    )
}

export default AddToDo