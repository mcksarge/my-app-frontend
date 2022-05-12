import TaskCard from './TaskCard';

function Task({tasks}){

    
    let allTasks = tasks.map((task, i) => {

        return (
            <TaskCard 
            key={i}
            name={task.name}
        />
        )

    })
    
    return (
        <div id="task-list">
            {allTasks}
        </div>
    )
}

export default Task;