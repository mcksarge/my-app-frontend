import {useState} from 'react'
import PersonCard from './PersonCard'

function PersonList({people, addPerson, deletePerson}) {
    const [newPerson, setNewPerson] = useState("")

    function handleChange(e) {
        setNewPerson(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();

        fetch('http://localhost:9292/people', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: newPerson
            })
        })
            .then(res => res.json())
            .then((newName) => {
                addPerson(newName)
                setNewPerson("")
                console.log(newName)
            })
    }
    
    return (
        <div id="person-container">
            <h4><u>Household</u></h4>
            <form onSubmit={handleSubmit}>
                <input id="new-person-input" type="text" placeholder="Add new person..." value={newPerson} onChange={handleChange}></input>
                <input id="submit-person" type="submit" value="submit"></input>
            </form>
            <ul id="person-container">
                {people.map((person) => {
                    return(
                        <PersonCard person={person} deletePerson={deletePerson} />
                    )
                }
                )}
            </ul>
        </div>
    )
}

export default PersonList