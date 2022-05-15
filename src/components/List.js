import AddToDo from './AddToDo'
import Task from './Task'

function List({tasks, onAddTask, onDeleteTask, categories, people}){
    
    
    return(
        <div id="list-container">
            <h2 class="list-title">Today</h2>
            <AddToDo onAddTask={onAddTask} categories={categories} />
            <Task tasks={tasks} onDeleteTask={onDeleteTask} categories={categories} people={people} />
        </div>

        
    )
}

export default List;