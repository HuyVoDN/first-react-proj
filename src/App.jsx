import {useState} from "react";
import "./styles.css";
import { ToDoForm } from "./ToDoForm";
import { ToDoList } from "./ToDoList";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(title)
  {
    setTodos( (currentTodos) => {
      return [...currentTodos, { id: crypto.randomUUID(), title, 
              taskCompleted: false}, ]
      });
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

  return ( 
  <>
  <ToDoForm onSubmit={addTodo} />
    <h1 className="header">Todo List</h1>
  <ToDoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
  </>
  )
}
export default App;