import '../App.css';
import List from './List';
import {useState, useEffect} from 'react';

function App() {
  let [taskData, setTaskData] = useState([])
  let [refTask, setRefTask] = useState(true)
  let [peopleData, setPeopleData] = useState([])
  let [refPeople, setRefPeople] = useState(true)
  let [categoryData, setCategoryData] = useState([])
  let [refCategory, setRefCategory] = useState(true)

  //Use Effects for rendering page

  //Import tasks
  useEffect(() => {
    fetch("http://localhost:9292/tasks")
      .then((res) => res.json())
      .then((tasks) => {
        if (refTask === true){
          setTaskData(tasks)
          setRefTask(false)
        }
      })
  }, [refTask])
/***************************** */

//Import people
  useEffect(() => {
    fetch("http://localhost:9292/people")
      .then((res) => res.json())
      .then((people) => {
        if (refPeople === true){
          setPeopleData(people)
          setRefPeople(false)
        }
      })
  }, [refPeople])
  /**************************** */

  //Import categories
  useEffect(() => {
    fetch("http://localhost:9292/categories")
      .then((res) => res.json())
      .then(categories => {
        if (refCategory === true){
          setCategoryData(categories)
          setRefCategory(false)
        }
      })
  }, [refCategory])
  /***************************** */

  //Passed down as prop to AddToDo to update state after task creation
  function handleAddTask(newTask){
    const updatedTasks = [...taskData, newTask]
    setTaskData(updatedTasks)
    setRefTask(true)
  }
  /************************************************* */


  //Passed down as prop to TaskCard to update state after task deletion
  function handleDeleteTask(deletedTask){
    const updatedTasks = taskData.filter((task) => task.id !== deletedTask)
    console.log("delete triggered")
    setTaskData(updatedTasks)
    setRefTask(true)
  }
/**************************************************** */

//Passed down as prop to TaskCard to update after assigning person
function handleUpdatePerson(){
  setRefTask(true)
}
/********************************** */

//Handles new person request
function handleAddPerson(newPerson){
  let newPeople = [...peopleData, newPerson]
  setPeopleData(newPeople)
  setRefPeople(true)
  console.log(`${newPerson} From APP`)
}
/*************************** */
  
//Handles deleting a person from list
function handleDeletePerson(deletedPerson){
  const newPeople = peopleData.filter((person) => person.id !== deletedPerson)
  setPeopleData(newPeople)
  setRefPeople(true)
}
/******************* */

  return (
    <div className="App">
      <header className="App-header">
        <h1>What To Do...</h1>
        <List tasks={taskData} categories={categoryData} people={peopleData} assignPerson={handleUpdatePerson} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} addPerson={handleAddPerson} deletePerson={handleDeletePerson} />
      </header>
    </div>
  );
}

export default App;
