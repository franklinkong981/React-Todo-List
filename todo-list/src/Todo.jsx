import react from "react";
import "./Todo.css";

const Todo = ({id, content, completed, removeTodoFunction, toggleTodoFunction}) => {
  const handleRemove = () => {
    removeTodoFunction(id);
  };

  const handleToggle = () => {
    toggleTodoFunction(id);
  };

  const textDecorationStyle = completed ? "line-through" : "none"

  return (
    <div className="Todo" id={id}>
      <p className="Todo-text" style={{textDecoration: textDecorationStyle}}>{content}</p>
      <button className="Todo-toggle-button" onClick={handleToggle}>{completed ? "Unmark as incomplete" : "Mark as complete"}</button>
      <button className="Todo-remove-button" onClick={handleRemove}>Delete Todo</button>
    </div>
  );
};

export default Todo;