import ToDo from './ToDo'
import AddToDo from './AddToDo'

function List(){
    return(
        <div id="list-container">
            <h2 class="list-title">Today</h2>
            <AddToDo />
            <ToDo />
        </div>

        
    )
}

export default List;