import AddToDo from './AddToDo'
import Task from './Task'
import PersonList from './PersonList'

function List({tasks, onAddTask, onDeleteTask, categories, people, assignPerson, newPerson, deletePerson}){
    
    
    return(
        <div id="list-container">
            <h2 class="list-title">Today</h2>
            <PersonList people={people} newPerson={newPerson} deletePerson={deletePerson} />
            <AddToDo onAddTask={onAddTask} categories={categories} people={people} />
            <Task tasks={tasks} onDeleteTask={onDeleteTask} categories={categories} people={people} assignPerson={assignPerson} />
        </div>

        
    )
}

export default List;