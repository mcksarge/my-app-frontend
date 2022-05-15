import {useState} from 'react';

function ToDo({task, onDeleteTask, people, categories}){



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
    let catName = ""

    for (let i = 0; i < categories.length; i++){
        if (categories[i].id === task.category_id){
            catName = categories[i].name
        }
    }


    return (
        <div>
            <li class="task-list-item">{task.name}</li>
            <li class="task-list-category">Category: {catName}</li>
            <select class="assinged-to">
                <option value="Assign to">--- Assign to ---</option>
                {people.map((person) => <option key={person.id} value={person.name}>{person.name}</option>)}
            </select>
            <button class="complete-btn" onClick={handleComplete}>Complete</button>
            <button class="delete-btn" onClick={handleDelete}>Delete</button>
            <hr></hr>
        </div>
    )
}

export default ToDo;