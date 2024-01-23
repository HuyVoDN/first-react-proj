import { ToDoItem } from "./ToDoItem";
export function ToDoList({ todos, toggleTodo, deleteTodo }) 
{
    return (
    <ul className="list">
        {todos.length === 0 && "No Tasks to be completed."}
        {
            todos.map(todo => {
                return (
                    <ToDoItem {...todo} //faster passing thru array, check line 11 of App.jsx
                     key={todo.id} 
                     toggleTodo={toggleTodo} 
                     deleteTodo={deleteTodo} /> 
                )
            })}
    </ul>
    );
}