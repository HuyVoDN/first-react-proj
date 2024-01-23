export function ToDoItem({ taskCompleted, id, title, toggleTodo, deleteTodo}) 
{
    return (
        <li>
            <label>
                <input type="checkbox" checked={taskCompleted}
                    onChange={e => toggleTodo(id, e.target.checked)} />
                {title}
            </label>
            <button onClick={() => deleteTodo(id)}
                className="btn btn-danger">Delete</button>
        </li>
    );
}