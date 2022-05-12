import AddToDo from './AddToDo'
import Task from './Task'

function List({tasks}){
    
    
    return(
        <div id="list-container">
            <h2 class="list-title">Today</h2>
            <AddToDo />
            <Task tasks={tasks} />
        </div>

        
    )
}

export default List;