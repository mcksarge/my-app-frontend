import {useState} from 'react'

function PersonCard({person, deletePerson}) {

//Handles the delete function for People
    function handleDelete(){
        fetch(`http://localhost:9292/people/${person.id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(deletedPerson => {
                deletePerson(deletedPerson)
            })
    }
/********************************* */
    
    return (
        <div id="person-card-container">
            <div>
                <li class="person" key={person.id} value={person.id}>{person.name}</li>
                <button class="delete-person" onClick={handleDelete}>X</button>
            </div>
        </div>
    )
}

export default PersonCard