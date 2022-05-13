import AddToDo from './AddToDo'
import Task from './Task'

function List({tasks, onAddTask, onDeleteTask}){
    
    
    return(
        <div id="list-container">
            <h2 class="list-title">Today</h2>
            <AddToDo onAddTask={onAddTask} />
            <Task tasks={tasks} onDeleteTask={onDeleteTask} />
        </div>

        
    )
}

export default List;