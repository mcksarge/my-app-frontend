import TaskCard from './TaskCard';

function Task({tasks, onDeleteTask}){

    
    let allTasks = tasks.map((task, i) => {
        return (
            <TaskCard 
            key={i}
            task={task}
            onDeleteTask={onDeleteTask}
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