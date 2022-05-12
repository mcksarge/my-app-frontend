import '../App.css';
import List from './List';
import {useState, useEffect} from 'react';

function App() {
  let [taskData, setTaskData] = useState([])
  let [refTask, setRefTask] = useState(true)
  let [peopleData, setPeopleData] = useState([])
  let [refPeople, setRefPeople] = useState(true)

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

  useEffect(() => {
    fetch("http://localhost:9292/people")
      .then((res) => res.json())
      .then((people) => console.log(people))
  }, [])

  

  return (
    <div className="App">
      <header className="App-header">
        <h1>What To Do...</h1>
        <List tasks={taskData} />
      </header>
    </div>
  );
}

export default App;
