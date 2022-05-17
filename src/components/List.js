import AddToDo from './AddToDo'
import Task from './Task'

function List({tasks, onAddTask, onDeleteTask, categories, people, assignPerson}){
    
    
    return(
        <div id="list-container">
            <h2 class="list-title">Today</h2>
            <AddToDo onAddTask={onAddTask} categories={categories} people={people} />
            <Task tasks={tasks} onDeleteTask={onDeleteTask} categories={categories} people={people} assignPerson={assignPerson} />
        </div>

        
    )
}

export default List;