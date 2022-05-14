import {useState} from 'react';

function ToDo({task, onDeleteTask}){
    let {formData, setFormData} = useState("")
    let {updateTask, setUpdateTask} = useState(false)


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
            <select class="assinged-to">
                <option value="amy">Amy</option>
                <option value="shane">Shane</option>
                <option value="nick">Nick</option>
            </select>
            <button class="complete-btn" onClick={handleComplete}>Complete</button>
            <button class="delete-btn" onClick={handleDelete}>Delete</button>
            <hr></hr>
        </div>
    )
}

export default ToDo;