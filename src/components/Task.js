import TaskCard from './TaskCard';

function Task({tasks, onDeleteTask, people, categories}){

    
    let allTasks = tasks.map((task, i) => {
        return (
            <TaskCard 
            key={i}
            task={task}
            onDeleteTask={onDeleteTask}
            people={people}
            categories={categories}
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