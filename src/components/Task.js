

function Item(){
    let array = ["Do chores", "Pick up mail", "Wash Dishes", "Clean car", "Ice my feet"]

    let list = array.map((task) =>
        <div>
            <li>{task}</li>
            <button class="complete-btn">Complete</button>
            <button class="delete-btn">Delete</button>
            <hr></hr>
        </div> 

    )

    return (
        <div id="task-list">
            {list}
        </div>
    )
}

export default Item;