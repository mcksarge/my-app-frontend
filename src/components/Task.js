import TaskCard from './TaskCard';

function Task({tasks, onDeleteTask, people, categories, assignPerson, onSort}){

    //Maps task data and passes keys and values as props to TaskCard component
    let allTasks = tasks.map((task, i) => {
        return (
            <TaskCard 
            key={i}
            task={task}
            onDeleteTask={onDeleteTask}
            people={people}
            categories={categories}
            assignPerson={assignPerson}
        />
        )
    })
    /*************************************************** */

    //Grabs the sorted data from API server
    function handleNameSort(){
        fetch("http://localhost:9292/tasks/alpha")
            .then(res => res.json())
            .then(sortedTasks => onSort(sortedTasks))
    }

    function handleDateSort(){
        fetch("http://localhost:9292/tasks/date")
        .then(res => res.json())
        .then(sortedTasks => onSort(sortedTasks))
    }
    /******************************************* */
    
    return (
        <div id="task-list">
            <button class="sort-tasks" onClick={handleNameSort}>Sort by name</button>
            <button class="sort-tasks" onClick={handleDateSort}>Sort by date created</button>
            {allTasks}
        </div>
    )
}

export default Task;