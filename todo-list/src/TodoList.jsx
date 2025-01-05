import react, {useState} from "react";
import {v4 as uuid} from "uuid";

import NewTodoForm from "./NewTodoForm.jsx";
import Todo from "./Todo.jsx";

const TodoList = () => {
  //each todo in the todos state array will be an object containing the id, content (string describing what to do) and whether the todo has been completed or not.
  const [todos, setTodos] = useState([]);

  //once the form is submitted, a new todo is added, it will be given a random uuid as well as start off as not completed.
  const addTodo = (todo) => {
    setTodos(todos => {
      return [...todos, {id: uuid(), content: todo, completed: false}];
    });
  };

  //remove the todo with the specific id from the todos state array.
  const removeTodo = (todoId) => {
    setTodos(todos => {
      return todos.filter((todo) => todo.id !== todoId);
    });
  }

  //if the specific todo is completed, make it not completed, and vice versa.
  const toggleTodo = (todoId) => {
    setTodos(todos => {
      return todos.map(todo => {
        return todo.id == todoId ? todo : {...todo, completed: !(todo.completed)};
      });
    });
  }

  return (
    <div className="TodoList">
      <NewTodoForm addTodoFunction={addTodo} />
      <h2 className="TodoList-title">Todo List:</h2>
      <div className="TodoList-todos">
        {todos.map(todo => <Todo key={todo.id} id={todo.id} content={todo.content} completed={todo.completed} 
        removeTodoFunction={removeTodo} toggleTodoFunction={toggleTodo}/>)}
      </div>
    </div>
  );
};

export default TodoList;