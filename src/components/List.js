import AddToDo from './AddToDo'
import Task from './Task'
import PersonList from './PersonList'

function List({tasks, onAddTask, onDeleteTask, categories, people, assignPerson, addPerson, deletePerson, onSort}){
    
    
    return(
        <div id="list-container">
            <h2 class="list-title">Today</h2>
            <PersonList people={people} addPerson={addPerson} deletePerson={deletePerson} />
            <AddToDo onAddTask={onAddTask} categories={categories} people={people} />
            <Task tasks={tasks} onDeleteTask={onDeleteTask} categories={categories} people={people} onSort={onSort} assignPerson={assignPerson} />
        </div>

        
    )
}

export default List;