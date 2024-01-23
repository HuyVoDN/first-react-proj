import {useState} from "react";
import "./styles.css";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e)
  {
    e.preventDefault(); //remove default submit logic

    setTodos( (currentTodos) => {
      return [...currentTodos, { id: crypto.randomUUID(), title: newItem, taskCompleted: false}, ]
    });

   setNewItem("");
  }

  function toggleTodo(taskId, completed)
  {
      setTodos( currentTodos => {
        return currentTodos.map(todo =>{
          if (todo.id === taskId)
          {
            todo.taskCompleted = completed;
            return {...todo, completed };
          }

          return todo;
        })
      })
   
  }

  function deleteTodo(taskId)
  {
    setTodos( currentTodos => {
      return currentTodos.filter(todo => todo.id != taskId);
    })
  }
//console.log(todos);
  return ( <>
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input value={newItem} type="text" id="item" onChange={e => setNewItem(e.target.value)} />
      </div>
      <button className="btn">Add</button>
    </form>
    
    <h1 className="header">Todo List</h1>
    <ul className="list">
      {todos.length === 0 && "No Tasks to be completed."}
      { 
        todos.map(todo => {
          return ( 
                <li key={todo.id}>
                  <label>
                    <input type="checkbox" checked={todo.taskCompleted} onChange={e => toggleTodo(todo.id, e.target.checked)}/>
                    {todo.title}
                  </label>
                  <button onClick={() => deleteTodo(todo.id)}className="btn btn-danger">Delete</button>
                </li>
              )
      })}
    </ul> 
  </>
  )
}
