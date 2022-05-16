import {useState} from 'react';

function ToDo({task, onDeleteTask, people, categories, assignPerson}){
    const [formData, setFormData] = useState({person: ""})


    function handleComplete(e){
        console.log("You completed me!")
    }


    //Handles the delete function for tasks
    function handleDelete(){
        fetch(`http://localhost:9292/tasks/${task.id}`, {
            method: "DELETE"
        })
            .then((res) => res.json())
            .then(() => onDeleteTask(task.id))
    }
    /******************************************** */

    //Matches category id to task.id to populate category names
    let catName = ""

    for (let i = 0; i < categories.length; i++){
        if (categories[i].id === task.category_id){
            catName = categories[i].name
        }
    }
    /************************************* */

    //Matches person id to task.person_id to populate person names
    let person = ""
    
    for (let i = 0; i < people.length; i++){
        if (people[i].id === task.person_id){
            person = people[i].name
        }
    }
    /****************************** */

    //Handles selection change for person assigned to task
    function handleAssign(e){
        setFormData(e.target.value)
        
        fetch('http://localhost:9292/tasks/:id', {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                person_id: formData.person
            })
        })
        .then(res => res.json())
        .then((assignedPerson) => assignPerson(assignedPerson))
    }
    /****************** */


    return (
        <div>
            <li class="task-list-item">{task.name}</li>
            <li class="task-list-category">Category: {catName}</li>
            <li class="task-list-person">Assigned To: {person}</li>
            {people.map((person) => <button class="person-selecter-button"  onClick={handleAssign} key={person.id} value={person.id}>{person.name}</button>)}
            <br></br>
            <div class="complete-delete-cont">
                <button class="complete-btn" onClick={handleComplete}>Complete</button>
                <button class="delete-btn" onClick={handleDelete}>Delete</button>
            </div>
            <hr></hr>
        </div>
    )
}

export default ToDo;